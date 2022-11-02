function createPhoneNumber(numbers) {
    let phoneNumber = '(';
    console.log(phoneNumber);
    for (let i = 0; i < numbers.length; i++) {
        if (i < 3) {
            phoneNumber = phoneNumber + String(numbers[i]);
            console.log(String(numbers[i]));
        }
        if ((i === 3)) {
            phoneNumber = phoneNumber + ') ' + String(numbers[i]);
            console.log(String(numbers[i]));
        }
        if (i > 3 && i < 6) {
            phoneNumber = phoneNumber + String(numbers[i]);
            console.log(String(numbers[i]));
        }
        if ((i === 6)) {
            phoneNumber = phoneNumber + '-' + String(numbers[i]);
            console.log(String(numbers[i]));
        }
        if (i > 6 && i <= numbers.length) {
            phoneNumber = phoneNumber + String(numbers[i]);
            console.log(String(numbers[i]));
        }
    }
    return phoneNumber;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// const chai = require('chai');
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe('Create Phone Number', () => {
//     it('Fixed tests', () => {
//         assert.strictEqual(
//             createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//             '(123) 456-7890'
//         );
//         assert.strictEqual(
//             createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
//             '(111) 111-1111'
//         );
//         assert.strictEqual(
//             createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
//             '(123) 456-7890'
//         );
//     });
// });
