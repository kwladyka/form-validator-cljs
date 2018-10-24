// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('form_validator.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
form_validator.core.conf = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$atom,cljs.core.atom], null));
/**
 * Return nil if pass.
 */
form_validator.core._QMARK_spec_problems = (function form_validator$core$_QMARK_spec_problems(spec,value){
return cljs.core.cst$kw$cljs$spec$alpha_SLASH_problems.cljs$core$IFn$_invoke$arity$1(cljs.spec.alpha.explain_data(spec,value));
});
/**
 * Check value with spec.
 *   If fail return reason: vector of spec keywords.
 */
form_validator.core.spec_validate = (function form_validator$core$spec_validate(form,spec,name){
return cljs.core.cst$kw$via.cljs$core$IFn$_invoke$arity$1(cljs.core.first(form_validator.core._QMARK_spec_problems(spec,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_value,name], null)))));
});
/**
 * If spec, transform to fn.
 *   Make consistent fn to check values:
 *   (fn [name] ...) return reason of fail or nil
 */
form_validator.core.validator__GT_fn = (function form_validator$core$validator__GT_fn(form,validator){
if(cljs.core.fn_QMARK_(validator)){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(validator,form);
} else {
return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(form_validator.core.spec_validate,form,validator);
}
});
/**
 * convert validators {:name [::spec f ...]} into {:name some-validator} which check all validators unless one of them fail.
 */
form_validator.core.validators__GT_some_validators = (function form_validator$core$validators__GT_some_validators(form,names__GT_validators){
return cljs.core.reduce_kv((function (m,name,validators){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,name,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(form_validator.core.validator__GT_fn,form),validators)));
}),cljs.core.PersistentArrayMap.EMPTY,names__GT_validators);
});
/**
 * Validate name (input) in names->value.
 *   Update names->invalid.
 */
form_validator.core.validate_name = (function form_validator$core$validate_name(form,name){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_validators,name], null));
if(cljs.core.truth_(temp__5735__auto__)){
var some_validators = temp__5735__auto__;
var temp__5733__auto__ = (some_validators.cljs$core$IFn$_invoke$arity$1 ? some_validators.cljs$core$IFn$_invoke$arity$1(name) : some_validators.call(null,name));
if(cljs.core.truth_(temp__5733__auto__)){
var _QMARK_invalid = temp__5733__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,((function (_QMARK_invalid,temp__5733__auto__,some_validators,temp__5735__auto__){
return (function (p1__15383_SHARP_){
return cljs.core.assoc_in(p1__15383_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_invalid,name], null),_QMARK_invalid);
});})(_QMARK_invalid,temp__5733__auto__,some_validators,temp__5735__auto__))
);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,((function (temp__5733__auto__,some_validators,temp__5735__auto__){
return (function (p1__15384_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__15384_SHARP_,cljs.core.cst$kw$names_DASH__GT_invalid,((function (temp__5733__auto__,some_validators,temp__5735__auto__){
return (function (names__GT_invalid){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(names__GT_invalid,name);
});})(temp__5733__auto__,some_validators,temp__5735__auto__))
);
});})(temp__5733__auto__,some_validators,temp__5735__auto__))
);
}
} else {
return null;
}
});
/**
 * 1. Validate names->value with :spec-form.
 *   2. Next validate names->value with names->validators.
 *   Do not overwrite errors from 1. by 2.
 */
form_validator.core.validate_form = (function form_validator$core$validate_form(form){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (p1__15385_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15385_SHARP_,cljs.core.cst$kw$names_DASH__GT_invalid,cljs.core.PersistentArrayMap.EMPTY);
}));

var seq__15387_15415 = cljs.core.seq(form_validator.core._QMARK_spec_problems(cljs.core.cst$kw$form_DASH_spec.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),cljs.core.cst$kw$names_DASH__GT_value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))));
var chunk__15388_15416 = null;
var count__15389_15417 = (0);
var i__15390_15418 = (0);
while(true){
if((i__15390_15418 < count__15389_15417)){
var map__15395_15419 = chunk__15388_15416.cljs$core$IIndexed$_nth$arity$2(null,i__15390_15418);
var map__15395_15420__$1 = (((((!((map__15395_15419 == null))))?(((((map__15395_15419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15395_15419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15395_15419):map__15395_15419);
var in_15421 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15395_15420__$1,cljs.core.cst$kw$in);
var via_15422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15395_15420__$1,cljs.core.cst$kw$via);
var name_15423 = cljs.core.first(in_15421);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,((function (seq__15387_15415,chunk__15388_15416,count__15389_15417,i__15390_15418,name_15423,map__15395_15419,map__15395_15420__$1,in_15421,via_15422){
return (function (p1__15386_SHARP_){
return cljs.core.assoc_in(p1__15386_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_invalid,name_15423], null),via_15422);
});})(seq__15387_15415,chunk__15388_15416,count__15389_15417,i__15390_15418,name_15423,map__15395_15419,map__15395_15420__$1,in_15421,via_15422))
);


var G__15424 = seq__15387_15415;
var G__15425 = chunk__15388_15416;
var G__15426 = count__15389_15417;
var G__15427 = (i__15390_15418 + (1));
seq__15387_15415 = G__15424;
chunk__15388_15416 = G__15425;
count__15389_15417 = G__15426;
i__15390_15418 = G__15427;
continue;
} else {
var temp__5735__auto___15428 = cljs.core.seq(seq__15387_15415);
if(temp__5735__auto___15428){
var seq__15387_15429__$1 = temp__5735__auto___15428;
if(cljs.core.chunked_seq_QMARK_(seq__15387_15429__$1)){
var c__4550__auto___15430 = cljs.core.chunk_first(seq__15387_15429__$1);
var G__15431 = cljs.core.chunk_rest(seq__15387_15429__$1);
var G__15432 = c__4550__auto___15430;
var G__15433 = cljs.core.count(c__4550__auto___15430);
var G__15434 = (0);
seq__15387_15415 = G__15431;
chunk__15388_15416 = G__15432;
count__15389_15417 = G__15433;
i__15390_15418 = G__15434;
continue;
} else {
var map__15397_15435 = cljs.core.first(seq__15387_15429__$1);
var map__15397_15436__$1 = (((((!((map__15397_15435 == null))))?(((((map__15397_15435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15397_15435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15397_15435):map__15397_15435);
var in_15437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15397_15436__$1,cljs.core.cst$kw$in);
var via_15438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15397_15436__$1,cljs.core.cst$kw$via);
var name_15439 = cljs.core.first(in_15437);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,((function (seq__15387_15415,chunk__15388_15416,count__15389_15417,i__15390_15418,name_15439,map__15397_15435,map__15397_15436__$1,in_15437,via_15438,seq__15387_15429__$1,temp__5735__auto___15428){
return (function (p1__15386_SHARP_){
return cljs.core.assoc_in(p1__15386_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_invalid,name_15439], null),via_15438);
});})(seq__15387_15415,chunk__15388_15416,count__15389_15417,i__15390_15418,name_15439,map__15397_15435,map__15397_15436__$1,in_15437,via_15438,seq__15387_15429__$1,temp__5735__auto___15428))
);


var G__15440 = cljs.core.next(seq__15387_15429__$1);
var G__15441 = null;
var G__15442 = (0);
var G__15443 = (0);
seq__15387_15415 = G__15440;
chunk__15388_15416 = G__15441;
count__15389_15417 = G__15442;
i__15390_15418 = G__15443;
continue;
}
} else {
}
}
break;
}

var seq__15399 = cljs.core.seq(cljs.core.cst$kw$names_DASH__GT_value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)));
var chunk__15400 = null;
var count__15401 = (0);
var i__15402 = (0);
while(true){
if((i__15402 < count__15401)){
var vec__15409 = chunk__15400.cljs$core$IIndexed$_nth$arity$2(null,i__15402);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15409,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15409,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_invalid,name], null)))){
} else {
form_validator.core.validate_name(form,name);
}


var G__15444 = seq__15399;
var G__15445 = chunk__15400;
var G__15446 = count__15401;
var G__15447 = (i__15402 + (1));
seq__15399 = G__15444;
chunk__15400 = G__15445;
count__15401 = G__15446;
i__15402 = G__15447;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__15399);
if(temp__5735__auto__){
var seq__15399__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15399__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__15399__$1);
var G__15448 = cljs.core.chunk_rest(seq__15399__$1);
var G__15449 = c__4550__auto__;
var G__15450 = cljs.core.count(c__4550__auto__);
var G__15451 = (0);
seq__15399 = G__15448;
chunk__15400 = G__15449;
count__15401 = G__15450;
i__15402 = G__15451;
continue;
} else {
var vec__15412 = cljs.core.first(seq__15399__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15412,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15412,(1),null);
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_invalid,name], null)))){
} else {
form_validator.core.validate_name(form,name);
}


var G__15452 = cljs.core.next(seq__15399__$1);
var G__15453 = null;
var G__15454 = (0);
var G__15455 = (0);
seq__15399 = G__15452;
chunk__15400 = G__15453;
count__15401 = G__15454;
i__15402 = G__15455;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Update input value to names->value and validate.
 *   The best with :on-change event.
 */
form_validator.core.event__GT_names__GT_value_BANG_ = (function form_validator$core$event__GT_names__GT_value_BANG_(form,event){
var name = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.target.name);
var type = event.target.type;
var value = (function (){var G__15457 = type;
switch (G__15457) {
case "checkbox":
if(cljs.core.truth_(event.target.checked)){
var or__4131__auto__ = cljs.core.not_empty(event.target.value);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return true;
}
} else {
return false;
}

break;
default:
return event.target.value;

}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,((function (name,type,value){
return (function (p1__15456_SHARP_){
return cljs.core.assoc_in(p1__15456_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_value,name], null),value);
});})(name,type,value))
);

return form_validator.core.validate_form(form);
});
/**
 * Add name (input) to :names->show if value is not empty.
 *   hint: Add to :names->show has to be done once and it stays forever.
 *   Prevent to show errors when user jump between inputs by tab.
 */
form_validator.core.show_if_not_empty = (function form_validator$core$show_if_not_empty(form,name){
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_value,name], null));
if((((value == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",value)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,((function (value){
return (function (p1__15459_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__15459_SHARP_,cljs.core.cst$kw$names_DASH__GT_show,((function (value){
return (function (names__GT_show){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(names__GT_show,name);
});})(value))
);
});})(value))
);
}
});
form_validator.core.event__GT_show_message = (function form_validator$core$event__GT_show_message(form,event){
return form_validator.core.show_if_not_empty(form,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event.target.name));
});
/**
 * Add all names (inputs) to :names->show
 */
form_validator.core.show_all = (function form_validator$core$show_all(form){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (p1__15460_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15460_SHARP_,cljs.core.cst$kw$names_DASH__GT_show,cljs.core.set(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.cst$kw$names_DASH__GT_value.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),cljs.core.keys(cljs.core.cst$kw$names_DASH__GT_invalid.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))));
}));
});
/**
 * 1. If invalid is a vector find the deepest message.
 *   2. If invalid is not a vector return as it is.
 */
form_validator.core.get_message = (function form_validator$core$get_message(form,name,messages){
var temp__5735__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$names_DASH__GT_invalid,name], null));
if(cljs.core.truth_(temp__5735__auto__)){
var invalid_reasons = temp__5735__auto__;
if(cljs.core.vector_QMARK_(invalid_reasons)){
return cljs.core.some(messages,cljs.core.reverse(invalid_reasons));
} else {
return invalid_reasons;
}
} else {
return null;
}
});
/**
 * 1. If parameter messages is provided return a message.
 * If message is not supported, then return true.
 * 2. If messages is not provided return boolean
 */
form_validator.core._QMARK_show_message = (function form_validator$core$_QMARK_show_message(var_args){
var G__15462 = arguments.length;
switch (G__15462) {
case 2:
return form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$2 = (function (form,name){
return ((cljs.core.contains_QMARK_(cljs.core.cst$kw$names_DASH__GT_invalid.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),name)) && (cljs.core.contains_QMARK_(cljs.core.cst$kw$names_DASH__GT_show.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),name)));
});

form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$3 = (function (form,name,messages){
if(form_validator.core._QMARK_show_message.cljs$core$IFn$_invoke$arity$2(form,name)){
var or__4131__auto__ = form_validator.core.get_message(form,name,messages);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return true;
}
} else {
return null;
}
});

form_validator.core._QMARK_show_message.cljs$lang$maxFixedArity = 3;

form_validator.core.form_valid_QMARK_ = (function form_validator$core$form_valid_QMARK_(form){
return cljs.core.empty_QMARK_(cljs.core.cst$kw$names_DASH__GT_invalid.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)));
});
form_validator.core.validate_form_and_show_QMARK_ = (function form_validator$core$validate_form_and_show_QMARK_(form){
form_validator.core.validate_form(form);

form_validator.core.show_all(form);

return form_validator.core.form_valid_QMARK_(form);
});
form_validator.core.init_form = (function form_validator$core$init_form(form_conf){
var atom = cljs.core.cst$kw$atom.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_validator.core.conf));
var form = (function (){var G__15464 = cljs.core.PersistentArrayMap.EMPTY;
return (atom.cljs$core$IFn$_invoke$arity$1 ? atom.cljs$core$IFn$_invoke$arity$1(G__15464) : atom.call(null,G__15464));
})();
cljs.core.reset_BANG_(form,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$form_DASH_spec,cljs.core.cst$kw$form_DASH_spec.cljs$core$IFn$_invoke$arity$1(form_conf),cljs.core.cst$kw$names_DASH__GT_value,cljs.core.cst$kw$names_DASH__GT_value.cljs$core$IFn$_invoke$arity$1(form_conf),cljs.core.cst$kw$names_DASH__GT_invalid,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$names_DASH__GT_show,(function (){var or__4131__auto__ = cljs.core.cst$kw$names_DASH__GT_show.cljs$core$IFn$_invoke$arity$1(form_conf);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),cljs.core.cst$kw$names_DASH__GT_validators,form_validator.core.validators__GT_some_validators(form,cljs.core.cst$kw$names_DASH__GT_validators.cljs$core$IFn$_invoke$arity$1(form_conf))], null));

form_validator.core.validate_form(form);

return form;
});
