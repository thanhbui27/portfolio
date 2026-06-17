import { create } from "zustand";

interface UiState {
  activeDemoId?: string;
  setActiveDemoId: (id?: string) => void;
}

export const useUiStore = create<UiState>((set) => ({
  activeDemoId: undefined,
  setActiveDemoId: (id) => set({ activeDemoId: id })
}));
