// const express = require('express')
// const {connectToDb, getDb} = require('./db')
// const {LogicalDependencyTree} = require("yarn/lib/cli");
// const {ObjectId} = require("mongodb");
// const PORT = 3000;
//
//
// const app = express();
//
//
// let db;
// connectToDb((err) => {
//     if (!err) {
//         app.listen(PORT, (err) => {
//             err ? console.log(err) : console.log(`Listening port ${PORT}`);
//         })
//         db = getDb()
//     } else {
//         console.log(`DB connection error ${err}`)
//     }
// })
//
// const handleError = (res, error) => {
//     res.status(500).json({error})
// }
//
// app.get('/product', (req, res) => {
//     const product = [];
//     db
//         .collection('product')
//         .find()
//         .forEach((products) => product.push(products))
//         .then(() => {
//             res
//                 .status(200)
//                 .json(product)
//         })
//         .catch(() => handleError(res, "Something goes wrong..."))
// })
//
// app.get('/product/:id', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         db
//             .collection('product')
//             .findOne({_id: new ObjectId(req.params.id)})
//             .then((doc) => {
//                 res
//                     .status(200)
//                     .json(doc)
//             })
//             .catch(() => handleError(res, "Something goes wrong..."))
//     } else {
//         handleError(res, "Wrong id")
//     }
// })
//
// app.delete('/product/:id', (req, res) => {
//     if (ObjectId.isValid(req.params.id)) {
//         db
//             .collection('product')
//             .deleteOne({_id: new ObjectId(req.params.id)})
//             .then((result) => {
//                 res
//                     .status(200)
//                     .json(result)
//             })
//             .catch(() => handleError(res, "Something goes wrong..."))
//     } else {
//         res
//             .status(500)
//             .json({error: "Wrong id"})
//     }
// })
//
//
//
//
//
