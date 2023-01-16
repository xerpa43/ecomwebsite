addTheseItemsToCart();
updateCart();
updateInputs();

function delete_items(event) {
  var clicked = event.target;
  var name =
    clicked.parentElement.parentElement.parentElement.querySelectorAll("td")[2]
      .innerText;
  remove_data_from_storage(name);
  clicked.parentElement.parentElement.parentElement.remove();
  updateCart();
}
function updateInputs() {
  const quantity = document.querySelectorAll(".quantity");
  Array.from(quantity).map((element) => {
    element.addEventListener("input", () => {
      element.value < 0 ? (element.value = 0) : updateCart();
    });
  });
}

function updateCart() {
  var cartItemContainer = document.getElementsByClassName("cartitems")[0];
  var cartRows = cartItemContainer.getElementsByClassName("row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElements = cartRow.getElementsByClassName("price")[0];

    var quantityElement = cartRow.getElementsByClassName("quantity")[0];
    var price = priceElements.innerText.replace(/[$,]/g, "");

    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total_price")[0].innerText = "$" + total;
}

function addTheseItemsToCart() {
  const devices = Object.values(localStorage);
  var v = devices.map((element) => {
    let obj = JSON.parse(element);
    let title = obj.title;
    let price = obj.price;
    let image = obj.image;
    addTOcart(title, price, image);
  });
}

function addTOcart(title, price, image) {
  var new_div = document.createElement("tr");
  new_div.classList.add("row");
  var items = document.getElementsByClassName("cartitems")[0];

  var contents =
    title !== undefined
      ? ` <td><a href="#"><i class="far fa-times-circle"></i></a>
    </td>
    <td><img src="${image}" alt="" srcset="" class="_image" /></td>
    <td class="product">${title}</td>
    <td class="price" >${price}</td>
    <td ><input class="quantity" type="number" value="1"  min="1" /></td>`
      : ``;

  new_div.innerHTML = contents;

  items.appendChild(new_div);
}

var the_buttons = document.getElementsByClassName("far fa-times-circle");
for (var i = 0; i < the_buttons.length; i++) {
  var button = the_buttons[i];
  button.addEventListener("click", delete_items);
}

function remove_data_from_storage(name) {
  localStorage.removeItem(name);
}
