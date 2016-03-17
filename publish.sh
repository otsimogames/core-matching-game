#!/bin/sh

gulp build

cd builds/prod
gversion=$(jq .version --raw-output otsimo.json)
gname=$(jq .unique_name --raw-output otsimo.json)


if [ "$1" = "" ];then
    export OTSIMOCTL_CATALOG=services.otsimo.xyz:18857
    export OTSIMOCTL_REGISTRY=registry.otsimo.xyz:18852
    export OTSIMOCTL_UPLOAD=https://registry.otsimo.xyz:18851
    export OTSIMOCTL_ACCOUNTS=https://accounts.otsimo.xyz
elif [ "$1" = "prod" ];then
    export OTSIMOCTL_CATALOG=services.otsimo.com:18857
    export OTSIMOCTL_REGISTRY=registry.otsimo.com:18852
    export OTSIMOCTL_UPLOAD=https://registry.otsimo.com:18851
    export OTSIMOCTL_ACCOUNTS=https://accounts.otsimo.com
fi

otsimoctl game publish
otsimoctl game change-state $gname $gversion waiting
otsimoctl game change-state $gname $gversion validated
otsimoctl game change-state $gname $gversion production