const mongoose = require("mongoose");
const dbName = "previewGenerationTool";
const dbUrl=`mongodb+srv://raunaksikka9:raunaksikka2001@cluster0.c66xr0g.mongodb.net/${dbName}?retryWrites=true&w=majority`;
// asynchrounous function

mongoose.connect(dbUrl)
.then((result) => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error(err);
});
module.exports = mongoose;

// to connect to server- node <filename>