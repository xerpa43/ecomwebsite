var addTOcart = document.getElementsByClassName(
  "fa-sharp fa-solid fa-cart-plus"
);
Array.from(addTOcart).forEach((element) => {
  element.addEventListener("click", (event) => {
    var shopItem = event.target.parentElement;
    var title = shopItem.getElementsByClassName("_the_name")[0].innerText;
    var price = shopItem.getElementsByClassName("price")[0].innerText;
    var image = shopItem.getElementsByClassName("first")[0].src;
    var check = localStorage.getItem(title);

    if (check) {
      alert("The item is already added to cart");
    } else {
      alert(title + " has been added to cart");

      localStorage.setItem(title, JSON.stringify({ title, price, image }));
    }
  });
});
