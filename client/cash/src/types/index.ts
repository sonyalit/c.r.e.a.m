import { deleteCost } from "../context/costs";

export interface IAlertProps {
  props: IAlert;
}
export interface IAlert {
  alertText: string;
  alertStatus: string;
}
export interface ICostFormProps {
  costs: ICost[];
}
export interface ICost {
  text: string;
  category: string;
  price: string;
  date: Date | string;
  _id?: number | string;
}
export interface ICreateCost {
  cost: ICost;
  url: string;
  token: string;
}
export interface IEditCost {
    cost: ICost;
    url: string;
    token: string;
  }
export interface IDeleteCost {
  id: string;
  url: string;
  token: string;
}
export interface IGetCosts {
  url: string;
  token: string;
}
export interface IRefreshToken {
  url: string;
  token: string;
  username: string;
}
export interface IAxiosErrorPayload {
  type: string;
  createCost?: Partial<ICreateCost>;
  getCosts?: Partial<IGetCosts>;
  deleteCost?: Partial<IDeleteCost>;
  editCost?:Partial<IEditCost>;
}
