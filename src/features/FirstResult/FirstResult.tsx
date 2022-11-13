import React, {useState} from "react";
import "./FirstResult.scss";

type Props = {
    ticketData:{to:string, from: string, dateDeparture: string};
};

export const FirstResult = ({ticketData}: Props) => {
    const avaliableTime = [{startTime: '9:20', finishTime: '11:05'}, {startTime: '10:20', finishTime: '13:05'}, {startTime: '11:20', finishTime: '12:05'}]
    const[flightTime, setFlightTime]=useState(avaliableTime[0])
  return (
    <div className="firstResult__wrapper">
      <div className="firstResult__company">
        <div className="company__status">Невозвратный</div>
        <div className="company__logo">
          <img
            src={require("../../img/s7logo.png")}
            alt="company logo"
            className="image"
          />
        </div>
        <div className="company__name">S7 Airlines</div>
      </div>
      <div className="firstResult__parametrs">
        <div className="parametrs__start">
          <div className="parametrs__time1">{flightTime.startTime}</div>
          <div className="parametrs__city">{ticketData.from}</div>
          <div className="parametrs__date1">{ticketData.dateDeparture}</div>
        </div>
        <div className="parametrs__way_wrapper">
          <div className="parametrs__way">
            <div className="way__start">SVO</div>

            <div className="way__finish">ROV</div>
          </div>
          <div className="parametrs__line">
            <div className="dot"> </div>
            <hr />
            <div className="dot"> </div>
          </div>
          <div className="parametrs__length">В пути 1 ч 55 мин</div>
          <ul className="parametrs__departure">
            {avaliableTime.map((item)=>(
                <li key={item.startTime} className={flightTime.startTime===item.startTime?"departure__item active__item":"departure__item"} onClick={e=>{setFlightTime(item)}}>{item.startTime} - {item.finishTime}</li>
            ))}

          </ul>
        </div>

        <div className="parametrs__finish">
          <div className="parametrs__time1">{flightTime.finishTime}</div>
          <div className="parametrs__city">{ticketData.to}</div>
          <div className="parametrs__date1">{ticketData.dateDeparture}</div>
        </div>
      </div>
      <div className="firstResult__baggage">
      <img
            src={require("../../img/багаж.png")}
            alt="company logo"
            className="image"
          />
      </div>
      <div className="firstResult__price">4150</div>
    </div>
  );
};
