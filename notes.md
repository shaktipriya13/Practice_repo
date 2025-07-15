used tailwind here, Google OAuth

![1752556383940](image/notes/1752556383940.png)

we are creating token with token.js and that token gets stored in the cookies

**Cookies are small pieces of data** stored on the client side (usually in the browser) and sent back to the server with every request.

# why userId needed in token.js fxn

![1752556786656](image/notes/1752556786656.png)

![1752556889702](image/notes/1752556889702.png)

## 🍪 What is `res.cookie()`?

In Express.js, `res.cookie()` is a function that lets you **send a cookie** to the browser from the **server response** .

![1752558245722](image/notes/1752558245722.png)

![1752558418979](image/notes/1752558418979.png)

![1752558484543](image/notes/1752558484543.png)
![1752567478340](image/notes/1752567478340.png)

we use axios in frontend so that we can call backend api in our frontend. app.use(cors) ke through we configure in backend-server.js so that CORS error nhi aaye

![1752568153805](image/notes/1752568153805.png)

![1752568202657](image/notes/1752568202657.png)

**React components and context providers must start with a capital letter** .

### 📌 What is `useState`?

`useState` is a **React hook** that lets your component **remember something** (like a variable that React watches).

Imagine your component is a box.

`useState` lets you **store data inside the box** , and if that data changes, React will **automatically re-render** the UI to show the latest data.
