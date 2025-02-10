document.addEventListener('DOMContentLoaded', function() {
    // Load data from localStorage
    const visitors = JSON.parse(localStorage.getItem('visitors')) || [];
    const books = JSON.parse(localStorage.getItem('books')) || [];
    
    // Update statistics
    document.getElementById('totalPengunjung').textContent = visitors.length;
    document.getElementById('totalBuku').textContent = books.length;

    // Initialize chart
    const ctx = document.getElementById('bookChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: books.map(book => book.title),
            datasets: [{
                label: 'Jumlah Peminjaman',
                data: books.map(book => book.downloads || 0),
                backgroundColor: 'rgba(13, 110, 253, 0.5)',
                borderColor: 'rgba(13, 110, 253, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});