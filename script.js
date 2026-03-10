/* SUBSCRIBE FEATURE */

function subscribe() {
  let email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter email");
    return;
  }

  sessionStorage.setItem("subscriber", email);

  alert("Subscription successful!");
}

/* SHOPPING CART */

let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

function addToCart(name, price) {
  let existing = cart.find((item) => item.name === name);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1,
    });
  }

  sessionStorage.setItem("cart", JSON.stringify(cart));

  alert(name + " added to cart");
}

/* VIEW CART */

function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

  let output = "";

  cart.forEach((item) => {
    output += item.name + " x" + item.quantity + " - $" + item.price + "\n";
  });

  if (output === "") {
    output = "Cart is empty";
  }

  alert(output);
}

/* CLEAR CART */

function clearCart() {
  sessionStorage.removeItem("cart");

  alert("Cart cleared");
}

/* CONTACT FORM */

function saveContact() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("emailContact").value;
  let message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
    alert("All fields required");
    return;
  }

  let order = {
    name: name,
    email: email,
    message: message,
  };

  localStorage.setItem("customerOrder", JSON.stringify(order));

  alert("Form submitted successfully");
}
