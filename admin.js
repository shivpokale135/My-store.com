// admin logic will be added later
function addProduct(name, price, image) {
  db.collection("products").add({
    name: name,
    price: price,
    image: image
  }).then(() => {
    alert("Product added");
  });
}
