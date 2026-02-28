use("ecommerce");

// db.products.find({name: "Wireless Mouse"});

// db.products.find({category: "Electronics"});

// db.products.find({price : {$gt: 1000}}); // gt - greater than

// db.products.find({price : {$lt: 1000}}); // lt - less than

// db.products.find({price : {$gte: 1000}}); // gte - greater than or equal to

// db.products.find({price : {$lte: 1000}}); // lte - less than or equal to

// db.products.find({price : {$ne: 1000}}); // ne - not equal to

// db.products.find({price : {$in: [599, 1299]}}); // in - matches any value in the specified array

// db.products.find({price : {$nin: [799, 1299]}}); // nin - matches none of the values in the specified array

// db.products.find({name: /^W/}); // name starts with W

// db.products.find({name: /top$/}); // name ends with top

// db.products.find({name: /.*gam.*/i}); // name contains gam (case-insensitive)

// db.products.find({$or: [{category: "Electronics"}, {stock: {$lt: 50}}]}); // category is Electronics OR stock is less than 50

// db.products.find({$and: [{category: "Electronics"}, {stock: {$lt: 100}}]}); // category is Electronics AND stock is less than 100

// db.products.find({$nor: [{category: "Electronics"}, {stock: {$lt: 50}}]}); // category is NOT Electronics AND stock is NOT less than 50

// db.products.find({ $not: { price: { $gt: 1000 } } }); // price is NOT greater than 1000

// db.products.find({$expr: {$gt: ["$price", "$ratings"]}}); // price is greater than ratings (comparing two fields)

// db.products.find({$expr: {$eq: ["$category", "$tags"]}}); // category is equal to tags (comparing two fields)

// db.products.find({$expr: {$gt: ["$price", 1000]}}); // price is greater than 1000 (comparing field with a value using $expr)

// db.products.find({$expr: {$and: [{$gt: ["$price", 1000]}, {$lt: ["$ratings", 4.6]}]}}); // price is greater than 1000 AND ratings is less than 4.6 (using $expr with logical operator)

// db.products.find({$expr: {$or: [{$gt: ["$price", 1000]}, {$lt: ["$stock", 50]}]}}); // price is greater than 1000 OR stock is less than 50 (using $expr with logical operator)

// db.products.find({$expr: {$nor: [{$gt: ["$price", 1000]}, {$lt: ["$stock", 50]}]}}); // price is NOT greater than 1000 AND stock is NOT less than 50 (using $expr with logical operator)

// db.products.find({$expr: {$not: {$gt: ["$price", 1000]}}}); // price is NOT greater than 1000 (using $expr with $not)

// db.products.find({$expr: {$regexMatch: {input: "$name", regex: /^W/}}}); // name starts with W (using $expr with $regexMatch)

// db.products.find({$expr: {$regexMatch: {input: "$name", regex: /top$/}}}); // name ends with top (using $expr with $regexMatch)

// db.products.find({$expr: {$regexMatch: {input: "$name", regex: /.*gam.*/i}}}); // name contains gam (case-insensitive) (using $expr with $regexMatch)

// db.products.find({$expr: {$regexMatch: {input: "$category", regex: /Electronics/}}}); // category contains Electronics (using $expr with $regexMatch)

// db.products.find({$expr: {$regexMatch: {input: "$tags", regex: /electronics/}}}); // tags contains electronics (using $expr with $regexMatch)

// db.products.find({}, {name: 1, price: 1, _id: 0}); // projection - include only name and price fields, exclude _id field

// db.products.find({price: {$gt: 1000}}, {name: 1, price: 1, _id: 0}); // find products with price greater than 1000 and include only name and price fields, exclude _id field


// //pagination and sorting
// db.products.find({price: {$gt: 1000}}).sort({price: -1}); // find products with price greater than 1000 and sort by price in descending order

// //pagination - page 1 with 2 products per page
// db.products.find({price: {$gt: 1000}}).sort({price: 1}); // find products with price greater than 1000 and sort by price in ascending order

// //pagination - page 2 with 2 products per page
// db.products.find().limit(2); // find all products and limit the result to 2 documents


// //pagination - page 3 with 2 products per page
// db.products.find().skip(2); // find all products and skip the first 2 documents

// //pagination - page 4 with 2 products per page
// db.products.find().skip(4); // find all products and skip the first 4 documents

// //pagination - page 5 with 2 products per page
// db.products.find().skip(6); // find all products and skip the first 6 documents
// db.products.find().skip(1).limit(2); // find all products, skip the first document and limit the result to 2 documents

// // Count the number of documents in the products collection
// db.products.find().count(); // count the total number of products

// // Count the number of products with price greater than 1000
// db.products.find({price: {$gt: 1000}}).count(); // count the number of products with price greater than 1000

