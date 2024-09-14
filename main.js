

// The Main Variable

let inp = document.querySelector("input");
let button = document.querySelector("button");
let contentOfTasks = document.querySelector(".content-of-tasks");
let id = new Date().getTime()
let count = document.querySelector(".count_of_tasks")
let delete_all = document.querySelector(".delete_all")

if (window.localStorage.getItem("tasks")) {
  tasks = JSON.parse(window.localStorage.getItem("tasks"))
} else {
  tasks = []
}


function handleAdd() {
  if (inp.value) {
    tasks.push({ task: inp.value, id })
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }


  inp.value = ''
  autoReloade()
}

function autofocus() {
  inp.focus()
}


document.addEventListener('keydown', (e) => {
  if (e.code.toLocaleLowerCase() === 'enter') {
    handleAdd()
  }
})

autofocus()


function handleDelete(id) {
  tasks = tasks.filter(e => {
    return e.id !== id
  })
  window.localStorage.setItem("tasks", JSON.stringify(tasks))
  autoReloade()
}

function handleDeleteAll() {
  window.localStorage.setItem("tasks", [])
  autoReloade()
}
delete_all.addEventListener("click", handleDeleteAll)

button.addEventListener("click", handleAdd)
console.log(tasks)
tasks.forEach(element => {
  let span = document.createElement("span");
  let text = document.createTextNode(`${element.task}`);
  let dSpan = document.createElement("span");
  dSpan.className = "delete";
  dSpan.addEventListener('click', () => {
    handleDelete(element.id)
  })
  let dText = document.createTextNode("Delete");
  dSpan.appendChild(dText);
  span.appendChild(text);
  span.appendChild(dSpan);
  contentOfTasks.append(span)
});


function autoReloade() {
  window.location.reload()
}

count.innerHTML = tasks.length













/* anothor way */

// // The Main Variable

// let inp = document.querySelector("input");
// let button = document.querySelector("button");
// let contentOfTasks = document.querySelector(".content-of-tasks");

// // Button Function
// button.onclick = function () {
//   if (inp.value !== "") {
//     AddToLocalStorage();
//     CreatElement();
//     focusInput();
//     inp.value = "";
//   } else {
//     focusInput();
//     inp.value = "The Input Can Not Be Embty";
//   }
// };

// //All Function

// //[1] Add To Locale Storage
// function AddToLocalStorage() {
//   window.localStorage.setItem(inp.value, "test");
// }
// //[2] Creat Element
// function CreatElement() {
//   contentOfTasks.innerHTML = "";
//   let numberOfTasks = window.localStorage.length;
//   for (let i = 0; i < numberOfTasks; i++) {
//     numberOfTasks = window.localStorage.length;
//     let span = document.createElement("span");
//     let text = document.createTextNode(window.localStorage.key(i));
//     let dSpan = document.createElement("span");
//     dSpan.className = "delete";
//     let dText = document.createTextNode("Delete");
//     dSpan.appendChild(dText);
//     span.appendChild(text);
//     span.appendChild(dSpan);
//     span.setAttribute("data-index", i);
//     contentOfTasks.appendChild(span);
//     //delete Element
//     //Delete Function
//     dSpan.addEventListener("click", () => {
//       window.localStorage.removeItem(
//         window.localStorage.key(span.dataset.index)
//       );
//       span.remove();
//       window.onload();
//       check();
//     });
//   }
// }
// //[3] Auto Focus Function
// function focusInput() {
//   inp.focus();
// }
// // [4]window
// window.onload = function () {
//   CreatElement();
//   focusInput();
//   check();
// };
// //Function Check If Ther Are Tasks In Content Tascs

// function check() {
//   if (contentOfTasks.childElementCount == 0) {
//     contentOfTasks.innerHTML = `<span class="nothing">Ther Are Nothin</span>`;
//   }
// }
// //THE END
