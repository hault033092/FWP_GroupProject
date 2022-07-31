import { Component } from "./styled";

import Header from "../../common/Header";

const CommonLayout = (props) => {
	return (
		<Component>
			<Header />
			{props.children}
		</Component>
	);
};

export default CommonLayout;
