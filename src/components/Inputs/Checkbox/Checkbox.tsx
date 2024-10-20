import { useState } from "react";

type CheckboxType = {
	changeCheckboxStatus: (taskId: number, value: boolean) => void;
	taskId: number;
};

export const Checkbox = ({ changeCheckboxStatus, taskId }: CheckboxType) => {
	// меняем значение checked через 
	const [checked, setChecked] = useState(false);

	const onChangeHandler = () => {
		let onClickCheckedValue = !checked
		setChecked(onClickCheckedValue);
		changeCheckboxStatus(taskId, onClickCheckedValue);
	};

	return <input type={"checkbox"} checked={checked} onChange={onChangeHandler} />;
};
