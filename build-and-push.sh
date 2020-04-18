#!/bin/sh
VERSION=v0.2.0
DOCKER_ORG=baloiseincubator
APP_NAME=devops-butterfly
docker build . -t $DOCKER_ORG/$APP_NAME:$VERSION
docker push $DOCKER_ORG/$APP_NAME:$VERSION