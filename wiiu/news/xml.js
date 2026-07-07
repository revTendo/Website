window.onload = function () {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            buildHTML(xhttp);
        }
    };
    xhttp.open('GET', 'https://revtendo.github.io/Website/news/news.xml', true);
    xhttp.send();
};
let newsItems = [];
let currentPage = 1;
const itemsPerPage = 5;
function buildHTML(xml) {
    var i;
    var xmlDoc = xml.responseXML;
    var tables = xmlDoc.getElementsByTagName('table');

    newsItems = [];
    for (i = 0; i < tables.length; i++) {
        newsItems.push({
            title: tables[i].getElementsByTagName('title')[0].textContent,
            date: tables[i].getElementsByTagName('date')[0].textContent,
            data: tables[i].getElementsByTagName('data')[0].textContent,
            link: tables[i].getElementsByTagName('link')[0].textContent,
            linkname: tables[i].getElementsByTagName('linkname')[0].textContent
        });
    }

    currentPage = 1;
    renderPage(currentPage);
}

function renderPage(page) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';
    let startIndex = (page - 1) * itemsPerPage;
    let endIndex = startIndex + itemsPerPage;

    let pageItems = newsItems.slice(startIndex, endIndex);

    pageItems.forEach(item => {
        newsContainer.innerHTML += `
                    <div class="text-container">
                                <section>
                                    <div>
                                        <div class="l">
                                            <h3 class="text">
                                                <b>${item.title}</b>
                                            </h3>
                                        </div>
                                        <hr />
                                        <h3 class="text">
                                            <b><u>${item.date}</u> - ${item.data}</b>
                                        </h3>
                                        <div class="center">
                                            <div class="pill-button-big" onclick="window.open('${item.link}', '_blank')">
                                                ${item.linkname}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>`;
    });

    document.getElementById('page-info').textContent = `Showing ${startIndex + 1}-${startIndex + pageItems.length} of ${newsItems.length}`;
}

    UpdateButtons();

function nextPage() {
    if (currentPage * itemsPerPage < newsItems.length) {
        currentPage++;
        renderPage(currentPage);
    }
}

function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
    }
}
function UpdateButtons() {
    document.getElementById('prev-btn').disabled = currentPage === 1;
    document.getElementById('next-btn').disabled = currentPage * itemsPerPage >= newsItems.length;
}

let entries = tables.length;
document.getElementById('entry-count').textContent = entries;
