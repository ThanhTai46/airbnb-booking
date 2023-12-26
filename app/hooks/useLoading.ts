import { create } from "zustand";

interface ILoading {
    isOpen: boolean
    onOpen: () => void;
    onClose: () => void;
}

export const useLoading = create<ILoading>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false}),
}))

