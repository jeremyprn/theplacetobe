import { create } from "zustand";
import { TRating } from "../types/entities/rating.spec";

interface IRatingStore {
  rating: TRating | null;
  setRating: (rating: TRating) => void;
  clearRatingState: () => void;
}

const useRatingStore = create<IRatingStore>((set, get) => ({
  rating: null,
  setRating: (rating: TRating) => set(() => ({ rating })),
  clearRatingState: () => set(() => ({ rating: null })),
}));

export { useRatingStore };
