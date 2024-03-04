// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, Nodejs!');
// });
// app.post('/hello', (req, res) => {
//   res.sendFile(__dirname+'index.html')
//   let users = {
//     name:'srinu',
//     age:24,
//     city:"Hyderabad",
//     pin:517644

//   }
//     res.send(users);
//   });

// const port = 3001;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });











// const express = require('express')
// const mongoose = require('mongoose')
// const app=express()
// mongoose.connect("mongodb+srv://srinivaserugu987:Sehari%40130819@cluster0free.ojbyqji.mongodb.net/mydb")
// const UserSchema = new mongoose.Schema({
//   name:String,
//   age:Number
// })
// const UserModel = mongoose.model("users",UserSchema)
// app.get("/getusers",(req,res)=>{
//   UserModel.find({}).then(function(users){
//     res.json(users)
//   }).catch(function(err){
//     console.log(err);
//   })

// })
// app.listen(3000,()=>{
//   console.log("server is running");
// })





// const express = require('express');
// const mongoose = require('mongoose');
// const app = express();
// mongoose.connect('mongodb+srv://srinivaserugu987:cNfbM31bLvzxzsZ7@cluster0free.exsym40.mongodb.net/webbb');
// const UserSchema=new mongoose.Schema({
//              username:String,
//              age:String,
//             mobilenumber:String
            
// })
// const UserModel = mongoose.model("users",UserSchema);
// app.get("/getUsers", (req, res) => {
//       UserModel.find({}).then(function(users){
//         res.json(users)
//       }).catch(function(err){
//         console.log(err);
//       })
// })

// app.listen(3000,()=>{
//   console.log("server is running");
// })




// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');

// const app = express();
// const PORT = 3000;
// const MONGODB_URI = 'mongodb+srv://srinivaserugu987:cNfbM31bLvzxzsZ7@cluster0free.exsym40.mongodb.net/'; // Replace with your MongoDB connection string
// const DB_NAME = 'webbb';
// const COLLECTION_NAME = 'users';

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public')); // For serving static files (like CSS)

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });

// app.post('/submit', async (req, res) => {
//   try {
//     const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = client.db(DB_NAME);

//     const userData = {
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email,
//       mobileNumber: req.body.mobileNumber
//     };

//     const result = await db.collection(COLLECTION_NAME).insertOne(userData);
//     console.log('User data inserted:', result.ops[0]);

//     client.close();
//     res.send('Data received and stored successfully!');
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });



// we can do it.........
// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');

// const app = express();
// const PORT = 3000;
// const MONGODB_URI = 'mongodb+srv://srinivaserugu987:cNfbM31bLvzxzsZ7@cluster0free.exsym40.mongodb.net/'; // Replace with your MongoDB connection string
// const DB_NAME = 'webbb';
// const COLLECTION_NAME = 'users';

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static('public')); // For serving static files (like CSS)

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
  
// });

// app.post('/submit', async (req, res) => {
//   try {
//     const client = await MongoClient.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//     const db = client.db(DB_NAME);
//     console.log("req data at 151", req);

//     const userData = {
//       username: req.body.username,
//       password: req.body.password,
//       email: req.body.email,
//       mobileNumber: req.body.mobileNumber
//     };

//     const result = await db.collection(COLLECTION_NAME).insertOne(userData);
//     console.log('User data inserted:', result.ops[0]);

//     client.close();
//     res.send('Data received and stored successfully!');
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Internal Server Error');
//   }
// });



// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });

 

// var http=require('http');
// http.createServer((req,res)=>{
//   res.write("Hello World")
//   res.end();
//   console.log("Server is loading");
// }).listen(8080)

// var http = require('http');
// var fs = require('fs');
// http.createServer((req,res)=>{
//   fs.readFile('index.html',(err,data)=>{
//     res.write(data);
//     res.end();
//   })
// }).listen(8080)



// Transfers the data from mongodb to postmon...................................

// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");

// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/webbb", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }, (err) => {
//   if (!err) {
//     console.log("Connected to db");
//   } else {
//     console.log('error');
//   }
// });
// const sch={
//   name:String,
//   email:String,
//   id:Number
// }
// const monmodel=mongoose.model("users",sch);
// app.post("/post",async(req,res)=>{
//   console.log("inside post fun");
//   const data=new monmodel({
//     name:req.body.name,
//     email:req.body.email,
//     id:req.body.id
//   });
//    const val=await data.save();
//    res.json(val); 
// })
// app.listen(3000, () => {
//   console.log("on port 3000");
// });

// const express = require('express');
// const bodyParser = require('body-parser');
// const { MongoClient } = require('mongodb');

// const app = express();
// app.use(bodyParser.json());

// const uri = "mongodb+srv://srinivaserugu987:cNfbM31bLvzxzsZ7@cluster0free.exsym40.mongodb.net/"; // Replace with your actual MongoDB URI
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// let db;

// async function connectToMongoDB() {
//     try {
//         await client.connect();
//         db = client.db('webbb'); // Replace with your database name
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.error("Could not connect to MongoDB", error);
//     }
// }

// connectToMongoDB();

// app.post('/api/users', async (req, res) => {
//     if (!db) {
//         return res.status(500).send('MongoDB connection not established.');
//     }

//     try {
//         const collection = db.collection('users'); // Replace 'users' with your collection name
//         const result = await collection.insertOne({
//            username: req.body.username,
//            password: req.body.password,
//             email: req.body.email,
//             mobileNumber: req.body.mobileNumber
            
//         });
//         res.send(result);
//     } catch (error) {
//         res.status(500).send(error.message);
//     }
// });

// const port = 3550;
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });
const express = require('express');
const mangoose = require('mongoose')
const cors = require('cors')
const jwt=require('jsonwebtoken')
const nodemailer=require('nodemailer')
const EmployeeModel = require('./models/Employee')
const bcrypt=require('bcrypt')
const cookieParser=require('cookie-parser')
const app=express()

app.use(express.json())
app.use(cors({
  origin:["http://localhost:3050/Forget"],
  methods:[ "GET","POST"] ,
  credentials:true
}))
app.use(cookieParser())
mangoose.connect('mongodb+srv://srinivaserugu987:cNfbM31bLvzxzsZ7@cluster0free.exsym40.mongodb.net/employee');
const verifyUser = (req,res,next)=>{
  const token=req.cookies.token;
  if(!token){
    return res.json("Token is missing")
  }
  else{
    jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
      if(err){
        return res.json("Error with token")
      }else{
        if(decoded.role==="admin"){
          next()
        }else{
          return res.json("not admin")
        }
      }
    })
  }
}
app.get('/getUsers',(req,res)=>{
  EmployeeModel.find()
  .then(users=>res.json(users))
  .catch(err=>res.json(err))
})
// app.post('/Login',(req,res)=>{
//   const {Email,Password} = req.body;
//   EmployeeModel.findOne({Email:Email})
//   .then(user => {
//       if(user){ 
//           if(user.Password===Password){
//               res.json("success")
//               // Window.alert("Sucess,Welcome TO OUR HOME BLOG")
//       }else{
//           res.json("Invalid Password")
//           // Window.alert("not valiid")
//       }
//   }else{
//       res.json("No record Exists")
//   //    Window.alert("No record Exists")
//   }
//   })
// })

app.post('/Login',(req,res)=>{
  const {Email,Password} = req.body;
  EmployeeModel.findOne({Email:Email})
  .then(user => {
    if(user){
      bcrypt.compare(Password, user.Password,(err,response)=>{
        if(response) {
          res.json("success")
        }else{
          res.json("password is incorrect")
        }
    })
      
  }else{
      res.json("No record Exists")
 }
})
})

// app.post("/Login", async (req, res) => {
//   const { Email, Password } = req.body;

//   const user = await EmployeeModel.findOne({ Email });
//   if (!user) {
//     return res.json({ error: "User Not found" });
//   }
//   if (await bcrypt.compare(Password, user.Password)) {
//     const token = jwt.sign({ Email: user.Email }, JWT_SECRET, {
//       expiresIn: "1d",
//     });

//     if (res.status(201)) {
//       return res.json({ status: "ok", data: token });
//     } else {
//       return res.json({ error: "error" });
//     }
//   }
//   res.json({ status: "error", error: "InvAlid Password" });
// });


app.post('/SignUp',async (req, res) => {
  const { name,Password,ConfirmPassword,Email,MobileNumber } = req.body;
  if (!Email || !Password || !MobileNumber) {
    return res.status(400).json("Please provide all required information");
  }
  try {
      let user = await EmployeeModel.findOne({ $or: [{ name: name },{ Password: Password },{ ConfirmPassword:ConfirmPassword},{ Email: Email }, { MobileNumber: MobileNumber }] });

      if (user) {
          return res.json("Already Existing User");
      } else {
          const newUser = new EmployeeModel({
           
              name,
              Password,
              ConfirmPassword,
              Email,
              MobileNumber
          });

          await newUser.save();

          res.json("Success fully Signed Up");
      }
  } catch (err) {
      console.error(err);
      res.status(500).json("Server Error");
  }
  
});


// app.post("/SignUp", async (req, res) => {
//   const { name, Password, ConfirmPassword,Email, MobileNumber} = req.body;

//   const encryptedPassword = await bcrypt.hash(Password, 10);
//   try {
//     const oldUser = await User.findOne({ Email });

//     if (oldUser) {
//       return res.json({ error: "User Exists" });
//     }
//     await User.create({
//       name,
//       Password: encryptedPassword,
//       ConfirmPassword,
//       Email,
//       MobileNumber
     
     
//     });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.send({ status: "error" });
//   }
// });


// var nodemailer = require('nodemailer');
app.post('/Forget',(req,res)=>{
const {Email}=req.body;
EmployeeModel.findOne({Email:Email})
.then(user=>{
  if(!user){
    return res.send({Status:"User not Existed"});
  }
  const token=jwt.sign({id:user._id},"jwt_secret_key",{expiresIn:"1d"})
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srinivaserugu987@gmail.com',
    pass: 'ysou yfog zlgd azjn'
  }
});

var mailOptions = {
  from: 'srinivaserugu987@gmail.com',
  to: 'j.devisri2001@gmail.com',
  subject: 'Sending Email using Node.js',
  text: `http://localhost:3000/reset_password/${user._id}/${token}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    return res.send({Status:"Success"})
  }
});

})
})
app.post('/reset-password/:id/:token',(req,res)=>{
const {id,token}=req.params
const {Password}=req.body

jwt.verify(token,"jwt_secret_key",(err, decoded)=>{
  if(err){
    return res.json({Status:"Error with token"})
}else{
    bcrypt.hash(Password,10)
    .then(hash=>{
      EmployeeModel.findByIdAndUpdate({_id: id},{Password: hash})
      .then(u=>res.send({Status:"Success"}))
      .catch(err=>res.send({Status:err}))
    })
    .catch(err=>res.send({Status:err}))
  }
})
})

app.listen(3050, () => {
  console.log("server is runs");
});


















// Ex

// const { check, validationResult } = require('express-validator');
// app.post('/SignUp', [
//     check('name').notEmpty().withMessage('Name is required'),
//     check('Email').isEmail().withMessage('Invalid email format'),
//     check('Password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
//   ], (req, res) => {
//     // Handle validation errors and create the employee
//   });
//   app.post('/SignUp', [
//     // Validation rules
//   ], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
  
//     EmployeeModel.create(req.body)
//       .then(employees => res.json(employees))
//       .catch(err => res.json(err));
//   });
//   const express = require('express');
// const mongoose = require('mongoose')
// const cors = require('cors')
// // const { check, validationResult } = require('express-validator');
// const EmployeeModel = require('./models/Employee')

// const app=express()
// app.use(express.json())
// app.use(cors())

// mongoose.connect('mongodb+srv://srinivaserugu987:cNfbM31bLvzxzsZ7@cluster0free.exsym40.mongodb.net/employee');

// app.post('/Login',(req,res)=>{
//     const {Email,Password} = req.body;
//     EmployeeModel.findOne({Email:Email})
//     .then(user => {
//         if(user){ 
//             if(user.Password===Password){
//                 res.json("success")
//         }else{
//             res.json("Invalid Password")
//         }
//     }else{
//         res.json("No record Exists")
//     }
//     })
// })

// app.post('/SignUp', [
//   check('Name').notEmpty().withMessage('Name is required'),
//   check('Email').isEmail().withMessage('Invalid email format'),
//   check('Password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
// ], (req, res) => {
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.status(400).json({ errors: errors.array() });
//   }

//   EmployeeModel.create(req.body)
//     .then(employees => res.json(employees))
//     .catch(err => res.json(err));
// })

// app.listen(3001,()=>{
//     console.log("server is runs");
// })