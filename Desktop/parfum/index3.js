let myCart = JSON.parse(localStorage.getItem("clickAlr"));


function displayMyCart1() {

   for (i = 0; i < myCart.length; i++) {
      console.log("is " + i + ": " + myCart[i])
      console.log(myCart[i].id)


   }
}
displayMyCart1();


function displayMyCart2() {

   for (i = 0; i < myCart.length; i++) {
      document.getElementById("itemNum1").innerHTML += " ID: " + myCart[i].id + "<br>";
      document.getElementById("itemNum1").innerHTML += " Price: " + myCart[i].price + " SAR" + "<br>";
      document.getElementById("itemNum1").innerHTML += " Name: " + myCart[i].name + "<br>";
      var image = new Image()
      image.src = "a-" + myCart[i].id + ".jpg";

      document.getElementById("itemNum").appendChild(image);
   }

}
displayMyCart2();



let sum = 0;
function sumPrice() {
   let total = 0;
   for (i = 0; i < myCart.length; i++) {

      sum += Number(myCart[i].price);
      total = sum;

      document.getElementById("itemNum2").innerHTML = " SubTotal: " + total;
   }

   document.getElementById("itemNum3").innerHTML += total + (total * 0.15);
  
}
sumPrice();


function receiving() {
   let numberTotal = 0;
   for (j = 0; j < myCart.length; j++) {

      numberTotal += Number(myCart[j].price+(myCart[j].price*.15));
   }
   numberTotal = numberTotal + 34;

   document.getElementById("itemNum66").innerHTML = "Total with Delivery (SAR): " + numberTotal;
}


function uniqueID() {

   let num = Math.floor(Math.random() * Date.now());
   localStorage.setItem("refrence", num)
   alert("Your reference number: " + num)
localStorage.clear();
}

document.getElementById("checkOut").innerHTML = num;