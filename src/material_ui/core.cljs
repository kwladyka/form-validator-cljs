(ns material-ui.core
  (:require [reagent.core :as r]
            [material-ui-styles :as mui-style]
            [material-ui-core :as mui-core]))

(def create-mui-theme mui-style/createMuiTheme)
(def mui-theme-provider (r/adapt-react-class mui-style/MuiThemeProvider))

(def grid (r/adapt-react-class mui-core/Grid))

(def app-bar (r/adapt-react-class mui-core/AppBar))

(def button (r/adapt-react-class mui-core/Button))
(def toolbar (r/adapt-react-class mui-core/Toolbar))
(def typography (r/adapt-react-class mui-core/Typography))
(def text-field (r/adapt-react-class material-ui-core/TextField))

(def paper (r/adapt-react-class mui-core/Paper))
