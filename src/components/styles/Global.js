import styled from "styled-components";

export const DivFlexComponent = styled.div`
	display: flex;
	justify-content: ${({ justify }) => justify || "flex-start"};
	align-items: ${({ align }) => align || "flex-start"};
`;
