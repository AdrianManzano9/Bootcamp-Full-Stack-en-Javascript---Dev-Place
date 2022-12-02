const express = require("express");
const app=express();
const router = express.Router();
const port = 5050;
const product = require('./controllers/ProductController')

const middelware=require('./auth.middleware')
/*
app.get('/',(req,res)=>{
    res.send('Api 0.0.1');
});

app.get('/products',(req,res)=>{
    
    res.json({
        id:1,producto:'camisa',descripcion:'camisa',monto:3000
    })
});
*/
router.get('/',function(req,res){
    res.send('Api 0.0.1');
});

router.get('/product/:hola',function(req,res){
   let x = req.params.hola;
   res.json({hola:x,'url':'endpoint'});
});

router.post('/product',product.oneSelectProduct);

router.put('/product/:id',function(req,res){
    console.log(req.body)
    console.log(req.params.id)
    res.json({
        id:req.body.id,
        producto:req.body.producto,
        descripcion:req.body.descripcion,
        monto:req.body.monto
    })
});



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(middelware.isRoot);
app.use(router);

app.listen(port,()=>{
    console.log(`Servidor corriendo por el puerto ${port}`);
})