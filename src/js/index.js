window.React = require("react");
window.ReactDOM = require("react-dom");
window.Highlight = require("react-highlight").default;

// material-ui

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
window.MaterialUiStyles = {
    createMuiTheme: createMuiTheme,
    MuiThemeProvider: MuiThemeProvider
}

// import * as MaterialUiCore from '@material-ui/core';
// window.MaterialUiCore = MaterialUiCore;

 window.MaterialUiCore = {
    AppBar: require("@material-ui/core/AppBar").default,
    Button: require("@material-ui/core/Button").default,
    Checkbox: require("@material-ui/core/Checkbox").default,
    Chip: require("@material-ui/core/Chip").default,
    Input: require("@material-ui/core/Input").default,
    InputLabel: require("@material-ui/core/InputLabel").default,
    MenuItem: require("@material-ui/core/MenuItem").default,
    FormControlLabel: require("@material-ui/core/FormControlLabel").default,
    FormControl: require("@material-ui/core/FormControl").default,
    FormHelperText: require("@material-ui/core/FormHelperText").default,
    Grid: require("@material-ui/core/Grid").default,
    Select: require("@material-ui/core/Select").default,
    NativeSelect: require("@material-ui/core/NativeSelect").default,
    Radio: require("@material-ui/core/Radio").default,
    RadioGroup: require("@material-ui/core/RadioGroup").default,
    Paper: require("@material-ui/core/Paper").default,
    Tab: require("@material-ui/core/Tab").default,
    Tabs: require("@material-ui/core/Tabs").default,
    TextField: require("@material-ui/core/TextField").default,
    Toolbar: require("@material-ui/core/Toolbar").default,
    Typography: require("@material-ui/core/Typography").default
 }