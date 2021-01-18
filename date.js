const timeFormat = new Intl.DateTimeFormat('ru', {
    hour12: false,
    timeZone: 'UTC',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
});

const getDateUTC = () => {
    return timeFormat.format(new Date());
}

module.exports = getDateUTC;