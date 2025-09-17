require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors'); 
const { CurrencySelectorElement } = require('@stripe/react-stripe-js');
const Stripe = require('stripe')
const stripe = new Stripe (process.env.STRIPE_SECRET_KEY);
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
import multer from 'multer';
import path from 'path';

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

   const ProfileSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  profilePic: { type: String, default: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fmaeruamall.com%2Fabout%2Fperson-placeholder-4%2F&psig=AOvVaw0pOtjv8eS9egL-sX_UmVbM&ust=1758212924057000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCMiuhdyb4I8DFQAAAAAdAAAAABAi' } // store path/URL
});

// Create a Mongoose model (like a collection in MongoDB)
const Conditioner = mongoose.model("Conditioner", ConditionerSchema);
const CleansingShampoo = mongoose.model("CleansingShampoo", CleansingShampooSchem);
const HairConditioner = mongoose.model("HairConditioner", HairConditionerSchema);
const GrowThriveOil = mongoose.model("GrowThriveOil", GrowThriveOilSchema);
const HairTreatmentOil = mongoose.model("HairTreatmentOil", HairTreatmentOilSchema);

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb (null, 'uploads/');
    },
    filename: (req, file, cb) =>{
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({storage})

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
        this.Password = await bcrypt.hash(this.Password, salt);
        next();
    } catch (error) {
        next(error)
    };
});

const user = mongoose.model('user', userSchema);

product.post('/create-account', async(req,res)=>{
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

product.post('/login', async(req,res)=>{
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
            "secretkey5@497",
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
    try {
        const token = req.header('Authorization').replace('Bearer ', '');

        if(!token){
            res.status(401).json({message:'no token provided'})
        }

        const decoded = jsonwebtoken.verify(token, 'secretkey5@497');
        const userId = decoded.id;

        const userprofile = await user.findById(userId, 'Name Email')
        if(!userprofile){
           return res.status(404).json({profile:'user not found'})
        }

        res.status(200).json({profile:userprofile})
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'server error'})
    }
})

// Upload profile picture
product.post('upload-picture', upload.single('profilePic'), async(req, res)=>{
    try {
        const tokenHeader = req.header('Authorization');
        if (!tokenHeader) return res.status(401).json({message: 'No token provided'});

        const token = tokenHeader.replace('Bearer ', '');
        const  decoded = jsonwebtoken(token, 'secretkey5');

        const updatedUser = await user.findByIdAndUpdate(
            decoded.id,
            {profilePic :req.file.path },
            {new: true}
        );

            res.status(200).json({ message: 'Profile picture updated', profile: updatedUser });
    } catch (error) {
        console.error(err);
    res.status(500).json({ message: 'Server error' });
    }
})

// serve uploads as static
app.use('/uploads', express.static('uploads'));



// ------------------ SERVER START ------------------
// Start backend on port 5000
product.listen(5000, ()=> console.log("Server running on http://localhost:5000"));