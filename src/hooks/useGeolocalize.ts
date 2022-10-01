import { useState, useEffect } from 'react';

export interface ICoordinates {
  latitude: number | null;
  longitude: number | null;
  geoLocalizeError: boolean | null;
}

interface IError {
  code: number;
}

const useGeolocalize = (): ICoordinates => {
  const [coordinates, setCoordinates] = useState<ICoordinates>({
    latitude: null,
    longitude: null,
    geoLocalizeError: null
  });
  const { longitude, latitude, geoLocalizeError } = coordinates;
  useEffect(() => {
    if (typeof navigator.geolocation === 'object') navigator.geolocation.getCurrentPosition(showPosition, showError);
  }, []);

  const showPosition = (data: GeolocationPosition): void => {
    setCoordinates({
      latitude: data.coords.latitude,
      longitude: data.coords.longitude,
      geoLocalizeError: false
    });
  };

  const showError = (error: IError): void => {
    if (error.code != null) {
      setCoordinates({
        latitude: null,
        longitude: null,
        geoLocalizeError: true
      });
    }
  };

  return { latitude, longitude, geoLocalizeError };
};
export default useGeolocalize;
