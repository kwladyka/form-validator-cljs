// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('clojure.data');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
/**
 * Internal helper for diff.
 */
clojure.data.atom_diff = (function clojure$data$atom_diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b,null], null);
}
});
/**
 * Convert an associative-by-numeric-index collection into
 * an equivalent vector, with nil for any missing keys
 */
clojure.data.vectorize = (function clojure$data$vectorize(m){
if(cljs.core.seq(m)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__18205){
var vec__18206 = p__18205;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18206,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18206,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,k,v);
}),cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.keys(m)),null)),m);
} else {
return null;
}
});
/**
 * Diff associative things a and b, comparing only the key k.
 */
clojure.data.diff_associative_key = (function clojure$data$diff_associative_key(a,b,k){
var va = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var vb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
var vec__18209 = clojure.data.diff(va,vb);
var a_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18209,(0),null);
var b_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18209,(1),null);
var ab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18209,(2),null);
var in_a = cljs.core.contains_QMARK_(a,k);
var in_b = cljs.core.contains_QMARK_(b,k);
var same = ((in_a) && (in_b) && ((((!((ab == null)))) || ((((va == null)) && ((vb == null)))))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((in_a) && ((((!((a_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,a_STAR_]):null),((((in_b) && ((((!((b_STAR_ == null)))) || ((!(same)))))))?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,b_STAR_]):null),((same)?cljs.core.PersistentArrayMap.createAsIfByAssoc([k,ab]):null)], null);
});
/**
 * Diff associative things a and b, comparing only keys in ks (if supplied).
 */
clojure.data.diff_associative = (function clojure$data$diff_associative(var_args){
var G__18213 = arguments.length;
switch (G__18213) {
case 2:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
return clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(a,b,clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(a),cljs.core.keys(b)));
});

clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3 = (function (a,b,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (diff1,diff2){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,diff1,diff2));
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,null], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(clojure.data.diff_associative_key,a,b),ks));
});

clojure.data.diff_associative.cljs$lang$maxFixedArity = 3;

clojure.data.diff_sequential = (function clojure$data$diff_sequential(a,b){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.data.vectorize,clojure.data.diff_associative.cljs$core$IFn$_invoke$arity$3(((cljs.core.vector_QMARK_(a))?a:cljs.core.vec(a)),((cljs.core.vector_QMARK_(b))?b:cljs.core.vec(b)),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4219__auto__ = cljs.core.count(a);
var y__4220__auto__ = cljs.core.count(b);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))));
});
clojure.data.diff_set = (function clojure$data$diff_set(a,b){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(a,b)),cljs.core.not_empty(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(b,a)),cljs.core.not_empty(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(a,b))], null);
});

/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.EqualityPartition = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.equality_partition = (function clojure$data$equality_partition(x){
if((((!((x == null)))) && ((!((x.clojure$data$EqualityPartition$equality_partition$arity$1 == null)))))){
return x.clojure$data$EqualityPartition$equality_partition$arity$1(x);
} else {
var x__4433__auto__ = (((x == null))?null:x);
var m__4434__auto__ = (clojure.data.equality_partition[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4434__auto__.call(null,x));
} else {
var m__4431__auto__ = (clojure.data.equality_partition["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__4431__auto__.call(null,x));
} else {
throw cljs.core.missing_protocol("EqualityPartition.equality-partition",x);
}
}
}
});


/**
 * Implementation detail. Subject to change.
 * @interface
 */
clojure.data.Diff = function(){};

/**
 * Implementation detail. Subject to change.
 */
clojure.data.diff_similar = (function clojure$data$diff_similar(a,b){
if((((!((a == null)))) && ((!((a.clojure$data$Diff$diff_similar$arity$2 == null)))))){
return a.clojure$data$Diff$diff_similar$arity$2(a,b);
} else {
var x__4433__auto__ = (((a == null))?null:a);
var m__4434__auto__ = (clojure.data.diff_similar[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return (m__4434__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4434__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4434__auto__.call(null,a,b));
} else {
var m__4431__auto__ = (clojure.data.diff_similar["_"]);
if((!((m__4431__auto__ == null)))){
return (m__4431__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4431__auto__.cljs$core$IFn$_invoke$arity$2(a,b) : m__4431__auto__.call(null,a,b));
} else {
throw cljs.core.missing_protocol("Diff.diff-similar",a);
}
}
}
});

goog.object.set(clojure.data.EqualityPartition,"null",true);

var G__18215_18239 = clojure.data.equality_partition;
var G__18216_18240 = "null";
var G__18217_18241 = ((function (G__18215_18239,G__18216_18240){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18215_18239,G__18216_18240))
;
goog.object.set(G__18215_18239,G__18216_18240,G__18217_18241);

goog.object.set(clojure.data.EqualityPartition,"string",true);

var G__18218_18242 = clojure.data.equality_partition;
var G__18219_18243 = "string";
var G__18220_18244 = ((function (G__18218_18242,G__18219_18243){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18218_18242,G__18219_18243))
;
goog.object.set(G__18218_18242,G__18219_18243,G__18220_18244);

goog.object.set(clojure.data.EqualityPartition,"number",true);

var G__18221_18245 = clojure.data.equality_partition;
var G__18222_18246 = "number";
var G__18223_18247 = ((function (G__18221_18245,G__18222_18246){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18221_18245,G__18222_18246))
;
goog.object.set(G__18221_18245,G__18222_18246,G__18223_18247);

goog.object.set(clojure.data.EqualityPartition,"array",true);

var G__18224_18248 = clojure.data.equality_partition;
var G__18225_18249 = "array";
var G__18226_18250 = ((function (G__18224_18248,G__18225_18249){
return (function (x){
return cljs.core.cst$kw$sequential;
});})(G__18224_18248,G__18225_18249))
;
goog.object.set(G__18224_18248,G__18225_18249,G__18226_18250);

goog.object.set(clojure.data.EqualityPartition,"function",true);

var G__18227_18251 = clojure.data.equality_partition;
var G__18228_18252 = "function";
var G__18229_18253 = ((function (G__18227_18251,G__18228_18252){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18227_18251,G__18228_18252))
;
goog.object.set(G__18227_18251,G__18228_18252,G__18229_18253);

goog.object.set(clojure.data.EqualityPartition,"boolean",true);

var G__18230_18254 = clojure.data.equality_partition;
var G__18231_18255 = "boolean";
var G__18232_18256 = ((function (G__18230_18254,G__18231_18255){
return (function (x){
return cljs.core.cst$kw$atom;
});})(G__18230_18254,G__18231_18255))
;
goog.object.set(G__18230_18254,G__18231_18255,G__18232_18256);

goog.object.set(clojure.data.EqualityPartition,"_",true);

var G__18233_18257 = clojure.data.equality_partition;
var G__18234_18258 = "_";
var G__18235_18259 = ((function (G__18233_18257,G__18234_18258){
return (function (x){
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (1024))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IMap$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IMap,x))){
return cljs.core.cst$kw$map;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISet$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISet,x))){
return cljs.core.cst$kw$set;
} else {
if((((!((x == null))))?(((((x.cljs$lang$protocol_mask$partition0$ & (16777216))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$ISequential$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ISequential,x))){
return cljs.core.cst$kw$sequential;
} else {
return cljs.core.cst$kw$atom;

}
}
}
});})(G__18233_18257,G__18234_18258))
;
goog.object.set(G__18233_18257,G__18234_18258,G__18235_18259);
goog.object.set(clojure.data.Diff,"null",true);

var G__18260_18284 = clojure.data.diff_similar;
var G__18261_18285 = "null";
var G__18262_18286 = ((function (G__18260_18284,G__18261_18285){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18260_18284,G__18261_18285))
;
goog.object.set(G__18260_18284,G__18261_18285,G__18262_18286);

goog.object.set(clojure.data.Diff,"string",true);

var G__18263_18287 = clojure.data.diff_similar;
var G__18264_18288 = "string";
var G__18265_18289 = ((function (G__18263_18287,G__18264_18288){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18263_18287,G__18264_18288))
;
goog.object.set(G__18263_18287,G__18264_18288,G__18265_18289);

goog.object.set(clojure.data.Diff,"number",true);

var G__18266_18290 = clojure.data.diff_similar;
var G__18267_18291 = "number";
var G__18268_18292 = ((function (G__18266_18290,G__18267_18291){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18266_18290,G__18267_18291))
;
goog.object.set(G__18266_18290,G__18267_18291,G__18268_18292);

goog.object.set(clojure.data.Diff,"array",true);

var G__18269_18293 = clojure.data.diff_similar;
var G__18270_18294 = "array";
var G__18271_18295 = ((function (G__18269_18293,G__18270_18294){
return (function (a,b){
return clojure.data.diff_sequential(a,b);
});})(G__18269_18293,G__18270_18294))
;
goog.object.set(G__18269_18293,G__18270_18294,G__18271_18295);

goog.object.set(clojure.data.Diff,"function",true);

var G__18272_18296 = clojure.data.diff_similar;
var G__18273_18297 = "function";
var G__18274_18298 = ((function (G__18272_18296,G__18273_18297){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18272_18296,G__18273_18297))
;
goog.object.set(G__18272_18296,G__18273_18297,G__18274_18298);

goog.object.set(clojure.data.Diff,"boolean",true);

var G__18275_18299 = clojure.data.diff_similar;
var G__18276_18300 = "boolean";
var G__18277_18301 = ((function (G__18275_18299,G__18276_18300){
return (function (a,b){
return clojure.data.atom_diff(a,b);
});})(G__18275_18299,G__18276_18300))
;
goog.object.set(G__18275_18299,G__18276_18300,G__18277_18301);

goog.object.set(clojure.data.Diff,"_",true);

var G__18278_18302 = clojure.data.diff_similar;
var G__18279_18303 = "_";
var G__18280_18304 = ((function (G__18278_18302,G__18279_18303){
return (function (a,b){
var fexpr__18282 = (function (){var G__18283 = clojure.data.equality_partition(a);
var G__18283__$1 = (((G__18283 instanceof cljs.core.Keyword))?G__18283.fqn:null);
switch (G__18283__$1) {
case "atom":
return clojure.data.atom_diff;

break;
case "set":
return clojure.data.diff_set;

break;
case "sequential":
return clojure.data.diff_sequential;

break;
case "map":
return clojure.data.diff_associative;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18283__$1)].join('')));

}
})();
return (fexpr__18282.cljs$core$IFn$_invoke$arity$2 ? fexpr__18282.cljs$core$IFn$_invoke$arity$2(a,b) : fexpr__18282.call(null,a,b));
});})(G__18278_18302,G__18279_18303))
;
goog.object.set(G__18278_18302,G__18279_18303,G__18280_18304);
/**
 * Recursively compares a and b, returning a tuple of
 *   [things-only-in-a things-only-in-b things-in-both].
 *   Comparison rules:
 * 
 *   * For equal a and b, return [nil nil a].
 *   * Maps are subdiffed where keys match and values differ.
 *   * Sets are never subdiffed.
 *   * All sequential things are treated as associative collections
 *  by their indexes, with results returned as vectors.
 *   * Everything else (including strings!) is treated as
 *  an atom and compared for equality.
 */
clojure.data.diff = (function clojure$data$diff(a,b){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null,a], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.data.equality_partition(a),clojure.data.equality_partition(b))){
return clojure.data.diff_similar(a,b);
} else {
return clojure.data.atom_diff(a,b);
}
}
});
