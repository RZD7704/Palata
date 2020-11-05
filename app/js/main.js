AOS.init();
// Accordion animation

$(".accordion .card .btn-head").click(function() {
    if( $(this).parents(".card").hasClass('active') ) {
        $(this).parents(".card").removeClass('active');
      } else {
        $('.btn-head').parents(".card").removeClass('active');
        $(this).parents(".card").addClass('active');
      }
    $('.accordion').removeClass('active');
    $('.accordion').has('.card.active').addClass('active');
 });

$('.btn-accordion').click(function(e){
  var auditBlocks = $($(this).data('target')).find('.hide-block'),
    mainTable = $('.hide-block-parent_main-table'),
    bigTable = $('.hide-block-parent_big-table');
  if($(auditBlocks).length > 0){
    var heightArr = [];
  $($(this).data('target')).on('shown.bs.collapse', function () {
  $( auditBlocks ).each(function( index, elem ) {
    heightArr.push($(elem).height());
            var height = 0;
            jQuery(elem).find('.hide-block__wgt').each(function (index, elem) {
                height += jQuery(elem).outerHeight();
                if (mainTable) {
                    if (index == 2) {
                        return false;
                    }
                }
                if (bigTable) {
                    if (index == 1) {
                        return false;
                    }
                }
            });
            jQuery(elem).css({'height': height + 20, 'overflow': 'hidden'});
            openClick(auditBlocks, $(elem).closest('.hide-block-parent_main-table').find('.hide-block'), $(elem).closest('.hide-block-parent_main-table').find('.hidden-block__btn'), heightArr, height);  
            openClick(auditBlocks, $(elem).closest('.hide-block-parent_big-table').find('.hide-block'), $(elem).closest('.hide-block-parent_big-table').find('.hidden-block__btn'), heightArr, height);  
        });
    });
  }
});

function openClick(blocks, parent, btn, defaultHeight, height) {
    jQuery(btn).click(function (e) {
        e.preventDefault();
        var index = $(blocks).index(parent);
        if (jQuery(parent).hasClass('active')) {
            jQuery(parent).removeClass('active');
            jQuery(parent).animate({
                height: height + 20
            }, 1000);
        } else {
            jQuery(parent).addClass('active');
            jQuery(parent).animate({
                height: defaultHeight[index] + 30
            }, 1000);
        }

    });
}

// Custon Donut
function initCustomDonut() {
    var chart_circle,
        intervals,
        per_num;

    intervals = [];
    per_num = [];
    chart_circle = {
        items: $('.circle-chart'),
        set: function (obj, per, index) {
            var path,
                pathLen,
                perLen;

            path = $('.chart-circle-progress').get(index);
            //pathLen = Math.round(path.getTotalLength());
            pathLen = Math.round((obj.outerHeight()) * 3.14);
            perLen = Math.round(pathLen - (per * (pathLen / 100)));
            if (per == 0) {
                perLen = pathLen;
            } else if (per > 50) {
                perLen += (per == 100) ? 5 : Math.round(pathLen / 10);
            }
            path.setAttribute('stroke-dasharray', pathLen);
            path.setAttribute('stroke-dashoffset', pathLen);
            setTimeout(function () {
                chart_circle.num_evt(per, obj, index);
                chart_circle.init(obj, path, perLen);
            }, 100);
        },
        init: function (obj, path, perLen) {
            obj.addClass('active');
            path.setAttribute('stroke-dashoffset', perLen);
        },
        num_evt: function (per, obj, index) {
            chart_circle.num_interval(per, obj, index);
        },
        num_interval: function (per, obj, index) {
            var interv,
                per_box;

            per_num[index] = 0;
            interv = 1000 / per;

            // very slowly interv
            if (interv > 50) {
                interv = 50;
            }

            per_box = obj.find('.per-num span');
            intervals[index] = setInterval(function () {
                chart_circle.num_set(obj, per_box, per, index);
            }, interv);
        },
        num_set: function (obj, per_box, per, index) {
            if (per_num[index] >= per) {
                clearInterval(intervals[index]);
            }

            per_box.text(per_num[index]);
            per_num[index]++;
        },
        call: function () {
            chart_circle.items.each(function (index) {
                var per;

                per = $(this).attr('data-percent');
                chart_circle.set($(this), per, index);
            });
        }
    }

    chart_circle.call();
}
initCustomDonut();

// Accordion

function hideAccordion() {
    document.querySelectorAll('.card .collapse').forEach(n => n.classList.remove('collapse'));
}

function showAccordion() {
    document.querySelectorAll('.card .collapse-mob').forEach(n => n.classList.add('collapse'));
}

function findWidth() {
    if ($(window).width() >= 992) {
        hideAccordion();
    } else {
        showAccordion();
    }
}

$(window).resize(function () {
    findWidth();
});

findWidth();

//Doughnut objects

var auditSubjects = {
    values:[69, 15, 13, 10, 5, 3],
    names: ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'],
    colors: ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(12, 218, 232, 0.8)']
};


var auditPointsImplementation = {
    values:[27, 13, 19, 14, 27],
    names: ['інформація відсутня', 'ні', 'так', '50/50', 'внесено в план'],
    colors: ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)']
};

var auditPointsRecommendationRecipients = {
    values:[74, 3, 11, 4, 2, 2, 6],
    names: ['Виконавча влада', 'Правоохоронці', 'ОДА, КМДА', 'Держпідприємства та установи', 'Місцеве самоврядування', 'Суди', 'Інші'],
    colors: ['rgba(164, 201, 255, 0.8)', 'rgba(55, 98, 204, 0.8)', 'rgba(249, 167, 167, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(12, 218, 232, 0.8)', 'rgba(203, 104, 219, 0.8)']
};

var auditPointsCategories = {
    values:[7, 8, 10, 6, 7, 6, 6, 7, 5, 28],
    names: ['Охорона здоров’я', 'Освіта', 'Соціальна політика', 'Культура і наука', 'Фіскальна політика', 'Провосуддя і юстриція', 'Екологія', 'Висновки про виконання бюджету', 'Оборона і безпека', 'Інше'],
    colors: ['rgba(12, 91, 124, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(203, 104, 219, 0.8)', 'rgba(124, 249, 25, 1.0)', 'rgba(109, 186, 168, 1.0)', 'rgba(12, 116, 92, 1.0)', 'rgba(196, 218, 227, 0.8)', 'rgba(35, 212, 223, 1.0)', 'rgba(117, 223, 147, 1.0)', 'rgba(32, 11, 161, 0.8)']
};

function addDoughnutPoints (parent, values, names, colors, percent) {
    for (let i = 0; i < values.length; i++) {
        let name;
        if(percent){
            name = values[i] + '%';
        } else {
            name = values[i];
        }
        $(`<div class="basic-points__item">
            <div class="basic-points__point" style="background-color:${colors[i]}"></div>
            <div class="basic-points__txt">${names[i]}(${name})</div>
        </div>`).appendTo(parent);
    }
}
addDoughnutPoints('#auditPointsImplementation', auditPointsImplementation.values, auditPointsImplementation.names, auditPointsImplementation.colors, true);

addDoughnutPoints('#auditPointsRecommendationRecipients', auditPointsRecommendationRecipients.values, auditPointsRecommendationRecipients.names, auditPointsRecommendationRecipients.colors, true);

addDoughnutPoints('#auditPointsCategories', auditPointsCategories.values, auditPointsCategories.names, auditPointsCategories.colors, true);

addDoughnutPoints('#pointsID', auditSubjects.values, auditSubjects.names, auditSubjects.colors);





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

function addThinDoughnutChart(selector, dataArr, labelsArr, color) {
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
            cutoutPercentage: 90,
            legend: {
                display: false
            }
        }
    });
}

function addPieChart(selector, dataArr, labelsArr, color) {
    var ctx = document.querySelector(selector);
    var Сhart = new Chart(ctx, {
        type: 'pie',
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
            // cutoutPercentage: 70,
            legend: {
                display: false
            }
        }
    });
}

addDoughnutChart('#auditImplementation', auditPointsImplementation.values, auditPointsImplementation.names, auditPointsImplementation.colors);

addDoughnutChart('#auditChartRecommendationRecipients', auditPointsRecommendationRecipients.values, auditPointsRecommendationRecipients.names, auditPointsRecommendationRecipients.colors);

addDoughnutChart('#auditChartCategories', auditPointsCategories.values, auditPointsCategories.names, auditPointsCategories.colors);

addDoughnutChart('#auditChartKmu2', [35, 65], ['вчасно', 'із запізенням'], ['rgba(12, 91, 124, 1)', 'rgba(35, 212, 223, 1.0)']);

addDoughnutChart('#recommendationClassification', [414, 257, 153, 107, 102, 83, 38, 32, 32, 10, 9], ['Інше', 'Створення та зміни НПА', 'Внутрішній контроль', 'Дотримання бюдж. закнодавства', 'Неоднозначні рекомендації', 'Притягнення до відповідальності', 'Кадри та оплата праці', 'Оформлення та користування нерухомим майном', 'Пришвидшення процесів', 'Зміни статутів', 'Відшкодування збитків'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(203, 104, 219, 0.8)', 'rgba(124, 249, 25, 1.0)', 'rgba(109, 186, 168, 1.0)', 'rgba(12, 116, 92, 1.0)', 'rgba(196, 218, 227, 0.8)', 'rgba(35, 212, 223, 1.0)', 'rgba(117, 223, 147, 1.0)', 'rgba(124, 249, 25, 1.0)', 'rgba(203, 104, 219, 0.8)']);

// addDoughnutChart('#recommendationExtract', [51, 15, 13, 10, 10, 1], ['ЦПСМД №2', '4 МКЛ', 'ЦПСМД №1', '2 МКЛ', 'ЦПСМД №3', '3 МКЛ'], ['rgba(12, 91, 124, 0.8)', 'rgba(32, 11, 161, 0.8)', 'rgba(109, 186, 168, 0.8)', 'rgba(221, 118, 118, 0.8)', 'rgba(255, 234, 146, 0.8)', 'rgba(196, 218, 227, 0.8)']);

addPieChart('#typesPieChart1', [61, 7], ['К-ть звітів (аналіз видатків)', 'К-ть звітів з аналізу доходів'], ['rgba(35, 212, 223, 1.0)', 'rgba(12, 91, 124, 1)']);
addPieChart('#typesPieChart2', [267.7, 179.4], ['Обсяг видатків(млрд.)', 'Обсяг доходів(млрд.)'], ['rgba(35, 212, 223, 1.0)', 'rgba(12, 91, 124, 1)']);
