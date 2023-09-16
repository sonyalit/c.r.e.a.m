import { AxiosError } from "axios";
import { IAxiosErrorPayload } from "../types";
import { getAuthDataFromLS, handleAlertMessage, removeUser } from "./auth";
import { deleteCostFx, getCostsFx, refreshTokenFx } from "../api/costsClient";
import { setCosts } from "../context/costs";

export const handleAxiosError = async (
  error: unknown,
  payload: IAxiosErrorPayload | null = null
) => {
  const errorMessage =
    ((error as AxiosError).response?.data as { message: string }).message ||
    ((error as AxiosError).response?.data as { error: string }).error;
  if (errorMessage) {
    if (errorMessage === "jwt expired") {
      const payloadData = payload as IAxiosErrorPayload;
      const authData = getAuthDataFromLS();
      refreshTokenFx({
        url: "/auth/refresh",
        token: authData.refresh_token,
        username: authData.username,
      });
      if (payload !== null) {
        switch (payloadData.type) {
          case "get":
            const costs = await getCostsFx({
              url: "/cost",
              token: authData.access_token,
            });
            setCosts(costs);
            break;
            case "delete":
               await deleteCostFx({
                url: "/cost",
                id:payloadData.deleteCost?.id as string,
                token: authData.access_token,
              });
              break;
          default:
            break;
        }
      }
    } else {
      handleAlertMessage({ alertText: errorMessage, alertStatus: "warning" });
      removeUser();
    }
  } else {
    handleAlertMessage({ alertText: errorMessage, alertStatus: "warning" });
  }
};
