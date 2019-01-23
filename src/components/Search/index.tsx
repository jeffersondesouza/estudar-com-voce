import * as React from 'react';

import './styles/styles.scss';

export interface IProps {
  onFilter(e): any
}

export const Search = (props: IProps) => (
  <div className="search">
    <div className="search__input">
      <input onChange={props.onFilter} className="form-control" placeholder="Informe o nome do curso que deseja encontrar" name="course" />
    </div>
    <div className="search__filters">
      <div className="search__radio-label">
        <input onClick={props.onFilter} id="ipt1" type="radio" name="type" value="all"/>
        <label htmlFor="ipt1">Todos</label>
      </div>
      <div className="search__radio-label">
        <input onClick={props.onFilter} id="ipt2" type="radio" name="type" value="generic" />
        <label htmlFor="ipt2" >Geral</label>
      </div>
      <div className="search__radio-label">
        <input onClick={props.onFilter} id="ipt3" type="radio" name="type" value="custom" />
        <label htmlFor="ipt3">Especifico</label>
      </div>
      <i className="icon-bank"></i>
    </div>
  </div>
);
