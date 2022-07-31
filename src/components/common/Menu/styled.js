import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Component = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 24px;
`;

export const MenuItem = styled(NavLink)`
	cursor: pointer;
	text-decoration: none;
	color: #000000;
	&:hover {
		color: #6060bb;
	}
`;
