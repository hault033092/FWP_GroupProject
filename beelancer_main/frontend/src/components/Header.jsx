import React from 'react'
import styled from 'styled-components'
import LogoPng from '../assets/logo.svg'
import SearchSvg from '../assets/search.svg'
import { NavLink } from 'react-router-dom'

export const Component = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f0a51b;
`

export const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
`
export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  cursor: pointer;
`

export const LogoImage = styled.img.attrs((props) => ({
  src: props.src || LogoPng,
  alt: props.alt || 'logo',
}))`
  width: 100%;
`

export const Search = styled.div`
  width: 100%;
`

export const IconSearch = styled.img.attrs((props) => ({
  src: props.src || SearchSvg,
}))`
  width: 16px;
  transform: translateX(calc(16px + 8px));
`

export const Input = styled.input`
  width: 288px;
  padding: 4px 4px 4px 24px;
  border-radius: 10px;
`

export const DivFlexComponent = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'flex-start'};
`

export const Menu = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
`

export const MenuItem = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: #000000;
  &:hover {
    color: #6060bb;
  }
`
export const Button = styled.button`
  width: ${({ width }) => width || '96px'};
  padding: 4px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  color: ${({ color }) => color || '#000000'};
  border: 1px solid;
  border-width: ${({ borderWidth }) => borderWidth || '1px'};
  border-color: ${({ borderColor }) => borderColor || '#000000'};
  border-radius: ${({ borderRadius }) => borderRadius || '5px'};
  font-weight: 700;
  cursor: pointer;
  &:hover {
    background-color: ${({ backgroundColorHover }) =>
      backgroundColorHover || '#d3d4d5'};
    color: ${({ colorHover }) => colorHover || '#000000'};
  }
`
const Header = () => {
  return (
    <div>
      <Component>
        <Left>
          <Logo>
            <NavLink to='/'>
              <LogoImage />
            </NavLink>
          </Logo>
          <Search>
            <DivFlexComponent align='center'>
              <IconSearch />
              <Input />
            </DivFlexComponent>
          </Search>
        </Left>
        <Right>
          <Menu>
            <MenuItem to='/'>Home</MenuItem>
            <MenuItem to='/find-freelancer'>Find A Freelancer</MenuItem>
            <MenuItem to='/become-freelancer'>Become A Freelancer</MenuItem>
            <MenuItem to='/rating'>Rating</MenuItem>
            <MenuItem to='/contactus'>Contact Us</MenuItem>
            <MenuItem to='/aboutus'>About Us</MenuItem>
            <MenuItem to='/faq'>FAQs</MenuItem>
          </Menu>
          <Button
            backgroundColor='transparent'
            color='#000000'
            borderRadius='10px'
            borderWidth='2px'
          >
            Sign In
          </Button>
          <Button
            backgroundColor='#000000'
            color='#ffffff'
            borderRadius='10px'
            borderWidth='2px'
          >
            Sign Up
          </Button>
        </Right>
      </Component>
    </div>
  )
}

export default Header
