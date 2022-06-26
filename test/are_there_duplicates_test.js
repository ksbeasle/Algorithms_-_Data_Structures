const { areThereDuplicatesMyTake } = require('../are_there_duplicates')
const expect = require('chai').expect

describe("Are there duplicates test.", () => {

    describe("Given an arbitrary amount of args, in this case, 1,2,3...", () => {

        it('It should return false', function () {
            // arrange
            const arg1 = 1
            const arg2 = 2
            const arg3 = 3

            // act
            const result = areThereDuplicatesMyTake(arg1, arg2, arg3)

            // assert
            expect(result).to.be.false
        });
    })

    describe("Given an arbitrary amount of args, in this case, 1,2,2...", () => {

        it('It should return true', function () {
            // arrange
            const arg1 = 1
            const arg2 = 2
            const arg3 = 2

            // act
            const result = areThereDuplicatesMyTake(arg1, arg2, arg3)

            // assert
            expect(result).to.be.true
        });
    })

    describe("Given an arbitrary amount of args, in this case, a,b,c,a...", () => {

        it('It should return true', function () {
            // arrange
            const arg1 = 'a'
            const arg2 = 'b'
            const arg3 = 'c'
            const arg4 = 'a'

            // act
            const result = areThereDuplicatesMyTake(arg1, arg2, arg3, arg4)

            // assert
            expect(result).to.be.true
        });
    })

})