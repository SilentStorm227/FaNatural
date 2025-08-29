require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors'); 
const { CurrencySelectorElement } = require('@stripe/react-stripe-js');
const Stripe = require('stripe')
const stripe = new Stripe (process.env.STRIPE_SECRET_KEY);
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');

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



//-------------------CHECKOUT SESSION--------------------------
product.post("/create-checkout-session", async(req,res)=>{
    try {
        const {product} = req.body;

        const lineitem = product.map((product)=>({
           price_data:{
            currency:"gbp",
            product_data:{
                name:product.name,
                images:[product.image]
            },
            unit_amount:Math.round(product.price*100),
           },
           quantity:product.qty,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types:["card"],
            line_items:lineitem,
            mode:"payment",
            success_url:"http://localhost:5173/",
            cancel_url:"http://localhost:5173/about"
        });

        res.json({id:session.id})

    } catch (error) {
        console.error(error);
        res.status(500).json({message:error.message})
    }
})

//---------------LOGING, SIGN IN AND PROFILE-----------------

const userSchema =  new mongoose.Schema({
    Name: {type:String, required:true},
    Email: {type:String, required:true},
    Password: {type:String, required:true}
});

userSchema.pre('save', async function(next) {
    if (!this.isModified('Password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error) {
        next(error)
    };
});

const user = mongoose.model('user', userSchema);

product.get('/create-account', async(req,res)=>{
    try {
        const newuser = new user ({
            Name:req.body.Name,
            Email:req.body.Email,
            Password:req.body.Password,
        });
        await newuser.save();
        res.json(newuser)
    } catch (error) {
        res.status(500).json({message:"Error!", error:error.message});
    }
});

product.get('login', async(req,res)=>{
    try {
        const{Name, Password} = req.body;

        const founduser = await user.findOne({Name});

                //if user not found
        if(!founduser){
            res.status(400).json({message:'user not found'})
        }

                // Compare the provided password with the stored hashed password
        const ismatch = await bcrypt.compare(Password, founduser.Password)

                //if password is not correct
        if(!ismatch){
            res.staus(400).json({message:'invalid password'})
        }

        const token = jsonwebtoken.sign(
            {id: founduser._id},
            "secretkey",
            {expiresIn:'1h'}
        )

                // Return it to the user
        res.status(200).json({message:'login sucess', token});
    } catch (error) {
        console.log(error);
        res.status(500).json({message:'server error'})
    }
});

//PROFILE PAGE
product.get('/profile-page', async(req,res)=>{

})


// ------------------ SERVER START ------------------
// Start backend on port 5000
product.listen(5000, ()=> console.log("Server running on http://localhost:5000"));