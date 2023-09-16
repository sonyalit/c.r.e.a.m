
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
    price: number;
    date: Date | string;
    _id?: number | string;

}
export interface ICreateCost {
    cost:ICost,
    url:string;
    token:string;
}
export interface IGetCosts {
    url:string;
    token:string;
}
export interface IRefreshToken {
    url:string;
    token:string;
    username:string;
}
export interface IAxiosErrorPayload{
    type:string;
    createCost?:Partial<ICreateCost>;
    getCosts?:Partial<IGetCosts>;

}