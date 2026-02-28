use('ecommerce');

db.products.updateOne({
    name: "Wireless Mouse"
},
{$set: {
    price: 899,
    stock: 50
}})