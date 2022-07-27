const multer = require('multer');
const router = require('express').Router();
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);


const storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
        cb(null, './static/uploads');    
    }, 
    filename: function (req, file, cb) { 
        cb(null , file.originalname);   
    }
});

const upload = multer({ storage: storage }).single("myfile");

const generateVidPreview = (filename) => {
  console.log('static/uploads/'+filename);
  ffmpeg('../static/uploads/'+filename)
  .setStartTime("00:00:10")
  .setDuration("5")
  .output("./static/previews/"+filename+"_preview.gif")
  .on("end", function (err) {
    if (!err) {
      console.log("conversion Done");
    }
  })
  .on("error", function (err) {
    console.log("error: ", err);
  })
  .run();
}

 router.post("/uploadfile", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
      console.log(err);
       res.status(400).send("Something went wrong!");
     }
     res.send(req.file);
   });
 });


 router.post("/gen-preview", (req, res) => {
    upload(req, res, (err) => {
     if(err) {
      console.log(err);
       res.status(400).send("Something went wrong!");
     }else{
      generateVidPreview(req.file.originalname);
      res.json({previewLink : "http://localhost:5000/"+req.file.originalname+"_preview.gif"});
     }
   });
 })

 module.exports = router;