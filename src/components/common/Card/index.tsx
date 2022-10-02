import React from 'react';
import style from './style.module.css';

interface ICardProps {
  date: number | string;
  dayWeatherDescripton: string;
  icon: string;
  tempeture: number;
  feelsLike: number;
  humidity: number;
  clouds?: number;
  rainPosibility?: number;
  pressure: number;
  windSpeed: number;
  uvi: number;
}

export const Card: React.FC<ICardProps> = (props: ICardProps) => {
  const {
    date,
    dayWeatherDescripton,
    icon,
    tempeture,
    feelsLike,
    humidity,
    clouds,
    rainPosibility,
    pressure,
    windSpeed,
    uvi
  } = props;

  const setCardTitle = () => {
    let newDate = date;
    if (typeof date === 'number') {
      const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'domingo'];
      const millisecondsDate = new Date(Number(newDate) * 1000);
      newDate = days[millisecondsDate.getDay()];
    }
    return newDate + ' - ' + dayWeatherDescripton;
  };

  const formatData = (value: number, type?: string): string => {
    switch (type) {
      case 'temperature':
        return Math.round(value) + ' °c';
      case 'percentage':
        return Math.round(value) + ' %';
      case 'pressure':
        return Math.round(value) + ' hPa';
      case 'speed':
        return Math.round(value) + ' m/s';
      case 'distance':
        return Math.round(value) + ' m';
      case 'time':
        return new Date(value * 1000).toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit'
        });
      default:
        return String(Math.round(value));
    }
  };

  const renderRowCardDescription = (
    leftSubtitle: string,
    leftDescription: string,
    rightSubtitle: string,
    rightDescription: string
  ): JSX.Element => (
    <div className={style.cardRow}>
      <div className={style.cardCol}>
        <h4 className={style.cardColItem}>{leftSubtitle}</h4>
        <p className={style.cardColItem}>{leftDescription}</p>
      </div>
      <div className={style.cardCol}>
        <h4 className={style.cardColItem}>{rightSubtitle}</h4>
        <p className={style.cardColItem}>{rightDescription}</p>
      </div>
    </div>
  );

  return (
    <div className={style.card}>
      <div className={style.cardRowTitleImage}>
        <div className={style.cardRowTitle}>
          <h2>{setCardTitle()}</h2>
        </div>

        <img
          className={style.carRowImage}
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='weather forecast logo'
        />
        <h1 className={style.cardRowTemp}>{formatData(tempeture, 'temperature')}</h1>
      </div>
      <div className={style.cardRowValues}>
        <div className={style.cardRowGroup}>
          {renderRowCardDescription(
            'Sensación Térmica',
            formatData(feelsLike, 'temperature'),
            'Humedad',
            formatData(humidity, 'percentage')
          )}
        </div>
        <div className={style.cardRowGroup}>
          {clouds !== undefined
            ? renderRowCardDescription(
                'Nubosidad',
                formatData(clouds, 'percentage'),
                'Presion',
                formatData(pressure, 'pressure')
              )
            : renderRowCardDescription(
                'Probabilidad de lluvia',
                formatData(rainPosibility! * 100, 'percentage'),
                'Presion',
                formatData(pressure, 'pressure')
              )}
        </div>
        <div className={style.cardRowGroup}>
          {renderRowCardDescription(
            'Velocidad del viento',
            formatData(windSpeed, 'speed'),
            'Índice UV',
            formatData(uvi)
          )}
        </div>
      </div>
    </div>
  );
};
