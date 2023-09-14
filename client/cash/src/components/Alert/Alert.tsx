import { IAlertProps } from "../../types";

export const Alert = ({ props }: IAlertProps) => {
  return <div className="alert">{props.alertText}</div>;
};
