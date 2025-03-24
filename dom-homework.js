 
const header = document.createElement("h1");
header.innerText = "Welcome to DOM homework";
myDiv.appendChild(header);

const paragraph = document.createElement("p")
paragraph.innerText = "This is your first DOM homework assignment"
myDiv.appendChild(paragraph); 

const list = document.createElement("ul");
myDiv.appendChild(list)
list.id = "newList"

const itemOne = document.createElement("li");
itemOne.innerText = "Create a list in Javascript"
list.appendChild(itemOne)

const itemTwo = document.createElement("li");
itemTwo.innerText = "Create a paragraph element in Javascript"
list.appendChild(itemTwo)

const itemThree = document.createElement("li");
itemThree.innerText = "Create a header element in Javascript"
list.appendChild(itemThree)

const btn = document.createElement("button")
btn.innerText = "Add new list item"
myDiv.appendChild(btn)

let counter = 0 

btn.addEventListener('click' , function count() {
    counter += 1; 
})

const randomRgbColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  };
  
btn.addEventListener('click', function func() {
    const newItem = document.createElement("li")
newItem.id = "newItem"
newItem.innerText = `New List Item ${counter}`
newItem.style.color = randomRgbColor()
list.appendChild(newItem)}) 

