const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataroutes');
const { connectDB } = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', dataRoutes);

connectDB().then(() => {
    app.listen(5000, () => {
        console.log('Backend server running at http://localhost:5000');
    });
}).catch(err => {
    console.error('❌ Failed to connect to MongoDB:', err);
});
