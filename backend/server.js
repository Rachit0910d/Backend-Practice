import express from 'express';

const app = express();

// app.get('/', (req, res) =>{
//     res.send('Hello World!');
// });

app.get('/api/jokes', (req, res) =>{
    const jokes = [
        {
            id: 1,
            title: "a joke",
            content: "this is a joke"
        },
        {
            id: 2,
            title: "b joke",
            content: "this is another joke"
        },
        {
            id: 3,
            title: "c joke",
            content: "this is yet another joke"
        },
        {
            id: 4,
            title: "d joke",
            content: "this is one more joke"
        },
        {
            id: 5,
            title: "e joke",
            content: "this is the last joke"
        }
    ];
    res.send(jokes);
})




const port = process.env.PORT || 8001;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});