function addProduct() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const desc = document.getElementById("desc").value;

  if (!name || !price || !image || !desc) {
    alert("All fields required");
    return;
  }

  db.collection("products").add({
    name: name,
    price: Number(price),
    image: image,
    description: desc,
    createdAt: new Date()
  })
  .then(() => {
    alert("Product Added Successfully ✅");
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("desc").value = "";
  })
  .catch(error => {
    alert("Error: " + error.message);
  });
}
