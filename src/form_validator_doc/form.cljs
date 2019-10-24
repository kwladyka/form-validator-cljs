(ns form-validator-doc.form
  (:require [form-validator.core :as fv]
            [material-ui.core :as mui]
            [reagent.core :as r]))

(defn simple-form-layout [& content]
  [:div
   {:style {:margin-top 140
            :display "flex"
            :justify-content "center"}}
   (into [mui/paper
          {:style {:width 450
                   :padding 40}}]
         content)])

(defn input [{:keys [form spec->msg]} {:keys [name] :as parameters}]
  [mui/text-field
   (merge
     {:on-change (partial fv/event->names->value! form)
      :on-blur (partial fv/event->show-message form)
      :error (fv/?show-message form name)
      :helper-text (or (fv/?show-message form name spec->msg) " ")
      :full-width true
      :margin "normal"}
     parameters)])

(defn checkbox [{:keys [form spec->msg]} {:keys [name label] :as parameters}]
  [mui/form-control-label
   {:control (r/as-element
               [mui/checkbox
                (merge
                  {:on-change (partial (juxt fv/event->names->value! fv/event->show-message) form)
                   :color "default"}
                  (dissoc parameters :label))])
    :label label
    :class (when (fv/?show-message form name) "error")}])

(defn radio [{:keys [form spec->msg]} {:keys [name label value] :as parameters}]
  [mui/form-control-label
   {:value value
    :control (r/as-element
               [mui/radio
                (merge
                  {:on-change (partial (juxt fv/event->names->value! fv/event->show-message) form)
                   :color "default"
                   :checked (= value (get-in @form [:names->value name]))}
                  (dissoc parameters :label))])
    :label label
    :class (when (fv/?show-message form name) "error")}])

(defn select [{:keys [form spec->msg]} {:keys [name label] :as parameters} & options]
  [mui/form-control
   {:error (fv/?show-message form name)}
   [mui/input-label label]
   (into [mui/select
          (merge {:value (get-in @form [:names->value name])
                  :on-change (partial (juxt fv/event->names->value! fv/event->show-message) form)}
                 (dissoc parameters :label))]
         options)
   [mui/form-helper-text (fv/?show-message form name spec->msg)]])

(defn init [form-conf spec->msg]
  (let [form (fv/init-form form-conf)]
    {:form form
     :input (partial input {:form form
                            :spec->msg spec->msg})
     :checkbox (partial checkbox {:form form
                                  :spec->msg spec->msg})
     :radio (partial radio {:form form
                            :spec->msg spec->msg})
     :select (partial select {:form form
                              :spec->msg spec->msg})}))