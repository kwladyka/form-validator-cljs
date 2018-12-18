#!/bin/bash
docker build --no-cache -t form-validator-cljs -f Dockerfile-build-doc . &&
docker create --name form-validator-cljs-container form-validator-cljs &&
docker cp form-validator-cljs-container:/app/artifacts ./ &&
docker rm form-validator-cljs-container &&
cd artifacts &&
git push --force-with-lease &&
cd .. &&
rm -rf artifacts