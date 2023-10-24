//task 1 
function getElement (arr)
{
    return arr[0]
}
console.log(getElement([1, 2, 3]));



// task 2 
function argumentToArray (a,b)
{
    return [a,b]
}
console.log(argumentToArray(1,2));



//task 3 
function arrayOfReverse (arr)
{
    return arr.reverse()
}
console.log(arrayOfReverse([1,2,3,4]));



//task 4 
function toAdd (arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] += 1
    }

    return arr
}
console.log(toAdd([0,1,2,3]));



//task 5 
function getLastElement(arr)
{
    return arr [arr.length - 1]
}
console.log(getLastElement([1,2,3]));



//task 6
function arrayOfString (arr)
{
    return arr.join(" ")
}
console.log(arrayOfString([1,2,3,4,5]));



//task 7 
function checkArray (arr,num)
{
    return arr.includes(num)
}
console.log(checkArray([1,2,3,4,5],8));



// task 8
function arrayString (arr,str)
{
    return arr.indexOf(str)
}
console.log(arrayString(["hi", "edabit", "fgh", "abc"], "fgh"));


//task 9 
function concatArray (arr,arr2)
{
    return arr.concat(arr2)
}
console.log(concatArray([1,2,3],[4,5,6]));



//task 10
function stringToArray (arr)
{
    return arr.map(str => Number(str));
}
console.log(stringToArray(["9.4", "4.2"]));



//task 11
function sumArray (arr)
{
    return arr.reduce((acc,curr) => acc + curr, 0)
}
console.log(sumArray([1,2,3,4,5]));



// task 12 [1]
function toString (arr)
{
    return arr.map (function (n) 
    {
        if (typeof n === 'number') 
        {
            return n.toString();
        } 
        else 
        {
            return n; 
        }
    });
}
console.log(toString([1, 2, "a", "b"]));



//task 12 [2]
function checkLessThan(num1, num2, arr) 
{
    return arr.filter(function(n) 
    {
      return n > num1 && n < num2;
    });
}
console.log(checkLessThan(3, 8, [1, 5, 95, 0, 4, 7]));



// task 13 
function getTypeOf (arr)
{
    return arr.map(function(n)
    {
        return typeof n
    })
}
console.log(getTypeOf([1, 2, "null", []]));



//task 14 
function getLenghtWord (arr)
{
    return arr.map(function(word)
    {
        return word.length
    })
}
console.log(getLenghtWord(["hello", "world"]))




//task 15 
function checkSquareCube(arr) 
{
    let num1 = arr[0];
    let num2 = arr[1];

    let sqtr = Math.sqrt(num1)
    let cbtr = Math.cbrt(num2)

    if (sqtr === cbtr)
    {
        return true
    }
    else 
    {
        return false 
    }
}
console.log(checkSquareCube([4, 8]));




//task 16
function invertedArray(arr)
{
    let arr1 = [];

    for (let i = 0; i < arr.length; i++)
    {
        arr1.push(- arr[i])
    }

    return arr1
}
console.log(invertedArray([1,2,5]));



//task 17 
function getMultipliedArr (arr)
{
    for (let i = 0; i < arr.length; i++)
    {
        arr[i] *= 2
    }
    
    return arr
}
console.log(getMultipliedArr([2,5,3]));


// task 18 
function getSumOfItems (arr)
{
    let sum = 0

    for (let i = 0; i < arr.length; i++)
    {
        sum += arr[i]
    }
    
    return sum
}
console.log(getSumOfItems([2,7,4]));
//task  18 method reduce 
function getSumOfItems1 (arr)
{
    return arr.reduce(function(acc, curr)
    {
        return acc + curr
    }, 0)
}
console.log(getSumOfItems1([2,7,4]));


//task 19 
function arrayString (arr,str)
{
    for (let i = 0; i < arr.length; i++)
    {
        if (str[i].indexOf(arr) === -1)
        {
            return true 
        }
    }
    return false
}
console.log(arrayString(["hi", "edabit", "fgh", "abc"], "a"));


//task 20
function sumFive (arr)
{
    let sum = 0

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] > 5)
        {
            sum += arr[i]
        }
    }
    
    return sum 
}
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));



//task 21
function filterArray(arr) 
{
    return arr.filter(function(n) 
    {
      return typeof n === "number"
    });
}
console.log(filterArray([1, 5, 95, 0, "q", "d"]));




//task 22
function evenOrOdd (arr)
{
    let sum =  arr.reduce(function (acc,curr)
    {
        return acc + curr
    }, 0)

    return sum % 2 === 0 ? "even" : "odd"
}
console.log(evenOrOdd([1,2,3,4,5,6]));




//task 23 
function rangeOfNum(start, end) 
{
    let result = [];

    for (let i = start; i <= end; i++) 
    {
        result.push(i);
    }

    return result;
} 
console.log(rangeOfNum(2,9));