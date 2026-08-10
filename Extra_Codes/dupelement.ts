let nums2 = [1, 2, 2, 3, 4, 4];
let duplicates = nums2.filter((item, index) => nums2.indexOf(item) !== index);

console.log([...new Set(duplicates)]);