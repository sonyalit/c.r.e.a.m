import { useStore } from "effector-react";
import { getCostsFx } from "../../api/costsClient";
import { getAuthDataFromLS } from "../../utils/auth";
import { $costs, setCosts } from "../../context/costs";
import { useEffect, useRef, useState } from "react";
import * as echarts from 'echarts';
const StatsPage = () => {
  const pie = useRef();
  const [pieData, setPieData] = useState<any>();
  const costs = useStore($costs);
  const loadData = async () => {
    const authData = getAuthDataFromLS();
    const data = await getCostsFx({
      url: "/cost",
      token: authData.access_token,
    });
    setCosts(data);
  };
  useEffect(() => {
    loadData();
  }, []);
  useEffect(() => {
    const categories = Array.from(new Set(costs.map((el) => el.category)));
    setPieData(
      categories.map((el) => {
        return {
          category: el,
          sum: costs.reduce(
            (acc, item) => {
                return item.category === el?item.price + acc:acc
            },
            0
          ),
        };
      })
    );
  }, [costs]);
  const getOption = () =>{
 
      const option = {
          legend: {
            left: "left",
            orient:'vertical',
            textStyle: {
              fontSize: 12,
              fontFamily:'RobotoSlab'
            },
          },
          series: [
            {
              type: "pie",
              radius: "65%",
              data: pieData?.map((el) => ({
                value: el.sum,
                name: el.category,
                label: {
                  formatter: function (d) {
                    const formatterValue = d.value.toFixed(2);
                    return new Intl.NumberFormat("ru-RU", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }).format(Number(formatterValue)) + ' ₽';
                  },
                  fontSize: 10,
                },
              })),
            },
          ],
        };
      return option
  }
  useEffect(() => {
      const pieChart = echarts.init(pie.current, null, {
        renderer: "svg",
      });
      pieChart.setOption(getOption());
    }, [pieData]);
  return (
    <main className="main">
      <h1 className="main__header">Статистика</h1>
      <div className="chart" ref={pie} />
    </main>
  );
};

export default StatsPage;
