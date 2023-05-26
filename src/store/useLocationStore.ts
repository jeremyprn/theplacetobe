import { create } from "zustand";
import { TLocation } from "../types/entities/location.spec";

interface ILocationStore {
  location: TLocation | null;
  population: number | null;
  setLocation: (location: TLocation) => void;
  setPopulation: (population: number) => void;
  clearLocationState: () => void;
}

const useLocationStore = create<ILocationStore>((set) => ({
  location: null,
  population: null,
  setLocation: (location) => set(() => ({ location })),
  setPopulation: (population) => set(() => ({ population })),
  clearLocationState: () => set(() => ({ location: null })),
}));

export { useLocationStore };
