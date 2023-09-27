import { IAlertProps } from "../../types";

export const Alert = ({ props }: IAlertProps) => {
  return <div className="alert"><p className="alert_icon"></p>{props.alertText}</div>;
};
