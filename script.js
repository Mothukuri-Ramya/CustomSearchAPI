window.onload = function() {
    // This function will be called once the page and Google Custom Search are fully loaded.
    // You can now modify the search bar styles.
    const searchInput = document.querySelector('input.gsc-input');
    if (searchInput) {
        searchInput.style.border = '2px solid #007BFF';
        searchInput.style.borderRadius = '5px';
        searchInput.style.padding = '8px 12px';
        searchInput.style.fontSize = '16px';
        searchInput.style.width = '100%';
        searchInput.style.boxSizing = 'border-box';
    }
};
function performCustomSearch() {
            const apiKey = "AIzaSyCbn_mV3owOrzlsvG8Gyr3zF_NO8xDUx_g";
            const searchEngineId = "7278ccf53318c498f";
            const query = document.querySelector('input.gsc-input').value;
            const numResults = 5;

            // Construct the API request URL
            const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}&num=${numResults}`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    const results = data.items;
                    const searchResultsContainer = document.getElementById("search-results");
                    searchResultsContainer.innerHTML = "";

                    results.forEach((result, index) => {
                        const link = result.link;
                        const title = result.title;
                        const snippet = result.snippet;

                        const resultElement = document.createElement("div");
                        resultElement.innerHTML = `<a href="${link}" target="_blank">${title}</a><br>${snippet}<br><br>`;
                        searchResultsContainer.appendChild(resultElement);
                    });
                })
                .catch(error => {
                    console.error("Error fetching search results:", error);
                });
        }