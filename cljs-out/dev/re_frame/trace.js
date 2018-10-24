// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__13954){
var map__13955 = p__13954;
var map__13955__$1 = (((((!((map__13955 == null))))?(((((map__13955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13955):map__13955);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13955__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13955__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13955__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13955__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__13957_13981 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__13958_13982 = null;
var count__13959_13983 = (0);
var i__13960_13984 = (0);
while(true){
if((i__13960_13984 < count__13959_13983)){
var vec__13971_13985 = chunk__13958_13982.cljs$core$IIndexed$_nth$arity$2(null,i__13960_13984);
var k_13986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971_13985,(0),null);
var cb_13987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13971_13985,(1),null);
try{var G__13975_13988 = cljs.core.deref(re_frame.trace.traces);
(cb_13987.cljs$core$IFn$_invoke$arity$1 ? cb_13987.cljs$core$IFn$_invoke$arity$1(G__13975_13988) : cb_13987.call(null,G__13975_13988));
}catch (e13974){var e_13989 = e13974;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_13986,"while storing",cljs.core.deref(re_frame.trace.traces),e_13989], 0));
}

var G__13990 = seq__13957_13981;
var G__13991 = chunk__13958_13982;
var G__13992 = count__13959_13983;
var G__13993 = (i__13960_13984 + (1));
seq__13957_13981 = G__13990;
chunk__13958_13982 = G__13991;
count__13959_13983 = G__13992;
i__13960_13984 = G__13993;
continue;
} else {
var temp__5735__auto___13994 = cljs.core.seq(seq__13957_13981);
if(temp__5735__auto___13994){
var seq__13957_13995__$1 = temp__5735__auto___13994;
if(cljs.core.chunked_seq_QMARK_(seq__13957_13995__$1)){
var c__4550__auto___13996 = cljs.core.chunk_first(seq__13957_13995__$1);
var G__13997 = cljs.core.chunk_rest(seq__13957_13995__$1);
var G__13998 = c__4550__auto___13996;
var G__13999 = cljs.core.count(c__4550__auto___13996);
var G__14000 = (0);
seq__13957_13981 = G__13997;
chunk__13958_13982 = G__13998;
count__13959_13983 = G__13999;
i__13960_13984 = G__14000;
continue;
} else {
var vec__13976_14001 = cljs.core.first(seq__13957_13995__$1);
var k_14002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976_14001,(0),null);
var cb_14003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13976_14001,(1),null);
try{var G__13980_14004 = cljs.core.deref(re_frame.trace.traces);
(cb_14003.cljs$core$IFn$_invoke$arity$1 ? cb_14003.cljs$core$IFn$_invoke$arity$1(G__13980_14004) : cb_14003.call(null,G__13980_14004));
}catch (e13979){var e_14005 = e13979;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_14002,"while storing",cljs.core.deref(re_frame.trace.traces),e_14005], 0));
}

var G__14006 = cljs.core.next(seq__13957_13995__$1);
var G__14007 = null;
var G__14008 = (0);
var G__14009 = (0);
seq__13957_13981 = G__14006;
chunk__13958_13982 = G__14007;
count__13959_13983 = G__14008;
i__13960_13984 = G__14009;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
