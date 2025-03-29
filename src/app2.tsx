import { useState } from "react";
import "./App.css";
// import PrimaryButton from "./components/PrimaryButton";
// import UserCard from "./components/UserCard";
// type userDetails = {
//   name: string | undefined;
//   age: number | null | undefined;
// };

type task = {
  id: number;
  taskTitle: string;
};

function App() {
  // const [count, setCount] = useState<number>(0);
  // const [userDetails, setUserDetails] =
  //   useState<userDetails>(defaultUserDetails);

  const [newTask, setNewTask] = useState<string>("");

  const [taskList, setTaskList] = useState<Array<task> | null>(null);

  const onAddTask = () => {
    if (!newTask)
      return alert("Please enter the Task title to add to the list");

    const newTaskDetails = {
      id:
        taskList && taskList?.length > 0
          ? taskList?.[taskList?.length - 1].id + 1
          : 1,
      taskTitle: newTask,
    };

    // if()

    setTaskList((p) => [...(p ?? []), { ...newTaskDetails }]);
    setNewTask("");
  };

  const onDeleteTask = (taskId: number): void => {
    if (!taskList && taskList?.length <= 0) return;

    const filteredData: Array<task> = taskList?.filter(
      (task) => task.id !== taskId
    );
    setTaskList(filteredData);
  };
  return (
    // <>
    //   <UserCard
    //     user={{
    //       name: "datha",
    //       age: 23,
    //     }}
    //     isOnline={false}
    //   />

    //   <input
    //     value={userDetails?.name}
    //     onChange={(e) =>
    //       setUserDetails((p) => ({ ...p, name: e.target.value }))
    //     }
    //   />
    //   <input
    //     value={userDetails?.age ?? ""}
    //     type="number"
    //     onChange={(e) =>
    //       setUserDetails((p) => ({ ...p, age: Number(e.target.value) || null }))
    //     }
    //   />

    //   <PrimaryButton text="increment" onClick={() => setCount(count + 1)} />
    //   <p>{count}</p>
    // </>

    // <>
    //   <input
    //     value={newTask}
    //     onChange={(e) => setNewTask(e.target.value || "")}
    //   />
    //   <button onClick={onAddTask}>Add</button>

    //   <div>
    //     {taskList &&
    //       taskList?.length > 0 &&
    //       taskList?.map((task) => {
    //         return (
    //           <div
    //             key={task.id}
    //             style={{
    //               display: "flex",
    //               alignItems: "center",

    //               justifyContent: "space-between",
    //             }}
    //           >
    //             <p>{task.taskTitle}</p>
    //             <button onClick={() => onDeleteTask(task.id)}>delete</button>
    //           </div>
    //         );
    //       })}
    //   </div>
    // </>
  );
}

export default App;
