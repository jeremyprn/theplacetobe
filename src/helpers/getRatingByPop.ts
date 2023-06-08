import { TPoi } from "../types/entities/poi.spec";

const getSecurityByPop = (data: TPoi[], population: number): number => {
  const rating = Number((data.length / population).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getShopByPop = (data: TPoi[], population: number): number => {
  const rating = Number(((data.length / population) * 5500).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getHealthcareByPop = (data: TPoi[], population: number): number => {
  const rating = Number(((data.length / population) * 15000).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getServicesByPop = (data: TPoi[], population: number): number => {
  const rating = Number((data.length / population).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getEducationByPop = (data: TPoi[], population: number): number => {
  const rating = Number(((data.length / population) * 14000).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getFuelByPop = (data: TPoi[], population: number): number => {
  const rating = Number((data.length / population).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getRestaurantByPop = (data: TPoi[], population: number): number => {
  const rating = Number(((data.length / population) * 5000).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getHistoricByPop = (data: TPoi[], population: number): number => {
  const rating = Number((data.length / population).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getLeisureByPop = (data: TPoi[], population: number): number => {
  const rating = Number((data.length / population).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

const getServiceByPop = (data: TPoi[], population: number): number => {
  const rating = Number(((data.length / population) * 65000).toFixed(1));
  if (rating >= 10) return 10;
  return rating;
};

export {
  getEducationByPop,
  getFuelByPop,
  getHealthcareByPop,
  getRestaurantByPop,
  getSecurityByPop,
  getServicesByPop,
  getShopByPop,
  getHistoricByPop,
  getLeisureByPop,
  getServiceByPop,
};
