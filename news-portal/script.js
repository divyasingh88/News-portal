document.getElementById('getNews').addEventListener('click', function() {
    const topic = document.getElementById('newsTopic').value;
    const apiKey = 'f115cb5165dd4913ba176ea043dce0a3'; // Replace with your actual News API key
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ok') {
                const articles = data.articles.map(article => `
                    <div class="article">
                        <h2>${article.title}</h2>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read more</a>
                    </div>
                `).join('');
                document.getElementById('newsResult').innerHTML = articles;
            } else {
                document.getElementById('newsResult').innerHTML = `<p>${data.message}</p>`;
            }
        })
        .catch(error => {
            document.getElementById('newsResult').innerHTML = `<p>Error fetching news data.</p>`;
        });
});
