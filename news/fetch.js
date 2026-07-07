let newsItems = [];
let currentPage = 1;
const itemsPerPage = 5;

window.onload = async function () {
    const res = await fetch('https://reeshop.pages.dev/api/news');
    const data = await res.json();
    newsItems = data.news.news_entry;

    currentPage = 1;
    renderPage(currentPage);
    updateButtons();
    updateEntryCount();
}
function renderPage(page) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    let pageItems = newsItems.slice(startIndex, endIndex);

    pageItems.forEach(item => {

        const date = new Date(item.date).toLocaleDateString();

        newsContainer.innerHTML += `
                    <div class="text-container">
                                <section>
                                    <div>
                                        <div class="l">
                                            <h3 class="text">
                                                <b>${item.headline}</b>
                                            </h3>
                                        </div>
                                        <hr />
                                        <h3 class="text">
                                            <b><u>${date}</u> <span class="description">${item.description}</span></b>
                                        </h3>
                                    </div>
                                </section>
                            </div>`;
    });

    document.getElementById('page-info').textContent = `Showing ${startIndex + 1}-${startIndex + pageItems.length} of ${newsItems.length}`;
}

function nextPage() {
    if (currentPage * itemsPerPage < newsItems.length) {
        currentPage++;
        renderPage(currentPage);
        updateButtons();
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
        updateButtons();
    }
}
function updateButtons() {
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage * itemsPerPage >= newsItems.length;
}

function updateEntryCount() {
    document.getElementById('entry-count').textContent = newsItems.length;
}
