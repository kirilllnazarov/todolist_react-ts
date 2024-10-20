import { useState } from "react";

type InputCheckboxType = {
	changeInputCheckboxStatus: (taskId: number, value: boolean) => void;
	taskId: number;
};

export const InputCheckbox = ({ changeInputCheckboxStatus, taskId }: InputCheckboxType) => {
	// меняем значение checked через 
	const [checked, setChecked] = useState(false);

	const onChangeHandler = () => {
		let onClickCheckedValue = !checked
		setChecked(onClickCheckedValue);
		changeInputCheckboxStatus(taskId, onClickCheckedValue);
	};

	return <input type={"checkbox"} checked={checked} onChange={onChangeHandler} />;
};
