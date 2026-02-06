// import {producs} from '.src/model/product.this'
import { fetchAPIData, fetchItem } from "./services/apiService.js";
import {Product} from "./models/Product.js"

//console.log(fetchAPIData);
fetchItem(1)
.then((data)=>{
     const newProduct = new Product(data.id, data.title, data.price, data.discountPercentage,data.category);
     newProduct.displayDetails();
     console.log(newProduct.getPriceWithDiscount());

})
