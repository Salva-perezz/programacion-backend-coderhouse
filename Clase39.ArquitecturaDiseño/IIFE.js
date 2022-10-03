((num1, num2) => {
  console.log(num1 + num2);
})(5, 20);

const SingletonClass = require("./singleton");

const obj1 = SingletonClass.getInstance();
const obj2 = SingletonClass.getInstance();

console.log(obj1.value === obj2.value);
