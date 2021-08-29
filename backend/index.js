const express = require('express');
const app = express();
// const config = require('./config/config.json');
const config = require('./config/config');
const api = require('./router/v1/api');
const cors = require('cors');

app.use(cors());

app.use(api)

const PORT = process.env.PORT || config.port
app.listen(PORT, ()=>{
    console.log("=======");
    console.log(`SERVER START http://localhost:${PORT}`);
    console.log("=======");
})