// data.js - shared data functions

// LocalStorage Keys
const KEYS = {
  products: "products",
  orders: "orders",
  currentUser: "currentUser",
  adminSession: "isAdminLoggedIn",
  cart: "cart"
};

// ----- Product Functions -----
function getProducts() {
  return JSON.parse(localStorage.getItem(KEYS.products)) || [];
}

function saveProducts(products) {
  localStorage.setItem(KEYS.products, JSON.stringify(products));
}

function addProduct(product) {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
}

function updateProduct(index, updatedProduct) {
  const products = getProducts();
  products[index] = updatedProduct;
  saveProducts(products);
}

function deleteProduct(index) {
  const products = getProducts();
  products.splice(index, 1);
  saveProducts(products);
}

// ----- Order Functions -----
function getOrders() {
  return JSON.parse(localStorage.getItem(KEYS.orders)) || [];
}

function saveOrders(orders) {
  localStorage.setItem(KEYS.orders, JSON.stringify(orders));
}

function addOrder(order) {
  const orders = getOrders();
  orders.push(order);
  saveOrders(orders);
}

function clearAllOrders() {
  localStorage.removeItem(KEYS.orders);
}

function deleteOrder(index) {
  const orders = getOrders();
  orders.splice(index, 1);
  saveOrders(orders);
}

// ----- User/Session Functions -----
function getCurrentUser() {
  return JSON.parse(localStorage.getItem(KEYS.currentUser));
}

function isAdminLoggedIn() {
  return localStorage.getItem(KEYS.adminSession) === "true";
}

function logoutAdmin() {
  localStorage.removeItem(KEYS.adminSession);
}

function loginAdmin() {
  localStorage.setItem(KEYS.adminSession, "true");
}

// ----- Cart Functions -----
function getCart() {
  return JSON.parse(localStorage.getItem(KEYS.cart)) || [];
}

function clearCart() {
  localStorage.removeItem(KEYS.cart);
}

// ----- Initialize Sample Products if None Exist -----
(function initializeProducts() {
  const existing = getProducts();
  if (!existing || existing.length === 0) {
    const sampleProducts = [
      { name: "Espresso", price: 120, image: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Tazzina_di_caff%C3%A8_a_Ventimiglia.jpg", category: "Espresso", description: "A bold shot of pure coffee flavor.", rating: 1.5 },
      { name: "Americano", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxra9UmQTaLETHKRBIU29BR-Ae72sJW47L5w&s", category: "Espresso", description: "Espresso diluted with hot water for a smoother taste.", rating: 4.2 },
      { name: "Cappuccino", price: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQleq-f4vYrEYZI8gKsKSZnbOZMj8dFU87CMg&s", category: "Hot Drinks", description: "Creamy foam atop rich espresso and steamed milk.", rating: 4.8 },
      { name: "Latte", price: 140, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSNw7oOeCCCIv_D1ok78I61XqgUl1ZU_S2DA&s", category: "Hot Drinks", description: "Smooth blend of espresso and steamed milk.", rating: 4.6 },
      { name: "Flat White", price: 145, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9FcDEBq-8SQji6Q2cb3ZekJunoHWMPwqCiQ&s", category: "Hot Drinks", description: "Velvety microfoam with strong flavor.", rating: 4.4 },
      { name: "Mocha", price: 160, image: "https://athome.starbucks.com/sites/default/files/styles/recipe_banner_xlarge/public/2024-05/CaffeMocha_RecipeHeader_848x539_%402x.jpg.webp?itok=ov3gQo8W", category: "Hot Drinks", description: "Chocolate-infused espresso for a sweet twist.", rating: 4.3 },
      { name: "Macchiato", price: 135, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_3E2EoO86Il4vKrMPVdpxam-6HBQ6aT98-Q&s", category: "Hot Drinks", description: "Espresso marked with a dollop of foam.", rating: 4.1 },
      { name: "Iced Coffee", price: 130, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSVYAb9l2oOQ4iRwqARLLwHoTuyZgY9RKT0Q&s", category: "Cold Drinks", description: "Perfectly chilled for a refreshing taste.", rating: 4.0 },
      { name: "Cold Brew", price: 170, image: "https://cookieandkate.com/images/2018/09/cold-brew-coffee-with-cream-pour.jpg", category: "Cold Drinks", description: "Slow-steeped coffee for a smooth finish.", rating: 4.7 },
      { name: "Frappuccino", price: 180, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-7D-l9MwJFG1xI4V_bKQgPHGCXXo4fcwsw&s", category: "Cold Drinks", description: "Ice-blended espresso with milk and flavors.", rating: 4.2 },
      { name: "Affogato", price: 175, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7fhNyXfUnNfuYnP_mqSAAWr9kw0PXFuT71w&s", category: "Dessert", description: "Espresso poured over vanilla ice cream.", rating: 4.9 },
      { name: "Caramel Macchiato", price: 165, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbdcxm8pgAJ-zuneMiZYBsH-I5SGnZxJcpdw&s", category: "Hot Drinks", description: "Layered espresso with caramel drizzle.", rating: 4.5 }
    ];
    saveProducts(sampleProducts);
  }
})();
