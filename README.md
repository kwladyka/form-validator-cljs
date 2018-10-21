# form-validator

ClojureScript library to validate forms.

## Rationale

- Move repeatable code for form validation from app to library.
- Validate with `fn` and `spec`.
- Customizable messages with customizable structure. Could be `"foo"`, `{:level :warn :msg "foo"}` or whatever.
- Customizable workflow. Let you choose when to show messages: `on-blur` / `on-change` / immediately after load page / ...
- Easy and simple independent small solution. Compatible with `re-frame`, `fulcro` or whatever.

Why? I need it myself. Everybody needs it. But I didn't find any library which satisfy me, so I wrote my own.

## Add dependency

### deps.edn

```clojure
{:deps {github-kwladyka/form-validator {:git/url "https://github.com/kwladyka/form-validator-cljs" :sha ""}}}
```

### Lein

The recommended way to do it is to use [lein-tool-deps](https://github.com/RickMoynihan/lein-tools-deps).

Basicly add this plugin and make `deps.edn` file like above.

### Require in ns

```clojure
(:require [form-validator.core :as form-validator])
```

### Only if you use reagent

To be compatible with reagent library, needs to use `reagent.core/atom` instead `clojure.core/atom`.

```clojure
(ns app.core
  (:require [reagent.core :as r]
            [form-validator.core :as form-validator]))

;; First line in core ns or dedicated init fn is a right place
(form-validator/set-conf! {:atom r/atom})
```

## TL;DR

Init form

```clojure
(-> {:names->value {:email ""
                    :password ""}
     :form-spec ::form
    (form-validator/init-form))
```

return `atom` contained map:

```clojure
{:form-spec :app.spec/form
 :names->value {:email "" :password ""}
 :names->invalid {:email [:app.spec/form :app.spec/email] :password [:app.spec/form :app.spec/password :app.spec/password-not-empty]}
 :names->show #{}
 :names->validators {}}
 ```

Then you can use functions from ns `form-validator.core`:

- `event->names->value!` - With `on-change` / `on-blur` input event to update values.
- `event->show-message` - With `on-blur` / `on-change` input event to trigger when show messages in UI.
- `?show-message` - Get message to show in UI for input. Also to know if mark input as not valid in UI.
- `form-valid?` - true / false
- `validate-form` - Validate all inputs. Usually you don't need use this function.
- `validate-form-and-show` - Call `validate-form` and show all messages. Use with submit button.

## Tutorial with live examples

Discover it naturally in 10 minutes: https://kwladyka.github.io/form-validator-cljs/

The best to do after this readme. But if you are inpecient take a look and back here.

## Specification

### Input

```clojure

;; clojure.spec.alpha

(s/def ::email (s/and string? (partial re-matches #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")))

(s/def ::password-not-empty not-empty)
(s/def ::password-length #(<= 6 (count %)))
(s/def ::password (s/and string? ::password-not-empty ::password-length))

(s/def ::form (s/keys :req-un [::email ::password]
                      :opt-un [::password-repeat]))

;; form-valiadtor

(-> {:names->value {:email ""
                    :password ""}
     :form-spec ::form
     :names->validators {:email [email-exist?]
                         :password-repeat [password-repeat? ::spec-key]}}
    (form-validator/init-form))
```

- `:names->value` - Form inputs with values to initialize.  
Use cases: Empty values for new data form / filled values with already existed data (update form) / if input is not required by spec `:opt-un` it can be ommited.
- `:names->validators` - Vector of spec keywords and fn. Order matter.  
Use cases: When don't have `spec` for form / `fn` to compare password-repeat if you can't have it in `spec` / check if user already exist by API during registration.
- `:form-spec` - Spec to validate whole form.  
*Should use always, unless you don't have specs.
- `:show-all?` - If show messages immediately after init form.  
`nil` - show for not empty values (default)  
`true` - show all  
`false` - do not showy any

\* You can use `:form-spec` and `:names->validators` together. `:form-spec` is checked first.

### Output

Return `atom`:

```clojure
{:form-spec :app.spec/form
 :names->value {:email "", :password ""}
 :names->invalid {:email [::form ::form-map ::email]
                  :password [::form ::form-map ::password ::password-not-empty]}
 :names->show #{}
 :names->validators {:email #object[cljs$core$sp1], :password-repeat #object[cljs$core$sp1]}}
 ```

- `:form-spec` - Input without any change.
- `:names->value` - Values of the form.
- `:names->invalid` - Iinvalid inputs with reasons of validation fail.
- `:names->show` - Add name of the input here, when you want to show message in UI.
- `:names->validators` - All validators converted to one fn which works similar to `some`. Check all validators for specific input one by one, unless fail or return `nil`.

### Messages

- `:names->validators` can contain `::spec-key` and `fn`.
- Spec always return vector of `:cljs.spec.alpha/problems` `:via`. For example `[::form ::form-map ::password ::password-not-empty]`. It means spec `::form` refer to spec `::form-map`, which refer to spec `::password`, which refer to spec `::password-not-empty`, which failed.
- `fn` can return vectors like spec, but also strings, map or any value.
```clojure
;; Check error for input name "password"
(->> {::email "Typo? It doesn't look valid."
      ::password "Minimum 6 characters and one special character !@#$%^&*."
      :password-not-equal "Repeat password has to be the same."}
     (form-validator/?show-message form :password))
```
Based on `[::form ::form-map ::password ::password-not-empty]` it is trying to find `::password-not-empty` message. Map not contain message for this spec. Then try to find `::password` and return message. If not find going deeper. If not find any, return `true`.

If reason of fail is not a vector, then it is returning as it is. For example `"cutom message"` or `{:level :warn :msg "This is only warning."}`. This is dedicated for `fn` validators.

## Tips & Tricks & FAQ

- Architecture of library let you make customizable things on it. You can modify `atom` returned by `form-init`, `add-watch` on `atom`, add functions on top of core functions, use your own functions instead of core ones. It is designed to let you make customizable things. In most of cases you really don't need to do it. It could be usefull if you like to make your module based on this one.
- To not prevent send form with warning (not error) messages like "Password is weak. We recommend to use better password." you have to use your own `form-valid?` function or make two `form-init` (first for errors and second for warnings). I decided to not make it part of this library, because it is individual thing for project.
- Probably you want to write your own functions to generate UI HTML form and inputs based on this library. UI is individual thing for project, so I decided it wouldn't be part of this library. Instead this library give solid basement, which let you to build visualisation on it.

---

Everythin below this line is mainly for myself as a maintainter of this library.

## Developing

Library has to be always check with web browsers mamually! Not only automated tests. The reasons are differences between web browsers and practical aspects of usability vs imagination :)

To do it use `doc` branch from this repository.

After all make a commit to readme with new sha hash for deps.edn.

### Tests

`clj -A:test:test-once`

`clj -A:test:test-watch`
