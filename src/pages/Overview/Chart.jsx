import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from "recharts";
// Mission completed => mc
const data = [
  { name: 'Monday', mc: 4000},
  { name: 'Tuesday', mc: 3000},
  { name: 'Wednesday', mc: 2000},
  { name: 'Thursday', mc: 2780},
  { name: 'Friday', mc: 1890},
  { name: 'Saturday', mc: 2390},
  { name: 'Sunday', mc: 3490},
];
function Chart() {
  return (
    <div className="wrapper-box_left-LienChart">
      <LineChart 
          width={700} 
          height={400} 
          data={data}
          margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
        <XAxis dataKey="name"/>
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name="Mission completed"  type="monotone" dataKey="mc" stroke="#8884d8"  style={{color : "white"}} />
      </LineChart>
    </div>
  );
}
export default Chart;