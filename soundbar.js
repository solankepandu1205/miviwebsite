let arr=[ {
    "id": 1,
    "name": "Mivi Collar Soundbar",
    "brand": "Mivi",
    "price": 99.99,
    "currency": "USD",
    "rating": 4.6,
    "description": "Compact and stylish soundbar with deep bass and Bluetooth connectivity.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Black",
    "type": "Bluetooth Soundbar",
    "in_stock": true
},
{
    "id": 2,
    "name": "Mivi Collar Plus Soundbar",
    "brand": "Mivi",
    "price": 129.99,
    "currency": "USD",
    "rating": 4.8,
    "description": "Upgraded version with enhanced bass, dual drivers, and 12-hour battery life.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Blue",
    "type": "Bluetooth Soundbar",
    "in_stock": true
},
{
    "id": 3,
    "name": "Mivi Thunder Soundbar",
    "brand": "Mivi",
    "price": 149.99,
    "currency": "USD",
    "rating": 4.7,
    "description": "Powerful soundbar with 40W output, Dolby Audio, and HDMI ARC support.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Silver",
    "type": "Home Theater Soundbar",
    "in_stock": false
},
{
    "id": 4,
    "name": "Mivi Bass Pro Soundbar",
    "brand": "Mivi",
    "price": 79.99,
    "currency": "USD",
    "rating": 4.4,
    "description": "Portable soundbar with rich bass, USB playback, and AUX connectivity.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Red",
    "type": "Portable Soundbar",
    "in_stock": true
},
{
    "id": 5,
    "name": "Mivi Mini Soundbar",
    "brand": "Mivi",
    "price": 49.99,
    "currency": "USD",
    "rating": 4.2,
    "description": "Compact and affordable soundbar for small spaces with Bluetooth 5.0.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "White",
    "type": "Mini Soundbar",
    "in_stock": true
},
{
    "id": 6,
    "name": "Mivi Elite Soundbar",
    "brand": "Mivi",
    "price": 199.99,
    "currency": "USD",
    "rating": 4.9,
    "description": "Premium soundbar with 100W output, Dolby Atmos, and wireless subwoofer.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Gold",
    "type": "Premium Soundbar",
    "in_stock": false
},
{
    "id": 7,
    "name": "Mivi Party Soundbar",
    "brand": "Mivi",
    "price": 89.99,
    "currency": "USD",
    "rating": 4.5,
    "description": "Party-ready soundbar with RGB lights, karaoke mic, and 20W output.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Black",
    "type": "Party Soundbar",
    "in_stock": true
},
{
    "id": 8,
    "name": "Mivi Compact Soundbar",
    "brand": "Mivi",
    "price": 59.99,
    "currency": "USD",
    "rating": 4.3,
    "description": "Slim and lightweight soundbar with clear audio and Bluetooth connectivity.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Gray",
    "type": "Compact Soundbar",
    "in_stock": true
},
{
    "id": 9,
    "name": "Mivi Outdoor Soundbar",
    "brand": "Mivi",
    "price": 109.99,
    "currency": "USD",
    "rating": 4.6,
    "description": "Rugged and waterproof soundbar designed for outdoor adventures.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Green",
    "type": "Outdoor Soundbar",
    "in_stock": true
},
{
    "id": 10,
    "name": "Mivi Studio Soundbar",
    "brand": "Mivi",
    "price": 169.99,
    "currency": "USD",
    "rating": 4.8,
    "description": "Studio-grade soundbar with 3D surround sound and multiple connectivity options.",
    "image": "https://www.mivi.in/cdn/shop/files/Fort_750_large.png?v=1726647220",
    "color": "Black",
    "type": "Studio Soundbar",
    "in_stock": false
}
]
let data = [
];

let container = document.createElement("div");
container.className = "container";

arr.forEach((val) => {
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

    
    let addToCartButton = document.createElement("button");
    addToCartButton.className = "add-to-cart";
    addToCartButton.innerText = "Add to Cart";
    // addToCartButton.disabled = !val.in_stock; 
    addToCartButton.addEventListener("click", () => {
        alert(" added tocart");
    });

    child.append(img, name, brand, price, rating, description, type, inStock, addToCartButton);
    container.appendChild(child);
});

document.body.appendChild(container);