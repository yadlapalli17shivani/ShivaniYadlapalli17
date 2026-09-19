import React from "react";

function App() {

  const content = (
    <div>
      <h2 style={{ color: "blue" }}>Welcome to JSX</h2>

      <p>JSX allows us to write HTML inside JavaScript</p>

      <ul>
        <li>Easy to read</li>
        <li>Looks like HTML</li>
        <li>Used in React components</li>
      </ul>
    </div>
  );

  return (
    <div>
      <h1>Writing Markup with JSX</h1>

      {content}
    </div>
  );
}

export default App;