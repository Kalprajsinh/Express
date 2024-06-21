import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "count",
    default: 0
});

export const divideSelector = selector({
    key: "divideFive",
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 5 === 0;
    }
})

