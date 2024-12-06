document.getElementById('search-btn').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    // Simulated local business data without images
    const businesses = {
        restaurants: [
            { name: 'The Gourmet Kitchen', address: '123 Main St', rating: 4.5 },
            { name: 'Pizza Paradise', address: '456 Elm St', rating: 4.2 },
            { name: 'Taco Town', address: '789 Oak St', rating: 4.8 },
        ],
        gyms: [
            { name: 'Fit Factory', address: '321 Maple St', rating: 4.7 },
            { name: 'Iron Paradise', address: '654 Pine St', rating: 4.9 },
            { name: 'Core Fitness', address: '987 Cedar St', rating: 4.6 },
        ],
        salons: [
            { name: 'Style Studio', address: '147 Spruce St', rating: 4.4 },
            { name: 'Hair Haven', address: '258 Birch St', rating: 4.3 },
            { name: 'Glam Lounge', address: '369 Redwood St', rating: 4.5 },
        ],
        shops: [
            { name: 'Gadget World', address: '741 Poplar St', rating: 4.6 },
            { name: 'Fashion Hub', address: '852 Ash St', rating: 4.2 },
            { name: 'Book Nook', address: '963 Willow St', rating: 4.8 },
        ],
    };

    const selectedBusinesses = businesses[category] || [];

    if (selectedBusinesses.length === 0) {
        resultsDiv.innerHTML = '<p>No businesses found in this category.</p>';
    } else {
        selectedBusinesses.forEach(business => {
            const card = document.createElement('div');
            card.className = 'result-card';
            card.innerHTML = `
                <h3>${business.name}</h3>
                <p>${business.address}</p>
                <p>Rating: ${business.rating} / 5</p>
            `;
            resultsDiv.appendChild(card);
        });
    }
});
