function hideBlock(btn, wrap) {
    $(btn).on('click', function () {
        $(wrap).toggleClass('-expanded');
    });
}

hideBlock('.hidden-block__btn_first', '.hidden-block__wrapper_first');
hideBlock('.hidden-block__btn_second', '.hidden-block__wrapper_second');
hideBlock('.hidden-block__btn_third', '.hidden-block__wrapper_third');
hideBlock('.hidden-block__btn_four', '.hidden-block__wrapper_four');

function addDoughnutChart(selector, dataArr, labelsArr, color) {
    var ctx = document.querySelector(selector);
    var Сhart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labelsArr,
            datasets: [{
                label: '# of Votes',
                data: dataArr,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1
            }]
        },
        options: {
            cutoutPercentage: 70,
            legend: {
                display: false
            }
        }
    });
}

addDoughnutChart('#auditChart1', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(12, 218, 232, 0.8)']);

addDoughnutChart('#auditChart2', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(12, 218, 232, 0.8)']);

addDoughnutChart('#auditChart3', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(12, 218, 232, 0.8)']);

addDoughnutChart('#auditChartKmu1', [51, 49], ['ЦПСМД №2', '4 МКЛ'], ['rgba(12, 91, 124, 1)', 'rgba(35, 212, 223, 1.0)']);

addDoughnutChart('#auditChartKmu2', [51, 49], ['ЦПСМД №2', '4 МКЛ'], ['rgba(12, 91, 124, 1)', 'rgba(35, 212, 223, 1.0)']);

addDoughnutChart('#recommendationQuantity', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);

addDoughnutChart('#recommendationImplementation1', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);
addDoughnutChart('#recommendationImplementation2', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);
addDoughnutChart('#recommendationImplementation3', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);
addDoughnutChart('#recommendationImplementation4', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);
addDoughnutChart('#recommendationImplementation5', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);

addDoughnutChart('#recommendationClassification', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);