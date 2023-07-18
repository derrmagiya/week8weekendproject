import { User } from "./user";
import { Item } from "./item";

export class Shop {
  user: User | null;

  constructor() {
    this.user = null;
  }

  loginUser() {
    const nameInput = <HTMLInputElement>document.getElementById("name");
    const ageInput = <HTMLInputElement>document.getElementById("age");

    const name = nameInput.value;
    const age = parseInt(ageInput.value, 10);

    if (name && !isNaN(age)) {
      this.user = new User(name, age);
      this.displayShop();
    }
  }

  displayShop() {
    const shopDiv = document.getElementById("shop");
    if (shopDiv) {
      const item1 = new Item("Item 1", 10);
      const item2 = new Item("Item 2", 20);

      const items = [item1, item2];

      items.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price}`;

        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.addEventListener("click", () => this.addItemToCart(item));

        itemElement.appendChild(addButton);
        shopDiv.appendChild(itemElement);
      });
    }
  }

  addItemToCart(item: Item) {
    if (this.user) {
      this.user.cart.push(item);
      this.displayCart();
    }
  }

  displayCart() {
    const cartDiv = document.getElementById("cart");
    if (cartDiv && this.user) {
      cartDiv.innerHTML = "";

      const cartItems = this.user.cart;
      cartItems.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} - $${item.price}`;

        cartDiv.appendChild(itemElement);
      });
    }
  }
}