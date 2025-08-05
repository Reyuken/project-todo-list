
import greet from "./greeting.js";
import  "./styles.css";
greet();
main();
//initial setup
function main(){
const body = document.body;

const container = Object.assign(document.createElement("div"),{
    className: "container",
});

const sideBar = Object.assign(document.createElement("div"),{
    className: "sideBar",
});

const mainContent = Object.assign(document.createElement("div"),{
    className: "mainContent",
    innerHTML: "This is the main content",
});

const title = Object.assign(document.createElement("h1"),{
    innerHTML:  "Todo List",
});

const nav = document.createElement("nav");

const createBtn = Object.assign(document.createElement("button"),{
    className: "createBtn",
    type: "button",
    innerHTML: "Create Task",
});


nav.append(createBtn);
sideBar.append(title,nav)
container.append(sideBar);
body.append(container,mainContent);
};








// const myLibrary = [];

// class Book{
//     constructor(author,title,pages,read){
//         this.id = crypto.randomUUID();
//         this.author = author;
//         this.title = title;
//         this.pages = pages;
//         this.read = read;
//     }
//     toggleRead() {
//     this.read = !this.read;
//   }
// }

// function renderLibrary() {

//   const container = document.createElement('div');
//   container.classList = "container";
//   container.innerHTML = ""; // Clear previous display

//   myLibrary.forEach(book => {
//     const card = document.createElement('div');
//     card.classList.add('book-card');
//     card.dataset.id = book.id;

//     card.innerHTML = `
//       <h3>${book.title}</h3>
//       <p>Author: ${book.author}</p>
//       <p>Pages: ${book.pages}</p>
//       <p>Status: ${book.read ? "Read" : "Not Read"}</p>
//       <button class="toggle-read">Toggle Read</button>
//       <button class="remove-book">Remove</button>`;
    

//     // Toggle read button
//     card.querySelector('.toggle-read').addEventListener('click', () => {
//       book.toggleRead();
//       renderLibrary();
//     });

//     // Remove book button
//     card.querySelector('.remove-book').addEventListener('click', () => {
//       removeBookById(book.id);
//     });

//     container.appendChild(card);
//   });
// }

// function removeBookById(id) {
//   const index = myLibrary.findIndex(book => book.id === id);
//   if (index !== -1) {
//     myLibrary.splice(index, 1);
//     renderLibrary();
//   }
// }

// const dialog = document.getElementById("dialogBox");
// const newBookBtn = document.getElementById("newBookBtn");
// const closeBtn = document.getElementById("closeBtn");


// newBookBtn.addEventListener("click", ()=>{
//     dialog.showModal();
// });
// closeBtn.addEventListener("click", () => {
//     dialog.close();
// });

// //Submit data fom input form
// const form = document.getElementById("input");

// form.addEventListener("submit",function(e){
//     e.preventDefault();

//     const author = document.getElementById("author").value;
//     const title = document.getElementById("title").value;
//     const pageNumber = document.getElementById("pageNumber").value;
//     const read = document.getElementById("readCheck").checked;

//     const newBook = new Book(author,title,pageNumber,read);
    
//     myLibrary.push(newBook);
//     console.log(myLibrary);
//     renderLibrary();
//     form.reset();
//     dialog.close();

// })

