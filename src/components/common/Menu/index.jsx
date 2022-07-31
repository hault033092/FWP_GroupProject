import { Component, MenuItem } from "./styled";

const Menu = () => {
	return (
		<Component>
			<MenuItem to="/find-freelancer">Find A Freelancer</MenuItem>
			<MenuItem to="/become-freelancer">Become A Freelancer</MenuItem>
			<MenuItem to="/faq">FAQs</MenuItem>
		</Component>
	);
};

export default Menu;
