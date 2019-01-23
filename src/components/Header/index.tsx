import * as React from 'react';

import './styles/styles.scss';


export interface IProps {
  showSearch?: boolean
}

export const Header = (props: IProps) => (
  <header className="header">
    <figure className="header__brand">
      <img className="header__logo-img" src=" src /assets/img/logo.png" alt="Logotipo Estudar Com Você " srcSet="src/assets/img/logo.png" />
    </figure>
  </header>
);
