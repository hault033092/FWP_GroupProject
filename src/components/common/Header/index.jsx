import { Component, Left, Right } from "./styled";

import Logo from "../Logo";
import Search from "../Search";
import Menu from "../Menu";
import Button from "../Button";

const Header = () => {
	const clickSignIn = () => {
		console.log("click SignIn");
	};
	const clickSignUp = () => {
		console.log("click SignUp");
	};
	return (
		<Component>
			<Left>
				<Logo />
				<Search />
			</Left>
			<Right>
				<Menu />
				<Button
					backgroundColor="transparent"
					color="#000000"
					borderRadius="10px"
					borderWidth="2px"
					onClick={clickSignIn}
				>
					Sign In
				</Button>
				<Button
					backgroundColor="#000000"
					color="#ffffff"
					borderRadius="10px"
					borderWidth="2px"
					onClick={clickSignUp}
				>
					Sign Up
				</Button>
			</Right>
		</Component>
	);
};

export default Header;
