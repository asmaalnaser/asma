function displayPicture() {
    itemstoredpic = localStorage.getItem('itemClick');
    document.getElementById("displayPicture").src = "a-" + itemstoredpic + ".jpg"
 }
 displayPicture();


 function displayDis() {
    itemstored = localStorage.getItem('itemdis');
    document.getElementById("displayDis").src = "sos" + itemstored + ".txt"
 }
 displayDis();





