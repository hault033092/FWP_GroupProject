import { Component, IconSearch, Input } from "./styled";
import { DivFlexComponent } from "../../styles/Global";

const Search = () => {
	return (
		<Component>
			<DivFlexComponent align="center">
				<IconSearch />
				<Input />
			</DivFlexComponent>
		</Component>
	);
};

export default Search;
