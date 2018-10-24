(ns ^:figwheel-hooks form-validator-doc.core
  (:require [goog.dom :as gdom]
            [reagent.core :as r]
            [re-frame.core :as re-frame]
            [form-validator.core :as fv]
            [form-validator-doc.views :as views]))

(fv/set-conf! {:atom r/atom})

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (r/render-component [views/main-view] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

(mount-app-element)

(defn ^:after-load on-reload []
  (re-frame/clear-subscription-cache!)
  (mount-app-element))
