import JavaScript from './java-script';
import DynamicStyling from './dynamic-styling';
import ConditionalOutput from './conditional-output';
import TodoList from './todo/todo-list';

function Assignment3() {
    return (
      <div>
        <h1>Assignment 3</h1>
        <TodoList/>
        <hr/>
        <ConditionalOutput/>
        <hr/>
        <DynamicStyling/>
        <hr/>
        <JavaScript/>
      </div>
    );
}
export default Assignment3;

// 2.2.7 Working with Arrays
var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
  functionScoped,   blockScoped,
  constant1,        numberArray1,   stringArray1
];
console.log('Working with Arrays')
console.log('functionScoped = ' + functionScoped);
console.log('blockScoped = ' + blockScoped);
console.log('constant1 = ' + constant1);
console.log('numberArray1 = ' + numberArray1);
console.log('stringArray1 = ' + stringArray1);
console.log('variableArray1 = ' + variableArray1);


