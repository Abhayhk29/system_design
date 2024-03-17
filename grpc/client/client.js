const PROTO_PATH = './customers.proto';

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');

const packageDefination = protoLoader.loadSync(PROTO_PATH, {
    keepCase : true,
    longs: String,
    enums:String,
    arrays:true
})


const customerService = grpc.loadPackageDefinition(packageDefination);

const client = new customerService(
    "127.0.0.1:30043",
    grpc.credentials.createInsecure(),

)

module.exports =client;