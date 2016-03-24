#!/bin/sh
if [ -d builds/npm ] ; then
    rm -rf builds/npm
fi

mkdir -p builds/npm
cp -r src/js/* builds/npm
cp package.json builds/npm
cp settings.json builds/npm

cd builds/npm
npm publish