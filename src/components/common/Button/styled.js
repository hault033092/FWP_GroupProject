import styled from "styled-components";

export const Component = styled.button`
	width: ${({ width }) => width || "96px"};
	padding: 4px 8px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ backgroundColor }) => backgroundColor || "#ffffff"};
	color: ${({ color }) => color || "#000000"};
	border: 1px solid;
	border-width: ${({ borderWidth }) => borderWidth || "1px"};
	border-color: ${({ borderColor }) => borderColor || "#000000"};
	border-radius: ${({ borderRadius }) => borderRadius || "5px"};
	font-weight: 700;
	cursor: pointer;
	&:hover {
		background-color: ${({ backgroundColorHover }) =>
			backgroundColorHover || "#d3d4d5"};
		color: ${({ colorHover }) => colorHover || "#000000"};
	}
`;
