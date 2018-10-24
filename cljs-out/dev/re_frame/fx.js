// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__18074 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18075 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18075;

try{try{var seq__18076 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__18077 = null;
var count__18078 = (0);
var i__18079 = (0);
while(true){
if((i__18079 < count__18078)){
var vec__18086 = chunk__18077.cljs$core$IIndexed$_nth$arity$2(null,i__18079);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18086,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18086,(1),null);
var temp__5733__auto___18108 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18108)){
var effect_fn_18109 = temp__5733__auto___18108;
(effect_fn_18109.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18109.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18109.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18110 = seq__18076;
var G__18111 = chunk__18077;
var G__18112 = count__18078;
var G__18113 = (i__18079 + (1));
seq__18076 = G__18110;
chunk__18077 = G__18111;
count__18078 = G__18112;
i__18079 = G__18113;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__18076);
if(temp__5735__auto__){
var seq__18076__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18076__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__18076__$1);
var G__18114 = cljs.core.chunk_rest(seq__18076__$1);
var G__18115 = c__4550__auto__;
var G__18116 = cljs.core.count(c__4550__auto__);
var G__18117 = (0);
seq__18076 = G__18114;
chunk__18077 = G__18115;
count__18078 = G__18116;
i__18079 = G__18117;
continue;
} else {
var vec__18089 = cljs.core.first(seq__18076__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18089,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18089,(1),null);
var temp__5733__auto___18118 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18118)){
var effect_fn_18119 = temp__5733__auto___18118;
(effect_fn_18119.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18119.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18119.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18120 = cljs.core.next(seq__18076__$1);
var G__18121 = null;
var G__18122 = (0);
var G__18123 = (0);
seq__18076 = G__18120;
chunk__18077 = G__18121;
count__18078 = G__18122;
i__18079 = G__18123;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__13932__auto___18124 = re_frame.interop.now();
var duration__13933__auto___18125 = (end__13932__auto___18124 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__13933__auto___18125,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__13932__auto___18124);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18074;
}} else {
var seq__18092 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__18093 = null;
var count__18094 = (0);
var i__18095 = (0);
while(true){
if((i__18095 < count__18094)){
var vec__18102 = chunk__18093.cljs$core$IIndexed$_nth$arity$2(null,i__18095);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18102,(1),null);
var temp__5733__auto___18126 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18126)){
var effect_fn_18127 = temp__5733__auto___18126;
(effect_fn_18127.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18127.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18127.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18128 = seq__18092;
var G__18129 = chunk__18093;
var G__18130 = count__18094;
var G__18131 = (i__18095 + (1));
seq__18092 = G__18128;
chunk__18093 = G__18129;
count__18094 = G__18130;
i__18095 = G__18131;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__18092);
if(temp__5735__auto__){
var seq__18092__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18092__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__18092__$1);
var G__18132 = cljs.core.chunk_rest(seq__18092__$1);
var G__18133 = c__4550__auto__;
var G__18134 = cljs.core.count(c__4550__auto__);
var G__18135 = (0);
seq__18092 = G__18132;
chunk__18093 = G__18133;
count__18094 = G__18134;
i__18095 = G__18135;
continue;
} else {
var vec__18105 = cljs.core.first(seq__18092__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18105,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18105,(1),null);
var temp__5733__auto___18136 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___18136)){
var effect_fn_18137 = temp__5733__auto___18136;
(effect_fn_18137.cljs$core$IFn$_invoke$arity$1 ? effect_fn_18137.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_18137.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__18138 = cljs.core.next(seq__18092__$1);
var G__18139 = null;
var G__18140 = (0);
var G__18141 = (0);
seq__18092 = G__18138;
chunk__18093 = G__18139;
count__18094 = G__18140;
i__18095 = G__18141;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__18142 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__18143 = null;
var count__18144 = (0);
var i__18145 = (0);
while(true){
if((i__18145 < count__18144)){
var map__18150 = chunk__18143.cljs$core$IIndexed$_nth$arity$2(null,i__18145);
var map__18150__$1 = (((((!((map__18150 == null))))?(((((map__18150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18150.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18150):map__18150);
var effect = map__18150__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18150__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18150__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__18142,chunk__18143,count__18144,i__18145,map__18150,map__18150__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__18142,chunk__18143,count__18144,i__18145,map__18150,map__18150__$1,effect,ms,dispatch))
,ms);
}


var G__18154 = seq__18142;
var G__18155 = chunk__18143;
var G__18156 = count__18144;
var G__18157 = (i__18145 + (1));
seq__18142 = G__18154;
chunk__18143 = G__18155;
count__18144 = G__18156;
i__18145 = G__18157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__18142);
if(temp__5735__auto__){
var seq__18142__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18142__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__18142__$1);
var G__18158 = cljs.core.chunk_rest(seq__18142__$1);
var G__18159 = c__4550__auto__;
var G__18160 = cljs.core.count(c__4550__auto__);
var G__18161 = (0);
seq__18142 = G__18158;
chunk__18143 = G__18159;
count__18144 = G__18160;
i__18145 = G__18161;
continue;
} else {
var map__18152 = cljs.core.first(seq__18142__$1);
var map__18152__$1 = (((((!((map__18152 == null))))?(((((map__18152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__18152):map__18152);
var effect = map__18152__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18152__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18152__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__18142,chunk__18143,count__18144,i__18145,map__18152,map__18152__$1,effect,ms,dispatch,seq__18142__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__18142,chunk__18143,count__18144,i__18145,map__18152,map__18152__$1,effect,ms,dispatch,seq__18142__$1,temp__5735__auto__))
,ms);
}


var G__18162 = cljs.core.next(seq__18142__$1);
var G__18163 = null;
var G__18164 = (0);
var G__18165 = (0);
seq__18142 = G__18162;
chunk__18143 = G__18163;
count__18144 = G__18164;
i__18145 = G__18165;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__18166 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__18167 = null;
var count__18168 = (0);
var i__18169 = (0);
while(true){
if((i__18169 < count__18168)){
var event = chunk__18167.cljs$core$IIndexed$_nth$arity$2(null,i__18169);
re_frame.router.dispatch(event);


var G__18170 = seq__18166;
var G__18171 = chunk__18167;
var G__18172 = count__18168;
var G__18173 = (i__18169 + (1));
seq__18166 = G__18170;
chunk__18167 = G__18171;
count__18168 = G__18172;
i__18169 = G__18173;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__18166);
if(temp__5735__auto__){
var seq__18166__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18166__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__18166__$1);
var G__18174 = cljs.core.chunk_rest(seq__18166__$1);
var G__18175 = c__4550__auto__;
var G__18176 = cljs.core.count(c__4550__auto__);
var G__18177 = (0);
seq__18166 = G__18174;
chunk__18167 = G__18175;
count__18168 = G__18176;
i__18169 = G__18177;
continue;
} else {
var event = cljs.core.first(seq__18166__$1);
re_frame.router.dispatch(event);


var G__18178 = cljs.core.next(seq__18166__$1);
var G__18179 = null;
var G__18180 = (0);
var G__18181 = (0);
seq__18166 = G__18178;
chunk__18167 = G__18179;
count__18168 = G__18180;
i__18169 = G__18181;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__18182 = cljs.core.seq(value);
var chunk__18183 = null;
var count__18184 = (0);
var i__18185 = (0);
while(true){
if((i__18185 < count__18184)){
var event = chunk__18183.cljs$core$IIndexed$_nth$arity$2(null,i__18185);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__18186 = seq__18182;
var G__18187 = chunk__18183;
var G__18188 = count__18184;
var G__18189 = (i__18185 + (1));
seq__18182 = G__18186;
chunk__18183 = G__18187;
count__18184 = G__18188;
i__18185 = G__18189;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__18182);
if(temp__5735__auto__){
var seq__18182__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18182__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__18182__$1);
var G__18190 = cljs.core.chunk_rest(seq__18182__$1);
var G__18191 = c__4550__auto__;
var G__18192 = cljs.core.count(c__4550__auto__);
var G__18193 = (0);
seq__18182 = G__18190;
chunk__18183 = G__18191;
count__18184 = G__18192;
i__18185 = G__18193;
continue;
} else {
var event = cljs.core.first(seq__18182__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__18194 = cljs.core.next(seq__18182__$1);
var G__18195 = null;
var G__18196 = (0);
var G__18197 = (0);
seq__18182 = G__18194;
chunk__18183 = G__18195;
count__18184 = G__18196;
i__18185 = G__18197;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
