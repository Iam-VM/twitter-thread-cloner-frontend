#!/bin/bash

echo "Initiating build";
yarn run build;
cp -r ./build ../twitter-thread-cloner-backend/build_prod
echo "built and copied";
