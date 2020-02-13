// export default (str) => {
//  // split参数为字符串
//   return str.split(' ').map(item => {
//     return item.split('').reverse().join('')
//   }).join(' ')
// }

export default (str) => {
  // split 参数可以是正则
  return str.split(/\s/g).map(item => {
    return item.split('').reverse().join('')
  }).join(' ')
}
