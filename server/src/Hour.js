export const obtainHour = () => {
  let todayDate = new Date()

  let hours = todayDate.getHours()
  let minutes = todayDate.getMinutes()
  let seconds = todayDate.getSeconds()

  let ampm = hours >= 12 ? 'PM' : 'AM'

  hours = hours % 12
  hours = hours ? hours : 12

  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  let hour12 = hours + ':' + minutes + ' ' + ampm

  return hour12
}
