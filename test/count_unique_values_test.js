const { countUniqueValues } = require('../count_unique_values')
const expect = require('chai').expect

describe("Count unique values test.", () => {

    describe("Given an array [1,1,1,1,1,2]...", () => {

        it("it should return 2", () => {
            // arrange
            const arr = [1,1,1,1,1,2]

            // act
            const result = countUniqueValues(arr)

            // assert
            expect(result).to.be.eq(2)
        })
    })

    describe("Given an array [1,2,3,4,4,4,7,7,12,12,13]...", () => {

        it("it should return 7", () => {
            // arrange
            const arr = [1,2,3,4,4,4,7,7,12,12,13]

            // act
            const result = countUniqueValues(arr)

            // assert
            expect(result).to.be.eq(7)
        })
    })

    describe("Given an empty array...", () => {

        it("it should return 0", () => {
            // arrange
            const arr = []

            // act
            const result = countUniqueValues(arr)

            // assert
            expect(result).to.be.eq(0)
        })
    })

    describe("Given an array [-2,-1,-1,0,1]...", () => {

        it("it should return 4", () => {
            // arrange
            const arr = [-2,-1,-1,0,1]

            // act
            const result = countUniqueValues(arr)

            // assert
            expect(result).to.be.eq(4)
        })
    })

    describe("Given an array [2,3,4,5,6,6,6]...", () => {

        it("it should return 5", () => {
            // arrange
            const arr = [2,3,4,5,6,6,6]

            // act
            const result = countUniqueValues(arr)

            // assert
            expect(result).to.be.eq(5)
        })
    })
})
