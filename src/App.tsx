import { useState } from "react";
import "./App.css";
import { Todolist } from "./components/Todolist/Todolist";

export type TasksType = {
	id: number;
	name: string;
	isDone: boolean;
};

export const App = () => {
	const tasks: TasksType[] = [
		{ id: 1, name: "read", isDone: false },
		{ id: 2, name: "eat", isDone: false },
		{ id: 3, name: "sleep", isDone: false },
		{ id: 4, name: "walk", isDone: false },
		{ id: 5, name: "code", isDone: false },
		{ id: 6, name: "drive", isDone: false },
		{ id: 7, name: "work", isDone: false },
	];

	let [array, setArray] = useState<TasksType[]>(tasks);

	const removeTask = (id: number) => {
		setArray(
			array.filter((t) => {
				return t.id !== id;
			})
		);
	};

	const addTask = (nameTask: string) => {
		!nameTask
			? alert("Enter task name!")
			: setArray([{ id: array.length + 1, name: nameTask, isDone: false }, ...array]);
	};

	const changeInputCheckboxStatus = (taskId: number, value: boolean) => {
		setArray(array.map((el) => (el.id === taskId ? { ...el, isDone: value } : el)));
		// console.log(array.map((el) => (el.id === taskId ? { ...el, isDone: value } : el)));
	};

	const filterChekedTask = (filterValue: boolean | null) => {
		if (filterValue === true) {
			setArray((array = [...array.filter((el) => el.isDone)]));
		} else if (filterValue === false) {
			setArray((array = [...tasks.filter((el) => !el.isDone)]));
		} else {
			setArray(tasks);
		}
		console.log(filterValue);
	};

	return (
		<div className="App">
			<Todolist
				todolistTitle={"Tasks list:"}
				array={array}
				removeTask={removeTask}
				addTask={addTask}
				changeInputCheckboxStatus={changeInputCheckboxStatus}
				filterChekedTask={filterChekedTask}
			/>
		</div>
	);
};
