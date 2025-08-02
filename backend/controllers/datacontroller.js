const { getDB } = require('../db');
const axios = require('axios');
const mongoose = require('mongoose');
const { OpenAI } = require('openai');
const dotenv =require('dotenv')
dotenv.config()

exports.getDataByCollection = async (req, res) => {
    try {
        const collectionName = req.params.category;
        const db = getDB();
        const collection = db.collection(collectionName);
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getInfo = async (req, res) => {
    try {
        const response = await axios.get('https://newsdata.io/api/1/latest?apikey=pub_9ca1d092f23c4178a5fc7c8229502a6d&q=Latest%20AI%20tools%20for%20developers');

        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching AI news:', error.message);
        res.status(500).json({ error: 'Failed to fetch AI news' });
    }
};
exports.getapis=async(req,res)=>{
    try{
         const db = getDB();
    const data = await db.collection('api').find().toArray();
    res.json(data);
    }
    catch(err){
        console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
    }
};
const openai = new OpenAI({
  apiKey: process.env.openai
});
exports.getbot=async(req, res) => {
  const userMessage = req.body.message;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // or "gpt-3.5-turbo"
      messages: [
        { role: "system", content: "You are a helpful chatbot." },
        { role: "user", content: userMessage }
      ],
    });

    const botReply = completion.choices[0].message.content.trim();
    res.json({ reply: botReply });
  } catch (error) {
    console.error('Error from OpenAI:', error.message);
    res.status(500).json({ reply: "Sorry, I'm having trouble thinking right now." });
  }
};
exports.getToolsByCollection = async (req, res) => {
    try {
        const collectionName = req.params.collectionName; // Example: 'chat', 'gaming'
        const db = getDB();
        const collection = db.collection(collectionName);

        // Fetch only the 'name' field of all tools
        const tools = await collection.find({}, { projection: { name: 1, _id: 0 } }).toArray();

        const toolNames = tools.map(tool => tool.name);
        res.json(toolNames);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch tools for the given category.' });
    }
};
// Compare two AI tools from potentially different collections
exports.compareTools = async (req, res) => {
    try {
        const { tool1, tool2, category1, category2 } = req.query;
        const db = getDB();

        const collection1 = db.collection(category1);
        const collection2 = db.collection(category2);

        const toolData1 = await collection1.findOne({ name: tool1 });
        const toolData2 = await collection2.findOne({ name: tool2 });

        const result = [];
        if (toolData1) result.push(toolData1);
        if (toolData2) result.push(toolData2);

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to compare tools' });
    }
};
