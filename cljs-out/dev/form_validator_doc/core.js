// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('form_validator_doc.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('form_validator.core');
goog.require('form_validator_doc.views');
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form_validator.core.conf,(function (p1__18537_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18537_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$atom,reagent.core.atom], null)], 0));
}));
form_validator_doc.core.get_app_element = (function form_validator_doc$core$get_app_element(){
return goog.dom.getElement("app");
});
form_validator_doc.core.mount = (function form_validator_doc$core$mount(el){
var G__18538 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_validator_doc.views.main], null);
var G__18539 = el;
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__18538,G__18539) : reagent.core.render_component.call(null,G__18538,G__18539));
});
form_validator_doc.core.mount_app_element = (function form_validator_doc$core$mount_app_element(){
var temp__5735__auto__ = form_validator_doc.core.get_app_element();
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return form_validator_doc.core.mount(el);
} else {
return null;
}
});
form_validator_doc.core.mount_app_element();
form_validator_doc.core.on_reload = (function form_validator_doc$core$on_reload(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return form_validator_doc.core.mount_app_element();
});
