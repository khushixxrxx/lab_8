document.addEventListener('DOMContentLoaded', fetchData);

function fetchData() {
    const API_URL = 'https://api.github.com/users';

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            const dataContainer = document.getElementById('data-container');
            data.forEach(user => {
                const card = document.createElement('div');
                card.classList.add('card');
                card.innerHTML = `
                    <div class="avatar">
                        <img src="${user.avatar_url}" alt="${user.login}'s avatar">
                    </div>
                    <h2>${user.login}</h2>
                    <p>${user.bio || 'No bio available'}</p>
                    <p>Followers: ${user.followers}</p>
                    <p>Following: ${user.following}</p>
                    <a href="${user.html_url}" target="_blank" class="btn">View Profile</a>
                `;
                dataContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}