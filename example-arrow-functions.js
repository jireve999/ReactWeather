var names = ['Saji','Julie','Jen'];
//
// //ES5
// names.forEach(function(name){
//     console.log('forEach',name);
// });
//
// //ES2015
// //multi-lines
// names.forEach((name) => {
//   console.log('arrowFunc',name);
// });
//
// //oneline
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('SAJI'));

//error
// var person = {
//   name: 'Saji',
//   greet:function(){
//     names.forEach(function(name){
//       console.log(this.name + 'says hi to ' + name)
//     });
//   }
// };
// preson.greet();

var person = {
  name: 'Saji',
  greet:function(){
    names.forEach((name) => {
      console.log(this.name + 'says hi to ' + name)
    });
  }
};
preson.greet();

//Challenge Area
function add(a,b){
  return a + b;
}
console.log(add(1,3));
console.log(add(9,0));
//addStatement
var addStatement = (a,b) => {
  return a + b;
}
console.log(addStatement(4,7));
//addExpression
var addExpression = (a,b) => a + b;
console.log(addExpression(3,-2));
