const express= require('express');
// initializing express app
const app=express();


const userRouter= require('./routers/userRouter')
const utilRouter= require('./routers/util')
const cors = require('cors');

//middleware- passes information to some other route, doesn't give response

// to parse json data into javascript object
app.use(cors({origin : ['http://localhost:3000']}))
app.use(express.json());
app.use('/user',userRouter);
app.use('/util',utilRouter);
<<<<<<< HEAD

app.use(express.static('./static'));

=======
app.use(express.static('./static'));
>>>>>>> 7fb67b8b061c11d00c47284759b4d6533c9a2880
const port = 4000;
app.get('/',(req,res) => {
    res.send('Response from Express!');
});
app.get('/home',(req,res) => {
    res.send('Response from Express Home!');
});
app.listen(port, () => console.log('server started' ));

// npm run dev