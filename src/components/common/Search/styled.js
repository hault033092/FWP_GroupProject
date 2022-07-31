import styled from "styled-components";
import SearchSvg from "../../icon/search.svg";

export const Component = styled.div`
	width: 100%;
`;

export const IconSearch = styled.img.attrs((props) => ({
	src: props.src || SearchSvg,
}))`
	width: 16px;
	transform: translateX(calc(16px + 8px));
`;

export const Input = styled.input`
	width: 288px;
	padding: 4px 4px 4px 24px;
	border-radius: 10px;
`;
