import styled from "styled-components";
import LogoPng from "../../images/logo.png";

export const Component = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 36px;
	height: 36px;
	cursor: pointer;
`;

export const LogoImage = styled.img.attrs((props) => ({
	src: props.src || LogoPng,
	alt: props.alt || "logo",
}))`
	width: 100%;
`;
