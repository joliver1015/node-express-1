### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  By using callback functions, promises, or async await.

- What is a Promise?

  A promise is a javascript object that represents the eventual completion or failure of an async process.

- What are the differences between an async function and a regular function?

  A regular function runs in the order of which its in the program. An async function runs independently of the order. An async function also returns a promise

- What is the difference between Node.js and Express.js?
  
  Node.js is a back-end environment that run outside a web brower, express.js is a javascript-based web framework.

- What is the error-first callback pattern?

  It will check and handle the error if there is one then go ahead with the assoicated data if there is no error

- What is middleware?
  
  Middleware is software that will connect isolated systems.

- What does the `next` function do?
  
  The next function passes the request on to the next route

- What does `RETURNING` do in SQL? When would you use it?
  
  It allows for the retrieval of values of columns that were modified instead of using a SELECT statement after the modifiction

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

  The function is going to return a list with the entire json response of each user.
  

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

