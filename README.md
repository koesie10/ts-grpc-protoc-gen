# ts-grpc-protoc-gen
> Protoc Plugin for generating TypeScript Declarations for gRPC

This repository contains a [protoc](https://github.com/google/protobuf) plugin that generates TypeScript declarations 
(`.d.ts` files) that match the JavaScript output of `protoc --js_out=import_style=commonjs,binary --grpc_out`. This plugin
depends on [ts-protoc-gen](https://github.com/improbable-eng/ts-protoc-gen) to also be run.

This plugin is tested and written using TypeScript 2.7.

## Installation
* Install the standard C++ implementation of protocol buffers from [developers.google.com/protocol-buffers](https://developers.google.com/protocol-buffers)
* Install this package using npm, eg: `npm install grpc-ts-protoc-gen` or clone, install and build this repository.

## Usage
As mention above, this plugin for `protoc` serves two purposes:
1. Generating gRPC TypeScript Definitions for CommonJS modules generated by protoc

### Generating TypeScript Definitions for CommonJS modules generated by protoc
By default, protoc will generate ES5 code when the `--js_out` flag is used (see [javascript compiler documentation](https://github.com/google/protobuf/tree/master/js)). You have the choice of two module syntaxes, [CommonJS](https://nodejs.org/docs/latest-v8.x/api/modules.html) or [closure](https://developers.google.com/closure/library/docs/tutorial). This plugin (`ts-grpc-protoc-gen`) can be used to generate Typescript definition files (`.d.ts`) to provide type hints for CommonJS modules only.

To generate TypeScript definitions you must first configure `protoc` to use this plugin and then specify where you want the TypeScript definitions to be written to using the `--grpc-ts_out` flag.

```bash
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
PROTOC_GEN_GRPC_PATH=""
# Path to this plugin
PROTOC_GEN_GRPC_TS_PATH="./node_modules/bin/protoc-gen-grpc-ts"

# Directory to write generated code to (.js and .d.ts files) 
OUT_DIR="./generated"

protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --plugin="protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}"
    --plugin="protoc-gen-grpc-ts=${PROTOC_GEN_GRPC_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_DIR}" \
    --ts_out="${OUT_DIR}" \
    --grpc_out="${OUT_DIR}" \
    --grpc-ts_out="${OUT_DIR}" \
    users.proto base.proto
```

In the above example, the `generated` folder will contain both `.js` and `.d.ts` files which you can reference in your TypeScript project to get full type completion and make use of ES6-style import statements, eg:

```js
import grpc from "grpc";
import { GetUserRequest } from "../generated/users_pb";
import { UserServiceClient } from "../generated/users_grpc_pb";

const client = new UserServiceClient('localhost', grpc.credentials.createInsecure());
const req = new GetUserRequest();
req.setUsername("johndoe");
client.getUser(req, (err, user) => { /* ... */ });
```

## Contributing
Contributions are welcome! Please refer to [CONTRIBUTING.md](https://github.com/koesie10/ts-grpc-protoc-gen/blob/master/CONTRIBUTING.md) for more information.