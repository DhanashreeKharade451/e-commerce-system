
export async function fetchAPIData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        for (let product of data.products) {
            console.log('id: ' + product.id + ', title: ' + product.title);
        }
        console.log('totalProducts:', data.products.length);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

fetchAPIData();



// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


// fetch("https://dummyjson.com/products")
//   .then(response => response.json())
//   .then(data => console.log("Fetched data:", data))
//   .catch(error => console.error("Fetch error:", error));