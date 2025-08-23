const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const jsonwebtoken = require('jsonwebtoken');
// const bcrypt = require('bcrypt');

const product = express();
product.use(cors()); // Allow requests from React frontend
product.use(express.json());

// 1. Connect to MongoDB (local or Atlas)
mongoose.connect("mongodb://127.0.0.1:27017/FNaturals", {
    useNewUrlParser:true,  // Ensures MongoDB driver parses URL correctly
    useUnifiedTopology: true, // Uses new engine for monitoring connections
}
);


// ------------------ SCHEMA & MODEL ------------------
// Define what a "Product" looks like in the database
const ConditionerSchema = new mongoose.Schema({
    name: String, //product name
    price: Number, //product price
    amount: Number, //product price
});

const CleansingShampooSchem = new mongoose.Schema({
    name: String, //product name
    price: Number, //product price
    amount: Number, //product price
});

const HairConditionerSchema = new mongoose.Schema({
    name: String, //product name
    price: Number, //product price
    amount: Number, //product price
});

const GrowThriveOilSchema = new mongoose.Schema({
    name: String, //product name
    price: Number, //product price
    amount: Number, //product price
});

const HairTreatmentOilSchema = new mongoose.Schema({
    name: String, //product name
    price: Number, //product price
    amount: Number, //product price
});

// Create a Mongoose model (like a collection in MongoDB)
const Conditioner = mongoose.model("Conditioner", ConditionerSchema);
const CleansingShampoo = mongoose.model("CleansingShampoo", CleansingShampooSchem);
const HairConditioner = mongoose.model("HairConditioner", HairConditionerSchema);
const GrowThriveOil = mongoose.model("GrowThriveOil", GrowThriveOilSchema);
const HairTreatmentOil = mongoose.model("HairTreatmentOil", HairTreatmentOilSchema);

// ------------------ ROUTES ------------------

// GET all products (http://localhost:5000/api/products)
product.get("/Conditioner", async (req,res)=> {
    try {
        const data = await Conditioner.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});


product.get("/CleansingShampoo", async (req,res)=> {
    try {
        const data = await CleansingShampoo.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});


product.get("/HairConditioner", async (req,res)=> {
    try {
        const data = await HairConditioner.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

product.get("/GrowThriveOil", async (req,res)=> {
    try {
        const data = await GrowThriveOil.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});


product.get("/HairTreatmentOil", async (req,res)=> {
    try {
        const data = await HairTreatmentOil.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// ------------------ SERVER START ------------------
// Start backend on port 5000
product.listen(500, ()=> console.log("Server running on http://localhost:5000"));