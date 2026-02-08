// Listen for products in Firestore and show them
db.collection("products").onSnapshot(snapshot => {
  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  snapshot.forEach(doc => {
    const p = doc.data();
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${p.image}" width="150">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button>Add to cart</button>
      </div>
    `;
  });
});
