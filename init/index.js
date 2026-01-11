const  mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.MONGODB_URI;


main()
 .then(() => {
    console.log("connected to DB");
 })
 .catch((err) => {
    console.log(err);
 }); 

 console.log("MONGO URI EXISTS:", !!process.env.MONGODB_URI);

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj, 
        owner: "688c6c7255a8c96820aa77af"
    }));
    await Listing.insertMany(initData.data);
    console.log("Data initialized");
};

//initDB();

