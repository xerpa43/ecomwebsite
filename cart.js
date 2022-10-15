if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready)
} else {
  ready()
}




function ready() {
  
  var the_buttons = document.getElementsByClassName('far fa-times-circle')
  console.log(the_buttons)
  for (var i = 0; i < the_buttons.length; i++) {
    var button = the_buttons[i]
    button.addEventListener('click', delete_items)
  }

  var the_cart_button = document.getElementsByClassName('showing_button')
  for(var i=0;i<the_cart_button.length;i++){
    var touch = the_cart_button[0]
  touch.addEventListener('click' ,addTheseItemsToCart)
  


  
}




  


  var inputs = document.getElementsByClassName('quantity')
  for (var i = 0; i < inputs.length; i++) {
    var given_quantity = inputs[i]
    given_quantity.addEventListener('change', quantityChanged)

  }

  var addTOcart = document.getElementsByClassName('fa-sharp')
  for (var i = 0; i < addTOcart.length; i++) {
    var Ad_to = addTOcart[i]
    Ad_to.addEventListener('click', AddProducts)

  }
  

  
  

}


function AddProducts(event) {
  var Ad_to = event.target
  console.log(Ad_to)
  var shopItem = Ad_to.parentElement.parentElement.parentElement
  var title = shopItem.getElementsByClassName('_the_name')[0].innerText
  var price = shopItem.getElementsByClassName('price')[0].innerText
  var image = shopItem.getElementsByClassName('first')[0].src
    var check =  localStorage.getItem('title')

    
  if( title == check)
  {
    alert('The product is Already Added')
  }
 else{

 
  localStorage.setItem('title', title)
  localStorage.setItem('price', price)
  localStorage.setItem('image', image)
   alert( title + ' has been added to cart')
 }
}

function addTheseItemsToCart() {
  var new_div = document.createElement('tr')

  new_div.classList.add('row')
var items = document.getElementsByClassName('cartitems')[0]

  var title = localStorage.getItem('title')
  var price = localStorage.getItem('price')
  var image = localStorage.getItem('image')

  console.log(price +' is the price')
  var price2 = parseFloat(price.replace('$', ''))

  console.log(price2 +' is the price')

  
  if(price == null )
  {
    alert('There is Nothing in the cart')
    return
  }


  var contents = ` <td><a href="#"><i class="far fa-times-circle"></i></a></td>
  <td><img src="${image}" alt="" srcset="" class="_image" ></td>
  <td class="product">${title}</td>
  <td class="price" >${price}</td>
  <td ><input class="quantity" type="number" value=""      min="1"></td>`



 

  new_div.innerHTML=contents
  items.appendChild(new_div)


  remove_data_from_storage()



 


}


function remove_data_from_storage(){
  localStorage.removeItem('title')
   localStorage.removeItem('price')
  localStorage.removeItem('image')

}







function quantityChanged(event) {
  var button = event.target
  if (isNaN(button.value) || button.value <= 0) {
    button.value = 1
  }
  updateCart()

}



function delete_items(event) {

  var clicked = event.target
  clicked.parentElement.parentElement.parentElement.remove()
  var a =2
  updateCart()
}

function updateCart() {
  var cartItemContainer = document.getElementsByClassName('cartitems')[0]
  console.log(cartItemContainer)
  var cartRows = cartItemContainer.getElementsByClassName('row')

  var total = 0
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var priceElements = cartRow.getElementsByClassName('price')[0]
    var quantityElement = cartRow.getElementsByClassName('quantity')[0]
    var price = parseFloat(priceElements.innerText.replace('$', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity)


  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName('total_price')[0].innerText = '$' + total


}
