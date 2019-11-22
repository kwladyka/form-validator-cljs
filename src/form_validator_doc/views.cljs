(ns form-validator-doc.views
  (:require [reagent.core :as r]
            [form-validator-doc.spec :as sc]
            [form-validator.core :as fv]
            [material-ui.core :as mui]
            [form-validator-doc.form :as util]
            [cljs.pprint :refer [pprint]]
            [highlight :as highlight]))

(def highlight-clojure (r/adapt-react-class highlight))

(defn ?password-repeat [form name]
  "Example of validator using multiple inputs values.
  form - atom returned by form-init
  name - name of the input which call event"
  (let [password (get-in @form [:names->value :password])
        password-repeat (get-in @form [:names->value name])]
    (when-not (= password password-repeat)
      [:password-repeat :password-not-equal])))

(defn app-bar []
  [mui/app-bar
   {:style {:color "#e3f2fd"}
    :position "static"}
   [mui/toolbar
    [:h2
     [:a {:style {:color "inherit"
                  :text-decoration "none"}
          :href "https://github.com/kwladyka/form-validator-cljs"} "kwladyka/form-validator-cljs"]]
    [:div {:style {:flex 1}}]
    [mui/button
     {:color "inherit"
      :href "https://github.com/kwladyka/form-validator-cljs/tree/doc"}
     "code of this tutorial"]]])

(defn spy-form [form form-conf]
  (let [tab (r/atom "atom")]
    (fn []
      [:div
       [mui/app-bar
        {:position "static"
         :style {:box-shadow "none"}}
        [mui/tabs
         {:value @tab
          :indicator-color "primary"
          :text-color "primary"
          :style {:background-color "#f5f5f5"}
          :on-change #(reset! tab %2)}
         [mui/tab
          {:value "atom"
           :label "@form"}]
         [mui/tab
          {:value "init"
           :label "(init-form ...)"}]]]
       (case @tab
         "atom" [highlight-clojure
                 {:class-name "clojure"}
                 (-> @form
                     (pprint)
                     (with-out-str))]
         "init" [highlight-clojure
                 {:class-name "clojure"}
                 (-> form-conf
                     (pprint)
                     (with-out-str))])])))

(defn demo-form []
  (let [spec->msg {::sc/email "Typo? It doesn't look valid."
                   ::sc/password-length "Password has to be minimum 6 characters."
                   ::sc/password-not-empty "Password can't be empty."
                   :password-not-equal "Password has to be the same."
                   ::sc/selected "You have to choose."
                   ::sc/select-one "Accept only green."
                   ::sc/select-multiple "Cat is obligatory."
                   ::sc/radio "You have to choose red pill."}
        form-conf {:names->value {:email ""
                                  :password ""
                                  :password-repeat ""
                                  :checkbox-without-value nil
                                  :checkbox-with-value nil
                                  :radio "blue"
                                  :select-one ""
                                  :select-multiple #{}}
                   :form-spec ::sc/form
                   :names->validators {:password-repeat [?password-repeat]}}
        {:keys [form input checkbox radio select]} (util/init form-conf spec->msg)]
    (fn []
      [mui/grid {:container true
                 :spacing 4}
       [mui/grid {:item true
                  :md 6}
        [mui/paper {:class "form"}
         (input {:name :email
                 :label "Email"})
         (input {:name :password
                 :label "Password"
                 :type "password"})
         (input {:name :password-repeat
                 :label "Password repeat"
                 :type "password"})
         (select
           {:name :select-one
            :label "Select one"
            :style {:min-width "200px"}}
           [mui/menu-item {:value "red"} "Red"]
           [mui/menu-item {:value "green"} "Green"]
           [mui/menu-item {:value "blue"} "Blue"])
         [:br]
         (select
           {:name :select-multiple
            :multiple true
            :label "Multiple select"
            :style {:min-width "200px"}}
           [mui/menu-item {:value "cat"} "Cat"]
           [mui/menu-item {:value "dog"} "Dog"]
           [mui/menu-item {:value "fish"} "Fish"])
         [:br]
         (checkbox {:name :checkbox-without-value
                    :label "Checkbox without value"})
         (checkbox {:name :checkbox-with-value
                    :value "confirm"
                    :label "Checkbox with value"})
         [:br]
         [mui/form-control
          [mui/radio-group {:row true}
           (radio {:name :radio
                   :value "red"
                   :label "Red pill"})
           (radio {:name :radio
                   :value "blue"
                   :label "Blue pill"})]]
         [:div
          {:style {:margin-top 40
                   :display "flex"}}
          [:div {:style {:flex 1}}]
          [mui/button
           {:variant "contained"
            :style {:background-color (when (fv/form-valid? form) "green")}
            :color "primary"
            :on-click #(if (fv/validate-form-and-show? form)
                         (js/alert "Well done"))}
           "validate"]]]]
       [mui/grid
        {:class "tabs"
         :item true
         :md 6}
        [spy-form form form-conf]]])))

(defn main []
  [:div
   [app-bar]
   [:div.page
    [mui/grid {:container true}
     [mui/grid {:item true}
      [:div.library-description
       [:h2 "ClojureScript library to validate forms"]
       [:p "This is tutorial for " [:a {:href "https://github.com/kwladyka/form-validator-cljs"} "kwladyka/form-validator-cljs"] "."]
       [:p "I recommend to read readme in library first. Then you will understand " [:code "@FORM"] " and " [:code "(INIT-FORM ...)"] " tabs. UI of this tutorial is not part of the library. Visual part can be whatever you want."]
       [:p "Tutorial will show you how to use library by his own code. Real code is the best way to learn."]]]]
    [demo-form]
    [mui/grid {:container true}
     [mui/grid {:item true}
      [:h2 "Learn the code"]
      [:ol
       [:li "Open " [:a {:href "https://github.com/kwladyka/form-validator-cljs/blob/doc/src/form_validator_doc/"} "tutorial repository"]]
       [:li [:code "spec.cljs"] " - how to define form validators."]
       [:li [:code "form.cljs"] " - how to implement custom UI on top of this library."]
       [:li [:code "views.cljs"] " - final code for form above."]]]]]])