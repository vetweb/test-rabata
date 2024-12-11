const chartContainer = document.getElementById("chart");
if (chartContainer) {
    const monthsContainer = document.getElementById("months");
    const prevMonthBtn = document.getElementById("prev-month");
    const nextMonthBtn = document.getElementById("next-month");
    const chart1Summary = document.getElementById("chart1-summary");
    const chart2Summary = document.getElementById("chart2-summary");
    const ctx = document.getElementById("lineChart").getContext("2d");

    let currentMonth = "August, 24"; // Начальный месяц
    let chart; // Переменная для хранения графика

    const chartData = {
        "August, 24": { chart1: 136, chart2: 42, dailyData: getMonthlyData(31, "Aug") },
        "September, 24": { chart1: 120, chart2: 35, dailyData: getMonthlyData(30, "Sep") },
        "October, 24": { chart1: 140, chart2: 50, dailyData: getMonthlyData(31, "Oct") },
    };

    function getMonthlyData(days, month) {
        return {
            labels: Array.from({ length: days }, (_, i) => `${i + 1} ${month}`),
            chart1: generateData(days),
            chart2: generateData(days),
        };
    }

    function generateData(days) {
        return Array.from({ length: days }, () => Math.floor(Math.random() * 1000) + 100);
    }

    let activeIndex = null; // Глобальная переменная для сохранения активного индекса точки


    // Функция для рисования блока с текстом и треугольником
    function drawTooltip(ctx, xPosition, yPosition, text, textColor, boxColor, borderColor, offset, sideBorderColor, baseBorderColor, triangleYOffset = 1) {
        const fontSize = 16;
        const lineHeight = fontSize + 4; // Высота строки с учетом отступа
        ctx.font = `${fontSize}px Arial`;

        // Разделение текста на строки
        const [line1, line2] = text.split(":").map((str) => str.trim());

        // Размер блока текста
        const maxWidth = Math.max(ctx.measureText(line1).width, ctx.measureText(line2).width) + 16;
        const totalHeight = lineHeight * 2 + 16;

        // Смещение блока
        const tooltipX = xPosition - maxWidth / 2;
        const tooltipY = yPosition - offset - totalHeight;

        // Рисование основного блока
        ctx.fillStyle = boxColor;
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.roundRect(tooltipX, tooltipY, maxWidth, totalHeight, 6);
        ctx.fill();
        ctx.stroke();

        // Рисование текста
        ctx.fillStyle = textColor;
        ctx.fillText(line1, tooltipX + 8, tooltipY + lineHeight); // Первая строка
        ctx.fillText(line2, tooltipX + 8, tooltipY + lineHeight * 2); // Вторая строка

        // Рисование треугольника
        const triangleHeight = 8;
        const triangleBase = 12;
        const triangleX = xPosition;
        const triangleY = tooltipY + totalHeight + triangleYOffset;

        ctx.beginPath();
        ctx.moveTo(triangleX - triangleBase / 2, triangleY);
        ctx.lineTo(triangleX + triangleBase / 2, triangleY);
        ctx.lineTo(triangleX, triangleY + triangleHeight);
        ctx.closePath();

        // Заливка и обводка треугольника
        ctx.fillStyle = boxColor; // Фон треугольника
        ctx.fill();
        ctx.strokeStyle = baseBorderColor; // Обводка основания треугольника
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(triangleX - triangleBase / 2, triangleY);
        ctx.lineTo(triangleX + triangleBase / 2, triangleY);
        ctx.stroke();

        ctx.strokeStyle = sideBorderColor; // Обводка боковых линий треугольника
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(triangleX - triangleBase / 2, triangleY);
        ctx.lineTo(triangleX, triangleY + triangleHeight);
        ctx.lineTo(triangleX + triangleBase / 2, triangleY);
        ctx.stroke();
    }

    function createChart(data) {
        if (chart) chart.destroy(); // Удаляем предыдущий график, если он существует

        chart = new Chart(ctx, {
            type: "line",
            data: {
                labels: data.labels,
                datasets: [
                    createDataset("Chart 1", data.chart1, "red"),
                    createDataset("Chart 2", data.chart2, "blue"),
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        enabled: false, // Отключаем стандартные тултипы
                    },
                    legend: {
                        display: true, // Отображаем легенду
                    },
                },
                interaction: {
                    mode: "nearest",
                    intersect: true, // Работает только при наведении на точку
                },
                scales: {
                    x: {
                        grid: {
                            display: false, // Убираем горизонтальную сетку
                        },
                    },
                    y: {
                        grid: {
                            display: false, // Убираем вертикальную сетку
                        },
                        beginAtZero: true,
                        ticks: {
                            callback: (value) => `${value}`,
                        },
                        title: {
                            display: true
                        },
                    },
                },
                onHover: (event, chartElement) => {
                    const canvas = chart.canvas;
                    const ctx = canvas.getContext("2d");

                    // Проверяем, есть ли активная точка
                    if (chartElement.length) {
                        const activePoint = chartElement[0];
                        activeIndex = activePoint.index; // Сохраняем индекс активной точки
                    } else {
                        activeIndex = null;
                    }

                    chart.update(); // Перерисовываем график
                },
                animation: false, // Отключаем анимации для мгновенной перерисовки
            },

            plugins: [
                {
                    id: "customVerticalLine",
                    beforeDatasetsDraw: (chart) => {
                        const offset = 20; // Переменная для смещения подсказки

                        if (activeIndex !== null) {
                            const ctx = chart.ctx;
                            const xPosition = chart.getDatasetMeta(0).data[activeIndex].x;

                            // Рисуем вертикальную линию
                            ctx.save();
                            ctx.beginPath();
                            ctx.moveTo(xPosition, chart.chartArea.top);
                            ctx.lineTo(xPosition, chart.chartArea.bottom);
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = "rgba(0, 0, 0, 0.8)";
                            ctx.stroke();
                            ctx.restore();
                        }
                    },
                    afterDatasetsDraw: (chart) => { // Рисуем тултипы после данных
                        const offset = 20; // Переменная для смещения

                        if (activeIndex !== null) {
                            const ctx = chart.ctx;
                            const xPosition = chart.getDatasetMeta(0).data[activeIndex].x;
                            const yPositionChart1 = chart.getDatasetMeta(0).data[activeIndex].y;
                            const yPositionChart2 = chart.getDatasetMeta(1).data[activeIndex].y;

                            // Получаю данные для обеих линий
                            const label = chart.data.labels[activeIndex];
                            const datasets = chart.data.datasets;
                            const chart1Value = datasets[0].data[activeIndex];
                            const chart2Value = datasets[1].data[activeIndex];

                            // Тултипы для каждого графика
                            drawTooltip(
                                ctx,
                                xPosition,
                                yPositionChart1,
                                `${label}: ${chart1Value} GB`,
                                "black",
                                "white",
                                "red",
                                offset,
                                "red",  // Боковые линии
                                "white", // Основание треугольника
                                1 // Подъем треугольника на 1 px
                            );

                            drawTooltip(
                                ctx,
                                xPosition,
                                yPositionChart2,
                                `${label}: ${chart2Value} GB`,
                                "black",
                                "white",
                                "blue",
                                offset,
                                "blue",  // Боковые линии
                                "white", // Основание треугольника
                                1 // Подъем треугольника на 1 px
                            );
                        }
                    },
                },
            ],


        });
    }


    function createDataset(label, data, color) {
        return {
            label,
            data,
            borderColor: color,
            borderWidth: 4,
            pointRadius: 0,
            pointHoverRadius: 6,
            pointHoverBackgroundColor: color,
            hitRadius: 25,
            fill: false,
        };
    }

    // Функция для адаптации данных под ширину экрана
    function getVisibleData(data) {
        const screenWidth = window.innerWidth;
        let visibleDays = data.labels.length; // По умолчанию показываем все дни

        if (screenWidth < 768) {
            // Мобильные устройства: 7 дней
            visibleDays = 7;
        } else if (screenWidth < 1024) {
            // Планшеты: 14 дней
            visibleDays = 14;
        }

        return {
            labels: data.labels.slice(0, visibleDays),
            chart1: data.chart1.slice(0, visibleDays),
            chart2: data.chart2.slice(0, visibleDays),
        };
    }

    // Обновление графика с адаптацией данных
    function updateChart(month) {
        const data = chartData[month];
        const visibleData = getVisibleData(data.dailyData); // Получаю данные для текущего экрана

        chart1Summary.textContent = `${data.chart1} GB`;
        chart2Summary.textContent = `${data.chart2} GB`;

        createChart(visibleData); // Передаю только видимые данные
    }

    function handleMonthChange(e) {
        if (e.target.classList.contains("month")) {
            document.querySelector(".month.active").classList.remove("active");
            e.target.classList.add("active");
            currentMonth = e.target.dataset.month;
            updateChart(currentMonth);
        }
    }

    function handleMonthSwitch(direction) {
        const months = Object.keys(chartData);
        const currentIndex = months.indexOf(currentMonth);
        const nextIndex = currentIndex + direction;

        if (nextIndex >= 0 && nextIndex < months.length) {
            currentMonth = months[nextIndex];

            // Убираем текущий активный класс
            document.querySelector(".month.active").classList.remove("active");

            // Добавляем активный класс новому месяцу
            const newActiveMonth = monthsContainer.querySelector(`[data-month="${currentMonth}"]`);
            if (newActiveMonth) {
                newActiveMonth.classList.add("active");
            }

            // Обновляю график
            updateChart(currentMonth);
        }
    }

    monthsContainer.addEventListener("click", handleMonthChange);
    prevMonthBtn.addEventListener("click", () => handleMonthSwitch(-1));
    nextMonthBtn.addEventListener("click", () => handleMonthSwitch(1));

    // Адаптация графика при изменении размера экрана
    window.addEventListener("resize", () => updateChart(currentMonth));
    // Инициализация графика при загрузке страницы
    updateChart(currentMonth);
}

// Мокап загрузки новостей по кнопке ReadMore
// Проверка наличия кнопки и контейнера для новостей
const newsButton = document.querySelector(".news-section__button");
const newsGrid = document.querySelector(".news-grid");
if (newsButton && newsGrid) {
    newsButton.addEventListener("click", function () {
        // Пример данных (можно заменить на загрузку с сервера через fetch)
        const newItems = [
            { image: "/assets/images/news-img1.jpg", title: "Unemployment rises as pay growth slows again", summary: "The UK's unemployment rate has risen, official figures suggest...", meta: "15 hrs ago | London", link: "#" },
            { image: "/assets/images/news-img2.jpg", title: "When horror hits China, the first instinct is shut it down", summary: "Chinese society is reeling from a series of deadly attacks...", meta: "1 day ago | Asia", link: "#" },
            { image: "/assets/images/news-img3.webp", title: "When horror hits China, the first instinct is shut it down", summary: "Chinese society is reeling from a series of deadly attacks...", meta: "1 day ago | Asia", link: "#" },
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
