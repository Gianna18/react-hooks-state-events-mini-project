/*import React from "react";

function NewTaskForm() {
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {/* render <option> elements for each category here */
        /*</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;*/

import React from "react";
import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")

  const [category, setCategory] = useState("")
  const addNewTask = (e) => {
      e.preventDefault();
      onTaskFormSubmit({text, category})
  }}

function NewTaskForm() {
  return (
   // <form className="new-task-form">

    <form className="new-task-form" onSubmit={(e) => addNewTask(e)}>
      <label>
        Details
        <input type="text" name="text" />
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <label>
        Category
        {/* render <option> elements for each category here */}
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map(category => {
            return <option key={category}>{category}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}
export default NewTaskForm;