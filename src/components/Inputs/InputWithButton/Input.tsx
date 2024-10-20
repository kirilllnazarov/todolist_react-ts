import { ChangeEvent, useState } from "react";

type InputType = {
	addTask: (nameTask: string) => void;
};

export const Input = ({ addTask }: InputType) => {
	let [nameTask, setNameTask] = useState("");

	const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setNameTask(event.currentTarget.value);
	const onClickHandler = () => {
		addTask(nameTask);
		setNameTask("");
	};

	return (
		<>
			<input value={nameTask} onChange={onChangeHandler} placeholder="enter task name"/>
			<button onClick={onClickHandler}>➕</button>
		</>
	);
};