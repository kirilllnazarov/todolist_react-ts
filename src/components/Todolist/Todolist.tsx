import { TasksType } from "../../App";
import { Button } from "../Button/Button";
import { Input } from "../Inputs/InputWithButton/Input";
import { InputCheckbox } from "../Inputs/InputCheckbox/InputCheckbox";
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
	const changeInputCheckboxStatus = (taskId: number, value: boolean) => {
		setArray(array.map((el) => (el.id === taskId ? { ...el, isDone: value } : el)));
		// console.log(array.map((el) => (el.id === taskId ? { ...el, isDone: value } : el)));
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
