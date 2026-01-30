// async function fetchAPIData(): string[] {
//     try {
//         const response  = await fetch('https://dummyjson.com/products') // returns a promise
//         const products = await response.json() // format data to json 
//         for (let product of products) {
//             console.log ('id: ' + product.id + ', title: ' + product.title )
//         }
//         console.log('totalProducts : ', products.length);
//     } catch(e) {
//         console.log(e);
// }
// }

//fetchAPIData();

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => console.log("Fetched data:", data))
  .catch(error => console.error("Fetch error:", error));