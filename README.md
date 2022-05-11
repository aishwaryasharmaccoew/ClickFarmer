# Click Farmer
A simple webapp to count the number of clicks per colour

## Building and Running

To build the binary:
```
go build -o clickfarmer -race -v .
```

To run the database:
```
./clickfarmer database
```
You can specify an `--rpc-addr <addr>` flag to set the RPC server address the
database listens for requests on to something other than ":8080".

To run a webserver:
```
./clickfarmer webserver
```
You can specify an `--rpc-addr <addr>` flag to set the address to connect to
the database on (it defaults to "localhost:8080").

You can specify an `--http-addr <addr>` (or `-a`) flag to set the address to
serve the website on. This is used to run multiple web servers, like:

```
./clickfarmer webserver -a :3001
./clickfarmer webserver -a :3002
./clickfarmer webserver -a :3003
```

Note that you can also run the database and webserver without the `build` step
by running the `main.go` file directly:

```
go run main.go database
go run main.go webserver -a :3002
```

To access the webserver's frontend, go to http://localhost:3000 in a browser (if
you used `--http-addr` or `-a` to specify a different one, use that port
instead of `3000`).

## Generating Protobufs

You will need to install the protobuf compiler:

https://grpc.io/docs/protoc-installation/

As well as some additional dependencies:

```
go get google.golang.org/protobuf/cmd/protoc-gen-go \
         google.golang.org/grpc/cmd/protoc-gen-go-grpc
```

To re-generate the protobuf code after changing `pb/clicktracking.proto`, run:
```
go generate ./pb/...
```


## UI description
The buttons are supposed to stop growing after 18 clicks as per design