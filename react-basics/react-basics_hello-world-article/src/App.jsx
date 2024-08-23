import "./App.css";

export default function App() {
  return HelloWorldArticle();
}
const HelloWorldArticle = () => (
  <article>
    <h1>Welcome back to the React Universe!</h1>
    <p style={{ color: "white" }}>
      Have a look at the [App.jsx](./src/App.jsx) file: the default export
      function called `App` returns a div which wants to be replaced. Let us
      comply with its request!
    </p>
  </article>
);
