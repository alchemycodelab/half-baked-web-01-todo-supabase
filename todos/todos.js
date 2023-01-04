import {
    checkAuth,
    createTodo,
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos,
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');

// let some todo state (an array)

todoForm.addEventListener('submit', async (e) => {
    // on submit, 
    // create a todo in supabase using for data
    // reset the form DOM element
    // and display the todos
});

async function displayTodos() {
    // clear the container (.textContent = '')
    // fetch the user's todos from supabase

    // loop through the user's todos
        // for each todo, render a new todo DOM element using your render function
        // then add an event listener to each todo
            // on click, update the todo in supabase
            // then (shockingly!) call displayTodos() to refresh the list
        // append the rendered todo DOM element to the todosEl
}

window.addEventListener('load', async () => {
    // fetch the todos and store in state
    // call displayTodos
});

logoutButton.addEventListener('click', () => {
    logout();
});

deleteButton.addEventListener('click', async () => {
    // delete all todos
    // then refetch and display the updated list of todos
});
