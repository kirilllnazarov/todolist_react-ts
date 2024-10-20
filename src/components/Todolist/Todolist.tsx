import { TasksType } from "../../App";
import { Button } from "../Button/Button";
import { Checkbox } from "../Inputs/Checkbox/Checkbox";
import { Input } from "../Inputs/InputWithButton/Input";

import { useState } from "react";

type TodolistType = {
	todolistTitle: string;
	tasksArray: TasksType[];
};

export const Todolist = ({ todolistTitle, tasksArray }: TodolistType) => {
	let [array, setArray] = useState<TasksType[]>(tasksArray);

	// удаляем таску
	const removeTask = (id: number) => {
		setArray(
			array.filter((t) => {
				return t.id !== id;
			})
		);
	};

	// добавляем таску
	const addTask = (nameTask: string) => {
		!nameTask
			? alert("Enter task name!")
			: setArray([{ id: array.length + 1, name: nameTask, isDone: false }, ...array]);
	};

	// изменяем чекбокс по клику и сетаем в array
	const changeCheckboxStatus = (taskId: number, value: boolean) => {
		setArray(array.map((el) => (el.id === taskId ? { ...el, isDone: value } : el)));
	};

	// фильтруем таски по нажатию на кнопки
	const filterChekedTask = (filterValue: boolean | null) => {
		if (filterValue === true) {
			setArray((array = [...array.filter((el) => el.isDone)]));
		} else if (filterValue === false) {
			setArray((array = [...tasksArray.filter((el) => !el.isDone)]));
		} else {
			setArray(tasksArray);
		}
		console.log(filterValue);
	};

	// стили шрифта
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
							<Checkbox changeCheckboxStatus={changeCheckboxStatus} taskId={t.id} />

							<span>{t.name}</span>

							<button onClick={() => removeTask(t.id)}>✖️</button>
						</li>
					);
				})}
			</ul>

			{/* кнопки для сортировки тудулиста */}
			<Button title={"All"} onClick={() => filterChekedTask(null)} />
			<Button title={"Done"} onClick={() => filterChekedTask(true)} />
			<Button title={"Active"} onClick={() => filterChekedTask(false)} />
		</section>
	);
};
