(ns form-validator-doc.views
  (:require [reagent.core :as r]
            [form-validator-doc.spec :as sc]
            [form-validator.core :as fv]
            [material-ui.core :as mui]
            [cljs.pprint :refer [pprint]]
            [highlight :as highlight]))

(def highlight-clojure (r/adapt-react-class highlight))
(def link-view [:a {:href "https://github.com/kwladyka/form-validator-cljs/blob/doc/src/form_validator_doc/views.cljs"} "view.cljs"])
(def link-spec [:a {:href "https://github.com/kwladyka/form-validator-cljs/blob/doc/src/form_validator_doc/spec.cljs"} "spec.cljs"])

(defn app-bar []
  [:div
   [mui/app-bar
    {:style {:box-shadow "none"}
     :position "static"
     :color "inherit"}
    [mui/toolbar
     [mui/typography
      {:variant "h5"
       :color "primary"}
      "form-validator demo"]
     [:div {:style {:flex 1}}]
     [mui/button
      {:color "primary"
       :href "https://github.com/kwladyka/form-validator-cljs"}
      "github library"]
     [mui/button
      {:color "primary"
       :href "https://github.com/kwladyka/form-validator-cljs/tree/doc"}
      "code of this tutorial"]]]])

(defn ?password-repeat [form name]
  "Example of validator using multiple inputs values.
  form - atom returned be form-init
  name - name of the input which call event"
  (let [password (get-in @form [:names->value :password])
        password-repeat (get-in @form [:names->value name])]
    (when-not (= password password-repeat)
      [:password-repeat :password-not-equal])))

(defn example-layout [{:keys [title description form-conf]} example-html]
  (let [form (fv/init-form form-conf)]
    (fn []
      [:div.example
       [mui/typography
        {:variant "h5"}
        title]
       [mui/grid
        {:container true
         :spacing 32}
        [mui/grid
         {:item true
          :md 12}
         [mui/typography
          {:variant "subtitle1"}
          "Form init input"]
         [highlight-clojure
          {:class-name "clojure"}
          (-> form-conf
              (pprint)
              (with-out-str))]]
        [mui/grid
         {:item true
          :md 6}
         [mui/paper
          {:class "example-form"}
          (example-html form)]]
        [mui/grid
         {:item true
          :md 6}
         description]
        [mui/grid
         {:item true
          :md 12}
         [mui/typography
          {:variant "subtitle1"}
          "Form atom"]
         [highlight-clojure
          {:class-name "clojure"}
          (-> @form
              (pprint)
              (with-out-str))]]]])))

(defn example1 []
  (let [spec->msg {::sc/email "Typo? It doesn't look valid."
                   ::sc/password-length "Password has to be minimum 6 characters."
                   ::sc/password-not-empty "Password can't be empty."
                   ::sc/password-special-character "Need to have minimum one special character !@#$%^&*"
                   :password-not-equal "Password has to be the same."}]
    (example-layout {:title "Example 1 - register form with form spec"
                     :description [:ul
                                   [:li "Define specs, see " link-spec]
                                   [:li "Add custom fn validator for password-repeat. Find " [:code "?password-repeat"] " in " link-view " to see how to create custom validation functions."]
                                   [:li "Init form with " [:code "::form"] " spec as a validator for a whole form. Look at \"Form init input\"."]
                                   [:li "Play with form. Look how \"Form atom\" is changing."]
                                   [:li "Fill fields correctly and see the button color change."]
                                   [:li "Find example1 in " link-view ". Find how button is changed to green."]]
                     :form-conf {:names->value {:email ""
                                                :password ""
                                                :password-repeat ""}
                                 :form-spec ::sc/form
                                 :names->validators {:password-repeat [?password-repeat]}}}
                    (fn [form]
                      [:div
                       [mui/text-field
                        {:on-change (partial fv/event->names->value! form)
                         :on-blur (partial fv/event->show-message form)
                         :error (fv/?show-message form :email)
                         :helper-text (or (fv/?show-message form :email spec->msg) " ")
                         :full-width true
                         :margin "normal"
                         :name "email"
                         :label "Email"}]
                       [mui/text-field
                        {:on-change (partial fv/event->names->value! form)
                         :on-blur (partial fv/event->show-message form)
                         :error (fv/?show-message form :password)
                         :helper-text (or (fv/?show-message form :password spec->msg) " ")
                         :full-width true
                         :margin "normal"
                         :type "password"
                         :name "password"
                         :label "Password"}]
                       [mui/text-field
                        {:on-change (partial fv/event->names->value! form)
                         :on-blur (partial fv/event->show-message form)
                         :error (fv/?show-message form :password-repeat)
                         :helper-text (or (fv/?show-message form :password-repeat spec->msg) " ")
                         :full-width true
                         :margin "normal"
                         :type "password"
                         :name "password-repeat"
                         :label "Password repeat"}]
                       [:div
                        {:style {:margin-top 40
                                 :display "flex"}}
                        [:div {:style {:flex 1}}]
                        [mui/button
                         {:variant "contained"
                          :style {:background-color (when (fv/form-valid? form) "green")}
                          :color "primary"
                          :on-click #(when (fv/validate-form-and-show form)
                                       (js/alert "OK"))}
                         "Log in"]]]))))

(defn example2 []
  (let [spec->msg {::sc/email "Typo? It doesn't look valid."
                   ::sc/password-length "Password has to be minimum 6 characters."
                   ::sc/password-not-empty "Password can't be empty."
                   ::sc/password-special-character "Need to have minimum one special character !@#$%^&*"
                   :password-not-equal "Password has to be the same."}]
    (example-layout {:title "Example 2 - register form with spec for each input"
                     :description [:ul
                                   [:li "The same effect, but define " [:code ":names->validator"] " for each input separately. Compare \"Form init input\" with example 1."]
                                   [:li "Play with form. Look how \"Form atom\" is changing."]
                                   [:li "Find example2 in " link-view ". There is an improvement comparing to example 1. See " [:code "partial"] " in " [:code "let"] " to reduce code repeating."]]
                     :form-conf {:names->value {:email ""
                                                :password ""
                                                :password-repeat ""}
                                 :names->validators {:email [::sc/email]
                                                     :password [::sc/password]
                                                     :password-repeat [?password-repeat]}}}
                    (fn [form]
                      (let [event->names->value! (partial fv/event->names->value! form)
                            event->show-message (partial fv/event->show-message form)
                            ?show-message (partial fv/?show-message form)]
                        [:div
                         [mui/text-field
                          {:on-change event->names->value!
                           :on-blur event->show-message
                           :error (?show-message :email)
                           :helper-text (or (?show-message :email spec->msg) " ")
                           :full-width true
                           :margin "normal"
                           :name "email"
                           :label "Email"}]
                         [mui/text-field
                          {:on-change event->names->value!
                           :on-blur event->show-message
                           :error (?show-message :password)
                           :helper-text (or (?show-message :password spec->msg) " ")
                           :full-width true
                           :margin "normal"
                           :type "password"
                           :name "password"
                           :label "Password"}]
                         [mui/text-field
                          {:on-change event->names->value!
                           :on-blur event->show-message
                           :error (?show-message :password-repeat)
                           :helper-text (or (?show-message :password-repeat spec->msg) " ")
                           :full-width true
                           :margin "normal"
                           :type "password"
                           :name "password-repeat"
                           :label "Password repeat"}]
                         [:div
                          {:style {:margin-top 40
                                   :display "flex"}}
                          [:div {:style {:flex 1}}]
                          [mui/button
                           {:variant "contained"
                            :style {:background-color (when (fv/form-valid? form) "green")}
                            :color "primary"
                            :on-click #(when (fv/validate-form-and-show form)
                                         (js/alert "OK"))}
                           "Log in"]]])))))

(defn example3 []
  (let [spec->msg {::sc/email "Typo? It doesn't look valid."}]
    (example-layout {:title "Example 3 - on-change and on-blur"
                     :description [:ul
                                   [:li "Watch atom to see the difference."]
                                   [:li "You can decide when you want to change value of input in \"Atom form\"."]
                                   [:li "You can also decide when you want to show message."]
                                   [:li "Find example3 in " link-view ". Look how " [:code "juxt"] " is used to reduce code."]]
                     :form-conf {:names->value {:email-on-change ""
                                                :email-on-blur ""}
                                 :names->validators {:email-on-change [::sc/email]
                                                     :email-on-blur [::sc/email]}}}
                    (fn [form]
                      (let [?show-message (partial fv/?show-message form)
                            event->form (partial (juxt fv/event->names->value! fv/event->show-message) form)]
                        [:div
                         [mui/text-field
                          {:on-change event->form
                           :error (?show-message :email-on-change)
                           :helper-text (or (?show-message :email-on-change spec->msg) " ")
                           :full-width true
                           :margin "normal"
                           :name "email-on-change"
                           :label "Email on-change"}]
                         [mui/text-field
                          {:on-blur event->form
                           :error (?show-message :email-on-blur)
                           :helper-text (or (?show-message :email-on-blur spec->msg) " ")
                           :full-width true
                           :margin "normal"
                           :name "email-on-blur"
                           :label "Email on-blur"}]
                         [:div
                          {:style {:margin-top 40
                                   :display "flex"}}
                          [:div {:style {:flex 1}}]
                          [mui/button
                           {:variant "contained"
                            :style {:background-color (when (fv/form-valid? form) "green")}
                            :color "primary"
                            :on-click #(when (fv/validate-form-and-show form)
                                         (js/alert "OK"))}
                           "Log in"]]])))))

(defn input [{:keys [form spec->msg name label]}]
  [mui/text-field
   {:on-change (partial fv/event->names->value! form)
    :on-blur (partial fv/event->show-message form)
    :error (fv/?show-message form name)
    :helper-text (or (fv/?show-message form name spec->msg) " ")
    :full-width true
    :margin "normal"
    :name name
    :label label}])

(defn example4 []
  (let [spec->msg {::sc/email "Typo? It doesn't look valid."
                   ::sc/password-length "Password has to be minimum 6 characters."
                   ::sc/password-not-empty "Password can't be empty."
                   ::sc/password-special-character "Need to have minimum one special character !@#$%^&*"
                   :password-not-equal "Password has to be the same."}]
    (example-layout {:title "Example 4 - UI code optimisation"
                     :description [:ul
                                   [:li "The same as Example 1, but to optimise code inputs are generated by function."]
                                   [:li "See the code " link-view]
                                   [:li "You can optimise it even further for individual project needs. That is why UI generation is not part of the library."]]
                     :form-conf {:names->value {:email ""
                                                :password ""
                                                :password-repeat ""}
                                 :form-spec ::sc/form
                                 :names->validators {:password-repeat [?password-repeat]}}}
                    (fn [form]
                      [:div
                       [input {:form form
                               :spec->msg spec->msg
                               :name :email
                               :label "Email"}]
                       [input {:form form
                               :spec->msg spec->msg
                               :name "password"
                               :label "Password"}]
                       [input {:form form
                               :spec->msg spec->msg
                               :name "password-repeat"
                               :label "Password repeat"}]
                       [:div
                        {:style {:margin-top 40
                                 :display "flex"}}
                        [:div {:style {:flex 1}}]
                        [mui/button
                         {:variant "contained"
                          :style {:background-color (when (fv/form-valid? form) "green")}
                          :color "primary"
                          :on-click #(when (fv/validate-form-and-show form)
                                       (js/alert "OK"))}
                         "Log in"]]]))))

(defn main-view []
  [:div
   [app-bar]
   [:div.page
    [:div.library-description
     [mui/typography
      {:variant "h6"}
      "ClojureScript library to validate forms."]
     [mui/typography
      "I recommend to read \"github library\" readme first. Then play with this page. Real code gives the best experience."]]
    [example1]
    [example2]
    [example3]
    [example4]]])