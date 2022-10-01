import React from 'react';
import './style.css';

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
    firstSubtitle: string,
    firstDescription: string,
    secondSubtitle: string,
    secodDescription: string
  ): JSX.Element => (
    <div className='card__row'>
      <div className='card__col'>
        <h4 className='card__col__item'>{firstSubtitle}</h4>
        <p className='card__col__item'>{firstDescription}</p>
      </div>
      <div className='card__col'>
        <h4 className='card__col__item'>{secondSubtitle}</h4>
        <p className='card__col__item'>{secodDescription}</p>
      </div>
    </div>
  );

  return (
    <div className='card'>
      <div className='card__row__title__image'>
        <div className='card__row__title'>
          <h2>{setCardTitle()}</h2>
        </div>

        <img
          className='car__row__image'
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt='weather forecast logo'
        />
        <h1 className='car__row__temp'>{formatData(tempeture, 'temperature')}</h1>
      </div>
      <div className='card__row__values'>
        <div className='card__row__values__group'>
          {renderRowCardDescription(
            'Sensación Térmica',
            formatData(feelsLike, 'temperature'),
            'Humedad',
            formatData(humidity, 'percentage')
          )}
        </div>
        <div className='card__row__values__group'>
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
        <div className='card__row__values__group'>
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
