Chart.defaults.color = '#94a3b8'; // Muted text
Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.05)'; // Faint grid lines
Chart.defaults.font.family = "'Segoe UI', sans-serif";

const difficultyCtx = document.getElementById('difficultyChart');
if (difficultyCtx) {
    new Chart(difficultyCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
            datasets: [{
                label: 'Avg. Class Difficulty',
                data: [6.2, 5.8, 6.5, 7.1, 5.9, 5.36],
                borderColor: '#ffc72c', // BucStats Gold
                backgroundColor: 'rgba(255, 199, 44, 0.1)',
                borderWidth: 3,
                tension: 0.4,
                fill: true,
                pointBackgroundColor: '#020b1a',
                pointBorderColor: '#ffc72c',
                pointRadius: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {x: {ticks: {font: {size: 16}}}, y:{beginAtZero:true, max:10, ticks:{font: {size:16}}}}
        }
    });
}

const engagementCtx = document.getElementById('engagementChart');
if (engagementCtx) {
    new Chart(engagementCtx, {
        type: 'bar',
        data: {
            labels: ['Arrays', 'Loops', 'Functions', 'Pointers', 'Recursion'],
            datasets: [{
                label: 'Questions Asked',
                data: [45, 32, 28, 65, 50],
                backgroundColor: '#38bdf8', 
                borderRadius: 6,
                barPercentage: 0.6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {x: {ticks: {font: {size: 16}}}, y: {ticks: {font: {size: 16}}}}
        }
    });
}

const masteryCtx = document.getElementById('masteryChart');
if (masteryCtx) {
    new Chart(masteryCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'CS Concepts',
                data: [
                    { x: 85, y: 3.2, topic: 'For Loops' }, 
                    { x: 40, y: 8.5, topic: 'Asynchronous Programming' }, 
                    { x: 92, y: 2.1, topic: 'Variable Assignment' },
                    { x: 60, y: 6.8, topic: 'Data Structures' },
                    { x: 75, y: 4.5, topic: 'Object-Oriented Design' }
                ],
                backgroundColor: '#10b981',
                pointRadius: 8,
                pointHoverRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                tooltip: {
                    callbacks: {

                        label: function(context) {
                            let dataPoint = context.raw;
                            return `${dataPoint.topic}: Mastery ${dataPoint.x}%, Diff ${dataPoint.y}`;
                        }
                    }
                }
            },
            scales: {
                x: { 
                    title: { display: true, text: 'Mastery (%)', color: '#94a3b8' },
                    min: 0, max: 100 
                },
                y: { 
                    title: { display: true, text: 'Reported Difficulty (1-10)', color: '#94a3b8' },
                    min: 0, max: 10 
                }
            }
        }
    });
}