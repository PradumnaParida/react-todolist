import React from "react";

import "./App.css";

const App = () => {
  return (
    <div>
      <div id="myDIV" className="header">
        <h1>TODOLIST</h1>

        <input type="text" id="myInput" placeholder="Add Data" />

        <button onClick={newElement} className="addBtn">
          Add
        </button>
      </div>

      <ul id="myUL"></ul>
    </div>
  );
};

function newElement() {
  var li = document.createElement("li");

  var inputValue = document.getElementById("myInput").value;

  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  if (inputValue === "") {
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  li.addEventListener("click", (e) => {
    li.remove(t);
  });

  document.getElementById("myInput").value = "";
}

export default App;
