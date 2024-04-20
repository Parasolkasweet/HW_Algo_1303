// function quickSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivot = arr[arr.length - 1];
//     const left = [];
//     const right = [];

//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] >= pivot) {
//             left.push(arr[i]);
//         } else {
//             right.push(arr[i]);
//         }
//     }

//     return [...quickSort(left), pivot, ...quickSort(right)];
// }

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const sortedArr = quickSort(arr);
// console.log(sortedArr);

//===Проверка числа на простоту (Prime Number Check)

function isPrime(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(11)); 
console.log(isPrime(16));

//Quick Sort с использованием итераций
function quickSortIterative(arr) {
    const stack = [{ left: 0, right: arr.length - 1 }];

    while (stack.length) {
        const { left, right } = stack.pop();
        if (left >= right) {
            continue;
        }

        let pivotIndex = partition(arr, left, right);
        stack.push({ left, right: pivotIndex - 1 });
        stack.push({ left: pivotIndex + 1, right });
    }

    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;

    for (let j = left; j < right; j++) {
        if (arr[j] >= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
    return i + 1;
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArr = quickSortIterative(arr);
console.log(sortedArr);
