# form-validation tutorial

**There is really no reason to read this readme if you don't want to contribute to this library.**

Tutorial with examples for branch `master`.

## Output

Output of this branch is saved to https://kwladyka.github.io/form-validator-cljs/

## Developing

Be sure you have this directories, which are branches from this repository.

```bash
mkdir form-validator-cljs
cd form-validator-cljs
git clone -b cicd git@github.com:kwladyka/form-validator-cljs.git cicd
git clone -b master git@github.com:kwladyka/form-validator-cljs.git master
git clone -b doc git@github.com:kwladyka/form-validator-cljs.git doc

tree -L 1                                                                                          
.
├── cicd
├── doc
└── master
```

### If you change `master` branch

Change source of the module to local folder

```clojure
;; deps.edn
{form-validator {:local/root "../master"}}
```

Add source of library to watch-dir.

```clojure
;; dev.cljs.edn
{watch-dirs ["test" "src" "../master/src"]}
```

**But remember to not commit this changes!**

### Runing and coding

```bash
npm i
npx webpack --mode=development
clj -A:fig:build
```

### Production

Github actions