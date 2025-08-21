import express from 'express';

const app=express();

app.get('/', (req, res) => {   
    console.log('Request received');
    res.send('Hello World!');
});

app.get('/products', (req, res) => {   
    console.log('Products request received');
    res.send('List of products');
});

app.post('/products',(req,res)=>{

    console.log('Products create request received');
    res.send('Product created');
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
    console.log("hello");
    
}       );