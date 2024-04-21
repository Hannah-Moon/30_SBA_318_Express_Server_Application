const express = require("express");
const fs = require ("fs") 
const PORT = process.env.PORT || "3000";       
const app = express(); 


// ---------------[ middleware ]
app.use(express.static("public"))


// ---------------[ Step 02: Read data ]
// Behavioral
app.get("/behavioral/data", (req, res) => {
    fs.readFile(__dirname+'/data/behavioral.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        res.json(JSON.parse(data))
    })
});

// Technical
app.get("/technical/data", (req, res) => {
    fs.readFile(__dirname+'/data/technical.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        res.json(JSON.parse(data))
    })
});

// Questions to ask
app.get("/questionstoask/data", (req, res) => {
    fs.readFile(__dirname+'/data/questiontoask.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        res.json(JSON.parse(data))
    })
});

app.get("/behavioral", (req, res) => {
    res.sendFile(__dirname+'/public/index.html')
})


app.listen(PORT, (req, res) => {
    console.log(`Currently Listening on ${PORT}`);
  });