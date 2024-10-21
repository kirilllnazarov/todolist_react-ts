import "./App.css";
import { Todolist } from "./components/Todolist/Todolist";

export type TasksType = {
	id: number;
	name: string;
	isDone: boolean;
};

const tasks: TasksType[] = [
	{ id: 1, name: "read", isDone: false },
	{ id: 2, name: "eat", isDone: false },
	{ id: 3, name: "sleep", isDone: false },
	{ id: 4, name: "walk", isDone: false },
	{ id: 5, name: "code", isDone: false },
	{ id: 6, name: "drive", isDone: false },
	{ id: 7, name: "work", isDone: false },
];

export const App = () => {
	return (
		<div className="App">
			<Todolist todolistTitle={"Tasks list:"} tasksArray={tasks} />
		</div>
	);
};
