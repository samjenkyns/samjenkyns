function myFunction(idCheck, idText) {
    var checkBox = document.getElementById(idCheck);
    var text = document.getElementById(idText);
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}