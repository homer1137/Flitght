import React from "react";
import './ResultPage.scss'
import { FirstResult } from "../../features/FirstResult/FirstResult";
import {TwoWayResult} from '../../features/TwoWayResult/TwoWayResult'

type Props = {
    ticketData:{to:string, from: string, dateDeparture: string, dateBack: string};
};

export const ResultPage = ({ticketData}: Props) => {
  return (
    <>
      <div className="resultPage__wrapper">
        <FirstResult ticketData={ticketData}/>
        <div className="twoWayResult__position"><TwoWayResult ticketData={ticketData}/></div>
      </div>
      
    </>
  );
};
