import { Shop } from "./classes/shop";

// Create an instance of the Shop class
const shop = new Shop();

// Attach the login event to the login button
const loginButton = document.getElementById("login-button");
loginButton?.addEventListener("click", () => {
  shop.loginUser();
});