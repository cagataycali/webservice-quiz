const HACIMLER = [1000, 2000, 5000, 7000, 9999999]
const HACIM_KATSAYI = [1, 3, 5, 10, 13]

const YAS = [10, 7, 5, 3, 2]
const YAS_KATSAYI = [2, 5, 7, 9, 12]

const vergi = (k, s) => (10000 * k) + (1000 * s)

// const hacim = v => {
//   if (v < 1000) {
//     return 1
//   } else if (v < 2000) {
//     return 3
//   } else if (v < 5000) {
//     return 5
//   } else if (v < 7000) {
//     return 10
//   } else {
//     return 13
//   }
// }

const hacim = v => HACIMLER.map((h, i) => (v >= h ? HACIM_KATSAYI[i] : null)).filter(f => f).pop() || 1
let yas = a => YAS.map((p, i) => (a <= p ? null : YAS_KATSAYI[i])).filter(p => p)[0] || 2

module.exports = (v, a) => vergi(hacim(v), yas(a))
