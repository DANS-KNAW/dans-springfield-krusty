#!/usr/bin/env bash

BUILDDIR=dist
TMP_PLAYER_DIR=$BUILDDIR/player/

rm -fr $BUILDDIR
mkdir -p $TMP_PLAYER_DIR
cp -r css $TMP_PLAYER_DIR
cp -r font-awesome $TMP_PLAYER_DIR
cp -r img $TMP_PLAYER_DIR
cp -r js $TMP_PLAYER_DIR
cp *.png $TMP_PLAYER_DIR
cp *.ico $TMP_PLAYER_DIR
cp *.txt $TMP_PLAYER_DIR
cp *.html $TMP_PLAYER_DIR

pushd $BUILDDIR
tar -czf krusty.tgz player/
popd
