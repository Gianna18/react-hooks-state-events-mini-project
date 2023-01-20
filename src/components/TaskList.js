import React from "react";
import Task from "./Task";

function TaskList() {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
    </div>
  );
}

function TaskList({ tasks, handleDelete }) {
  const taskList = tasks.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      handleDelete={handleDelete}
    />
  ));
  return <div className="tasks">{taskList}</div>;
}

export default TaskList;
