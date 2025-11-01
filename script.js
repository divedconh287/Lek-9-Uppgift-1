function laggtill()
{
let input = document.getElementById("value");
let text = input.value;
let li = document.createElement("li");
li.textContent = text;
let ul = document.querySelector("ul");
ul.appendChild(li);
console.log("du skrev ngt");
input.value = "";
li.classList.add("element");
}
