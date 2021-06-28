// const daysadd = 3
const increaseDate = (date, daysadd = 3) =>
  date.setDate(date.getDate() + daysadd)

  const increaseAndFormatDate = (dateArray, localization = 'hu-HU') => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return dateArray.map(date =>
      Intl.DateTimeFormat(localization, options).format(increaseDate(date))
    )
  }  

module.exports = increaseAndFormatDate
