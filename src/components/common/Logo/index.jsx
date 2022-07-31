import { Component, LogoImage } from "./styled";
import { NavLink } from "react-router-dom";

const Header = () => {
	return (
		<Component>
			<NavLink to="/">
				<LogoImage />
			</NavLink>
		</Component>
	);
};

export default Header;
