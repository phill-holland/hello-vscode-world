import dotenv from 'dotenv';

dotenv.config();

var mongoose = require('mongoose');

export const ConnectionString = ():string  => {

    let result:string = 'mongodb://';
    result += process.env.DB_HOST;
    result += ':';
    result += process.env.DB_PORT;

    return result;
};

export const HelloSchema = new mongoose.Schema({
    value:String
});

export const HelloModel = mongoose.model("Hello", HelloSchema);

mongoose.connect(ConnectionString(), {
    useUnifiedTopology: true,
    useNewUrlParser: true
});