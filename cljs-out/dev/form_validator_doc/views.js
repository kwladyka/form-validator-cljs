// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('form_validator_doc.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('form_validator_doc.spec');
goog.require('form_validator.core');
goog.require('material_ui.core');
goog.require('form_validator_doc.form');
goog.require('cljs.pprint');
form_validator_doc.views.global$module$highlight = goog.global["Highlight"];
form_validator_doc.views.highlight_clojure = reagent.core.adapt_react_class(form_validator_doc.views.global$module$highlight);
form_validator_doc.views._QMARK_password_repeat = (function form_validator_doc$views$_QMARK_password_repeat(form,name){

var password = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_value,cljs.core.cst$kw$password], null));
var password_repeat = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_value,name], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(password,password_repeat)){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$password_DASH_repeat,cljs.core.cst$kw$password_DASH_not_DASH_equal], null);
}
});
form_validator_doc.views.app_bar = (function form_validator_doc$views$app_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.app_bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,"#e3f2fd"], null),cljs.core.cst$kw$position,"static"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.toolbar,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$text_DASH_decoration,"none"], null),cljs.core.cst$kw$href,"https://github.com/kwladyka/form-validator-cljs"], null),"kwladyka/form-validator-cljs"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,"inherit",cljs.core.cst$kw$href,"https://github.com/kwladyka/form-validator-cljs/tree/doc"], null),"code of this tutorial"], null)], null)], null);
});
form_validator_doc.views.spy_form = (function form_validator_doc$views$spy_form(form,form_conf){
var tab = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("atom");
return ((function (tab){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.app_bar,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$position,"static",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$box_DASH_shadow,"none"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.tabs,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$value,cljs.core.deref(tab),cljs.core.cst$kw$indicator_DASH_color,"primary",cljs.core.cst$kw$text_DASH_color,"primary",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,"#f5f5f5"], null),cljs.core.cst$kw$on_DASH_change,((function (tab){
return (function (p1__17999_SHARP_,p2__17998_SHARP_){
return cljs.core.reset_BANG_(tab,p2__17998_SHARP_);
});})(tab))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.tab,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"atom",cljs.core.cst$kw$label,"@form"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.tab,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,"init",cljs.core.cst$kw$label,"(init-form ...)"], null)], null)], null)], null),(function (){var G__18000 = cljs.core.deref(tab);
switch (G__18000) {
case "atom":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_validator_doc.views.highlight_clojure,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,"clojure"], null),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18001_18010 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18002_18011 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18003_18012 = true;
var _STAR_print_fn_STAR__temp_val__18004_18013 = ((function (_STAR_print_newline_STAR__orig_val__18001_18010,_STAR_print_fn_STAR__orig_val__18002_18011,_STAR_print_newline_STAR__temp_val__18003_18012,sb__4661__auto__,G__18000,tab){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18001_18010,_STAR_print_fn_STAR__orig_val__18002_18011,_STAR_print_newline_STAR__temp_val__18003_18012,sb__4661__auto__,G__18000,tab))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18003_18012;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18004_18013;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18002_18011;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18001_18010;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);

break;
case "init":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_validator_doc.views.highlight_clojure,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,"clojure"], null),(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18005_18014 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18006_18015 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18007_18016 = true;
var _STAR_print_fn_STAR__temp_val__18008_18017 = ((function (_STAR_print_newline_STAR__orig_val__18005_18014,_STAR_print_fn_STAR__orig_val__18006_18015,_STAR_print_newline_STAR__temp_val__18007_18016,sb__4661__auto__,G__18000,tab){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__18005_18014,_STAR_print_fn_STAR__orig_val__18006_18015,_STAR_print_newline_STAR__temp_val__18007_18016,sb__4661__auto__,G__18000,tab))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18007_18016;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18008_18017;

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(form_conf);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18006_18015;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18005_18014;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})()], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18000)].join('')));

}
})()], null);
});
;})(tab))
});
form_validator_doc.views.demo_form = (function form_validator_doc$views$demo_form(){
var spec__GT_msg = new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_email,"Typo? It doesn't look valid.",cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_password_DASH_length,"Password has to be minimum 6 characters.",cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_password_DASH_not_DASH_empty,"Password can't be empty.",cljs.core.cst$kw$password_DASH_not_DASH_equal,"Password has to be the same.",cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_selected,"You have to choose.",cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_select_DASH_one,"Accept only green.",cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_select_DASH_multiple,"Cat is obligatory.",cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_radio,"You have to choose red pill."], null);
var form_conf = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$names_DASH__GT_value,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$email,"",cljs.core.cst$kw$password,"",cljs.core.cst$kw$checkbox_DASH_without_DASH_value,null,cljs.core.cst$kw$checkbox_DASH_with_DASH_value,null,cljs.core.cst$kw$radio,"blue",cljs.core.cst$kw$select_DASH_one,"",cljs.core.cst$kw$select_DASH_multiple,cljs.core.PersistentHashSet.EMPTY], null),cljs.core.cst$kw$form_DASH_spec,cljs.core.cst$kw$form_DASH_validator_DASH_doc$spec_SLASH_form,cljs.core.cst$kw$names_DASH__GT_validators,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$password_DASH_repeat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_validator_doc.views._QMARK_password_repeat], null)], null)], null);
var map__18018 = form_validator_doc.form.init(form_conf,spec__GT_msg);
var map__18018__$1 = (((((!((map__18018 == null))))?(((((map__18018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18018):map__18018);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,cljs.core.cst$kw$form);
var input = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,cljs.core.cst$kw$input);
var checkbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,cljs.core.cst$kw$checkbox);
var radio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,cljs.core.cst$kw$radio);
var select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18018__$1,cljs.core.cst$kw$select);
return ((function (spec__GT_msg,form_conf,map__18018,map__18018__$1,form,input,checkbox,radio,select){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.grid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$container,true,cljs.core.cst$kw$spacing,(4)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.grid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$item,true,cljs.core.cst$kw$md,(6)], null),new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.paper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"form"], null),(function (){var G__18020 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$email,cljs.core.cst$kw$label,"Email"], null);
return (input.cljs$core$IFn$_invoke$arity$1 ? input.cljs$core$IFn$_invoke$arity$1(G__18020) : input.call(null,G__18020));
})(),(function (){var G__18021 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$password,cljs.core.cst$kw$label,"Password",cljs.core.cst$kw$type,"password"], null);
return (input.cljs$core$IFn$_invoke$arity$1 ? input.cljs$core$IFn$_invoke$arity$1(G__18021) : input.call(null,G__18021));
})(),(function (){var G__18022 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$password_DASH_repeat,cljs.core.cst$kw$label,"Password repeat",cljs.core.cst$kw$type,"password"], null);
return (input.cljs$core$IFn$_invoke$arity$1 ? input.cljs$core$IFn$_invoke$arity$1(G__18022) : input.call(null,G__18022));
})(),(function (){var G__18023 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$select_DASH_one,cljs.core.cst$kw$label,"Select one",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_width,"200px"], null)], null);
var G__18024 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"red"], null),"Red"], null);
var G__18025 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"green"], null),"Green"], null);
var G__18026 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"blue"], null),"Blue"], null);
return (select.cljs$core$IFn$_invoke$arity$4 ? select.cljs$core$IFn$_invoke$arity$4(G__18023,G__18024,G__18025,G__18026) : select.call(null,G__18023,G__18024,G__18025,G__18026));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),(function (){var G__18027 = new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,cljs.core.cst$kw$select_DASH_multiple,cljs.core.cst$kw$multiple,true,cljs.core.cst$kw$label,"Multiple select",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$min_DASH_width,"200px"], null)], null);
var G__18028 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"cat"], null),"Cat"], null);
var G__18029 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"dog"], null),"Dog"], null);
var G__18030 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.menu_item,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"fish"], null),"Fish"], null);
return (select.cljs$core$IFn$_invoke$arity$4 ? select.cljs$core$IFn$_invoke$arity$4(G__18027,G__18028,G__18029,G__18030) : select.call(null,G__18027,G__18028,G__18029,G__18030));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),(function (){var G__18031 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$checkbox_DASH_without_DASH_value,cljs.core.cst$kw$label,"Checkbox without value"], null);
return (checkbox.cljs$core$IFn$_invoke$arity$1 ? checkbox.cljs$core$IFn$_invoke$arity$1(G__18031) : checkbox.call(null,G__18031));
})(),(function (){var G__18032 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$checkbox_DASH_with_DASH_value,cljs.core.cst$kw$value,"confirm",cljs.core.cst$kw$label,"Checkbox with value"], null);
return (checkbox.cljs$core$IFn$_invoke$arity$1 ? checkbox.cljs$core$IFn$_invoke$arity$1(G__18032) : checkbox.call(null,G__18032));
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$br], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.form_control,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.radio_group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$row,true], null),(function (){var G__18033 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$radio,cljs.core.cst$kw$value,"red",cljs.core.cst$kw$label,"Red pill"], null);
return (radio.cljs$core$IFn$_invoke$arity$1 ? radio.cljs$core$IFn$_invoke$arity$1(G__18033) : radio.call(null,G__18033));
})(),(function (){var G__18034 = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$radio,cljs.core.cst$kw$value,"blue",cljs.core.cst$kw$label,"Blue pill"], null);
return (radio.cljs$core$IFn$_invoke$arity$1 ? radio.cljs$core$IFn$_invoke$arity$1(G__18034) : radio.call(null,G__18034));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$margin_DASH_top,(40),cljs.core.cst$kw$display,"flex"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$flex,(1)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.button,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$variant,"contained",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_color,((form_validator.core.form_valid_QMARK_(form))?"green":null)], null),cljs.core.cst$kw$color,"primary",cljs.core.cst$kw$on_DASH_click,((function (spec__GT_msg,form_conf,map__18018,map__18018__$1,form,input,checkbox,radio,select){
return (function (){
if(form_validator.core.validate_form_and_show_QMARK_(form)){
return alert("Well done");
} else {
return null;
}
});})(spec__GT_msg,form_conf,map__18018,map__18018__$1,form,input,checkbox,radio,select))
], null),"validate"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.grid,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"tabs",cljs.core.cst$kw$item,true,cljs.core.cst$kw$md,(6)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_validator_doc.views.spy_form,form,form_conf], null)], null)], null);
});
;})(spec__GT_msg,form_conf,map__18018,map__18018__$1,form,input,checkbox,radio,select))
});
form_validator_doc.views.main = (function form_validator_doc$views$main(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_validator_doc.views.app_bar], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$page,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item,true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$library_DASH_description,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"ClojureScript library to validate forms"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"This is tutorial for ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/kwladyka/form-validator-cljs"], null),"kwladyka/form-validator-cljs"], null),"."], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"I recommend to read readme in library first. Then you will understand ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"@FORM"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"(INIT-FORM ...)"], null)," tabs. UI of this tutorial is not part of the library. Visual part can be whatever you want."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Tutorial will show you how to use library by his own code. Real code is the best way to learn."], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_validator_doc.views.demo_form], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$container,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$item,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Learn the code"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,"Open ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://github.com/kwladyka/form-validator-cljs/blob/doc/src/form_validator_doc/"], null),"tutorial repository"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"spec.cljs"], null)," - how to define form validators."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"form.cljs"], null)," - how to implement custom UI on top of this library."], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$code,"views.cljs"], null)," - final code for form above."], null)], null)], null)], null)], null)], null);
});
