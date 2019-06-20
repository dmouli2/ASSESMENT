let product = [
  { id: 1, name: "Apple", quantity: 10, price: 400000 },
  { id: 2, name: "Samsung", quantity: 11, price: 12000 },
  { id: 3, name: "Oppo", quantity: 13, price: 15000 },
  { id: 4, name: "Vivo", quantity: 2, price: 25000 }
];

let displayProducts = function(products) {
  return products
    .map(
      product =>
        `<li> <b> ${product.id} </b> ) Name: <b> ${
          product.name
        } </b>, Quantity :<b> ${product.quantity} </b>,Unit Price :<b> ${
          product.price
        }</b> <button id=${
          product.id
        } onclick="remove(this)">Remove</button> </li> `
    )
    .join(" ");
};

let show = () => {
  let template = `<ul style="list-style:none">${displayProducts(product)}</ul>`;
  document.getElementById("container").innerHTML = template;
};
show();

let remove = prod => {
  let filteredProd = product.filter(p => p.id != prod.id);
  product = filteredProd;
  show();
};

let addButton = document.getElementById("add");
addButton.addEventListener("click", () => {
  addNew();
});

let addNew = () => {
  let name = document.getElementById("name").value;
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;
  let data = {
    id: product.length + 1,
    name: name,
    quantity: quantity,
    price: price
  };
  product.push(data);
  show();
};

let updateButton = document.getElementById("qtt");
updateButton.addEventListener("click", () => {
  updateQuantity();
});

let updateQuantity = () => {
  let id = document.getElementById("id").value;
  let quantity = document.getElementById("newQuantity").value;
  let price = document.getElementById("price").value;

  let idMatch = false;
  product.map(p => {
    if (p.id == id) {
      idMatch = true;
      p.quantity = quantity;
    }
  });

  show();
};
