const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const mongoDB = "mongodb://localhost:27017/blog"
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/category");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
const cors =require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());
app.use("/images",express.static(path.join(__dirname,"/images")));

mongoose.connect(process.env.MONGO_URL)
    //  useNewUrlParser: true,
    //  useUnifiedTopology: true,

// });
    .then(console.log('connected to mongoDB'))
    .catch((err) =>
        console.log(err));

 const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, "images");
    },
     filename: (req, file, cb) => {
cb(null, req.body.name);
},
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("file has been uploaded");
});

app.use("/api/auth", authRoute);
 app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
 app.use("/api/category", categoryRoute);

//   app.use((req,res,next)=>{
//    res.setHeader('Cache-Control','no-store,no-cache,must-revalidate');
//    res.setHeader('Expires','Thu,01 Jan 1970 00:00:00 GMT');
//     next();
//   });
app.get('/',(req,res)=>{
    res.setHeader('Content-Type','application/json');
    const jsonData = {message:'hello'};
    res.json(jsonData);
});
 

app.listen("3000", () => {
    console.log("backend is running fully");
});