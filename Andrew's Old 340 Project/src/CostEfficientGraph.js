import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Cost Efficiency for April 2022',
    },
  },
};





export default function CostEfficientGraph(data) {
    if(data.data === null) {
      return (
        <div>
              <p> Try to update your daily use time!</p>
        </div>
      );
    }
    const database = data.data;
    const labels = data.data.map(elem => elem.name);
    const numArray = database.map(elem => [(elem.price / elem.useTime / 30), elem.name]);
    const num = numArray.map(elem => elem[0]).filter(n => n);

    //calculate min and max efficient value/label
    const minValue = Math.min(...num);
    const maxValue = Math.max(...num);
    let minLabel = null;
    let maxLabel = null;

    numArray.forEach(elem => {
      if (minValue === elem[0]) {
        minLabel = elem[1];
      }
      if (maxValue === elem[0]) {
        maxLabel = elem[1];
      }
    });

    
    const graph = {
        labels,
        datasets: [
          {
            label: '$/hour',
            data: database.map(elem => (elem.price / elem.useTime / 30)),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
    };
  return (
    <div>
        {minLabel !== null && 
        <>
        <Bar options={options} data={graph} />
        <div className="card">
            <p>Your most cost efficient subscription was:</p>
            {/* data-driven */}
            <p>{minLabel}</p>
            <p>With an average of ${minValue.toFixed(2)} per hour.</p>
        </div>
        <div className="card">
            <p>Your least cost efficient subscription was:</p>
            {/* data-driven */}
            <p>{maxLabel}</p>
            <p>With an average of ${maxValue.toFixed(2)} per hour.</p>
          </div>
        </>
        }
        {minLabel === null && 
          <p> Try to update your daily use time!</p>
        }
    </div>
  );
}