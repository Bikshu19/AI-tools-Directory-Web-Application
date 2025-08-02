const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb+srv://bikshutulimelli:bikshu@cluster0.dxun2jj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const dbName = 'aitools';
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