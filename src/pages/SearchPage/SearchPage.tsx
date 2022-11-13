import React from "react";
import './SearchPage.scss'
import {SearchForm} from '../../features/SearchForm/SearchForm'

type Props = {
    setTicketData:Function;
};

export const SearchPage = ({setTicketData}: Props) => {
  return (
    <>
      <div className="SearchPage__wrapper">
        <SearchForm setTicketData={setTicketData}/>
      </div>
    </>
  );
};
