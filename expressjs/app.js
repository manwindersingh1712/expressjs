const express=require('express')
const bodyPraser=require('body-parser')
const adminRouter=require('./routes/admin')
const shopRouter=require('./routes/shop')
const path=require('path')
const rootDir=require('./util/path.js')

const app=express();

app.use(bodyPraser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,"public")))
app.use('/admin',adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(rootDir,'views','error.html'))
    // res.status(404).sendFile(path.join(__dirname,'views','error.html'))
})

// const server=http.createServer(app)
// server.listen(4000)
//     or 
//     |
//     V

app.listen(4000)
