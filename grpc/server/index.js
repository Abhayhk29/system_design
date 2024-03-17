const PROTO_PATH = './customers.proto';

const grpc = require('@grpc/grpc-js')
const protoLoader = require('@grpc/proto-loader');

const packageDefination = protoLoader.loadSync(PROTO_PATH, {
    keepCase : true,
    longs: String,
    enums:String,
    arrays:true
})


const customersProto = grpc.loadPackageDefinition(packageDefination);


const server = new grpc.Server();

const customers = [
    {
        id:"32",
        name: "abhay",
        age:32,
        address:"Pune"
    },
    {
        id:"322",
        name: "Nirbhay",
        age:23,
        address:"Hyderabad"
    }
]

server.addService(customersProto.CustomerService.service, {
    getAll: (call, callback) => {
        callback(null, { customers })
    },
    get: (call, callback) => {
        let customer = customers.find(n => n.id = call.request.id);
        if(customer){
            callback(null, customer);
        }else{
            callback({
                code: grpc.status.NOT_FOUND,
                details:"Not Found"
            })
        }
    },
    insert: (call, callback) => {
        let customer = call.request;

        customer.id = Math.random()
        customers.push(customer);
        callback(null, customer);

    },
    update: (call, callback) => {
        let existingUser = customers.find(n => n.id = call.request.id);

        if(existingUser){
            existingUser.name = call.request.name;
            existingUser.age = call.request.age;
            existingUser.address = call.request.address;
            callback(null, existingUser);
        }else{
            callback({
                code: grpc.status.NOT_FOUND,
                details:"Not Found"
            })
        }

    },
    remove: (call, callback) => {
        let existingUser = customers.findIndex(n => n.id = call.request.id);

        if(existingUser != -1){
            customers.splice(existingUser, 1)
            callback(null, existingUser);
        }else{
            callback({
                code: grpc.status.NOT_FOUND,
                details:"Not Found"
            })
        }
    }
})


server.bindAsync("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
server.start();