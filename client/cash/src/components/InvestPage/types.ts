export interface IMoney {
  units: number;
  nano: number;
  currency?: string;
}
export interface IPosition {
  instrumentType: string;
  quantity: IMoney;
  currencyPrice: IMoney;
  instrumentUid: string;
  averagePositionPrice: IMoney;
  expectedYield: IMoney;
}
export interface IPortfolio {
  positions: IPosition[];
}
export interface IShares {
  name?: string;
  ticker?: string;
  totalPrice: string;
  quantity: number;
  uid: string;
  yield: string;
}
