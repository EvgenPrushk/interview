# interview #

## Question examples ##

1. Data types in JS. Type corecion.
7 типов данных являются примитивами:
Boolean (Булев, Логический тип)
Null (Null тип )
Undefined (Неопределенный тип)
Number (Число)
String (Строка)
BigInt
Symbol (в ECMAScript 6)
и Object (Объект)
В JavaScript объект может расцениваться как набор свойств. Литеральная инициализация объекта задаёт определённое количество начальных свойств, и в процессе работы приложения поля могут добавляться и удаляться. Значения свойств могут иметь любой тип, включая другие объекты, что позволяет строить сложные, разветвлённые иерархии данных. Каждое свойство объекта идентифицируется ключом, в качестве которого может выступать значение с типом Строка или Символ.
Есть два типа свойств: свойство-значение и свойство-акцессор (свойство, обёрнутое в геттер и сеттер). Они отличаются определенными атрибутами.
Свойство-значение
Ассоциирует ключ со значением, и имеет следующие атрибуты:
Атрибуты свойства-значения
Атрибут Тип Описание Значение по умолчанию
[[Value]] Любой тип JavaScript Значение, возвращаемое при обращении к свойству. undefined
[[Writable]] Boolean Если false, то [[Value]] свойства не может быть изменено. false
[[Enumerable]] Boolean Если true, свойство будет перечислено в цикле for...in. Смотрите подробнее Перечисляемость и владение свойствами. false
[[Configurable]] Boolean Если false, то свойство не может быть удалено, а его атрибуты, кроме [[Value]] и [[Writable]] не могут быть изменены. false
typeof может помочь определить тип вашей переменной

2. What is hoisting?

При наступлении события обработчики сначала срабатывают на самом вложенном элементе, затем на его родителе, затем выше и так далее, вверх по цепочке вложенности.
this – это текущий элемент, до которого дошло всплытие, на нём сейчас выполняется обработчик.
Самый глубокий элемент, который вызывает событие, называется «целевым» или «исходным» элементом и доступен как event.target.
Если у элемента есть несколько обработчиков на одно событие, то даже при прекращении всплытия все они будут выполнены.
То есть, stopPropagation препятствует продвижению события дальше, но на текущем элементе все обработчики отработают.
Для того, чтобы полностью остановить обработку, современные браузеры поддерживают метод event.stopImmediatePropagation(). Он не только предотвращает всплытие, но и останавливает обработку событий на текущем элементе.
Виды null и undefined равны себе как в строгом сравнении, так и в абстрактном

3. Let vs var. Const.

У переменной Let три отличия от var

- let, видна только в рамках блока {...}
- видна только после объявления;
- При использовании в цикле, для каждой итерации создаётся своя переменная
  
```javascript
function makeArmy() {
let shooters = [];
for (let i = 0; i < 10; i++) {
shooters.push(function() {
alert( i ); // выводитсвойномер
});
}
return shooters;
}
var army = makeArmy();
army[0](); // 0
army[5](); // 5
```

const - Объявление задаёт константу, то есть переменную, которую нельзя менять:

4. Passing data by value and by reference. Examples.

```javascript
var message = "Привет!";
var phrase = message;

var user = { name: "Вася" }; // в переменной - ссылка
При копировании переменной с объектом – копируется эта ссылка, а объект по-прежнему остается в единственном экземпляре.
var admin = user; // скопировали ссылку
 };
```

5. `{a: 10} == {a: 10}`. What will the code return?

JavaScript имеются как строгие сравнения, так и сравнения с преобразованием типа операндов. Строгие сравнения (к примеру, ===) истинны только в том случае, если типы сравниваемых значений являются одинаковыми (к примеру: string-string, number-number). Однако, чаще используются сравнения с преобразованием типов (к примеру, ==). Такой тип сравнения, перед тем как непосредственно выполнить сравнение, приводит операнды к одному типу. В случае же, абстрактного реляционного сравнения, операнды сперва преобразуются в примитивы, затем приводятся к одному типу, и только после этого сравниваются.
Строки сравниваются на основе стандартного лексикографического упорядочения, используя значения Unicode.
Особенности сравнений:
Две строки строго равны только в том случае, если они имеют одинаковую длину, и те же символы в одинаковой последовательности и соответствующих позициях.
Два числа строго равны в том случае, если они численно равны. NaN не равно ничему, в том числе и NaN. Нули с положительным и отрицательным знаком равны.
Два логических значения (boolean) равны только в том случае, если они оба истинны (true) или ложны (false).
Два различных объекта никогда не равны как в строгих, так и в абстрактных сравнениях.
Сравнение объекта истинно лишь в том случае, если оба операнда ссылаются на один и тот же объект в памяти.

6. What is `this`?

7. Apply, call, bind. What are they used for? What are the differences?
Замыкание — это комбинация функции и лексического окружения, в котором эта функция была определена.
https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures


8.  Closure. Give an example.

9. Array methods that loop over the elements.

forEach() берет callback функцию и запускает её на каждом элементе массива, одну за одной

```javascript
var sample = [1, 2, 3];
// es5
sample.forEach(function (elem, index){
   console.log(elem + ' comes at ' + index);
})
// es6
sample.forEach((elem, index) => `${elem} comes at ${index}`)
/*
output
1 comes at 0
2 comes at 1
3 comes at 2
*/
```

Для каждого элемента в массиве, мы вызываем callback, который берет элемент и его индекс, предоставляемый forEach.
Обычно forEach работает как традиционный цикл, проходящий через весь массив элементов, чтобы сделать с ними какие-либо операции.

filter() - всякий раз когда вам надо отфильтровать массив в JavaScript — встроенный метод для отфильтровки вашего массива это хороший выбор. filter() даёт вам сделать callback для каждого элемента и вернуть отфильтрованный массив.

```javascript
var sample = [1, 2, 3] // yeah same array
// es5
var result = sample.filter(function(elem){
    return elem !== 2;
})
console.log(result)
// es6
var result = sample.filter(elem => elem !== 2)
/* Вывод */
[1, 3]
```

Посмотрите как это просто. Мы запустили callback на фильтр, который пробежался по всем элементам в массиве. В callback мы проверили, если элемент !== 2, если условие не выполняется (когда элемент равен 1 или 3), то мы включаем его в конечный массив. Также обратите внимание на то, что filter() не трогает существующий массив, он будет возвращать только новый отфильтрованный массив каждый раз.

map() один из моих самых любимых и используемых методов работы с массивами за всё время. Как ReactJS разработчик, я очень часто использую map() внутри UI приложений.

map() как и filter() с foreach() берет callback и пускает его по всем элементам массива, но то, что делает его уникальным — это то что он генерирует новый массив, основываясь на существующем массиве.

```javascript
var sample = [1, 2, 3] // Оууу еее я не изменюсь
// es5
var mapped = sample.map(function(elem) {
    return elem * 10;
})
// es6
let mapped = sample.map(elem => elem * 10)
console.log(mapped);
/* Умножили всё на 10 и получили такой массив */
[10, 20, 30]
```

Как и filter(), map() возвращает массив. Указанный callback для map() изменит элементы массива и сохранит их в новый массив по завершении того, как массив будет возвращен как отmapенный массив.

reduce() этот метод используется для того, чтобы сократить массив в одно простое значение. Для примера, если вам надо добавить все элементы массива, вы можете сделать что-то вроде этого.

```javascript
var sample = [1, 2, 3] // Давно не виделись
// es5
var sum = sample.reduce(function(sum, elem){
    return sum + elem;
})
// es6
var sum = sample.reduce((sum, elem) => sum + elem)
console.log(sum)
```

reduce() берет callback, как и любая функция о которой мы говорили. Внутри этого callback мы берем два аргумента sum и elem. sum это последнее вернувшееся значение функции reduce(). Для примера, изначально значение sum будет равно 0, затем когда запустится callback на первом элементе, он прибавит elem к sum и возвратит значение. На второй итерации sum значение будет — первый elem + 0, на второй итерации 0 + первый elem + второй elem.
Вот так работает reduce(), он сокращает массив до одного простого значения и возвращает его по завершении.

Метод some() проверяет, удовлетворяет ли какой-либо элемент массива условию, заданному в передаваемой функции.

```javascript
var arr = [1, -1, 2, -2, 3];

function isPositive(number) {
  return number > 0;
}

alert( arr.every(isPositive) ); // false, не все положительные
alert( arr.some(isPositive) ); // true, есть хоть одно положительное
```

10. Object methods to iterate over the elements

11.  Map, Set, WeakMap, WeakSetBrowser events

12. Browser default actions abortion.

13. Event bubbling and event capturing.

14. Event delegation. Example.

15. Event loop. Explain how stack and two queues communicate with each other in the loop?

16. Promises

17. spread/rest

18. Any other questions on CoreJS/DOM/Event Loop/Inheritance/etc.


### Coding tasks:
19.  `Function.prototype.bind` implement polyfill

20. `Object.create` implement polyfill

21. `Array.flat` implement polyfill

22. `hello world.repeating(3) -> hello world hello world hello world`. 
а) Через цикл for

```javascript
function repeat(){
  var res = "";
  var str = "hello world ";
  for(let i = 0; i < 3; i++) {
    res += str;
  }
  return res.slice(0, -1);
 }
repeat()
```

б) Через цикл while

```javascript
function repeat(){
  var res = "";
  var str = "hello world ";
  while (i < 3) {
     res += str
     i++
  }
  return res.slice(0, -1);
 }
repeat()
```

в) Через  шаблонную строку

```javascript
function repeat(){
  var res = "";
  var str = "hello world ";
 
  return `${str}${str}${str}`;
 }
repeat()
```

г) Через  repeat

```javascript
return "hello world ".repeat(3).slice(0, -1);
```

д) Через массив

```javascript
function repeat(){
  var arr = new Array(3);
  arr.fill("hello world");
  return arr.join(" ");
 }
```
23. `('!', 4, -10, 34, 0) -> 4!-10!34!0`

24.  five(plus(seven(minus(three())))) -> 9

```javascript
function makeNum(num, func) {
  if (func === undefined) {
		return num;
	} else {
		return func(num);
}
}

function zero(func) {
return makeNum(0,func);
}
function one(func) {
return makeNum(1,func);
}
function two(func) {
return makeNum(2,func);
}
function three(func) {
return makeNum(3,func);
}
function four(func) {
	return makeNum(4,func);
}
function five(func) {
	return makeNum(5,func);
}
function six(func) {
	return makeNum(6,func);
}
function seven(func) {
	return makeNum(7,func);
}
function eight(func) {
	return makeNum(8,func);
}
function nine(func) {
	return makeNum(9,func);
}

function plus(right) {
  return function(left) { return left + right; };
}
function minus(right) {
  return function(left) {
		return left - right;
	};
}
function times(right) {
  return function(left) { return left * right; };
}
function dividedBy(right) {
  return function(left) { return left / right; };
}
```

25. `add(5)(9)(-4)(1) -> 11`

```javascript
function add(x) {
   return function (y) {
       if (typeof y !== 'undefined') {
           return x = x + y
            return arguments.callee;
       }
       else {
           return x;
       }
   }
}
```

* `periodOutput(period)` method should output in the console once per every period how much time left from the function first call. 
  Example:
  `periodOutput(100) -> 100(after 100 ms), 200(after 100 ms), 300(after 100 ms), ...`
* `extendedPeriodOutput(period)` method should output in the console once per period how much time left from the function first call and increase the period. Example: `// extendedPeriodOutput(100) -> 100(after 100 ms), 200(after 200 ms), 300(after 300 ms)`


### Excluded topics
   * Iterators and generators

### Passing the interview
 You should contact the mentor personally. Contact details will be announced through Discord.
At the request of the mentor, the interview can take place online or face-to-face.
 During the interview mentor:
  - asks questions;
  - gets answers;
  - adds/corrects/explains/gives the right answer, if necessary.

### The interview should be passed before 22 December 2019. Take into account that mentor can be busy (vacation, business trip, workload and etc.), so contact him as soon as possible.

### Useful links
- This\bind\call\apply :ru: https://habrahabr.ru/post/149516/
- Inheritance https://javascript.info/prototypes
- Closure https://javascript.info/closure
- Hoisting https://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html
- Promises https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html
- Event phases https://www.smashingmagazine.com/2013/11/an-introduction-to-dom-events/
- DOM Events & Event loop https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/
- post\get\put :ru: https://habrahabr.ru/post/50147/
- REST :ru: https://habr.com/ru/post/38730/
- How browser works :ru: https://habrahabr.ru/company/dataart/blog/304138/
- Animation :ru: https://www.youtube.com/watch?v=dWE3WEpqr7M