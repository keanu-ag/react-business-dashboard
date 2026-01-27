import { kpis, cases } from '../data/mockData';

export const fetchDashboardData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ kpis, cases });
        }, 800);
    });
};