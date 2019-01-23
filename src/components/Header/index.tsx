import * as React from 'react';

import './styles/styles.scss';
import { Link } from 'react-router-dom';


export interface IProps {
  showSearch?: boolean
}

export const Header = (props: IProps) => (
  <header className="header">
    <Link to="/">
      <figure className="header__brand">
        <img className="header__logo-img" src=" src /assets/img/logo.png" alt="Logotipo Estudar Com Você " srcSet="src/assets/img/logo.png" />
      </figure>
    </Link>
  </header>
);
