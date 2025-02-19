class Product {
   /* constructor(product) {
        this.listJson = product;
    }*/

    render(listJson) {
        let products = "";

        listJson.forEach(json => {
            products += `
            <div class='card'> 
                <img src="${json.image}" alt="${json.title}">
                <h3>${json.title}</h3>
                <p>$${json.price}</p>
            </div>`;
        });

        document.querySelector("[data-id='product']").innerHTML = products;
    }
}

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const listJson = await response.json();
        
        const product = new Product(); 
        product.render(listJson);

    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

document.addEventListener("DOMContentLoaded", fetchProducts);
