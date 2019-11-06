(ns form-validator.core
  (:require [cljs.spec.alpha :as s]))

(def conf (atom {:atom atom}))

(defn ?spec-problems
  "Return nil if pass."
  [spec value]
  (-> (s/explain-data spec value)
      :cljs.spec.alpha/problems))

(defn spec-validate
  "Check value by spec.
  If validate return nil, otherwise return a reason: the :via value of spec problem."
  [form spec name]
  (->> (get-in @form [:names->value name])
       (?spec-problems spec)
       (first)
       :via))

(defn validator->fn
  "If spec, transform to fn.
  Make consistent fn to check values:
  (fn [name] ...) return reason of fail or nil"
  [form validator]
  (if (fn? validator)
    (partial validator form)
    (partial spec-validate form validator)))

(defn validators->some-validators
  "convert validators {:name [::spec f ...]} into {:name some-validator} which check all validators unless one of them fail."
  [form names->validators]
  (reduce-kv (fn [m name validators]
               (assoc m name (->> (map (partial validator->fn form) validators)
                                  (apply some-fn))))
             {} names->validators))

(defn validate-name
  "Validate name (input) in names->value.
  Update names->invalid."
  [form name]
  (when-let [some-validators (get-in @form [:names->validators name])]
    (if-let [?invalid (some-validators name)]
      (swap! form #(assoc-in % [:names->invalid name] ?invalid))
      (swap! form #(update % :names->invalid (fn [names->invalid]
                                               (dissoc names->invalid name)))))))

(defn validate-form
  "1. Validate names->value with :spec-form.
  2. Next validate names->value with names->validators.
  Do not overwrite errors from 1. by 2."
  [form]
  (swap! form #(assoc % :names->invalid {}))
  (doseq [{:keys [in via]} (?spec-problems (:form-spec @form) (:names->value @form))]
    (let [name (first in)]
      (swap! form #(assoc-in % [:names->invalid name] via))))
  (doseq [[name value] (:names->value @form)]
    (when-not (get-in @form [:names->invalid name])
      (validate-name form name))))

(defn event->names->value!
  "Update input value to names->value and validate.
  The best with :on-change event."
  [form event]
  (let [name (keyword event.target.name)
        type event.target.type
        value (case type
                "checkbox" (if event.target.checked
                             (or (not-empty event.target.value) true)
                             false)
                event.target.value)]
    (swap! form #(assoc-in % [:names->value name] value))
    (validate-form form)))

(defn show-if-not-empty
  "Add name (input) to :names->show if value is not empty.
  hint: Add to :names->show has to be done once and it stays forever.
  Prevent to show errors when user jump between inputs by tab."
  [form name]
  (let [value (get-in @form [:names->value name])]
    (when-not (or (nil? value)
                  (= "" value))
      (swap! form #(update % :names->show (fn [names->show]
                                            (conj names->show name)))))))

(defn event->show-message [form event]
  (->> (keyword event.target.name)
       (show-if-not-empty form)))

(defn show-all
  "Add all names (inputs) to :names->show"
  [form]
  (swap! form #(assoc % :names->show (-> (concat (keys (:names->value @form)) (keys (:names->invalid @form)))
                                         (set)))))

(defn get-message
  "1. If invalid is a vector find the deepest message.
  2. If invalid is not a vector return as it is."
  [form name messages]
  (when-let [invalid-reasons (get-in @form [:names->invalid name])]
    (if (vector? invalid-reasons)
      (->> (reverse invalid-reasons)
           (some messages))
      invalid-reasons)))

(defn ?show-message
  "1. If parameter messages is provided return a message.
   If message is not supported, then return true.
   2. If messages is not provided return boolean"
  ([form name]
   (and (contains? (:names->invalid @form) name)
        (contains? (:names->show @form) name)))
  ([form name messages]
   (when (?show-message form name)
     (or (get-message form name messages)
         true))))

(defn form-valid? [form]
  (empty? (:names->invalid @form)))

(defn validate-form-and-show? [form]
  (validate-form form)
  (show-all form)
  (form-valid? form))

(defn init-form [form-conf]
  (let [atom (:atom @conf)
        form (atom {})]
    (reset! form {:form-spec (:form-spec form-conf)
                  :names->value (:names->value form-conf)
                  :names->invalid {}
                  :names->show (or (:names->show form-conf) #{})
                  :names->validators (validators->some-validators form (:names->validators form-conf))})
    (validate-form form)
    form))