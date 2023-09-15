import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from "recharts";
// Mission completed => mc
const data = [
    { name: 'Thứ 2', mc: 10},
    { name: 'Thứ 3', mc: 20},
    { name: 'Thứ 4', mc: 5},
    { name: 'Thứ 5', mc: 0},
    { name: 'Thứ 6', mc: 3},
    { name: 'Thứ 7', mc: 7},
    { name: 'Chủ nhật', mc: 11},
];
function Chart() {
  return (
    <div className="wrapper-box_left-LienChart">
      <LineChart 
          width={740} 
          height={400} 
          data={data}
          margin={{ top: 5, right: 50, left: 0, bottom: 5 }}
          >
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="Nhiệm vụ đã hoàn thành"  type="monotone" dataKey="mc" stroke="#76417e" />
      </LineChart>
    </div>
  );
}
export default Chart;