import React from "react";
import "./TwoWayResult.scss";

type Props = {
  ticketData:{to:string, from: string, dateDeparture: string, dateBack: string};
};

export const TwoWayResult = ({ticketData}: Props) => {
  return (
    <>
      <div className="twoWayResult">
      <div className="twoWayResult__wrapper">
        <div className="twoWayResult__company">
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
        <div className="twoWayResult__parametrs border">
          <div className="parametrs__start">
            <div className="parametrs__time1">22:57</div>
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
          </div>
          <div className="parametrs__finish">
            <div className="parametrs__time1">11:05</div>
            <div className="parametrs__city">{ticketData.to}</div>
            <div className="parametrs__date1">{ticketData.dateDeparture}</div>
          </div>
        </div>
        <div className="firstResult__baggage border">
          <img
            src={require("../../img/багаж.png")}
            alt="company logo"
            className="image"
          />
        </div>
        <div className="twoWayResult__price">9300</div>
      </div>
      <div className="twoWayResult__wrapper">
        <div className="twoWayResult__company">
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

        <div className="twoWayResult__parametrs">
        
          <div className="parametrs__start">
            <div className="parametrs__time1">22:57</div>
            <div className="parametrs__city">{ticketData.to}</div>
            <div className="parametrs__date1">{ticketData.dateBack?ticketData.dateBack:ticketData.dateDeparture.split('.').map((item, index)=>index===0?+item+1:item).join('.')}</div>
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
          </div>

          <div className="parametrs__finish">
            <div className="parametrs__time1">11:05</div>
            <div className="parametrs__city">{ticketData.from}</div>
            <div className="parametrs__date1">{ticketData.dateBack?ticketData.dateBack:ticketData.dateDeparture.split('.').map((item, index)=>index===0?+item+1:item).join('.')}</div>
          </div>
        </div>
        <div className="firstResult__baggage">
          <img
            src={require("../../img/багаж.png")}
            alt="company logo"
            className="image"
          />
        </div>
        <div className="firstResult__price"></div>
      </div>
      </div>
      
    </>
  );
};
