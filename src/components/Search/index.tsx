import * as React from 'react';

import './styles/styles.scss';

export const Search = () => (
  <div className="search">
    <div className="search__input">
      <input className="form-control" placeholder="Informe o nome do curso que deseja encontrar" />
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
      <i className="icon-bank"></i>
    </div>
  </div>
);
