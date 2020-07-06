//  <reference path = "../WWW/script.js"></reference>   //calling the function(reference)

// beforeEach(function(){
//     const fixture = '<div id = "data-number"></div>' +
//     '<div id = "data-operation"></div>' +
//     '<div id = "data-equals"></div>' +
//     '<div id = "data-delete"></div>' +
//     '<div id = "data-all-clear"></div>' +
//     '<div id = "data-previous-operand"></div>' +
//     '<div id = "data-current-operand"></div>' ;

//     document.body.insertAdjacentHTML(
//         'afterbegin',
//         fixture); }
//     //);
// });

// afterEach(function(){
//     document.body.removeChild(document.querySelectorAll('[data-number]'));
//     document.body.removeChild(document.querySelectorAll('[data-operation]'));
//     document.body.removeChild(document.querySelectorAll('[data-equals]'));
//     document.body.removeChild(document.querySelectorAll('[data-delete]'));
//     document.body.removeChild(document.querySelectorAll('[data-all-clear]'));
//     document.body.removeChild(document.querySelectorAll('[data-previous-operand]'));
//     document.body.removeChild(document.querySelectorAll('[data-current-operand]'));
// });



// //Calling the function
// describe('Frontend_Content Menu', function(){            //Suite
//     it('showDiv function run with no error',function(){  //spec
//         getDisplayNumber(Number);
//     })
// })



describe('computation', function () {     
    //Numbers from 1-100, 5 round of test
    for (var i=5; i>0; i--){
        var number1 = Math.floor((Math.random() * 100) + 1),
            number2 = Math.floor((Math.random() * 100) + 1);

        it('should add ' + number1 + ' plus ' +number2 + ' and be equals to ' + (number1 + number2), function () {
            expect(computation.case +(number1, number2)).toBe(number1 + number2);
        });

        it('should subtract' + number1 + ' from ' +number2 + ' and be equals to ' + (number1 - number2), function () {
            expect(computation.case -(number1, number2)).toBe(number1 - number2);
        });

        it('should multiply ' +number1 + 'x' + number2 + ' and be equals to ' + (number1*number2), function () {
           expect(computation.case *(number1, number2)).toBe(number1 * number2);
        });

        it('should divide ' + number1 + '/' + number2 + ' and be equals to ' + (number2 && number1/number2), function () {
            expect(computation.case /(number1, number2)).toBe(number2 && number1/number2);
        });
    }
});