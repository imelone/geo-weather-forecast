import React, { useEffect, useState } from 'react';
import style from './style.module.css';
import useGeolocalize from '../../hooks/useGeolocalize';
import useGetWeather from '../../hooks/useGetWeather';
import logo from '../../assets/icons/weather-logo.svg';
import { Header } from '../../components/layout/Header';
import { Footer } from '../../components/layout/Footer';
import { Card } from '../../components/common/Card';
import { ICurrent, IDaily, ICoordinates, ICity } from './models';
import { Select } from '../../components/common/Select';
import { Spinner } from '../../components/common/Spinner';
import { Message } from '../../components/common/Message';

export const Home: React.FC = () => {
  const { longitude, latitude, geoLocalizeError } = useGeolocalize();
  const [coordByCity, setCoordByCity] = useState<ICoordinates>({
    lat: 0,
    lon: 0
  });
  const { weatherData, loading, error } = useGetWeather(coordByCity);
  const current: ICurrent | undefined = weatherData?.current;
  const daily: IDaily[] | undefined = weatherData?.daily;
  const title = 'Pronóstico del Tiempo';
  const extendedForecastTitle = 'Pronóstico extendido';
  const footerCopyrightText = 'copyright all rights reserved';
  const [cities, setCities] = useState<ICity[]>([
    { description: 'Moscú', value: { lat: 55.45, lon: 37.36 } },
    { description: 'Lima', value: { lat: -12.04, lon: -77.04 } },
    { description: 'Sydney', value: { lat: -33.85, lon: 151.21 } },
    { description: 'Tokio', value: { lat: 35.36, lon: 139.41 } },
    { description: 'Paris', value: { lat: 48.51, lon: 7.32 } }
  ]);

  useEffect(() => {
    {
      if (geoLocalizeError != null && geoLocalizeError != true) {
        cities.unshift({ description: 'Ubicación actual', value: { lat: latitude, lon: longitude } });
        setCities(cities);
      }
    }
  }, [longitude, latitude]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const value = JSON.parse(event.target.value);
    setCoordByCity(value);
  };

  const renderExtendedWeatherForecast = () =>
    daily?.map((day: IDaily, i) => {
      if (i > 0 && i < 6)
        return (
          <Card
            key={i}
            date={day.dt}
            dayWeatherDescripton={day.weather[0].description}
            icon={day.weather[0].icon}
            tempeture={day.temp.day}
            feelsLike={day.feels_like.day}
            humidity={day.humidity}
            rainPosibility={day.pop}
            pressure={day.pressure}
            windSpeed={day.wind_speed}
            uvi={day.uvi}
          />
        );
    });

  return (
    <>
      <Header logo={logo} title={title} />
      <main className={style.homeMain}>
        <Select data={cities} handleChange={handleChange} />
        {loading ? (
          <section className={style.homeLoader}>
            <Spinner />
          </section>
        ) : current != null && !error ? (
          <>
            <section className={style.homeToday}>
              <Card
                date={'El tiempo ahora'}
                dayWeatherDescripton={current.weather[0].description}
                icon={current.weather[0].icon}
                tempeture={current.temp}
                feelsLike={current.feels_like}
                humidity={current.humidity}
                clouds={current.clouds}
                pressure={current.pressure}
                windSpeed={current.wind_speed}
                uvi={current.uvi}
              />
              <h2>{extendedForecastTitle}</h2>
            </section>
            <section className={style.homeExtendedForecast}>{renderExtendedWeatherForecast()}</section>{' '}
          </>
        ) : (
          <Message text={error} />
        )}
      </main>
      <Footer footerCopyrightText={footerCopyrightText} />
    </>
  );
};
