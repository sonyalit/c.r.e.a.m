import { createDomain } from "effector";
import { IAlert } from "../types";
const alert = createDomain()
const defaulAlert: IAlert = {
    alertStatus: '',
    alertText: ''
}
export const setAlert = alert.createEvent<IAlert>()
export const $alert = alert.createStore<IAlert>(defaulAlert).on(setAlert, (_, value) => value);