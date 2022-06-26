const { maxSubarraySum } = require('../max_sub_array_sum.js')
const expect = require('chai').expect

describe("Max subarray sum.", () =>{

    describe("Given an array [100,200,300,400] and window size of 2...", () => {

        it('it should return 700.', function () {
            // arrange
            const arr = [100,200,300,400]
            const windowSize = 2

            // act
            const result = maxSubarraySum(arr, windowSize)

            // assert
            expect(result).to.be.eq(700)
        });
    })

    describe("Given an array [1,4,2,10,23,3,1,0,20] and window size of 4...", () => {

        it('it should return 39.', function () {
            // arrange
            const arr = [1,4,2,10,23,3,1,0,20]
            const windowSize = 4

            // act
            const result = maxSubarraySum(arr, windowSize)

            // assert
            expect(result).to.be.eq(39)
        });
    })

    describe("Given an array [-3, 4, 0, -2, 6, -1] and window size of 2...", () => {

        it('it should return 5.', function () {
            // arrange
            const arr = [-3, 4, 0, -2, 6, -1]
            const windowSize = 2

            // act
            const result = maxSubarraySum(arr, windowSize)

            // assert
            expect(result).to.be.eq(5)
        });
    })

    describe("Given an array [3,-2,7,-4,1,-1,4,-2,1] and window size of 2...", () => {

        it('it should return 5.', function () {
            // arrange
            const arr = [3,-2,7,-4,1,-1,4,-2,1]
            const windowSize = 2

            // act
            const result = maxSubarraySum(arr, windowSize)

            // assert
            expect(result).to.be.eq(5)
        });
    })

    describe("Given an array [2,3] and window size of 3...", () => {

        it('it should return null.', function () {
            // arrange
            const arr = [2,3]
            const windowSize = 3

            // act
            const result = maxSubarraySum(arr, windowSize)

            // assert
            expect(result).to.be.null
        });
    })
})