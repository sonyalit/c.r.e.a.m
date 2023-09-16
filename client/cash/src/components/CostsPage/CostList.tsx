import CostItem from "./CostItem";
import { ICost } from "../../types";

const CostList = ({costs}:{costs:ICost[]}) => {
  return (
    <ul className="costs__list">
      {costs.map((el, index)=>
         <CostItem cost={el} index={index+1} key={el._id}/>
        )}
     
    </ul>
  );
};

export default CostList;
