"use strict";
/**
 * Finds the median of two sorted arrays.
 * @param nums1 - The first sorted array.
 * @param nums2 - The second sorted array.
 * @returns The median of the two sorted arrays.
 */
function findMedianSortedArrays(nums1, nums2) {
    //  nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);
    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;
        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1; // i is too small
        }
        else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1; // i is too big
        }
        else {
            let maxLeft = 0;
            if (i === 0)
                maxLeft = nums2[j - 1];
            else if (j === 0)
                maxLeft = nums1[i - 1];
            else
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            if ((m + n) % 2 === 1) {
                return maxLeft; // Odd length, return the max of left
            }
            let minRight = 0;
            if (i === m)
                minRight = nums2[j];
            else if (j === n)
                minRight = nums1[i];
            else
                minRight = Math.min(nums1[i], nums2[j]);
            return (maxLeft + minRight) / 2; // Even length, return average of middle two
        }
    }
    throw new Error("Input arrays are not sorted or are invalid.");
}
console.log("Median of [1, 3] and [2]:", findMedianSortedArrays([1, 3], [2])); // Expected: 2
console.log("Median of [1, 2] and [3, 4]:", findMedianSortedArrays([1, 2], [3, 4]));
console.log("Median of [0, 0] and [0, 0]:", findMedianSortedArrays([0, 0], [0, 0]));
console.log("Median of [] and [1]:", findMedianSortedArrays([], [1]));
console.log("Median of [1] and []:", findMedianSortedArrays([1], []));
