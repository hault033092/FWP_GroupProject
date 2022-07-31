import { Component } from "./styled";

const Button = (props) => {
	return (
		<Component
			width={props.width}
			backgroundColor={props.backgroundColor}
			color={props.color}
			borderWidth={props.borderWidth}
			borderColor={props.borderColor}
			borderRadius={props.borderRadius}
			onClick={props.onClick}
		>
			{props.children}
		</Component>
	);
};

export default Button;
