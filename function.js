//1.
function product (nums){
    if (nums.length === 0) {
        return 1;
    }else{
        return nums[0]* product(nums.slice(1));
    }
}

//2.
function longest(words) {
    if (words.length === 1) {
        return words[0].length;
    } else {
        const subMaxLength = longest(words.slice(1));
        return Math.max(words[0].length, subMaxLength);
    }
}


console.log(longest(["hello", "hi", "hola"])); 

//3.
function everyOther(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return str[0] + everyOther(str.slice(2));
    }
}


console.log(everyOther("hello")); 

//4.
function everyOther(str) {
    if (str.length <= 1) {
        return str;
    } else {
        return str[0] + everyOther(str.slice(2));
    }
}


console.log(everyOther("hello")); 

//5.
function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    } else if (str[0] !== str[str.length - 1]) {
        return false;
    } else {
        return isPalindrome(str.slice(1, -1));
    }
}


console.log(isPalindrome("tacocat")); 
console.log(isPalindrome("tacodog")); 

//6. 
function findIndex(arr, str, index = 0) {
    if (index >= arr.length) {
        return -1;
    } else if (arr[index] === str) {
        return index;
    } else {
        return findIndex(arr, str, index + 1);
    }
}


let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat"));       // Output: 1
console.log(findIndex(animals, "porcupine")); // Output: -1

//7. 
function revString(str) {
    if (str === "") {
        return "";
    } else {
        return revString(str.slice(1)) + str[0];
    }
}


console.log(revString("porcupine")); // Output: 'enipucrop'

//8.
function gatherStrings(obj) {
    let strings = [];
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            strings.push(obj[key]);
        } else if (typeof obj[key] === "object") {
            strings = strings.concat(gatherStrings(obj[key]));
        }
    }
    return strings;
}

// Example usage
let nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
        lastName: "Testowitz"
    },
    funFacts: {
        moreStuff: {
            anotherNumber: 100,
            deeplyNestedString: {
                almostThere: {
                    success: "you made it!"
                }
            }
        },
        favoriteString: "nice!"
    }
};

console.log(gatherStrings(nestedObj)); // Output: ["Lester", "Testowitz", "you made it!", "nice!"]
