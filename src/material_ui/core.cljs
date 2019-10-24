(ns material-ui.core
  (:require [reagent.core :as r]
            [material-ui-styles :as mui-style]
            [material-ui-core :as mui-core]))

(def create-mui-theme mui-style/createMuiTheme)
(def mui-theme-provider (r/adapt-react-class mui-style/MuiThemeProvider))

(def grid (r/adapt-react-class mui-core/Grid))

(def app-bar (r/adapt-react-class mui-core/AppBar))

(def button (r/adapt-react-class mui-core/Button))
(def checkbox (r/adapt-react-class mui-core/Checkbox))
(def chip (r/adapt-react-class mui-core/Chip))
(def input (r/adapt-react-class mui-core/Input))
(def input-label (r/adapt-react-class mui-core/InputLabel))
(def form-control-label (r/adapt-react-class mui-core/FormControlLabel))
(def form-control (r/adapt-react-class mui-core/FormControl))
(def form-helper-text (r/adapt-react-class mui-core/FormHelperText))
(def native-select (r/adapt-react-class mui-core/NativeSelect))
(def radio (r/adapt-react-class mui-core/Radio))
(def radio-group (r/adapt-react-class mui-core/RadioGroup))
(def select (r/adapt-react-class mui-core/Select))
(def tab (r/adapt-react-class mui-core/Tab))
(def tabs (r/adapt-react-class mui-core/Tabs))
(def toolbar (r/adapt-react-class mui-core/Toolbar))
(def typography (r/adapt-react-class mui-core/Typography))
(def text-field (r/adapt-react-class material-ui-core/TextField))
(def menu-item (r/adapt-react-class material-ui-core/MenuItem))

(def paper (r/adapt-react-class mui-core/Paper))