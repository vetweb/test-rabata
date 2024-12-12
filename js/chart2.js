const monthData = {
    "Jan 24": {
        chart1: [615, 1787, 1362, 1832, 899, 1189, 1521, 1138, 612, 1745, 1289, 433, 1565, 1127, 1280, 843, 1120, 1203, 1969, 616, 1142, 996, 891, 1287, 926, 955, 1253, 1398, 951, 1279],
        chart2: [1347, 884, 945, 1681, 819, 865, 567, 506, 682, 879, 1349, 1105, 1323, 811, 498, 1303, 866, 931, 741, 1201, 981, 869, 1149, 1414, 1630, 609, 1032, 413, 1019, 1057]
    },
    "Feb 24": {
        chart1: [1345, 956, 1414, 523, 986, 832, 666, 520, 824, 1579, 1854, 699, 1843, 767, 1457, 1002, 867, 746, 1153, 898, 1805, 1606, 1163, 1294, 893, 1782, 1452, 928, 1078],
        chart2: [1342, 844, 920, 923, 1067, 945, 951, 527, 577, 1306, 869, 1162, 981, 1087, 1564, 1102, 1428, 765, 473, 904, 777, 1080, 711, 653, 1105, 1041, 1072, 470, 1271, 1229]
    },
    "Mar 24": {
        chart1: [1124, 701, 898, 1745, 550, 1634, 1422, 1104, 1453, 1305, 1029, 1901, 1947, 1085, 1020, 629, 907, 1265, 1601, 1860, 1664, 1379, 1097, 704, 1043, 690, 1215, 1867, 674, 741],
        chart2: [853, 444, 1102, 1119, 1272, 760, 927, 889, 1125, 937, 888, 1334, 1325, 874, 1257, 791, 687, 908, 715, 1156, 742, 698, 664, 1291, 883, 873, 470, 682, 595, 613]
    },
    "Apr 24": {
        chart1: [625, 1229, 1733, 1318, 820, 1291, 1775, 1861, 1086, 871, 1767, 1168, 1117, 921, 1539, 759, 1181, 930, 1425, 929, 1264, 1554, 1341, 939, 1154, 851, 739, 1022, 1030, 1266],
        chart2: [1322, 1243, 800, 1182, 1148, 818, 1382, 697, 951, 682, 926, 871, 913, 1429, 1457, 796, 1240, 1180, 1129, 723, 708, 980, 1130, 1071, 1105, 1398, 675, 794, 896, 988]
    },
    "May 24": {
        chart1: [728, 675, 588, 1562, 1071, 1772, 1639, 624, 1341, 781, 442, 1309, 1117, 1537, 1612, 1102, 953, 1199, 937, 989, 1265, 842, 1334, 1472, 917, 1691, 1911, 986, 684],
        chart2: [701, 868, 765, 1466, 1095, 464, 848, 1506, 872, 1312, 1363, 482, 1282, 847, 739, 642, 1038, 1260, 803, 1137, 1080, 748, 536, 757, 551, 1650, 965, 1352, 990, 1344]
    },
    "Jun 24": {
        chart1: [1525, 1479, 1259, 1495, 825, 845, 1340, 1332, 1041, 881, 983, 650, 1541, 436, 1759, 1573, 1156, 612, 869, 713, 1160, 1220, 563, 800, 1731, 946, 1718, 1047, 1424],
        chart2: [551, 582, 1011, 677, 811, 1480, 1372, 1138, 764, 1428, 1047, 1265, 1358, 673, 1079, 707, 647, 1244, 696, 945, 1185, 1169, 474, 1320, 1162, 1324, 582, 1033, 613, 641]
    },
    "Jul 24": {
        chart1: [1552, 1143, 1275, 1630, 1207, 1040, 1533, 1407, 1371, 451, 1622, 1208, 1294, 1299, 1180, 1913, 1795, 1838, 1824, 1769, 704, 510, 1704, 705, 1563, 927, 803, 848, 1113],
        chart2: [930, 968, 1382, 445, 987, 1305, 1183, 917, 1325, 1348, 1127, 746, 739, 984, 695, 1185, 714, 716, 1444, 1391, 1329, 1188, 842, 1407, 981, 870, 1355, 1269, 1441, 1397]
    },
    "Aug 24": {
        chart1: [1465, 333, 1491, 1874, 430, 1432, 271, 946, 1375, 515, 1247, 925, 205, 485, 1194, 1922, 610, 1482, 1219, 1136, 1128, 683, 1941, 1340, 890, 684, 200, 1089, 1115, 262],
        chart2: [262, 787, 790, 615, 419, 932, 168, 1037, 190, 1221, 739, 1161, 502, 674, 1274, 1300, 908, 153, 585, 333, 1094, 915, 1064, 1245, 787, 1008, 1142, 290, 772, 921]
    },
    "Sep 24": {
        chart1: [1738, 841, 1840, 727, 552, 1425, 1855, 1692, 471, 643, 1684, 1710, 751, 269, 357, 1114, 1054, 1572, 333, 1362, 1204, 1657, 505, 301, 219, 1820, 1038, 1623, 499, 619],
        chart2: [1368, 571, 1010, 561, 1375, 1322, 1083, 1350, 738, 1380, 892, 1112, 134, 1372, 1148, 772, 155, 970, 1183, 291, 999, 1188, 711, 1449, 257, 292, 1107, 331, 212, 1018]
    },
    "Oct 24": {
        chart1: [1538, 1789, 1678, 994, 436, 331, 209, 802, 306, 1232, 607, 571, 1111, 966, 1334, 573, 1749, 699, 1374, 1338, 1649, 1205, 675, 1511, 1709, 1719, 1575, 606, 1375, 1618],
        chart2: [845, 1396, 392, 514, 1160, 1494, 808, 621, 1122, 1371, 435, 571, 1180, 1053, 434, 1451, 456, 1326, 1220, 996, 1500, 666, 199, 834, 558, 917, 310, 771, 1440, 651]
    },
    "Nov 24": {
        chart1: [899, 1549, 1001, 910, 235, 1793, 1118, 977, 1654, 1881, 972, 1113, 1383, 1730, 1685, 1572, 678, 631, 433, 962, 846, 1323, 340, 337, 1873, 1047, 1946, 1910, 1899, 266],
        chart2: [576, 359, 551, 651, 1329, 1386, 368, 981, 1183, 229, 1146, 992, 884, 1207, 511, 206, 226, 1297, 819, 1452, 1281, 1576, 1004, 1846, 619, 1675, 1963, 1399, 914, 541]
    },
    "Dec 24": {
        chart1: [1320, 971, 715, 846, 1580, 992, 387, 511, 788, 1189, 645, 1304, 754, 1345, 1635, 1122, 853, 1349, 1893, 725, 1422, 945, 1787, 1046, 1158, 1555, 1283, 1022, 1137, 842],
        chart2: [985, 544, 1094, 1397, 1031, 410, 981, 473, 1221, 1080, 633, 587, 1456, 710, 802, 775, 1220, 1734, 1458, 1139, 358, 1316, 1389, 402, 905, 1098, 610, 720, 829, 295]
    }
};


// Инициализация Swiper
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    spaceBetween: 10,
    centeredSlides: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        slideChange: function () {
            // Получаем выбранный месяц при изменении слайда
            const selectedMonth = swiper.slides[swiper.activeIndex].innerText.trim();
            updateChartData(selectedMonth);  // Обновляем данные для выбранного месяца
        }
    }
});

// Добавляем месяцы в слайдер
const swiperWrapper = document.querySelector('.swiper-wrapper');
Object.keys(monthData).forEach(month => {
    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');
    slide.classList.add('month-slider__slide');
    slide.innerText = month;
    swiperWrapper.appendChild(slide);
});

// Добавляем обработчик события клика на слайды
swiperWrapper.addEventListener('click', (event) => {
    const slide = event.target;
    if (slide.classList.contains('month-slider__slide')) {
        const selectedMonth = slide.innerText.trim();
        updateChartData(selectedMonth);  // Обновляем график для выбранного месяца
    }
});
// Функция для обновления активного слайда в Swiper
function updateActiveSlide(month) {
    const slides = swiper.slides;
    slides.forEach(slide => {
        if (slide.innerText.trim() === month) {
            slide.classList.add('swiper-slide-active');
        } else {
            slide.classList.remove('swiper-slide-active');
        }
    });
}

function generateDaysLabels(month) {
    const daysInMonth = monthData[month].chart1.length;
    let daysLabels = [];
    const monthName = month.split(' ')[0]; // Извлекаем название месяца (например, "Aug")

    const screenWidth = window.innerWidth;
    let daysToDisplay = 0;

    // Определяем количество отображаемых дней в зависимости от ширины экрана
    if (screenWidth <= 767) {
        daysToDisplay = 8; // до 767px - 8 дней
    } else if (screenWidth <= 1023) {
        daysToDisplay = 16; // до 1023px - 16 дней
    } else {
        daysToDisplay = daysInMonth; // начиная с 1024px - все дни
    }

    // Генерируем метки для дней с месяцем
    for (let i = 0; i < daysToDisplay; i++) {
        daysLabels.push(`${i + 1} ${monthName}`);
    }

    return daysLabels;
}
// Функция для обновления данных на графике
function updateChartData(month) {
    const selectedData = monthData[month];
    if (selectedData) {
        const chart1Data = selectedData.chart1;
        const chart2Data = selectedData.chart2;
        const daysLabels = generateDaysLabels(month);

        // Обновляем данные графика
        lineChart.data.labels = daysLabels;
        lineChart.data.datasets[0].data = chart1Data;
        lineChart.data.datasets[1].data = chart2Data;

        // Пересчитываем гигабайты для каждого графика
        const chart1Total = chart1Data.reduce((a, b) => a + b, 0);
        const chart2Total = chart2Data.reduce((a, b) => a + b, 0);

        // Обновляем информацию по месяцам
        document.getElementById('chart1-gb').innerText = `${chart1Total} GB`;
        document.getElementById('chart2-gb').innerText = `${chart2Total} GB`;

        // Обновляем информацию о дне и месяце в тултипах
        const dayLabel = daysLabels[0]; // Используем первый день для отображения в dayLine
        const dayNumber = dayLabel.split(' ')[0]; // Число
        const monthName = dayLabel.split(' ')[1]; // Месяц

        // Обновляем строки с днем и месяцем
        const dayLine = document.querySelector('.chart-tooltip .day-line');
        if (dayLine) {
            dayLine.innerText = `Day ${dayNumber} ${monthName}`;
        }

        // Обновляем строку с гигабайтами
        const valueLine = document.querySelector('.chart-tooltip .value-line');
        if (valueLine) {
            valueLine.innerText = `${chart1Total} GB`; // Пример для chart1
        }

        // Обновляем график
        lineChart.update();

        // Обновляем активный слайд в Swiper
        updateActiveSlide(month);
    }
}

const ctx = document.getElementById('lineChart').getContext('2d');

// Данные для графика
const data = {
    labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug'], // Дни месяца
    datasets: [
        {
            label: 'Red',
            data: [],
            borderColor: '#9d4c4c', // Цвет линии для второго графика
            backgroundColor: '#9d4c4c', // Фон для линии второго графика
            fill: false,
            pointRadius: 0, // Убираем точки по умолчанию
            hoverRadius: 5, // Радиус точек при наведении
            pointHoverBackgroundColor: '#9d4c4c', // Цвет точек при наведении
            pointHoverBorderColor: '#9d4c4c', // Граница точек при наведении
            pointHoverBorderWidth: 2, // Толщина границы точек при наведении
        },
        {
            label: 'Blue',
            data: [],
            borderColor: '#002f72',  // Цвет линии
            backgroundColor: '#002f72', // Фон для линии
            fill: false,
            pointRadius: 0, // Убираем точки по умолчанию
            hoverRadius: 5, // Радиус точек при наведении
            pointHoverBackgroundColor: '#002f72', // Цвет точек при наведении
            pointHoverBorderColor: '#002f72', // Граница точек при наведении
            pointHoverBorderWidth: 2, // Толщина границы точек при наведении
        }
    ]
};

// Конфигурация графика
const lineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                enabled: false,
                external: function(context) {
                    const tooltipModel = context.tooltip;

                    // Убираем тултип, если ничего не нужно отображать
                    if (tooltipModel.opacity === 0) {
                        document.querySelectorAll('.chart-tooltip').forEach(el => {
                            el.style.opacity = 0;
                        });
                        return;
                    }

                    // Создаём тултипы для каждой точки
                    tooltipModel.dataPoints.forEach(dataPoint => {
                        const datasetIndex = dataPoint.datasetIndex;
                        const index = dataPoint.index;
                        const color = data.datasets[datasetIndex].borderColor;
                        const value = dataPoint.raw; // Данные в гигабайтах
                        const label = dataPoint.label; // Получаем метку (день) для текущего индекса

                        // Проверяем, есть ли тултип для этой точки
                        let tooltipEl = document.getElementById(`tooltip-${datasetIndex}-${index}`);
                        if (!tooltipEl) {
                            tooltipEl = document.createElement('div');
                            tooltipEl.id = `tooltip-${datasetIndex}-${index}`;
                            tooltipEl.className = 'chart-tooltip';
                            tooltipEl.style.border = `2px solid ${color}`;

                            // Создание каретки
                            const caret = document.createElement('div');
                            caret.className = 'chart-tooltip__caret';
                            caret.style.borderColor = `${color} transparent transparent transparent`;
                            tooltipEl.appendChild(caret);

                            // Создание текста тултипа с двумя строками
                            const text = document.createElement('div');
                            const dayLine = document.createElement('div'); // Первая строка
                            dayLine.innerText = `${label}`; // Вставляем день
                            dayLine.style.fontWeight = 'bold';
                            dayLine.style.marginBottom = '4px';

                            const valueLine = document.createElement('div'); // Вторая строка
                            valueLine.innerText = `${value} GB`;

                            text.appendChild(dayLine);
                            text.appendChild(valueLine);
                            tooltipEl.appendChild(text);

                            document.body.appendChild(tooltipEl);
                        }

                        // Позиционирование тултипа
                        const position = context.chart.canvas.getBoundingClientRect();
                        tooltipEl.style.opacity = 1;
                        tooltipEl.style.left = position.left + window.pageXOffset + dataPoint.element.x - tooltipEl.offsetWidth / 2 + 1 +'px';
                        tooltipEl.style.top = position.top + window.pageYOffset + dataPoint.element.y - tooltipEl.offsetHeight - 12 + 'px';
                    });
                }
            }
        },
        interaction: {
            mode: 'index', // Оба тултипа отображаются для одного дня
            intersect: false // Только при наведении на точки
        },
        responsive: true,
        maintainAspectRatio: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: '',
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    font: {
                        size: 12
                    }
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: '',
                    font: {
                        size: 14
                    }
                },
                ticks: {
                    callback: function(value) {
                        return value / 1000; // Преобразование в терабайты
                    },
                    font: {
                        size: 12
                    }
                },
                grid: {
                    display: false
                }
            }
        }
    },
    plugins: [
        {
            id: 'verticalLine',
            afterDraw: function(chart) {
                const tooltip = chart.tooltip;
                if (tooltip._active && tooltip._active.length) {
                    const ctx = chart.ctx;
                    const activePoint = tooltip._active[0];
                    const x = activePoint.element.x;
                    const topY = chart.scales.y.top;
                    const bottomY = chart.scales.y.bottom;

                    // Рисуем вертикальную линию
                    ctx.save();
                    ctx.beginPath();
                    ctx.moveTo(x, topY);
                    ctx.lineTo(x, bottomY);
                    ctx.lineWidth = 1;
                    ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
    ]
});

// Загрузка данных при инициализации
updateChartData("Jan 24");

// Обновление данных при изменении размера окна
window.addEventListener('resize', function () {
    updateChartData("Jan 24");
});