#!/bin/sh
TRAVIS_TAG="Core Find And Count"
if [ "$TRAVIS_TAG" ];then
    if [ -d builds/npm ] ; then
        rm -rf builds/npm
    fi

    mkdir -p builds/npm
    cp -r src/js/* builds/npm
    cp package.json builds/npm
    cp settings.json builds/npm

    cd builds/npm
    npm publish
fi
