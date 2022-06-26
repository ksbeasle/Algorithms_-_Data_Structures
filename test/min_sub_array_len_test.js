const { minSubArrayLen } = require('../min_sub_array_len')
const expect = require('chai').expect

describe("Min subarray length test.", () => {

    describe("Given an array [2,3,1,2,4,3] and a num 7...", () => {

        it('it should return 2', function () {
            // arrange
            const arr = [2,3,1,2,4,3]
            const num = 7

            // act
            const result = minSubArrayLen(arr, num)

            // assert
            expect(result).to.be.eq(2)
        });
    })

    describe("Given an array [2,1,6,5,4] and a num 9...", () => {

        it('it should return 2', function () {
            // arrange
            const arr = [2,1,6,5,4]
            const num = 9

            // act
            const result = minSubArrayLen(arr, num)

            // assert
            expect(result).to.be.eq(2)
        });
    })

    describe("Given an array [3,1,7,11,2,9,8,21,62,33,19] and a num 52...", () => {

        it('it should return 1', function () {
            // arrange
            const arr = [3,1,7,11,2,9,8,21,62,33,19]
            const num = 52

            // act
            const result = minSubArrayLen(arr, num)

            // assert
            expect(result).to.be.eq(1)
        });
    })

    describe("Given an array [1,4,16,22,5,7,8,9,10] and a num 39...", () => {

        it('it should return 3', function () {
            // arrange
            const arr = [1,4,16,22,5,7,8,9,10]
            const num = 39

            // act
            const result = minSubArrayLen(arr, num)

            // assert
            expect(result).to.be.eq(3)
        });
    })

    describe("Given an array [1,4,16,22,5,7,8,9,10] and a num 55...", () => {

        it('it should return 5', function () {
            // arrange
            const arr = [1,4,16,22,5,7,8,9,10]
            const num = 55

            // act
            const result = minSubArrayLen(arr, num)

            // assert
            expect(result).to.be.eq(5)
        });
    })

    describe("Given an array [4,3,3,8,1,2,3] and a num 11...", () => {

        it('it should return 2', function () {
            // arrange
            const arr = [4,3,3,8,1,2,3]
            const num = 11

            // act
            const result = minSubArrayLen(arr, num)

            // assert
            expect(result).to.be.eq(2)
        });
    })

    describe("Given an array [1,4,16,22,5,7,8,9,10] and a num 95...", () => {

        it('it should return 0', function () {
            // arrange
            const arr = [1,4,16,22,5,7,8,9,10]
            const num = 95

            // act
            const result = minSubArrayLen(arr, num)

            // assert
            expect(result).to.be.eq(0)
        });
    })
})