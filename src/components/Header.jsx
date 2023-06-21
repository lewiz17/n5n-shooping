import { useTheme } from '../hooks/useTheme';
import '../styles/header.scss';
import styled from "styled-components";
import Cart from './Cart';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ToggleButton } from './Elements';

export const LinkStyled = styled(Link)`
  color: #000;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  text-align: center;
`;

const Header = () => {
  const { theme, toggleTheme, themeName } = useTheme();
  const [checked, setChecked] = useState(false);

  const [openMenu, setOpenMenu] = useState('');

  const toggleMenu = () => {
    openMenu === '' ? setOpenMenu('opened') : setOpenMenu('');
  }

  return (
    <div className="header" style={{ backgroundColor: theme.bgColor, color: theme.textColor }} >
        <div className="container-top">
          <h1 className="logo">N5 Shop</h1>
          <ToggleButton onClick={toggleTheme} checked={checked} theme={theme} transition={300}>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <span />
          </ToggleButton>
          <nav className={`navbar-top ${openMenu} ${themeName}`} onClick={toggleMenu}>
            <ul className={`menu-top ${themeName}`}>
              <li><LinkStyled to="/">Inicio</LinkStyled></li>
              <li><LinkStyled to="/add">Agregar producto</LinkStyled></li>
            </ul>
          </nav>
          <Cart />
        </div>
        
    </div>
  )
}

export default Header