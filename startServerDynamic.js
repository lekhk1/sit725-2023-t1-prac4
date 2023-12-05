var express = require("express")
var app = express()
app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;


const cardList = [{
    title: 'GT3RS',
    path: 'images/car2.jpg',
    link: 'About Car 2',
    description: 'Description of Car 2'
},
{
    title: 'GT4RS',
    path: 'images/car3.jpg',
    link: 'About Car 3',
    description: 'Description of Car 3'
}];


app.get('/api/projects', (req, res) => {
    res.json({ statusCode: 200, data: cardList, message: "Success" })
});

app.listen(port, () => {
    console.log("App listening to: " + port)
});
