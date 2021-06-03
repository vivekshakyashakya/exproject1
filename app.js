const express = require('express');
const app = express();
const path =require('path');
const hbs= require('hbs');

// to set view engine
app.set("view engine" , "hbs");
// now change default view engine folder structure
const templatePath =  path.join(__dirname,'templates/views' );
const partialsPath =  path.join(__dirname,'templates/partials' );

app.set("views", templatePath);
hbs.registerPartials(partialsPath);

// builtin middleware
 /* const staticPath=  path.join(__dirname,'public' );
  app.use(express.static(staticPath)); */  
  app.use('/images', express.static(__dirname + '/public/images'));  // define folder for images
  app.use('/css', express.static(__dirname + '/public/css'));

  app.get("/",(req,res)=>{ // now we are using handlebars means Mustache template engine
    res.render("index",{name:'shakya'});
}); 


app.get("/about",(req,res)=>{    
    res.render('about');
    });



app.get("*",(req,res)=>{
    res.render("404",{errorComment:'Page not Found'});
});

let server=app.listen(8000,(msg)=>{
    console.log('server started at 8000 port');
     
})  
