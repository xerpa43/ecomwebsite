var main = document.getElementById("Main");
var min = document.getElementsByClassName("bottom");
Array.from(min).forEach((element) => {
  element.addEventListener("mouseover", () => {
    main.src = element.src;
  });
});

let Button = document.querySelector(".Button");
Button.addEventListener("click", () => {
  let title = Button.parentElement
    .querySelectorAll("div")[0]
    .querySelector("span").innerText;
  let price = Button.parentElement.parentElement.parentElement
    .querySelector(".total_info")
    .querySelector("h1").innerText;
  let image = Button.parentElement.parentElement
    .querySelector(".img")
    .querySelector("img").src;
  var check = localStorage.getItem(title);

  if (check) {
    alert("The item is already added to cart");
  } else {
    alert(title + " has been added to cart");

    localStorage.setItem(title, JSON.stringify({ title, price, image }));
  }
});
