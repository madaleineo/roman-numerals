//Coding Challenge
//Madaleine Osmun

//I thought I might use those variable, but I ended up hard coding things. I would have liked to slim the
//code down, but I spent more time trying to think through it logically.

// const I = 1
// const V = 5
// const X = 10
// const L = 50
// const C = 100
// const D = 500
// const M = 1000

//I also considered using a list to check that the user input was correct and wanted to use a .includes, but
//I was unable to get that working.

// const sList = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

// I used this as my test variable. You are welcome to test different numerals in there.
let prac = 'ivx'

//Created a function called convertRoman to handle the work so that I could (ideally if I had more time) insert it
// into the App.js file
function convertRoman (str) {
  //check for valid entry, that it is a number
  if (isNaN(str)) {
    //convert to upper case
    newStr = str.toUpperCase()
    //split the string so we can deal with each numeral individually in an array
    newestStr = newStr.split('')
    //show to console
    console.log(newestStr)

    //create variable to store values of each character
    let newArr = []

    // Use a for loop to check that the user input contains only roman numeral letters
    // I know there is a faster way to do this using .includes, but I couldn't figure it out.

    for (let i = 0; i < newestStr.length; ++i) {
      const p = newestStr[i]
      if (
        p === 'I' ||
        p === 'V' ||
        p === 'X' ||
        p === 'L' ||
        p === 'C' ||
        p === 'D' ||
        p === 'M'
      ) {
        //if valid input, then store value to the array
        if (p === 'I') {
          newArr.push(1)
        } else if (p === 'V') {
          newArr.push(5)
        } else if (p === 'X') {
          newArr.push(10)
        } else if (p === 'L') {
          newArr.push(50)
        } else if (p === 'C') {
          newArr.push(100)
        } else if (p === 'D') {
          newArr.push(500)
        } else {
          newArr.push(1000)
        }
      } else {
        //if not valid, break out of the loop and display an error message
        alert('Invalid Entry. Please try again.')
        break
      }
    }

    //display array to console along with success message
    console.log(newArr)
    console.log('Valid Numerals - Success')

    //check to see if we need to use any subtraction
    let addItUp = 0

    //this variable was created to try to accommodate the 3rd rule (that subtractive notation only ever
    //involved two symbols). If I had more time, I would have worked out another way to only check two symbols at
    // a time.
    let skip = 0

    //I struggled to find a formula here that would work for all of the numerals. I wanted to
    //get the program to check for and follow rule number 4 on the code challenge sheet (a symbol representing 10x may not
    // precede any symbol larger than 10x+1)

    for (let i = 1; i < newArr.length; ++i) {
      if (skip == 1) {
        if (newArr.length - i > 1) {
          addItUp += newArr[i]
        }
      } else {
        //checks if value is less than 10 in order to try to follow the 4th rule
        if (newArr[i] <= 10) {
          //this is checking if the values are in order of greatest to smallest. If not, it is sent to the else statement.
          if (newArr[i] <= newArr[i - 1]) {
            addItUp += newArr[i]
            //This fascilitates the subtraction if the value of the numeral preceding the value[i] is less than value[i].
            //This solution is not perfect yet and has some bugs.
          } else {
            int1 = newArr[i]
            int2 = newArr[i - 1]
            newNum = int1 - int2
            console.log(newNum)
            addItUp += newNum
            skip = 1
          }
          // if the value is greater than 10 it goes to this set of checks. The difference between this set and the one above
          //is that I multiplied by 10 while trying to find a formula to properly follow the 4th rule
        } else {
          if (newArr[i] <= 10 * newArr[i - 1] + 1) {
            addItUp += newArr[i]
          } else {
            int1 = newArr[i]
            int2 = newArr[i - 1]
            newNum = int1 - int2
            console.log(newNum)
            addItUp += newNum
            skip = 1
          }
        }
      }
    }
    //display the final number to the user. This is not accurate most of the time yet. With more time, I would make it accurate.
    console.log(addItUp)
  }
}

//apply the function to the input and see what happens.
convertRoman(prac)
