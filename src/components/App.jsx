import React, { Component } from 'react';
import '../styles/App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      headerDarkmode: false
    }
  }

  toggleMenu = () => { this.setState({showMenu: !this.state.showMenu}); }
  toggleDarkmode = () => { this.setState({headerDarkmode: !this.state.headerDarkmode}); }

  render() {
    return (
      <div>
        <aside className={this.state.showMenu === true ? 'side-menu__container side-menu__container-active' : 'side-menu__container'} onClick={ () => this.toggleMenu() }>
          <nav className={this.state.showMenu === true ? 'slide-menu slide-menu-active' : 'slide-menu'}>
            <section className='slide-menu-header'>
              <span className='greeting__text'>Welcome Back</span>
              <div className='profile-picture__container'>
                <img src='https://images.pexels.com/photos/165559/pexels-photo-165559.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='profile-image' className='profile__image' />
              </div>
              <div className='account-details'>
                <span className='name__text'>John Doe</span>
                <span className='email__text'>john.doe@gmail.com</span>
              </div>
            </section>
            <section className='slide-menu-body'>
            </section>
            <section className='slide-menu-footer'>
            </section>
          </nav>
        </aside>

        <div className='root__container'>
          <header className={this.state.headerDarkmode === true ? 'main__header main__header-dark' : 'main__header'}>
            <div className='left__section'>

              <svg className='hamburger__icon' id='Menu_Burger_Icon' data-name='Menu Burger Icon' viewBox='31.5 30 49.9 32' onClick={ () => this.toggleMenu() }>
                 <rect id='Rectangle_9' width='49.9' height='4' className='hamburger__icon__fill' data-name='Rectangle 9' rx='2' transform='translate(31.5 58)' />
                 <rect id='Rectangle_10' width='49.9' height='4'  className='hamburger__icon__fill' data-name='Rectangle 10' rx='2' transform='translate(31.5 44)' />
                 <rect id='Rectangle_11' width='49.9' height='4'  className='hamburger__icon__fill' data-name='Rectangle 11' rx='2' transform='translate(31.5 30)' />
              </svg>

               <svg className='logo__icon' viewBox='150.3 22.2 213.7 42.8'>
                 <path fill='#00ff9b' d='M150.3 65V22.2L193 65z' data-name='Path 1' />
                 <path fill='#003eff' d='M193.1 65h-42.8L193 22.2z' data-name='Path 2' />
                 <text className='logo__text' fill='#432c85' fontFamily='SegoeUI-Semibold,Segoe UI' fontSize='30' fontWeight='600' letterSpacing='.1em' transform='translate(237 56)'>
                     <tspan x='0' y='0'>Minimis</tspan>
                 </text>
               </svg>

            </div>
            <h3 className='date__text'>Today</h3>
            <div className='mode-toggle__container'>
              <span className='mode-toggle-light__text'>Light</span>
              <label class="switch">
                <input type="checkbox" checked={this.state.darkMode} onClick={ () => this.toggleDarkmode() } />
                <span className="slider round"></span>
              </label>
              <span className='mode-toggle-dark__text'>Dark</span>
            </div>
          </header>
        </div>

        <main className='main__container'>
          <div className='main__container__bg'></div>
        </main>

        <footer className='main__footer'>
          <small className='copyright__text'>Copyright © 2018 Minimus</small>
        </footer>
      </div>
    );
  }
}
