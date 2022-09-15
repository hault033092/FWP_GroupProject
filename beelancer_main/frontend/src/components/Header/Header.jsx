import React from 'react'
import styled from 'styled-components'
import LogoPng from '../../assets/svg/logo.svg'
import SearchSvg from '../../assets/svg/search.svg'
import { NavLink } from 'react-router-dom'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import './grid.css'
import './Header.css'

export const Component = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  justify-content: space-evenly;
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
  width: 48px;
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
  width: 90%;
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
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;

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
    <div className='header'>
     <div className='header__pc'>
          <Component>
            <Left>
              <Logo>
                <NavLink to='/'>
                  <LogoImage />
                </NavLink>
              </Logo>
              <Search>
                <DivFlexComponent align='center'>
                  <Paper
                    className='search__menu'
                    component='form'
                    sx={{
                      p: '2px 4px',
                      display: 'flex',
                      alignItems: 'center',
                      ml: 3,
                      mt: -1,
                    }}
                  >
                    <IconButton
                      type='button'
                      sx={{ p: '10px' }}
                      aria-label='search'
                    >
                      <SearchIcon />
                    </IconButton>
                    <InputBase
                      sx={{ ml: 1, flex: 1,minWidth: '580px' }}
                      placeholder='Search'
                      inputProps={{
                        'aria-label': 'search google maps',
                      }}
                    />
                  </Paper>
                </DivFlexComponent>
              </Search>
            </Left>
            <Right>
              <Menu>
                <MenuItem to='/joblist'>Job List</MenuItem>
                <MenuItem to='/rating'>Rating</MenuItem>
                <MenuItem to='/AboutUs'>About Us</MenuItem>
              </Menu>
              <MenuItem to='/signin'>
                <Button
                  backgroundColor='transparent'
                  color='#000000'
                  borderRadius='10px'
                  borderWidth='2px'
                >
                  Sign In
                </Button>
              </MenuItem>

              <MenuItem to='/signup'>
                <Button
                  backgroundColor='#000000'
                  color='#ffffff'
                  borderRadius='10px'
                  borderWidth='2px'
                >
                  Sign Up
                </Button>
              </MenuItem>
            </Right>
          </Component>
        </div>
        <div className='header__mobile'>
          <NavLink to='/'>
            <LogoImage
              style={{
                height: '70px',
              }}
            />
          </NavLink>
          <div className='mobile__search'>
            <i className='fa-solid fa-magnifying-glass'></i>
            <input
              placeholder='Search'
              type='text'
              className='mobile__search--input'
            />
          </div>

          <div className='mobile__menu'>
            <i className='fa-solid fa-bars'></i>
            <div className='mobile__list'>
              <NavLink className='mobile__item' to='/joblist'>
                Job List
              </NavLink>
              <NavLink className='mobile__item' to='/rating'>
                Rating
              </NavLink>
              <NavLink className='mobile__item' to='/findfreelancer'>
                Find A Freelancer
              </NavLink>
              <NavLink className='mobile__item' to='/becomefreelancer'>
                Become A Freelancer
              </NavLink>
              <NavLink className='mobile__item' to='/faq'>
                FAQs
              </NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header
