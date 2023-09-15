import { createDomain } from "effector";
import { ICost } from "../types";

const cost = createDomain();

export const setCosts = cost.createEvent<ICost[]>();
export const createCost = cost.createEvent<ICost>();
export const updateCosts = cost.createEvent<ICost>();
export const deleteCost = cost.createEvent<string | number>();
export const setTotalPrice = cost.createEvent<number>();

export const $totalPrice = cost
  .createStore<number>(0)
  .on(setTotalPrice, (_, value) => value);

export const $costs = cost
  .createStore<ICost[]>([])
  .on(setCosts, (_,costs ) => costs)
  .on(createCost, (state,cost)=>[...state,cost])
