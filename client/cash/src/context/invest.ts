import { createDomain } from "effector";

const invest = createDomain();

export const setPortfolio = invest.createEvent<any>();
export const $portfolio = invest.createStore<any>([]).on(setPortfolio, (_,data)=>data)

// export const createCost = cost.createEvent<ICost>();
// export const editCost = cost.createEvent<ICost>();
// export const deleteCost = cost.createEvent<string | number>();
// export const setTotalPrice = cost.createEvent<number>();

// export const $totalPrice = cost
//   .createStore<number>(0)
//   .on(setTotalPrice, (_, value) => value);

// export const $costs = cost
//   .createStore<ICost[]>([])
//   .on(setCosts, (_,costs ) => costs)
//   .on(createCost, (state,cost)=>[...state,cost])
// .on(deleteCost, (state, cost)=>[...state.filter((el)=>el._id!==cost)])
// .on(editCost, (state, cost)=>[...state.map((el)=>el._id!==cost._id?el:{...cost})])