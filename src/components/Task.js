import React from "react";

function Task() {}


function Task({ text, category, handleDelete }) {

  const handleClick = () => {
    handleDelete(text)
   }

  return (
    <div className="task">
      <div className="label">CATEGORY HERE</div>
      <div className="text">TEXT HERE</div>
      <button className="delete">X</button>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}
export default Task;
