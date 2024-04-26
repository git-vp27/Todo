let addTask = document.querySelector(".addtask");
let removeTask = document.querySelector(".removetask");
let input = document.querySelector("input");
let countTodo = document.querySelector(".counttodo");
let resetTodo = document.querySelector(".resetTodo");
let todolist = document.querySelector("ol");
let heading = document.querySelector("h2");

let count = 0;
countTodo.innerText = "Your Todo : " + count;

addTask.addEventListener("click", function(){
    let list = document.createElement("li");
    list.innerHTML = input.value;

    let deltask = document.createElement("button");
    deltask.innerText = "X";

    if(input.value.length == 0){
        countTodo.innerText = "Your Todo : " + count;
        alert("You have't added any todo in your list!");
    } else {
        list.appendChild(deltask);
        document.querySelector("ol").appendChild(list);
        count++;
        countTodo.innerText = "Your Todo : " + count;
    }

    console.log(input.value);
    
    input.value = "";


    deltask.classList.add("deletask");
    list.classList.add("list");
    deltask.addEventListener("click", function(){
        console.log(list.innerHTML);
        list.remove();
        count--;
        countTodo.innerText = "Your Todo : " + count;
    });

    resetTodo.addEventListener("click", function(){
        count = 0;
        let listClass = document.querySelector(".list");
        listClass.remove();
        countTodo.innerText = "Your Todo : " + count;
    })
});

let getYourName = prompt("Enter Your Name");
heading.innerText = "Hi! " + getYourName +",Your TodoList 😄";

