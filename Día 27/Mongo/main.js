// productos.map(prod=>{
    const producto = new Productos({
        id: 0,
        linkImg: "https://images.fravega.com/f300/fd1ed2f39ba48cbe93c3d8299d76ee96.jpg.webp",
        nombre: "Notebook",
        descrip: "'Notebook Lenovo 14' Intel Pentium 4GB 256GB IP1-81VU006Q",
        precio: 84999,
        cant: 0,
    });
        producto.save();
    // })
    
    
    // Productos.find().then(function(resultados){
    //     console.log(resultados);
    // })