db.collection("products")
.orderBy("createdAt", "desc")
.onSnapshot(snapshot => {

  const productsDiv = document.getElementById("products");
  productsDiv.innerHTML = "";

  snapshot.forEach(doc => {
    const p = doc.data();

    productsDiv.innerHTML += `
      <div class="product">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <p class="desc">${p.description}</p>
        <button>Add to Cart</button>
      </div>
    `;
  });

});
