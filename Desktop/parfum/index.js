const typedTextSpan = document.querySelector(".typed-text");

const textArray = ["WELCOME TO MY STORE", "", ""];
const typingDelay = 200;
const erasinDelay = 100;
const newTextDelay = 200;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
  else {
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--,
      setTimeout(erase, erasinDelay);
  }
  else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, newTextDelay + 40);
}) 



function storedStorage(numImg) {
    localStorage.setItem("itemClick", numImg);
  
  }
  function storegdis(numDis) {
    localStorage.setItem("itemdis", numDis);
  
  }


  
  let myObject = { "id": "1", "price": "50", "name": "Oval Transparent" }
  let myNum = [];
  let myPrice = [1300, 1200,1500, 1900,1500, 1800, , 1300, , 1800, 1400, 1200, 1400, 1300];
  let myName = ["SANTAL", "TOPACOLOR", "AMBRY NUIT", "OUD ROSEWOOD", " OUD ISPAHAN", "GRIS", "VANILLA", "ROUGE", " EDEN-ROC", "PATCHOULI", "SPICE BLEND" ,"LUKCY"]
  
  function getItemClick(num) {
  
    localStorage.setItem("clickAlr" + num, num);
    myObject.id = num;
    myObject.price = myPrice[num - 1];
    myObject.name = myName[num - 1]
    alert("you added product to the cart");
    myNum.push({ "id": num, "price": myPrice[num - 1], "name": myName[num - 1] });
    for (i = 0; i < myNum.length; i++) {
      console.log("myNum" + i + "is ", myNum[i])
      alert("you added product: " + myNum[i].id + " " + myNum[i].name + "to the cart");
  
    }
    localStorage.setItem("clickAlr", JSON.stringify(myNum))
  
  
  }
    
  
  
     