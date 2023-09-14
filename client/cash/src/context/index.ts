import { createDomain } from "effector";
const cost = createDomain()

export const setTotalPrice = cost.createEvent<number>()
export const $totalPrice = cost.createStore<number>(0).on(setTotalPrice, (_, value) => value);