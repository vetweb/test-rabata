// Проверка наличия кнопки и контейнера для новостей
const newsButton = document.querySelector(".news-section__button");
const newsGrid = document.querySelector(".news-grid");
if (newsButton && newsGrid) {
    newsButton.addEventListener("click", function () {
        // Пример данных (можно заменить на загрузку с сервера через fetch)
        const newItems = [
            { image: "assets/images/news-img1.jpg", title: "Unemployment rises as pay growth slows again", summary: "The UK's unemployment rate has risen, official figures suggest...", meta: "15 hrs ago | London", link: "#" },
            { image: "assets/images/news-img2.jpg", title: "When horror hits China, the first instinct is shut it down", summary: "Chinese society is reeling from a series of deadly attacks...", meta: "1 day ago | Asia", link: "#" },
            { image: "assets/images/news-img3.webp", title: "When horror hits China, the first instinct is shut it down", summary: "Chinese society is reeling from a series of deadly attacks...", meta: "1 day ago | Asia", link: "#" },
        ];

        newItems.forEach((item) => {
            const newsItem = document.createElement("article");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
        <a href="${item.link}" class="news-item__image-link">
            <img src="${item.image}" alt="News image" class="news-item__image" />
        </a>
        <div class="news-item__content">
        <h3 class="news-item__title title title--semi-medium">
            <a href="${item.link}" class="news-item__title-link">${item.title}</a>
        </h3>
        <div class="news-item__summary"><p>${item.summary}</p></div>
        <span class="meta-info">${item.meta}</span>
        </div>
      `;
            newsGrid.appendChild(newsItem);
        });
    });
}
