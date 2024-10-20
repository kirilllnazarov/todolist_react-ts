import { TasksType } from "../../App";
import { Button } from "../Button/Button";
import { Input } from "../Inputs/InputWithButton/Input";
import { InputCheckbox } from "../Inputs/InputCheckbox/InputCheckbox";

type TodolistType = {
	todolistTitle: string;
	array: TasksType[];
	removeTask: (id: number) => void;
	addTask: (nameTask: string) => void;
	changeInputCheckboxStatus: (taskId: number, value: boolean) => void;
	filterChekedTask: (filterValue: boolean | null) => void;
};

export const Todolist = ({
	todolistTitle,
	array,
	removeTask,
	addTask,
	changeInputCheckboxStatus,
	filterChekedTask,
}: TodolistType) => {
	const styleTodolist = {
		fontSize: "20px",
	};
	return (
		<section style={styleTodolist}>
			{/* добавляем task title */}
			<h2>{todolistTitle}</h2>

			{/* input для добавления тасок */}
			<Input addTask={addTask} />

			{/* мапим таски в список с добавлением чекбокса и кноки удаления таски*/}
			<ul>
				{array.map((t) => {
					return (
						<li key={t.id}>
							<InputCheckbox changeInputCheckboxStatus={changeInputCheckboxStatus} taskId={t.id} />
							<span>{t.name}</span>
							<button onClick={() => removeTask(t.id)}>✖️</button>
						</li>
					);
				})}
			</ul>

			{/* кнопки для сортировки тудулиста */}
			<Button name={"All"} buttonFilter={() => filterChekedTask(null)} />
			<Button name={"Done"} buttonFilter={() => filterChekedTask(true)} />
			<Button name={"Active"} buttonFilter={() => filterChekedTask(false)} />
		</section>
	);
};
