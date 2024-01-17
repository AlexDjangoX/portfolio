import { create } from 'zustand';

type StoreState = {
  sliderValueGlobal: number;
  setSliderValueGlobal: (newValue: number) => void;
};

export const useStore = create<StoreState>((set) => ({
  sliderValueGlobal: 0,
  setSliderValueGlobal: (newValue: number) =>
    set({ sliderValueGlobal: newValue }),
}));
