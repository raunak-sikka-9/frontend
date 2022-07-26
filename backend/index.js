const express= require('express');
// initializing express app
const app=express();


const userRouter= require('./routers/userRouter')
const utilRouter= require('./routers/util')
const cors = require('cors');

//middleware- passes information to some other route, doesn't give response

// to parse json data into javascript object
app.use(cors({origin : ['http://localhost:3001','http://localhost:3000', 'https://preview-demo-frontend.herokuapp.com']}))
app.use(express.json());
app.use('/user',userRouter);
app.use('/util',utilRouter);
app.use(express.static('./static'));
const port = 4000;
app.get('/',(req,res) => {
    res.send('Response from Express!');
});
app.get('/home',(req,res) => {
    res.send('Response from Express Home!');
});
app.listen(port, () => console.log('server started' ));

// npm run dev