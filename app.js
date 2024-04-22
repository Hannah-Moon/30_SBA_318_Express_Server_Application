// ---------------[ Step 01: Set up ]
const express = require("express");
const fs = require ("fs") 
const app = express(); 
app.set("view engine", "ejs");
const PORT = process.env.PORT || "3000";       


// ---------------[ middleware ]
app.use(express.static("public"))


// ---------------[ Step 02: Read data ]
// Behavioral
app.get("/behavioral/data", (req, res) => {
    fs.readFile(__dirname+'/data/behavioral.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        
        let jsonData = JSON.parse(data);
        
        // Filter data based on query parameters
        if (req.query.category) {
            jsonData = jsonData.filter(item => item.category === req.query.category);
        }
        
        res.json(JSON.parse(data))
    })
});

// Technical
app.get("/technical/data", (req, res) => {
    fs.readFile(__dirname+'/data/technical.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        
        let jsonData = JSON.parse(data);
        
        res.json(JSON.parse(data))
    })
});

// Questions to ask
app.get("/questiontoask/data", (req, res) => {
    fs.readFile(__dirname+'/data/questiontoask.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")

        let jsonData = JSON.parse(data);

        res.json(JSON.parse(data))
    })
});

// Download tips

app.get("/download-file", (req,res) =>{
    res.download("./public/docs/Interviewing-guide.pdf")
})

// ---------------[ Step 03: Set up Route ]

app.get("/behavioral", (req, res) => {
    res.sendFile(__dirname+'/public/behavioral.html')
})


app.listen(PORT, (req, res) => {
    console.log(`Currently Listening on ${PORT}`);
  });