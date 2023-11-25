import { useStore } from "effector-react";
import { getCostsFx } from "../../api/costsClient";
import { getAuthDataFromLS } from "../../utils/auth";
import { $costs, setCosts } from "../../context/costs";
import { useEffect, useRef, useState } from "react";
import * as echarts from "echarts";
export type TPie = {
  category: string;
  sum: number;
};
const StatsPage = () => {
  const pie = useRef(null);
  const [pieData, setPieData] = useState<TPie[]>([]);
  const costs = useStore($costs);
  useEffect(() => {
    const loadData = async () => {
      const authData = getAuthDataFromLS();
      const data = await getCostsFx({
        url: "/cost",
        token: authData.access_token,
      });
      setCosts(data);
    };
    loadData();
  }, []);
  useEffect(() => {
    const categories = Array.from(new Set(costs.map((el) => el.category)));
    setPieData(
      categories.map((el):TPie => {
        return {
          category: el,
          sum: costs.reduce((acc, item):number => {
            return item.category === el ? Number(item.price) + acc : acc;
          }, 0),
        };
      })
    );
  }, [costs]);
  useEffect(() => {
    const getOption = () => {
      const option = {
        legend: {
          left: "left",
          orient: "vertical",
          textStyle: {
            fontSize: 12,
            fontFamily: "RobotoSlab",
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
                formatter: function (d: { value: number; name: string }) {
                  const formatterValue = d.value.toFixed(2);
                  return (
                    new Intl.NumberFormat("ru-RU", {
                      maximumFractionDigits: 2,
                      minimumFractionDigits: 2,
                    }).format(Number(formatterValue)) + " ₽"
                  );
                },
                fontSize: 10,
              },
            })),
          },
        ],
      };
      return option;
    };
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
