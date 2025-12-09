/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k)
{
    let i = 0;
    let current = 1;
    let missingPositiveNumbers = 0;

    while (missingPositiveNumbers < k)
    {
        if (i < arr.length && current === arr[i])
        {
            i++;
        }
        else
        {
            missingPositiveNumbers++;
            if (missingPositiveNumbers === k) return current;
        }
        current++;
    }

};



let arr = [2, 3, 4, 7, 11];
let k = 5;

console.log(findKthPositive(arr, k));
