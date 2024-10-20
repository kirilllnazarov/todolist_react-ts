type ButtonType = {
	name: string;
	buttonFilter: () => void;
};

export const Button = ({ name, buttonFilter }: ButtonType) => {
	const onClickHandler = () => {
		buttonFilter();
	};

	return <button onClick={onClickHandler}>{name}</button>;
};
