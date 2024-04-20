const express = require("express");
const app = express();
const Joi = require("joi");
const multer = require("multer");
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/images/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload = multer({ storage: storage });

mongoose
    .connect("mongodb+srv://crs29:UFkJsYh8sh1oQVQy@mongodb.hqyistc.mongodb.net/")
    .then(() => console.log("Connected to mongodb"))
    .catch(error => console.log("Couldn't connect to mongodb", error))

    const dataSchema = mongoose.Schema({
        phase: String,
        page: String,
        title: String,
        firstP: String,
        secondP: String,
        date: String
    })

    const persistentData = mongoose.model("Data", dataSchema);

/* GET Requests */
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

app.get('/projectplanning', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/index.html");
})

app.get('/functbreak', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/functbreak/index.html");
})

app.get('/functflow', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/functflow/index.html");
})

app.get('/ganttcha', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/ganttcha/index.html");
})

app.get('/listreq', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/listreq/index.html");
})

app.get('/missneedstat', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/missneedstat/index.html");
})

app.get('/n2', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/n2/index.html");
})

app.get('/projectobjectivestatement', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/projectobjectivestatement/index.html");
})

app.get('/workbreakdownstr', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/workbreakdownstr/index.html");
})

app.get('/workflowdia', (req, res) => {
    res.sendFile(__dirname + "/projectplanning/workflowdia/index.html");
})

app.get('/conceptualdesign', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/index.html");
})

app.get('/compli', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/compli/index.html");
})

app.get('/condia', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/condia/index.html");
})

app.get('/designopt', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/designopt/index.html");
})

app.get('/designselec', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/designselec/index.html");
})

app.get('/risk', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/risk/index.html");
})

app.get('/techbudg', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/techbudg/index.html");
})

app.get('/tradeoff', (req, res) => {
    res.sendFile(__dirname + "/conceptualdesign/tradeoff/index.html");
})

app.get('/detaileddesign', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/index.html");
})

app.get('/bill', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/bill/index.html");
})

app.get('/cenpros', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/cenpros/index.html");
})

app.get('/comm', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/comm/index.html");
})

app.get('/eval', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/eval/index.html");
})

app.get('/groun', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/groun/index.html");
})

app.get('/mater', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/mater/index.html");
})

app.get('/optic', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/optic/index.html");
})

app.get('/powcon', (req, res) => {
    res.sendFile(__dirname + "/detaileddesign/powcon/index.html");
})

app.get('/construction', (req, res) => {
    res.sendFile(__dirname + "/construction/index.html");
})

app.get('/code', (req, res) => {
    res.sendFile(__dirname + "/construction/code/index.html");
})

app.get('/const', (req, res) => {
    res.sendFile(__dirname + "/construction/const/index.html");
})

app.get('/develop', (req, res) => {
    res.sendFile(__dirname + "/construction/develop/index.html");
})

app.get('/evalpro', (req, res) => {
    res.sendFile(__dirname + "/construction/evalpro/index.html");
})

app.get('/grounint', (req, res) => {
    res.sendFile(__dirname + "/construction/groundint/index.html");
})

app.get('/finalization', (req, res) => {
    res.sendFile(__dirname + "/finalization/index.html");
})

app.get('/dia', (req, res) => {
    res.sendFile(__dirname + "/finalization/dia/index.html");
})

app.get('/pic', (req, res) => {
    res.sendFile(__dirname + "/finalization/pic/index.html");
})

app.get('/vid', (req, res) => {
    res.sendFile(__dirname + "/finalization/vid/index.html");
})

app.get('/contactpage', (req, res) => {
    res.sendFile(__dirname + "/contactpage/index.html");
})

/* Other GET Requests */
app.get('/api/cubedata', (req, res) => {
    getCubeData(res);
})


app.get(`/api/cubedata/:id`, (req,res) => {
    getSpecCubeData(res, req.params.id);
})


async function getCubeData (res) {
    const cubeData = await persistentData.find();
    res.send(cubeData);
}

async function getSpecCubeData (res, id) {
    const dataEntry = await persistentData.findOne({_id:id});
    res.send(dataEntry);
}


app.post("/api/cubedata", upload.single("image"), (req, res) => {
    console.log("Posting");
    const result = validateData(req.body);

    if(result.error) {
        console.log("Resultant Error");
        console.log(result.error);
        res.status(400).send(result.error.details[0].message);
        return;
    }
    

    console.log("Getting Data");
    const dataEntry = new persistentData({
        phase:req.body.phase,
        page:req.body.page,
        title:req.body.title,
        firstP:req.body.firstP,
        secondP:req.body.secondP,
        date:req.body.date
    })
    console.log("Got Data");
    console.log("Pushing and Sending");
    createCubeData(res, dataEntry);
})

async function createCubeData (res, dataEntry) {
    console.log("Creating Data Point!");
    const result = await dataEntry.save();
    console.log("Data Substantialized!");
    res.send(result);
}

app.put("/api/cubedata/:id", upload.single("image"), (req, res) => {
    const result = validateData(req.body);
    if(result.error) {
        res.status(400).send(result.error.details[0].message);
        console.log(result.error.message);
        return;
    }

    updateData(req, res);
})

async function updateData (req, res) {
    console.log("Updating Concurrent Data");
    let fieldsToUpdate = {
        title:req.body.title,
        firstP:req.body.firstP,
        secondP:req.body.secondP,
        date:req.body.date
    }

    console.log("Grabbed field to update");
    console.log("Updating");
    const result = await persistentData.updateOne({_id:req.params.id}, fieldsToUpdate);
    console.log("Update Complete");
    res.send(result);

}

app.delete("/api/cubedata/:id", (req, res) => {
    removeData(res, req.params.id);
})

async function removeData (res, id) {
    const dataEntry = await persistentData.findByIdAndDelete(id);
    res.send(dataEntry);
}

















function validateData (dataEntry) {
    console.log("Begin Validation");
    const schema = Joi.object({
        _id: Joi.allow(""),
        phase: Joi.allow(""),
        page: Joi.allow(""),
        title: Joi.string().min(1).required(),
        firstP: Joi.string().min(1).required(),
        secondP: Joi.allow(""),
        date: Joi.string().min(1).required()

    });

    return schema.validate(dataEntry);
}



app.listen(3000, ()=>{
    console.log("Server Runnin");
})

