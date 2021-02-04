#!/bin/bash

echo "Initiating build";
yarn run build;
cp -r ./build ../twitter-thread-cloner-backend/
echo "built and copied";
