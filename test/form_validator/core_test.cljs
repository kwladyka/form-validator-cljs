(ns form-validator.core-test
  (:require [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [form-validator.core :as form-validator]
            [cljs.spec.alpha :as s]))

;;; Validators

(s/def ::email (s/and string? (partial re-matches #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")))
(s/def ::password-not-empty not-empty)
(s/def ::password-length #(<= 8 (count %)))
(s/def ::spec-password-repeat #(= (:password %) (:password-repeat %)))
(s/def ::password (s/and string? ::password-not-empty ::password-length))
(s/def ::form-map (s/keys :req-un [::email ::password]
                          :opt-un [::password-repeat]))

(s/def ::checked some?)
(s/def ::foo #(= "foo" %))

(s/def ::form (s/and ::form-map
                     ::spec-password-repeat))

(defn password-repeat? [form name]
  "Example of check depended on multiple inputs values."
  (let [password (get-in @form [:names->value :password])
        password-repeat (get-in @form [:names->value name])]
    (when-not (= password password-repeat)
      [:password-repeat :password-not-equal])))

(defn email-exist? [form name]
  "Check third party system if user already exist."
  (when (= "exist@example.com" (get-in @form [:names->value name]))
    [:email :email-exist]))

;;; Helpers

(defn event-simulation [event]
  #(event (clj->js {:target %})))

;;; Test

(deftest init-form-test
  (testing "init form and first validations"
    (let [names->invalid (fn [form-conf]
                           (-> @(form-validator/init-form form-conf)
                               :names->invalid))]
      (is (= (-> {:names->value {:email ""
                                 :password ""}
                  :form-spec ::form}
                 (names->invalid))
             {:email [::form ::form-map ::email]
              :password [::form ::form-map ::password ::password-not-empty]})
          "correct assign ::form problems to @names->invalid.")
      (is (= (-> {:names->value {:email "exist@example.com"
                                 :password "qwaszx!!"
                                 :password-repeat "qwaszx"}
                  :form-spec ::form}
                 (names->invalid))
             {nil [::form ::spec-password-repeat]})
          "nil key mean fail is not assigned to any input name in form.
          ::spec-password-repeat is on the top of ::form.
          There is no information to which field it applies.")
      (is (= (-> {:names->value {:email "exist@example.com"
                                 :password "qwaszx!!"
                                 :password-repeat "qwaszx"}
                  :form-spec ::form-map
                  :names->validators {:email [email-exist?]
                                      :password-repeat [password-repeat?]}}
                 (names->invalid))
             {:email [:email :email-exist]
              :password-repeat [:password-repeat :password-not-equal]})
          "additional validations after ::form-map by functions assigned to inputs name")
      (is (= (-> {:names->value {:email "foo@example.com"
                                 :password "12345678"
                                 :password-repeat "12345678"}
                  :form-spec ::form-map
                  :names->validators {:email [email-exist?]
                                      :password-repeat [password-repeat?]}}
                 (names->invalid))
             {})
          "pass"))))

(deftest update-values-test
  (testing "Update values"
    (let [form (-> {:names->value {:email "foo@example.com"
                                   :password "12345678"}
                    :form-spec ::form}
                   (form-validator/init-form))
          on-change (event-simulation (partial form-validator/event->names->value! form))]
      (on-change {:name "email" :value "bar@example.com"})
      (on-change {:name "password" :value "qwaszx"})
      (is (= (:names->value @form)
             {:email "bar@example.com"
              :password "qwaszx"})
          "Update values")

      (on-change {:name "password-repeat" :value "12345678"})
      (is (= (:names->value @form)
             {:email "bar@example.com"
              :password "qwaszx"
              :password-repeat "12345678"})
          "Add new values"))))

(deftest show-messages-test
  (testing "Show not empty inputs on init"
    (let [names->show (fn [form-conf]
                        (-> @(form-validator/init-form form-conf)
                            :names->show))]
      (is (= (-> {:names->value {:email ""
                                 :password ""}
                  :form-spec ::form}
                 (names->show))
             #{}))
      (is (= (-> {:names->value {:email "foo@example.com"
                                 :password ""}
                  :form-spec ::form}
                 (names->show))
             #{:email}))
      (is (= (-> {:names->value {:email "foo"
                                 :password ""}
                  :form-spec ::form}
                 (names->show))
             #{:email}))))
  (testing "Show inputs messages"
    (let [form (-> {:names->value {:email ""
                                   :password ""}
                    :form-spec ::form}
                   (form-validator/init-form))
          on-change (event-simulation (partial form-validator/event->names->value! form))
          on-blur (event-simulation (partial form-validator/event->show-message form))]
      (on-change {:name "email" :value "foo@example.com"})
      (on-blur {:name "email"})
      (on-change {:name "password" :value "qwaszx"})
      (on-blur {:name "password"})
      (on-change {:name "password" :value ""})
      (on-blur {:name "password"})
      (on-change {:name "password-repeat" :value ""})
      (on-blur {:name "password-repeat"})
      (is (= (:names->show @form)
             #{:email :password})
          ":password-repeat value is empty so it is not consider to add to show message.
          :password was filed and later cleaned. Message should be shown.

          Situation when user use tab to switch between inputs.
          It is not the right moment to show message.
          If user had some value before, it is already added."))

    (let [form (->> {:names->value {:email "foo@example.com"
                                    :password ""}
                     :form-spec ::form}
                    (form-validator/init-form))]
      (form-validator/show-all form)
      (is (= (:names->show @form)
             #{:email :password})
          "show all")))

  (testing "Show message?"
    (let [form (-> {:names->value {:email ""}
                    :form-spec ::form}
                   (form-validator/init-form))
          on-change (event-simulation (partial form-validator/event->names->value! form))
          on-blur (event-simulation (partial form-validator/event->show-message form))]
      (is (nil? (form-validator/?show-message form :email {})))
      (on-change {:name "email" :value "foo"})
      (is (false? (form-validator/?show-message form :email)))
      (is (nil? (form-validator/?show-message form :email {}))
          "on-change, but not on-blur yet. User during first typing in input.")
      (on-blur {:name "email"})
      (is (true? (form-validator/?show-message form :email)))
      (is (some? (form-validator/?show-message form :email {})))
      (on-change {:name "email" :value "foo@example.com"})
      (is (nil? (form-validator/?show-message form :email {})))))

  (testing "Show right message with spec contained deeper spec"
    (let [form (->> {:names->value {:password "qwaszx"}
                     :names->validators {:password [::password]}
                     :show-all? true}
                    (form-validator/init-form))]
      (is (= "Password too short"
             (->> {::password "Password has to have more than 8 characters"
                   ::password-length "Password too short"}
                  (form-validator/?show-message form :password)))
          "Show last spec, because it is supported by messages")
      (is (= "Password has to have more than 8 characters"
             (->> {::password "Password has to have more than 8 characters"}
                  (form-validator/?show-message form :password)))
          "Show not last spec, because last spec in not supported by messages"))

    (let [form (->> {:names->value {:password "qwaszx"}
                     :names->validators {:password [(constantly "custom message")]}
                     :show-all? true}
                    (form-validator/init-form))]
      (is (= "custom message"
             (form-validator/?show-message form :password {}))
          "When invalid reason in not a vector, return it. It can be also for example map."))))

(deftest input-types-test
  (let [form (-> {:names->value {}
                  :names->validators {:email [::email]
                                      :password [::password]
                                      :checkbox-without-value [::checked]
                                      :checkbox-with-value [::foo]}}
                 (form-validator/init-form))
        get-form #(get-in @form [:names->invalid %])
        on-change (event-simulation (partial form-validator/event->names->value! form))]
    (testing "text"
      (on-change {:type "text" :name "email" :value "foo@example.com"})
      (is (nil? (get-form :email))
          "input pass")
      (on-change {:type "text" :name "email" :value "foo@example"})
      (is (= (get-form :email)
             [::email])
          "input fail"))

    (testing "password"
      (on-change {:type "password" :name "password" :value "12345678"})
      (is (nil? (get-form :password))
          "password pass")
      (on-change {:type "password" :name "password" :value ""})
      (is (= (get-form :password)
             [::password ::password-not-empty])
          "password fail"))

    (testing "checkbox"
      (on-change {:type "checkbox" :checked true :name "checkbox-without-value"})
      (is (nil? (get-form :checkbox-without-value))
          "checkbox-without-value pass")
      (on-change {:type "checkbox" :checked false :name "checkbox-without-value"})
      (is (= (get-form :checkbox-without-value)
             [::checked])
          "checkbox-without-value fail")
      (on-change {:type "checkbox" :checked true :name "checkbox-with-value" :value "foo"})
      (is (nil? (get-form :checkbox-with-value))
          "checkbox-with-value pass")
      (on-change {:type "checkbox" :checked false :name "checkbox-with-value" :value "foo"})
      (is (= (get-form :checkbox-with-value)
             [::foo])
          "checkbox-with-value fail"))))