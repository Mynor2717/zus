import { create } from 'zustand';

interface BearState {
    bears: number; 
}

export const useBearsStore = create<BearState>()((set) => ({
    bears: 0
}));
