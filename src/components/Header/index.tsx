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
{/*     <div className="search">
      <div className="search__input">
        <input className="form-control" />
        <button className="btn">O</button>
      </div>
      <div className="search__filters">
        <div className="search__radio-label">
          <input id="ipt1" type="radio" name="filter" />
          <label htmlFor="ipt1">Todos</label>
        </div>
        <div className="search__radio-label">
          <input id="ipt2" type="radio" name="filter" />
          <label htmlFor="ipt2" >Geral</label>
        </div>
        <div className="search__radio-label">
          <input id="ipt3" type="radio" name="filter" />
          <label htmlFor="ipt3">Especifico</label>
        </div>
      </div>
    </div>
 */}  </header>
);
