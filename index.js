const express = require('express');
const app = express();
const port = 3000;

app.get('/breeds' , (req, res) => {
    const dogLogs = async () => {
        try {
            const response = await fetch("https://dogapi.dog/api/v2/breeds");
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            const dogs = await response.json();
            res.send(dogs);
            console.log(dogs);
        } catch (error) {
            console.log(error);
        }
    }
    dogLogs();
})

app.get('/breeds/:id' , (req, res) => {
    const breedLogs = async () => {
        try {
            const response = await fetch("https://dogapi.dog/api/v2/breeds/" + req.params.id);
            if(!response.ok){
                throw new Error("Network response was not OK");
            }
            const breeds = await response.json();
            res.send(breeds);
            console.log(breeds);
        } catch(error) {
            console.log(error);
        }
    }
    breedLogs();
})

app.get('/facts' , (req, res) => {
    const dogLogs = async () => {
        try {
            const response = await fetch("https://dogapi.dog/api/v2/facts");
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            const facts = await response.json();
            res.send(facts);
            console.log(facts);
        } catch (error) {
            console.log(error);
        }
    }
    dogLogs();
})

app.get('/groups' , (req, res) => {
    const dogLogs = async () => {
        try {
            const response = await fetch("https://dogapi.dog/api/v2/groups");
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            const groups = await response.json();
            res.send(groups);
            console.log(groups);
        } catch (error) {
            console.log(error);
        }
    }
    dogLogs();
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})