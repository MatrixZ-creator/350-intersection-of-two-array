var intersect = function(nums1, nums2) {
    let smallArray = nums1;
    let bigArray = nums2;
    if (smallArray.length > bigArray.length) {
        smallArray = nums2;
        bigArray = nums1;
    }
    let count = new Map();
    for (let num of smallArray) {
        let currentCount = count.get(num);
        if (currentCount === undefined) {
            currentCount = 0;
        }
        count.set(num, currentCount + 1);
    }
    let result = [];
    for (let num of bigArray) {
        let OrignalCount = count.get(num);
        if (OrignalCount === undefined) {
            OrignalCount = 0;
        }
        if (OrignalCount > 0) {
            result.push(num);
            count.set(num, OrignalCount - 1);
        }
    }

    return result;
};
let nums1=[1,2,3];
let nums2=[2,3,4];
console.log(intersect(nums1, nums2)); 