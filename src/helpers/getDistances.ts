import {TCoordinates} from '../types/entities/location.spec';

function toRadians(degrees: number): number {
  return degrees * (Math.PI / 180);
}

const getDistance = (pointA: TCoordinates, pointB: TCoordinates) => {
  const R = 6371000; // Earth radius in meters
  
  const latARad = toRadians(pointA.latitude!);
  const latBRad = toRadians(pointB.latitude!);
  const lonARad = toRadians(pointA.longitude!);
  const lonBRad = toRadians(pointB.longitude!);

  const deltaLat = latBRad - latARad;
  const deltaLon = lonBRad - lonARad;
  const a = Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(latARad) * Math.cos(latBRad) *
    Math.sin(deltaLon / 2) * Math.sin(deltaLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return (distance/1000).toFixed(2);
};

export default getDistance;
