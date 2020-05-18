let express = require("express")

let ourApp = express()
ourApp.use(express.urlencoded({extended: false}))//boiler plate, just enabling express, so users request info available
ourApp.get('/', function(req, res){//get to the defined url
    //action in html just sends the form result to x url
    //method -> get request or post request
    //google.com -> get request, standard for surfing web, get info
    //localhost a get request
    //fill out form, send data, POST data...
res.send(`
<form action="answer" method="POST"> 
<p>Are you having a bad day, yes or no?</p>
<input name="mood" autocomplete="off">
<button> Submit</button>
</form>
`)
})
ourApp.post('/answer', function(req, res){//go to home page fill out form, then SUBMIT = post request response
    //res.send("thank you") //as a response just say thank you
    if(req.body.mood.toUpperCase() == "YES"){
        res.send(`
        <p>Good for you, sparkle tits!</p> 
        <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`
        <p> Suck it up buttercup!</p>
        <a href="/">Back to homepage</a>
        `)
    }
})
    ourApp.get('/answer', function(req, res){ //type the actual address e.g. localhost/answer, SURFING
        res.send("Nothing to see...")
})
ourApp.listen(3000)