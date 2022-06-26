const { validAnagram } = require('../basic_anagram');
const expect = require('chai').expect

describe('Basic anagram test.', () => {

    describe('If the anagram strings are...', () => {

        it('two empty strings it should return true', function () {
            // arrange
            const str1 = ""
            const str2 = ""

            // act
            const result = validAnagram(str1, str2)

            // assert
            expect(result).to.be.true
        });

        it('"aaz" and "zza" it should return false.', function () {
            // arrange
            const str1 = "aaz"
            const str2 = "zza"

            // act
            const result = validAnagram(str1, str2)

            // assert
            expect(result).to.be.false
        });

        it('"anagram" and "nagaram" it should return true.', function () {
            // arrange
            const str1 = "anagram"
            const str2 = "nagaram"

            // act
            const result = validAnagram(str1, str2)

            // assert
            expect(result).to.be.true
        });

        it('"rat" and "car" it should return false', function () {
            // arrange
            const str1 = "rat"
            const str2 = "car"

            // act
            const result = validAnagram(str1, str2)

            // assert
            expect(result).to.be.false
        });

        it('"awesome" and "awesom" it should return false', function () {
            // arrange
            const str1 = "awesome"
            const str2 = "awesom"

            // act
            const result = validAnagram(str1, str2)

            // assert
            expect(result).to.be.false
        });

        it('"qwerty" and "tyrewq" it should return true', function () {
            // arrange
            const str1 = "qwerty"
            const str2 = "tyrewq"

            // act
            const result = validAnagram(str1, str2)

            // assert
            expect(result).to.be.true
        });

        it('"texttwisttime" and "timetexttwist" it should return true', function () {
            // arrange
            const str1 = "texttwisttime"
            const str2 = "timetexttwist"

            // act
            const result = validAnagram(str1, str2)

            // assert
            expect(result).to.be.true
        });

    })

})
