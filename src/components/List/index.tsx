import style from "./List.module.scss";
import Item from "./Item";
import { ITask } from "../../utils/types";

interface Props {
  tasks: ITask[];
  selectTask: (task: ITask) => void;
}

function List({ tasks, selectTask }: Props) {
  return (
    <aside className={style.taskList}>
      <h2>Daily studies</h2>
      <ul>
        {tasks.map((item, index) => (
          <Item key={item.id} selectTask={selectTask} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default List;
