const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatTel = n => {
  n = n.toString()
  return n.substr(0,3) + '...' + n.substr(-4,4)
}
module.exports = {
  formatTime: formatTime,
  formatTel:formatTel
}
