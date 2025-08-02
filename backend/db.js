const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const mongoUrl = process.env.mongodb;
const dbName = process.env.data;

const client = new MongoClient(mongoUrl);

let db;

async function connectDB() {
    await client.connect();
    console.log('✅ MongoDB connected');
    db = client.db(dbName);
}

function getDB() {
    if (!db) {
        throw new Error('❌ Database not connected yet.');
    }
    return db;
}

module.exports = { connectDB, getDB };
