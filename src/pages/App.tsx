import React, { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import style from "./App.module.scss";
import Stopwatch from "../components/Stopwatch";
import { ITask } from "../utils/types";

function App() {
  const [selected, setSelected] = useState<ITask>();
  const [tasks, setTasks] = useState<ITask[]>([]);

  function selectTask(task: ITask) {
    setSelected(task);
    setTasks((prev) =>
      prev.map((item) => ({
        ...item,
        selected: item.id === task.id,
      }))
    );
  }

  function completeTask() {
    if (selected) {
      setTasks((prev) =>
        prev.map((item) => ({
          ...item,
          completed: item.id === selected.id ? true : item.completed,
        }))
      );
      setSelected(undefined);
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Stopwatch selectedTask={selected} completeTask={completeTask} />
    </div>
  );
}

export default App;
