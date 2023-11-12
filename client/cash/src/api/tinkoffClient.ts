import axios from "axios";
import { createEffect } from "effector";

const instance = axios.create({
  baseURL: "https://invest-public-api.tinkoff.ru/rest",
});

export const getPortfolioFx = createEffect(async () => {
  const url =
    "/tinkoff.public.invest.api.contract.v1.OperationsService/GetPortfolio";
  const response = await instance.post(
    url,
    {
      accountId: process.env.REACT_APP_TINKOFF_ACCOUNT_ID,
      currency: "RUB",
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_TINKOFF_TOKEN}`,
      },
    }
  );
  return response.data;
});
export const getInstrumentByUid = 
  createEffect(async (uid:string) => {
    const url =
      "/tinkoff.public.invest.api.contract.v1.InstrumentsService/GetInstrumentBy";
    const response = await instance.post(
      url,
      {
        idType: 3,
        classCode: "string",
        id: uid,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_TINKOFF_TOKEN}`,
        },
      }
    );
    return response.data;
  });
export default instance;
