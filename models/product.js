const products = [];
const fs = require('fs');
const path = require('path');

const p = path.join(
  path.dirname(process.mainModule.filename),
  'data',
  'products.json'
);

const getProductsFromFile = cb => {

  return new Promise((resolve, reject) => {
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        reject(err);
      } else {
        let products = [];
        try {
          if (fileContent.length > 0) {
              products = JSON.parse(fileContent)
            }
         
        } catch (error) {
          console.log('Error parsing JSON:', error);
        }
        resolve(cb(products));
      }
    });
  }).catch(() => {
    cb();
  });
}

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("ok",err);
      });
    })
    // fs.readFile(p, (err, fileContent) => {
      // let products = [];
      // if (!err) {
      //   products = JSON.parse(fileContent);
      // }
    
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
  }
};
