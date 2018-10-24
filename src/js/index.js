window.React = require("react");
window.ReactDOM = require("react-dom");
window.Highlight = require("react-highlight").default;

// material-ui

import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
window.MaterialUiStyles = {
    createMuiTheme: createMuiTheme,
    MuiThemeProvider: MuiThemeProvider
}

window.MaterialUiCore = {
    AppBar: require("@material-ui/core/AppBar").default,
    Button: require("@material-ui/core/Button").default,
    Grid: require("@material-ui/core/Grid").default,
    Paper: require("@material-ui/core/Paper").default,
    TextField: require("@material-ui/core/TextField").default,
    Toolbar: require("@material-ui/core/Toolbar").default,
    Typography: require("@material-ui/core/Typography").default
}
