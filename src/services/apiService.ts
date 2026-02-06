
import { validateProduct, ValidationError } from "../utils/errorHandler.js";

export async function fetchAPIData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        try {
            for (let product of data.products) {
                console.log('id: ' + product.id + ', title: ' + product.title);
                validateProduct(product)   
            }             
        }
        catch(error){
            if(error instanceof ValidationError){
                console.log("Product Validation Error:", error.message)
            }else{
                console.log("Unknown Error:")
            }
        }
        }
    catch (e) {
        console.log(e);
        throw e;
    }
}
fetchAPIData();

export async function fetchItem(id: Number){
    const responseObject = {
        id : 0,
        title:  "",
       price: 0,
    discountPercentage: 0,
    
    
    category: ""

      
    }
 
    const response = await fetch('https://dummyjson.com/products/' +id);
    const data = await response.json();

    responseObject.id =data.id;
    responseObject.title =data.title;
    responseObject.price =data.price;
    responseObject.discountPercentage = data.discountPercentage;
    responseObject.category = data.category;
    return responseObject;


}



// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


// fetch("https://dummyjson.com/products")
//   .then(response => response.json())
//   .then(data => console.log("Fetched data:", data))
//   .catch(error => console.error("Fetch error:", error));