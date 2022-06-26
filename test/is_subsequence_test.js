const { isSubsequence } = require('../is_subsequence')
const expect = require('chai').expect

describe("Is Subsequence test.", () => {

    describe("Given two strings, 'hello' and 'hello world'...", () => {

        it('It should return true', function () {
            // arrange
            const str1 = 'hello'
            const str2 = 'hello world'

            // act
            const result = isSubsequence(str1, str2)

            // assert
            expect(result).to.be.true
        });
    })

    describe("Given two strings, 'sing' and 'sting'...", () => {

        it('It should return true', function () {
            // arrange
            const str1 = 'sing'
            const str2 = 'sting'

            // act
            const result = isSubsequence(str1, str2)

            // assert
            expect(result).to.be.true
        });
    })

    describe("Given two strings, 'abc' and 'abracadabra'...", () => {

        it('It should return true', function () {
            // arrange
            const str1 = 'abc'
            const str2 = 'abracadabra'

            // act
            const result = isSubsequence(str1, str2)

            // assert
            expect(result).to.be.true
        });
    })

    describe("Given two strings, 'abc' and 'acb'...", () => {

        it('It should return false', function () {
            // arrange
            const str1 = 'abc'
            const str2 = 'acb'

            // act
            const result = isSubsequence(str1, str2)

            // assert
            expect(result).to.be.false
        });
    })
})