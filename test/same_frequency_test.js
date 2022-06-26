const { sameFrequency, sameFrequencyMyTake } = require('../same_frequency')
const expect = require('chai').expect

describe("Same frequency test.", () => {

    describe("When given two positive integers 3589578 and 5879385...", () => {

        it("It should return true", () => {
            // arrange
            const num1 = 3589578
            const num2 = 5879385

            // act
            const result = sameFrequencyMyTake(num1, num2)

            // assert
            expect(result).to.be.true
        })
    })

    describe("When given two positive integers 182 and 281...", () => {

        it("It should return true", () => {
            // arrange
            const num1 = 182
            const num2 = 281

            // act
            const result = sameFrequencyMyTake(num1, num2)

            // assert
            expect(result).to.be.true
        })
    })

    describe("When given two positive integers 34 and 14...", () => {

        it("It should return false", () => {
            // arrange
            const num1 = 34
            const num2 = 14

            // act
            const result = sameFrequency(num1, num2)

            // assert
            expect(result).to.be.false
        })
    })

    describe("When given two positive integers 3589578 and 5879385...", () => {

        it("It should return true", () => {
            // arrange
            const num1 = 3589578
            const num2 = 5879385

            // act
            const result = sameFrequency(num1, num2)

            // assert
            expect(result).to.be.true
        })
    })

    describe("When given two positive integers 22 and 222...", () => {

        it("It should return false", () => {
            // arrange
            const num1 = 22
            const num2 = 222

            // act
            const result = sameFrequencyMyTake(num1, num2)

            // assert
            expect(result).to.be.false
        })
    })
})