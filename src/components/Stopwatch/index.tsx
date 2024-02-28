import Button from "../Button";
import Watch from "./Watch";
import style from "./Stopwatch.module.scss";
import { timeToSeconds } from "../../utils/date";
import { ITask } from "../../utils/types";
import { useEffect, useState } from "react";

type Props = {
  selectedTask: ITask | undefined;
  completeTask: () => void;
};

export default function Stopwatch({ selectedTask, completeTask }: Props) {
  const [time, setTime] = useState(
    timeToSeconds(selectedTask?.time || "00:00:00")
  );

  useEffect(() => {
    setTime(timeToSeconds(selectedTask?.time || "00:00:00"));
  }, [selectedTask]);

  function countdown(count: number = time) {
    setTimeout(() => {
      if (count > 0) {
        setTime(count - 1);
        return countdown(count - 1);
      } else {
        completeTask();
      }
    }, 1000);
  }

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Choose a card and start the stopwatch</p>
      <div className={style.clockWrapper}>
        <Watch time={time} />
      </div>
      <Button onClick={() => countdown()}>Start</Button>
    </div>
  );
}
