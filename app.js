let bodyParser  = require("body-parser"),
mongoose        = require("mongoose"),
express        = require("express"),
app            = express();

//Connect the app to mongoDB
mongoose.connect("mongodb://localhost/blog_app");

//set up ejs files access from the views folder
app.set("view engine", "ejs");

//set up the express access to the public folder.
app.use(express.static("public"));

//set up body-parser
app.use(bodyParser.urlencoded({extended: true}));


//Setting app server
app.listen(3000, function(){
    console.log("Server is running ..................");
})

//Working on mongoose
let blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

let Blog = mongoose.model("Blog", blogSchema);

//RESTFUL  routes
