import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
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

const ChartCard = ({ cases }) => {
    const data = {
        labels: ['Resolved', 'Pending'],
        datasets: [
            {
                label: 'Cases',
                data: [
                    cases.filter(c => c.status === 'Resolved').length,
                    cases.filter(c => c.status === 'Pending').length    
                ],
                backgroundColor: ['#4caf50', '#ffc107']
            }
        ]
    }


    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Case Status Overview' }
        }
    };

    return <Bar data={data} options={options} />;
};

export default ChartCard;