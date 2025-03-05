let emparr=[]

let data = [
    {
        "id": 1,
        "name": "Mivi Collar Earphones",
        "brand": "Mivi",
        "price": 29.99,
        "currency": "USD",
        "rating": 4.6,
        "description": "Compact and stylish wired earphones with deep bass and tangle-free cable.",
        "image": "https://example.com/real-images/mivi-collar-earphones.jpg", // Replace with real image URL
        "color": "Black",
        "type": "Wired Earphones",
        "in_stock": true
    },
    {
        "id": 2,
        "name": "Mivi Bass Plus Earphones",
        "brand": "Mivi",
        "price": 39.99,
        "currency": "USD",
        "rating": 4.8,
        "description": "Upgraded version with enhanced bass, durable build, and in-line microphone.",
        "image": "https://example.com/real-images/mivi-bass-plus-earphones.jpg", // Replace with real image URL
        "color": "Blue",
        "type": "Wired Earphones",
        "in_stock": true
    },
    {
        "id": 3,
        "name": "Mivi Thunder Earphones",
        "brand": "Mivi",
        "price": 49.99,
        "currency": "USD",
        "rating": 4.7,
        "description": "Powerful wired earphones with 10mm drivers and noise isolation.",
        "image": "https://example.com/real-images/mivi-thunder-earphones.jpg", // Replace with real image URL
        "color": "Silver",
        "type": "Wired Earphones",
        "in_stock": false
    },
    {
        "id": 3,
        "name": "Mivi Thunder Earphones",
        "brand": "Mivi",
        "price": 49.99,
        "currency": "USD",
        "rating": 4.7,
        "description": "Powerful wired earphones with 10mm drivers and noise isolation.",
        "image": "https://example.com/images/wired-earphones-3.jpg",
        "color": "Silver",
        "type": "Wired Earphones",
        "in_stock": false
    },
    {
        "id": 4,
        "name": "Mivi Bass Pro Earphones",
        "brand": "Mivi",
        "price": 19.99,
        "currency": "USD",
        "rating": 4.4,
        "description": "Affordable wired earphones with rich bass and comfortable fit.",
        "image": "https://example.com/images/wired-earphones-4.jpg",
        "color": "Red",
        "type": "Wired Earphones",
        "in_stock": true
    },
    {
        "id": 5,
        "name": "Mivi Mini Earphones",
        "brand": "Mivi",
        "price": 14.99,
        "currency": "USD",
        "rating": 4.2,
        "description": "Compact and lightweight wired earphones for everyday use.",
        "image": "https://example.com/images/wired-earphones-5.jpg",
        "color": "White",
        "type": "Wired Earphones",
        "in_stock": true
    },
    {
        "id": 6,
        "name": "Mivi Elite Earphones",
        "brand": "Mivi",
        "price": 59.99,
        "currency": "USD",
        "rating": 4.9,
        "description": "Premium wired earphones with gold-plated connectors and high-fidelity sound.",
        "image": "https://example.com/images/wired-earphones-6.jpg",
        "color": "Gold",
        "type": "Wired Earphones",
        "in_stock": false
    },
    {
        "id": 7,
        "name": "Mivi Party Earphones",
        "brand": "Mivi",
        "price": 24.99,
        "currency": "USD",
        "rating": 4.5,
        "description": "Fun and colorful wired earphones with in-line controls and microphone.",
        "image": "https://example.com/images/wired-earphones-7.jpg",
        "color": "Black",
        "type": "Wired Earphones",
        "in_stock": true
    },
    {
        "id": 8,
        "name": "Mivi Compact Earphones",
        "brand": "Mivi",
        "price": 19.99,
        "currency": "USD",
        "rating": 4.3,
        "description": "Slim and lightweight wired earphones with clear audio and tangle-free cable.",
        "image": "https://example.com/images/wired-earphones-8.jpg",
        "color": "Gray",
        "type": "Wired Earphones",
        "in_stock": true
    },
    {
        "id": 9,
        "name": "Mivi Outdoor Earphones",
        "brand": "Mivi",
        "price": 34.99,
        "currency": "USD",
        "rating": 4.6,
        "description": "Rugged and durable wired earphones designed for outdoor activities.",
        "image": "https://example.com/images/wired-earphones-9.jpg",
        "color": "Green",
        "type": "Wired Earphones",
        "in_stock": true
    },
    {
        "id": 10,
        "name": "Mivi Studio Earphones",
        "brand": "Mivi",
        "price": 69.99,
        "currency": "USD",
        "rating": 4.8,
        "description": "Studio-grade wired earphones with 3D surround sound and noise cancellation.",
        "image": "https://example.com/images/wired-earphones-10.jpg",
        "color": "Black",
        "type": "Wired Earphones",
        "in_stock": false
    }
];

let container = document.createElement("div");
container.className = "container";

data.forEach((val) => {
    let child = document.createElement("div");
    child.className = "product";

    let img = document.createElement("img");
    img.src = val.image;
    img.alt = val.name;

    let name = document.createElement("h3");
    name.innerText = val.name;

    let brand = document.createElement("p");
    brand.innerText = `Brand: ${val.brand}`;

    let price = document.createElement("p");
    price.className = "price";
    price.innerText = `$${val.price}`;

    let rating = document.createElement("p");
    rating.className = "rating";
    rating.innerText = `⭐ ${val.rating}/5`;

    let description = document.createElement("p");
    description.className = "description";
    description.innerText = val.description;

    let type = document.createElement("p");
    type.className = "type";
    type.innerText = `Type: ${val.type}`;

    let inStock = document.createElement("p");
    // inStock.className = val.in_stock ? "in-stock" : "out-of-stock";
    // inStock.innerText = val.in_stock ? "In Stock" : "Out of Stock";

    // Add to Cart Button
    let addToCartButton = document.createElement("button");
    addToCartButton.className = "add-to-cart";
    addToCartButton.innerText = "Add to Cart";
    // addToCartButton.disabled = !val.in_stock; // Disable button if out of stock
    addToCartButton.addEventListener("click", () => {
        alert(`Added ${val.name} to cart!`);
        // console.log(val)
        emparr.push(val)
        console.log(emparr)
        localStorage.setItem("cards", JSON.stringify(emparr))
    });

    child.append(img, name, brand, price, rating, description, type, inStock, addToCartButton);
    container.appendChild(child);
});

document.body.appendChild(container);

