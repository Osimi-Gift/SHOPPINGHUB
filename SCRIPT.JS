let button = document.querySelector(".form");
let inputfield = document.querySelector(".input");
let textspace = document.querySelector(".message");

button.addEventListener('submit', (e) => {
    e.preventDefault();
if (inputfield.value.length > 4) {
textspace.innerHTML = "successful";
inputfield = "";
} else {
textspace.innerHTML = "Please give a valid input, input must be up to six digits";

}
});
