import * as d3 from 'd3'
d3.timeFormatDefaultLocale({
  "dateTime": "%A, %e %B %Y г. %X",
  "date": "%d.%m.%Y",
  "time": "%H:%M:%S",
  "periods": ["AM", "PM"],
  "days": ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
  "shortDays": ["вс", "пн", "вт", "ср", "чт", "пт", "сб"],
  "months": ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
  "shortMonths": ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
}
)

function format(date) {
  if (d3.timeDay(date) < date) {
        return d3.timeFormat('%I:%M')(date)
    }
    if (d3.timeMonth(date) < date) {
        return d3.timeFormat('%b.%d')(date)
    }
    if (d3.timeYear(date) < date) {
        return d3.timeFormat('%B')(date)
    }
    return d3.timeFormat('%Y')(date)
}

export default (config) => selection => {
    let {
        timeScale,
        height,
    } = config

    let axe = selection.selectAll('.axe').data(d => d)

    let ay = d3.axisBottom()
            .scale(timeScale)
            .tickFormat(d => format(d))

    axe.enter()
        .append('g')
        .attr('transform', `translate(0, ${height+5})`)
        .classed('axe', true)
        .call(ay)

    axe.call(ay)
}
