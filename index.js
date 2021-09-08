var data = require("./test.json")

const app = require('express')();
const PORT = 2000;

app.listen(
    PORT,
    function () {
        console.log("App runing on: http://localhost:" + PORT)
    }
)





app.get('/players', (req, res) => {
    let x = data
    if(req.query.team) {
        x = x.filter( o => o.team == req.query.team)
    }
    if(req.query.position){
        x = x.filter( o => o.position == req.query.position)
    }
    res.send(x)
})