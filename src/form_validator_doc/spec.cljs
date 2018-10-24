(ns form-validator-doc.spec
  (:require [cljs.spec.alpha :as s]
            [clojure.test.check.generators]))

(s/def ::email (s/and string? (partial re-matches #"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$")))

(s/def ::password-not-empty not-empty)
(s/def ::password-length #(<= 6 (count %)))
(s/def ::password (s/and string? ::password-not-empty ::password-length))

(s/def ::form (s/keys :req-un [::email ::password]
                      :opt-un [::password-repeat]))
