const {translate} = require('../src/practice')

// describe ("", function () {

//    test('', function () {

//    //arrange

//    //act

//    //assign


//    })
  

// });

describe ("translate tests", function () {

    test('translates english to pig latin', function () {
     
    //arrange
    const english = "hello"
    const pigLatin = "ellohay"
    
    //act
    const result = translate(english);
    //assign
    expect(result).toBe(pigLatin);
 
    });

   
   
 
 });

