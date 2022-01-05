# Supabase Todo App

## Learning Objectives
- Use a truthy/falsey expression in a ternary statement to assign a const  conditionally
- In response to a user event, delete an item in an array and display the new state to the user

[Buggy Supabase Todo App](https://github.com/alchemycodelab/buggy-js-todo-supabase)

Here is the schema for the `todos` table:

![](./todos-model.png)
### Live Example:
https://alchemycodelab.github.io/web-01-todo-supabase/


| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed pages on GitHub pages, with link in the About section of the Github repo |    .5 |
| See completed todos styled differently from incomplete todos                                   |        .5 |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page (`'/'`), Login and Signup using the login and signup form. On success, redirect to the `/todos` page   |        .5 |
| Logout by clicking the logout button                                                       |       .5 |
| If a non-logged-in user tries to visit the todos page, redirect them to the login page     |       .5 |
| On the todos page load, fetch the todos from supabase and render them to the page. Call your `displayTodos()` function to do this work.        |        1 |
| Add a todo to supabase by using the input and button.                                     |        1 |
| When a todo is added, clear out the todo list and render the updated list of todos.       |        1 |
| When a user clicks a todo, it becomes complete. Update this state in supabase, clear out the todo list, and re-fetch and redisplay the updated todos. Call your `displayTodos()` function to do this work.                |        1 |
| When a user clicks delete all todos, all todos. Update this state in supabase, clear out the todo list, and re-fetch and redisplay the updated todos. Call your `displayTodos()` function to do this work.               |        .5 |


| Functions                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| ASYNC: `createTodo(todo)` : create a todo in supabase for the logged-in user |1|
| ASYNC: `deleteAllTodos()` : delete all todos  in supabasefor the logged-in user |.5|
| ASYNC: `getTodos()` : get all todos in supabase for the logged-in user |.5|
| ASYNC: `completeTodo(id)` : complete this todos in supabase for the logged-in user |1|
