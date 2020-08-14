var button = document.getElementById("button");
var input = document.getElementById("user");

button.addEventListener("click", () =>{
    var value = input.value
    button.innerHTML = value;
setTimeout(() => {
    button.innerHTML = "grab text";
}, 2000);
})