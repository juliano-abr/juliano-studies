import React from "react";
import Button from "../Button";
import style from "./Form.module.scss";
import { ITask } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";

function Form({
  setTasks,
}: {
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>;
}) {
  const [task, setTask] = React.useState("");
  const [time, setTime] = React.useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTasks((prev) => [
      ...prev,
      {
        task,
        time,
        selected: false,
        completed: false,
        id: uuidv4(),
      },
    ]);
    setTask("");
    setTime("00:00:00");
  }

  return (
    <form className={style.newTask} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Add something new to study</label>
        <input
          type="text"
          name="task"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          id="task"
          placeholder="What do you want to study next?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          step={1}
          name="time"
          value={time}
          onChange={(event) => setTime(event.target.value)}
          id="time"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Add</Button>
    </form>
  );
}

export default Form;
