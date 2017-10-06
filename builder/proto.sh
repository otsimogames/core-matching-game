FILES="./builder/asset.proto ./builder/generator.proto"

pbjs -p ./builder \
    -t static-module \
    -w commonjs \
    -o ./builder/pb.js \
    ${FILES}

pbts -o ./builder/pb.d.ts ./builder/pb.js
