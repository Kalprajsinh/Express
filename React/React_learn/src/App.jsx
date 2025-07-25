
import { useEffect } from 'react';
import './App.css'
import { BarChart } from './projects/Barchart';
import Gift from './projects/Gift';
import LineChart from './projects/Linechart';
import PieChart from './projects/Piechart';
import Ticket from './projects/Ticket';
import Todo from './projects/Todo';
import renderToString from "react-render-to-string";
import Testimonial from './Testimonial';

function App() {
  const barData = [100, 200, 300, 400, 500];
  const lineData = [
    { x: 0, y: 100 },
    { x: 1, y: 150 },
    { x: 2, y: 30 },
    { x: 3, y: 250 },
  ];
  const pieData = [
    { label: "Apple", value: 50 },
    { label: "Banana", value: 30 },
    { label: "Cherry", value: 20 },
  ];

  useEffect( ()=> {
    async function stringsvg(){
      const chartHtml = await renderToString(<BarChart data={barData} width={600} height={400} />);
      console.log(chartHtml);
      console.log("-------------------------------");

    }

    stringsvg();

  })


  return (
    <>
    <Testimonial />
    {/* <Todo /> */}
    {/* <Ticket /> */}
    {/* <Gift /> */}
    {/* <div>
      <h2>Bar Chart</h2>
      <BarChart data={barData} width={600} height={400} />
      <h2>Line Chart</h2>
      <LineChart data={lineData} width={600} height={400} />
      <h2>Pie Chart</h2>
      <PieChart data={pieData} width={400} height={400} colors={["#ff0000", "#00ff00", "#0000ff"]} />
      
    </div> */}
    </>
  )
}

export default App;
