import  express  from "express";
import cors from "cors"

let app = express()

app.use(cors())
app.use(express.json())

const UsrDataArray = [];

app.get('/',(req  , res ) => res.send('check it runnning '))

// port for signup form which collect the data and res the data
app.post('/signup',(req , res) => { 
 

  let found = UsrDataArray.find((itm) => itm.userName === req.body.userName)

  if(!found){
    UsrDataArray.push(req.body)
    res.send(req.body)
    console.log(UsrDataArray)
  }else(
    res.send(false)
  )


})

// port for signin form which collect the data and res the data

app.post('/signin' , (req , res ) => {
    let foundAcount = UsrDataArray.find((itm) => itm.userName === req.body.userName && itm.Password == req.body.Password)
    if(foundAcount){
        console.log('founcAccount',foundAcount)
        res.status(201).send(foundAcount)
    }else(
        res.send(false)
      )
})

app.listen(3500,() => console.log("Server is runnning on "))