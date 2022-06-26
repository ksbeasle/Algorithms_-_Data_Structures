const { averagePair } = require('../average_pair')
const expect = require('chai').expect

describe("Average pair test.", () => {
    
    describe("If the array is [1,2,3] and the target is 2.5...", () => {

        it('it should return true.', function () {
            // arrange
            const arr = [1,2,3]
            const target = 2.5

            // act
            const result = averagePair(arr, target)

            // assert
            expect(result).to.be.true
        });
    })

    describe("If the array is [1,3,3,5,6,7,10,12,19] and the target is 8...", () => {

        it('it should return true.', function () {
            // arrange
            const arr = [1,3,3,5,6,7,10,12,19]
            const target = 8

            // act
            const result = averagePair(arr, target)

            // assert
            expect(result).to.be.true
        });
    })

    describe("If the array is [-1,0,3,4,5,6] and the target is 4.1...", () => {

        it('it should return false.', function () {
            // arrange
            const arr = [-1,0,3,4,5,6]
            const target = 4.1

            // act
            const result = averagePair(arr, target)

            // assert
            expect(result).to.be.false
        });
    })

    describe("If the array is [] and the target is 4...", () => {

        it('it should return false.', function () {
            // arrange
            const arr = []
            const target = 4

            // act
            const result = averagePair(arr, target)

            // assert
            expect(result).to.be.false
        });
    })
})