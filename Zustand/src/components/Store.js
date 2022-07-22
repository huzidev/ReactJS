import create from "zustand";

const useStore = create((set) => ({

    // for counts
    count: 0,
    inc: () => set((state) => ({
        count: state.count + 1
    })),
    dec: () => set((state) => ({
        count: state.count - 1
    })),
    reset: () => set((state) => ({
        count: 0
    })),
    
    // for toggle dark and dark and light mode
    dark: false,
    toggle: () => set((state) => ({
        dark: !state.dark
    }))

}))

export default useStore;