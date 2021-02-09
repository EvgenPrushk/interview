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
   * Apply, call, bind. What are they used for? What are the differences?
   * Closure. Give an example.
   * Array methods that loop over the elements.
   * Object methods to iterate over the elements
   * Map, Set, WeakMap, WeakSet
   * Browser events. Browser default actions abortion.
   * Event bubbling and event capturing.
   * Event delegation. Example.
   * Event loop. Explain how stack and two queues communicate with each other in the loop?
   * Promises
   * spread/rest
   * Any other questions on CoreJS/DOM/Event Loop/Inheritance/etc.
                         
### Coding tasks:
* `Function.prototype.bind` implement polyfill
* `Object.create` implement polyfill
* `Array.flat` implement polyfill
* `hello world.repeating(3) -> hello world hello world hello world`. How to implement?
* `('!', 4, -10, 34, 0) -> 4!-10!34!0`
* `five(plus(seven(minus(three())))) -> 9`
* `add(5)(9)(-4)(1) -> 11`
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