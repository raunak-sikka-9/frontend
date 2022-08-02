const multer = require('multer');
const router = require('express').Router();
const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);

var FilePreviews = require("filepreviews");

var previews = new FilePreviews({
  debug: true,
  apiKey: "uYaFvhmxJVWwleStiT2GRQgy9O5yLM",
  apiSecret: "MuQlJYdJGcimiLRd0LYWxgqAS38QKY",
})

const genFilePreview = (url, cb) => {
  console.log(url);
  previews.generate(url, function (err, result) {
    // console.log(err)
    // console.log(result.id)
    // console.log(result.status)
    // return result.id;
    cb(result.id)
  })
}

const retrieveFilePreview = (id, cb) => {
  previews.retrieve(id, function (err, result) {
    console.log(result)
    cb(result.preview.url);
  });

}


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
  ffmpeg('static/uploads/'+filename)
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

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

// console.log(makeid(10));

const generateVidPreview2 = (url) => {
  // console.log('static/uploads/'+filename);
  const uniq_id = makeid(10);
  ffmpeg(url)
  .setStartTime("00:00:10")
  .setDuration("5")
  .output("./static/previews/"+uniq_id+"_preview.gif")
  .on("end", function (err) {
    if (!err) {
      console.log("conversion Done");
    }
  })
  .on("error", function (err) {
    console.log("error: ", err);
  })
  .run();
  return uniq_id;
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


 router.post("/gen-vid-preview", (req, res) => {
  const formdata = req.body;  
  const id = generateVidPreview2(formdata.url);
  res.json({previewid : id});
  // upload(req, res, (err) => {
  //    if(err) {
  //     console.log(err);
  //      res.status(400).send("Something went wrong!");
  //    }else{
  //     // generateVidPreview2(req.file.originalname);
  //     // res.json({previewLink : "http://localhost:4000/"+req.file.originalname+"_preview.gif"});
  //    }
  //  });
 })

 router.post("/gen-doc-preview", (req, res) => {
  const formdata = req.body;

  genFilePreview(formdata.url, (id) => {
    res.status(200).json({previewid : id});
  })
 })

 router.get("/ret-doc-preview/:id", (req, res) => {
  retrieveFilePreview(req.params.id, (url) => {
    console.log(url);
    res.status(200).redirect(url);
  });
 })

 router.get("/ret-vid-preview/:id", (req, res) => {
  res.status(200).redirect("http://localhost:4000/previews/"+req.params.id+'_preview.gif');
 })

 module.exports = router;