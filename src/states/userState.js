import { atom, selector, selectorFamily } from "recoil";

export const searchState = atom({
  key: "search",
  default: null,
});

export const productSearchResult = selector({
  key: "productSearchResult",
  get: ({ get }) => {
    const result = get(searchState);
    const productsResult = result?.products || [];
    return productsResult;
  },
});

export const blogSearchResult = selector({
  key: "blogSearchResult",
  get: ({ get }) => {
    const result = get(searchState);
    const blogsResult = result?.blogs || [];
    return blogsResult;
  },
});
