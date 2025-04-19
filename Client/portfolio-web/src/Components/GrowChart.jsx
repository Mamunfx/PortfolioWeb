import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";

const GrowChart = () => {
  const data = [
    {
      name: "2016",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "2018",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "2020",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "2021",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "2022",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "2023",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "2024",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-28">
      <h1 className="text-4xl mt-16 mb-16 font-semibold">Growth Chart</h1>
      <div className="w-full">
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GrowChart;
