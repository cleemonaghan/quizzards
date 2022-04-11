import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

class GroupStats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartData: {
        labels: this.props.barLabels,
        datasets: [
          {
            data: this.props.barData,
            backgroundColor: [
              "#db278d",
              "#f14e48",
              "#ff9038",
              "#feca1d",
              "#43c12c",
              "#27dbae",
              "#0273e9",
              "#7248f1",
              "#c035e7",
            ],
          },
        ],
      },
    };
  }

  static defaultProps = {
    barLabels: [
      "Q1",
      "Q2",
      "Q3",
      "Q4",
      "Q5",
      "Q6",
      "Q7",
      "Q8",
      "Q9",
      "Q10",
      "Q11",
      "Q12",
    ],
    barData: [3, 9, 18, 13, 7, 2, 14, 22, 8, 12, 17, 5],
  };

  render() {
    return (
      <div className="group-stats">
        <Bar
          data={this.state.chartData}
          height={250}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    );
  }
}

export default GroupStats;
