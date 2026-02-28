use('ecommerce');

db.products.insertMany([
    {
        name: "Wireless Mouse",
        price: 799,
        category: "Electronics",
        stock: 120,
        ratings: 4.5,
        tags: ["wireless", "mouse", "electronics"],
        createdAt: new Date()
    },
    {
        name: "Mechanical keyboard",
        price: 1299,
        category: "Electronics",
        stock: 80,
        ratings: 4.7,
        tags: ["mechanical", "keyboard", "electronics"],
        createdAt: new Date()
    },
    {
        name: "Gaming Laptop",
        price: 99999,
        category: "computers",
        stock: 30,
        ratings: 4.5,
        tags: ["gaming", "laptop", "electronics"],
        createdAt: new Date()
    },
    {
        name: "Office Chair",
        price: 4999,
        category: "furniture",
        stock: 50,
        ratings: 4.2,
        tags: ["office", "chair", "furniture"],
        createdAt: new Date()
    },
    {
        name: "Smartphone",
        price: 19999,
        category: "Electronics",
        stock: 200,
        ratings: 4.6,
        tags: ["smartphone", "electronics"],
        createdAt: new Date()
    },
    
])