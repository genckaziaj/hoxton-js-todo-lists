/*
Today's exercise: Todo Lists
Repo: hoxton-js-todo-lists
Description
This is the first try at a common program built by new developers, the todo list. You'll have to use everything we've covered so far in JS to tackle this challenge

Instructions
- Use this starting template, you'll find two objects with data for you to use => https://codesandbox.io/s/day-4-todo-lists-template-2phy2?from-embed=&file=/index.js
- ⚠️ Do not code your solution in CodeSandbox ⚠️ Copy or recreate the javascript files in your project.
- Create an alert that lists all users, with their ids, names and what city they're from
- Prompt the user for a user id
- Display an alert with the username and all the todos titles that belong to that user 

Tips
- The user id creates an identifiable relationship with the todos
- Sometimes it's good to map some values into a new data structure

Challenge
After you select a user, add the option to either show the todos or add a new todo to the list
*/

console.log("users: ", window.users);
console.log("todos: ", window.todos);

let allUsersList = [];

for (let user of users) {
  allUsersList.push(`${user.id}: ${user.name} is from ${user.address.city}`);
}

alert(
  allUsersList.join(`,
`)
);

let idRecieved = prompt("What is your ID?");
let userNameUser;
let todoTitles = [];

for (let user of users) {
  if (idRecieved == user.id) {
    userNameUser = `The username of this user is ${user.username}`;
  }
}
for (let todo of todos) {
  if (idRecieved == todo.userId) {
    todoTitles.push(todo.title);
  }
}

let showTodos = confirm("Do you need the todos of this user?");

if (showTodos) {
  alert(
    `${userNameUser}.
This user todo titles are: ${todoTitles.join(`, `)}.`
  );
}
