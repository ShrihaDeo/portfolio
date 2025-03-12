<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    const ctx = document.getElementById('skills-chart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Problem Solving', 'Communication', 'Programming', 'Databases', 'Project Management'],
            datasets: [{
                label: 'Skill Proficiency',
                data: [90, 85, 95, 80, 88],
                backgroundColor: 'rgba(179, 102, 255, 0.2)',
                borderColor: 'rgba(179, 102, 255, 1)',
                borderWidth: 2,
                pointBackgroundColor: '#ffffff',
            }]
        },
        options: {
            scales: {
                r: {
                    angleLines: { color: '#ffffff' },
                    grid: { color: 'rgba(255, 255, 255, 0.5)' },
                    ticks: { display: false },
                }
            }
        }
    });
</script>
