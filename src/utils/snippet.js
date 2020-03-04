// 代码片段

// 判断数组中的元素是否都相等
const allEqual = arr => arr.every(val => val === arr[0])

allEqual([1, 2, 3, 4, 5, 6]) // false
allEqual([1, 1, 1, 1]) // true

// 检查两个数字是否近似相等，差异值可以通过传参的形式进行设置
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon

approximatelyEqual(Math.PI / 2.0, 1.5708) // true

// 返回两个或多个数的平均数
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length
average(...[1, 2, 3]) // 2
average(1, 2, 3) // 2

// 检测页面是否滚动到页面底部
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight)

bottomVisible() // true

// 统计数组中某个值出现的次数
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0)
countOccurrences([1, 1, 2, 1, 2, 3], 1) // 3

// 查找两个给定数组的差异，查找出前者数组在后者数组中不存在元素
const difference = (a, b) => {
  const s = new Set(b)
  return a.filter(x => !s.has(x))
}

difference([1, 2, 3], [1, 2, 4]) // [3]
