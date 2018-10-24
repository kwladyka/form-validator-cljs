// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('form_validator_doc.form');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('form_validator.core');
goog.require('material_ui.core');
goog.require('reagent.core');
form_validator_doc.form.simple_form_layout = (function form_validator_doc$form$simple_form_layout(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16921 = arguments.length;
var i__4731__auto___16922 = (0);
while(true){
if((i__4731__auto___16922 < len__4730__auto___16921)){
args__4736__auto__.push((arguments[i__4731__auto___16922]));

var G__16923 = (i__4731__auto___16922 + (1));
i__4731__auto___16922 = G__16923;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return form_validator_doc.form.simple_form_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

form_validator_doc.form.simple_form_layout.cljs$core$IFn$_invoke$arity$variadic = (function (content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$margin_DASH_top,(140),cljs.core.cst$kw$display,"flex",cljs.core.cst$kw$justify_DASH_content,"center"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.paper,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,(450),cljs.core.cst$kw$padding,(40)], null)], null)], null),content)], null);
});

form_validator_doc.form.simple_form_layout.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
form_validator_doc.form.simple_form_layout.cljs$lang$applyTo = (function (seq16920){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16920));
});

form_validator_doc.form.input = (function form_validator_doc$form$input(p__16924,p__16925){
var map__16926 = p__16924;
var map__16926__$1 = (((((!((map__16926 == null))))?(((((map__16926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16926):map__16926);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16926__$1,cljs.core.cst$kw$form);
var spec__GT_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16926__$1,cljs.core.cst$kw$spec_DASH__GT_msg);
var map__16927 = p__16925;
var map__16927__$1 = (((((!((map__16927 == null))))?(((((map__16927.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16927.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16927):map__16927);
var parameters = map__16927__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16927__$1,cljs.core.cst$kw$name);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.text_field,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form_validator.core.event__GT_names__GT_value_BANG_,form),cljs.core.cst$kw$on_DASH_blur,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form_validator.core.event__GT_show_message,form),cljs.core.cst$kw$error,form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$2(form,name),cljs.core.cst$kw$helper_DASH_text,(function (){var or__4131__auto__ = form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$3(form,name,spec__GT_msg);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return " ";
}
})(),cljs.core.cst$kw$full_DASH_width,true,cljs.core.cst$kw$margin,"normal"], null),parameters], 0))], null);
});
form_validator_doc.form.checkbox = (function form_validator_doc$form$checkbox(p__16930,p__16931){
var map__16932 = p__16930;
var map__16932__$1 = (((((!((map__16932 == null))))?(((((map__16932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16932):map__16932);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16932__$1,cljs.core.cst$kw$form);
var spec__GT_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16932__$1,cljs.core.cst$kw$spec_DASH__GT_msg);
var map__16933 = p__16931;
var map__16933__$1 = (((((!((map__16933 == null))))?(((((map__16933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16933):map__16933);
var parameters = map__16933__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16933__$1,cljs.core.cst$kw$name);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16933__$1,cljs.core.cst$kw$label);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.form_control_label,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$control,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.checkbox,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(form_validator.core.event__GT_names__GT_value_BANG_,form_validator.core.event__GT_show_message),form),cljs.core.cst$kw$color,"default"], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parameters,cljs.core.cst$kw$label)], 0))], null)),cljs.core.cst$kw$label,label,cljs.core.cst$kw$class,((form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$2(form,name))?"error":null)], null)], null);
});
form_validator_doc.form.radio = (function form_validator_doc$form$radio(p__16936,p__16937){
var map__16938 = p__16936;
var map__16938__$1 = (((((!((map__16938 == null))))?(((((map__16938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16938):map__16938);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16938__$1,cljs.core.cst$kw$form);
var spec__GT_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16938__$1,cljs.core.cst$kw$spec_DASH__GT_msg);
var map__16939 = p__16937;
var map__16939__$1 = (((((!((map__16939 == null))))?(((((map__16939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16939):map__16939);
var parameters = map__16939__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,cljs.core.cst$kw$name);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,cljs.core.cst$kw$label);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,cljs.core.cst$kw$value);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.form_control_label,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$value,value,cljs.core.cst$kw$control,reagent.core.as_element(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.radio,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(form_validator.core.event__GT_names__GT_value_BANG_,form_validator.core.event__GT_show_message),form),cljs.core.cst$kw$color,"default",cljs.core.cst$kw$checked,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_value,name], null)))], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parameters,cljs.core.cst$kw$label)], 0))], null)),cljs.core.cst$kw$label,label,cljs.core.cst$kw$class,((form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$2(form,name))?"error":null)], null)], null);
});
form_validator_doc.form.select = (function form_validator_doc$form$select(var_args){
var args__4736__auto__ = [];
var len__4730__auto___16951 = arguments.length;
var i__4731__auto___16952 = (0);
while(true){
if((i__4731__auto___16952 < len__4730__auto___16951)){
args__4736__auto__.push((arguments[i__4731__auto___16952]));

var G__16953 = (i__4731__auto___16952 + (1));
i__4731__auto___16952 = G__16953;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return form_validator_doc.form.select.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

form_validator_doc.form.select.cljs$core$IFn$_invoke$arity$variadic = (function (p__16945,p__16946,options){
var map__16947 = p__16945;
var map__16947__$1 = (((((!((map__16947 == null))))?(((((map__16947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16947.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16947):map__16947);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$form);
var spec__GT_msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16947__$1,cljs.core.cst$kw$spec_DASH__GT_msg);
var map__16948 = p__16946;
var map__16948__$1 = (((((!((map__16948 == null))))?(((((map__16948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__16948):map__16948);
var parameters = map__16948__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16948__$1,cljs.core.cst$kw$name);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16948__$1,cljs.core.cst$kw$label);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.form_control,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$error,form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$2(form,name)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.input_label,label], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.select,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_value,name], null)),cljs.core.cst$kw$on_DASH_change,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(form_validator.core.event__GT_names__GT_value_BANG_,form_validator.core.event__GT_show_message),form)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(parameters,cljs.core.cst$kw$label)], 0))], null),options),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [material_ui.core.form_helper_text,form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$3(form,name,spec__GT_msg)], null)], null);
});

form_validator_doc.form.select.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
form_validator_doc.form.select.cljs$lang$applyTo = (function (seq16942){
var G__16943 = cljs.core.first(seq16942);
var seq16942__$1 = cljs.core.next(seq16942);
var G__16944 = cljs.core.first(seq16942__$1);
var seq16942__$2 = cljs.core.next(seq16942__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16943,G__16944,seq16942__$2);
});

form_validator_doc.form.init = (function form_validator_doc$form$init(form_conf,spec__GT_msg){
var form = form_validator.core.init_form(form_conf);
return new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$input,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form_validator_doc.form.input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$spec_DASH__GT_msg,spec__GT_msg], null)),cljs.core.cst$kw$checkbox,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form_validator_doc.form.checkbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$spec_DASH__GT_msg,spec__GT_msg], null)),cljs.core.cst$kw$radio,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form_validator_doc.form.radio,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$spec_DASH__GT_msg,spec__GT_msg], null)),cljs.core.cst$kw$select,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form_validator_doc.form.select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$form,form,cljs.core.cst$kw$spec_DASH__GT_msg,spec__GT_msg], null))], null);
});
