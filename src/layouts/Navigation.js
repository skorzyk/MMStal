import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navigation.css';
import logo from '../images/svg/MMstal-logo-SVG.svg';

class Navigation extends React.Component {
  state = { menuOpen: false };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  handlerMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    return (
      <>
        <img src={logo} alt='logo MMstal' className='menu__logo' />
        <ul className={`menu__list ${this.state.menuOpen ? 'show' : ''}`}>
          <li className='menu__item'>
            <NavLink
              to='/'
              end
              className='menu__link'
              onClick={this.closeMenu} // Dodane
            >
              Strona główna
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to='/oferta'
              className='menu__link'
              onClick={this.closeMenu} // Dodane
            >
              Oferta
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to='/projekt'
              className='menu__link'
              onClick={this.closeMenu} // Dodane
            >
              Własny projekt
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to='/realizacje'
              className='menu__link'
              onClick={this.closeMenu} // Dodane
            >
              Nasze realizacje
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to='/o-nas'
              className='menu__link'
              onClick={this.closeMenu} // Dodane
            >
              O nas
            </NavLink>
          </li>
          <li className='menu__item'>
            <NavLink
              to='/kontakt'
              className='menu__link'
              onClick={this.closeMenu} // Dodane
            >
              Kontakt
            </NavLink>
          </li>
        </ul>
        <div className='header__medias'>
          <a
            href='https://www.facebook.com/MMstalMarcinPiszczek'
            target={'_blank'}
            alt='MMstal facebook'
            rel='noreferrer'
          >
            <span className='fa fa-facebook-square' aria-hidden='true'></span>
          </a>
          <a
            href='https://www.instagram.com/mmstal.pl/'
            target={'_blank'}
            alt='MMstal instagram'
            rel='noreferrer'
          >
            <span className='fa fa-instagram' aria-hidden='true'></span>
          </a>
        </div>
        <div
          className={`menu-btn ${this.state.menuOpen ? 'open' : ''}`}
          onClick={this.handlerMenu}
        >
          <div className='menu-btn__burger'></div>
        </div>
      </>
    );
  }
}

export default Navigation;
