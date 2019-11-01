// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__12909__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12909 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12910__i = 0, G__12910__a = new Array(arguments.length -  0);
while (G__12910__i < G__12910__a.length) {G__12910__a[G__12910__i] = arguments[G__12910__i + 0]; ++G__12910__i;}
  args = new cljs.core.IndexedSeq(G__12910__a,0,null);
} 
return G__12909__delegate.call(this,args);};
G__12909.cljs$lang$maxFixedArity = 0;
G__12909.cljs$lang$applyTo = (function (arglist__12911){
var args = cljs.core.seq(arglist__12911);
return G__12909__delegate(args);
});
G__12909.cljs$core$IFn$_invoke$arity$variadic = G__12909__delegate;
return G__12909;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12912__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12912 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12913__i = 0, G__12913__a = new Array(arguments.length -  0);
while (G__12913__i < G__12913__a.length) {G__12913__a[G__12913__i] = arguments[G__12913__i + 0]; ++G__12913__i;}
  args = new cljs.core.IndexedSeq(G__12913__a,0,null);
} 
return G__12912__delegate.call(this,args);};
G__12912.cljs$lang$maxFixedArity = 0;
G__12912.cljs$lang$applyTo = (function (arglist__12914){
var args = cljs.core.seq(arglist__12914);
return G__12912__delegate(args);
});
G__12912.cljs$core$IFn$_invoke$arity$variadic = G__12912__delegate;
return G__12912;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
