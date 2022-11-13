import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./SearchFrom.scss";

type Props = {
  setTicketData: Function;
};

export const SearchForm = ({ setTicketData }: Props) => {
  const navigate = useNavigate();

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [dateDeparture, setDateDeparture] = useState("");
  const [dateBack, setDateBack] = useState("");

  const [fromDirty, setFormDirty] = useState(false);
  const [toDirty, setToDirty] = useState(false);
  const [dateDepartureDirty, setDateDepartureToDirty] = useState(false);
  const [dateBackDirty, setDateBackDirty] = useState(false);

  const [fromError, setFormError] = useState("Обязательное поле для ввода");
  const [toError, setToError] = useState("Обязательное поле для ввода");
  const [dateDepartureError, setDateDepartureError] = useState(
    "Обязательное поле для ввода"
  );
  const [dateBackError, setDateBackError] = useState("");

  

  const blurHandler = (e: any): void => {
    switch (e.target.name) {
      case "from":
        setFormDirty(true);
        break;
      case "to":
        setToDirty(true);
        break;
      case "dateDeparture":
        setDateDepartureToDirty(true);
        break;
      case "dateBack":
        setDateBackDirty(true);
        break;
    }
  };

  const handleFrom = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFrom(e.target.value);
    if (e.target.value.length > 0) {
      setFormError("");
    } else setFormError("Обязательное поле для ввода");
  };
  const handleTo = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTo(e.target.value);
    if (e.target.value.length > 0) {
      setToError("");
    } else setToError("Обязательное поле для ввода");
  };

  const handleDateDeparture = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDateDeparture(e.target.value);
    if (e.target.value.length > 0) {
      setDateDepartureError("");
    } else setDateDepartureError("Обязательное поле для ввода");
  };

  const handleDateBack = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setDateBack(e.target.value);
    let goDate = new Date(dateDeparture);
    let backDate = new Date(e.target.value)
    if (backDate< goDate) {
      setDateBackError("Дата обратного билета раньше основного");
    } else setDateBackError("");
  };

  function submitForm(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    setTicketData({
      from,
      to,
      dateDeparture: dateDeparture.split("-").reverse().join("."),
      dateBack: dateBack.split("-").reverse().join("."),
    });
    setFrom("");
    setTo("");
    setDateDeparture("");
    setDateBack("");
    navigate("/result");
  }

  return (
    <div>
      <h2>{dateDeparture}</h2>
      <form className="searchForm" onSubmit={submitForm}>
        <div className="seaerchForm__wrapper">
          <div className="searchForm__item">
            <label htmlFor="" className="searchForm__label">
              Откуда
            </label>
            <input
              type="text"
              className="searchForm__input"
              placeholder="Город вылета"
              value={from}
              onChange={handleFrom}
              onBlur={(e) => {
                blurHandler(e);
              }}
              name="from"
            />
            {fromDirty && fromError && (
              <div className="errorWrapper">
                <img
                  className="image"
                  src={require("../../img/Union.png")}
                  alt="arrow"
                />
                <span className="error">{fromError}</span>
              </div>
            )}
          </div>
          <div className="searchForm__item">
            <label htmlFor="" className="searchForm__label">
              Куда
            </label>
            <input
              type="text"
              className="searchForm__input"
              placeholder="Город прилета"
              value={to}
              onChange={handleTo}
              onBlur={(e) => {
                blurHandler(e);
              }}
              name="to"
            />
            {toDirty && toError && (
              <div className="errorWrapper">
                <img
                  className="image"
                  src={require("../../img/Union.png")}
                  alt="arrow"
                />
                <span className="error">{toError}</span>
              </div>
            )}
          </div>
          <div className="searchForm__item">
            <label htmlFor="" className="searchForm__label">
              Туда
            </label>
            <input
              type="date"
              className="searchForm__input"
              value={dateDeparture}
              name="dateDeparture"
              onChange={handleDateDeparture}
              onBlur={(e) => {
                blurHandler(e);
              }}
            />
            {dateDepartureDirty && dateDepartureError && (
              <div className="errorWrapper">
                <img
                  className="image"
                  src={require("../../img/Union.png")}
                  alt="arrow"
                />
                <span className="error">{dateDepartureError}</span>
              </div>
            )}
          </div>
          <div className="searchForm__item">
            <label htmlFor="" className="searchForm__label">
              Обратно
            </label>
            <input
              type="date"
              className="searchForm__input"
              value={dateBack}
              name="dateBack"
              onChange={handleDateBack}
              onBlur={(e) => {
                blurHandler(e);
              }}
            />
            {dateBackDirty && dateBackError && (
              <div className="errorWrapper">
                <img
                  className="image"
                  src={require("../../img/Union.png")}
                  alt="arrow"
                />
                <span className="error">{dateBackError}</span>
              </div>
            )}
          </div>
        </div>
        <div className="button__wrapper">
          <button type="submit" className="button" disabled={!to || !from || !dateDeparture || dateBackError.length>0}>
            Найти билеты
          </button>
        </div>
      </form>
    </div>
  );
};
