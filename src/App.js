import React from 'react'
import styled from 'styled-components'

const sList = ['I', 'V', 'X', 'L', 'C', 'D', 'M']

let prac = 'ivx'

function convertRoman (str) {
  //check for valid entry, that is is a number
  if (isNaN(str)) {
    let newStr = str.toUpperCase()
    let newestStr = newStr.split('')
    console.log(newestStr)
    // I know there is a faster way to do this using .includes, but I couldn't figure it out.

    //set variable to store values of each character
    let newArr = []

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
        //if valid, then store value
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
        alert('Invalid Entry. Please try again.')
        break
      }
    }

    console.log(newArr)
    console.log('Valid Numerals - Success')

    //check for any subtraction
    let addItUp = 0
    let skip = 0
    // use a for loop and store the values of each character.

    for (let i = 1; i < newArr.length; ++i) {
      if (skip == 1) {
        if (newArr.length - i > 1) {
          addItUp += newArr[i]
        }
      } else {
        //checks if value is less than 10 in order to
        if (newArr[i] <= 10) {
          if (newArr[i] <= newArr[i - 1]) {
            addItUp += newArr[i]
          } else {
            let int1 = newArr[i]
            let int2 = newArr[i - 1]
            let newNum = int1 - int2
            console.log(newNum)
            addItUp += newNum
            skip = 1
          }
        } else {
          if (newArr[i] <= 10 * newArr[i - 1] + 1) {
            addItUp += newArr[i]
          } else {
            let int1 = newArr[i]
            let int2 = newArr[i - 1]
            let newNum = int1 - int2
            console.log(newNum)
            addItUp += newNum
            skip = 1
          }
        }
      }
    }
    console.log(addItUp)
    //add it up
  }
}

convertRoman(prac)

export default function App () {
  //Create a variable to store the roman numeral
  const [roman, setRoman] = React.useState('')

  //create function that checks the roman numeral and calculates it
  function convertRoman (str) {
    //check for valid entry
    if (str == isNaN) {
      //check for any subtraction
      // use a for loop and store the variables of each character.
      //add it up
    } else {
      return 'Your input is invalid. Make sure you are using Roman Numerals only.'
    }
  }

  return (
    <Container>
      <Title>Roman Numerals</Title>
      <Wrapper>
        <InputBox>
          <Input
            type='text'
            value={roman}
            //set variable to the input from the user
            onChange={e => setRoman(e.target.value).toUpperCase()}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                convertRoman(roman)
              }
            }}
          />
          <BtnMain onClick={() => convertRoman(roman)}>Convert</BtnMain>
        </InputBox>
        <Result></Result>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ede4ff;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 1-px 1px rgba(97, 3, 246, 0.25);
  padding: 50px;
  min-width: 500px;
`

const Title = styled.h1`
  font-size: 48px;
  font-family: Arial, Helvetica, sans-serif;
  color: #3f3535;
`

const Input = styled.input`
  height: 50px;
  flex: 1;
  font-size: 30px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  border: 1px solid black;
`

const InputBox = styled.div`
  display: flex;
  padding-bottom: 16px;
`

const BtnMain = styled.button`
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  border: 1px solid black;
  border-left: none;
  background: #9548e5;
  padding: 0 10px;
  color: white;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    background-color: #8842d1;
  }
  &:active {
    background-color: #783ab9;
  }
`

const Result = styled.h5`
  padding: 6px 0;
  display: flex;
`
