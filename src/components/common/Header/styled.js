import styled from "styled-components";

export const Component = styled.div`
	width: calc(100% - 16px * 2);
	padding: 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f0a51b;
`;

export const Left = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export const Right = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: 16px;
`;
