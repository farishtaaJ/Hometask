# <span style="color: yellow; font-size: 60px; margin-left: 25%"> **JavaScipt lecture 4**<span>
<span style="color: rgb(110, 241, 204); font-size: 40px"> **1. Array** <span>


<span style=" color: white; font-size: 38px; font-family: san serif;  letter-spacing: 3px;">Что такое<span>
<span style=" color: rgb(110, 241, 204); font-size: 38px; font-family: san serif;  letter-spacing: 3px;">Array? <span>

<span style=" color: white; font-size: 18px; font-family: san serif;  letter-spacing: 1px;"> `Array` — упорядоченный набор элементов, каждый из которых хранит одно значение, идентифицируемое с помощью одного или нескольких индексов. В простейшем случае массив имеет постоянную длину и хранит единицы данных одного и того же типа, а в качестве индексов выступают целые числа. <span>

<span style=" color: white; font-size: 18px; font-family: san serif;  letter-spacing: 1px;"> `Массив ( Array ) в JavaScript` — является глобальным объектом, который используется для создания массивов; которые представляют собой высокоуровневые спископодобные объекты. <span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>

```javascript
function array (arr)
{
   return arr
}
console.log(array([1,2,3,4,5])); // [ 1, 2, 3, 4, 5 ]

```
<br> <br> <br>

<span style="color: rgb(110, 241, 24); font-size: 40px"> **2. Array Methods** <span>

<span style="font-size: 34px;"> **`1. pop()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод pop()`**   удаляет последний элемент из массива и возвращает удалённое значение. Метод pop не является привязанным к типу; этот метод может быть вызван или применён к массивоподобным объектам. <span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// pop()

function array (arr)
{
   return arr.pop()
}
console.log(array([1,2,3,4,5])); // 5

```

<br> <br> <br>

<span style="font-size: 34px;"> **`2. push()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод push()`** добавляет один или более элементов в конец массива и возвращает новую длину массива. <span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// push()

let sports = ["футбол", "бейсбол"];
let total = sports.push("американский футбол", "плавание");

console.log(sports); // ['футбол', 'бейсбол', 'американский футбол', 'плавание']
console.log(total); // 4

``````

<br> <br> <br>

<span style="font-size: 34px;"> **`3. shift()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод shift()`**
удаляет элемент по нулевому индексу, сдвигает значения по последовательным индексам вниз, а затем возвращает удалённое значение.<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
//shift 

let myFish = ["ангел", "клоун", "мандарин", "хирург"];
let shifted = myFish.shift();

console.log("myFish после: " + myFish); //myFish после: клоун мандарин,хирург

console.log("Удалён этот элемент: " + shifted); //Удалён этот элемент: ангел

```

<br> <br> <br>

<span style="font-size: 34px;"> **`4. unshift()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод unshift()`** добавляет новые элементы в начало массива и возвращает новую длину. Примечание: Этот метод изменяет длину массива.  <span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
//unshift ()

let arr = ['a', 'b', 'c', 'd', 'e'];
arr.unshift('1', '2');

console.log(arr); // [ '1', '2', 'a', 'b', 'c', 'd', 'e']

```

<br> <br> <br>

<span style="font-size: 34px;"> **`5. concat()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод concat()`** создаёт новый массив, в который копирует данные из других массивов и дополнительные значения. Он принимает любое количество аргументов, которые могут быть как массивами, так и простыми значениями. В результате – новый массив, включающий в себя элементы из arr , затем arg1 , arg2 и так далее.  <span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// concat()

let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'g', 'h', 'i', 'j'];

console.log(arr.concat(arr2)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

```


<br> <br> <br>

<span style="font-size: 34px;"> **`6. slice()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод slice()`**
 вырезает и возвращает указанную часть массива. Сам массив при этом не изменяется. Первым параметром указывается номер элемента массива, с которого начинается вырезание, а вторым параметром - номер элемента, на котором закончится вырезание (при этом элемент с этим номером не включится в вырезанную часть).  <span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// slice()

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

```


<br> <br> <br>

<span style="font-size: 34px;"> **`7. forEach()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод forEach()`** выполняет функцию callback один раз для каждого элемента, находящегося в массиве в порядке возрастания. Она не будет вызвана для удалённых или пропущенных элементов массива. Однако, она будет вызвана для элементов, которые присутствуют в массиве и имеют значение undefined . <br> <br>
 Простыми словами: `коллбэк` — это функция, которая должна быть выполнена после того, как другая функция завершила выполнение (отсюда и название: `callback` — функция обратного вызова). <br> <br> **`Колбэк - функция (или обратный вызов)`** - это функция, переданная в другую функцию в качестве аргумента, которая затем вызывается по завершению какого-либо действия.
<span>

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// forEach()

const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// "a"
// "b"
// "c"

```



<br> <br> <br>

<span style="font-size: 34px;"> **`8. map()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод map()`** создаёт новый массив с результатом вызова указанной функции для каждого элемента массива
<span>

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// map()
const numbers = [1, 4, 9];
const roots = numbers.map(Math.sqrt);
// теперь roots равен [1, 2, 3], а numbers всё ещё равен [1, 4, 9]


// 2 example 
const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);
// теперь doubles равен [2, 8, 18], а numbers всё ещё равен [1, 4, 9]

```





<br> <br> <br>

<span style="font-size: 34px;"> **`9. find()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод find()`** необходимо передать аргументом функцию. Функция должна возвращать булевое значение true или false.` find()` вернёт первый элемент, на котором переданная функция-колбэк вернула true . Чтобы получить необходимый элемент, нужно определить условие поиска
<span>

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// find()

let arr = ['abc', 'defg', 'kl', 'mn'];

let res = arr.find(function(elem) {
	return elem.length == 2;
});

console.log(res); // kl

```


<br> <br> <br>

<span style="font-size: 34px;"> **`10. filter()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод filter()`**  позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции. Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.
<span>

<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript
// filter()

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// ["exuberant", "destruction", "present"]

```


<br> <br> <br>

<span style="font-size: 34px;"> **`11. reduce()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод reduce()`**  позволяет превратить массив в любое другое значение с помощью переданной функции-колбэка и начального значения. Функция-колбэк будет вызвана для каждого элемента массива, и всегда должна возвращать результат.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// reduce()

const array1 = [1, 2, 3, 4];
// 0 + 1 + 2 + 3 + 4
const sumWithInitial = array1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumWithInitial);
// Expected output: 10

```


<br> <br> <br>

<span style="font-size: 34px;"> **`12. join()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод join()`**  объединяет элементы массива в строку с указанным разделителем (он будет вставлен между элементами массива). Разделитель задается параметром метода и не является обязательным. Если он не задан - по умолчанию в качестве разделителя возьмется запятая.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// join()

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"

```

<br> <br> <br>

<span style="font-size: 34px;"> **`12. includes()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод includes()`** проверяет наличие элемента в массиве. Параметром принимает значение для поиска. Если такой элемент есть в массиве, то метод возвращает true , а если нет, то false .
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// includes()

const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false

```


<br> <br> <br>

<span style="font-size: 34px;"> **`13. indexOf()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод indexOf()`**  ищет в массиве указанный элемент и возвращает его индекс. Если элемент встречается в массиве несколько раз,` indexOf() `возвращает индекс самого первого элемента. Если элемент отсутствует в массиве, метод вернет -1.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// indexOf()

let array = [2, 5, 9];

let array1 = array.indexOf(2); // 0
let array2 = array.indexOf(7); // -1
let array3 = array.indexOf(9, 2); // 2

console.log(array1);

```


<br> <br> <br>

<span style="font-size: 34px;"> **`14. splice()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод splice()`** удаляет или добавляет элементы в массив. Можно только удалять элементы, только добавлять или делать и то и другое одновременно. Метод очень универсальный и сложный для понимания. Метод изменяет сам массив и возвращает при этом массив удаленных элементов.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// splice()

var myFish = ["angel", "clown", "drum", "mandarin", "sturgeon"];
var removed = myFish.splice(3, 1);

// removed равен ["mandarin"]
// myFish равен ["angel", "clown", "drum", "sturgeon"]

console.log(removed);

```


<br> <br> <br>

<span style="font-size: 34px;"> **`15. toString()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод toString()`** преобразует объект в строковое представление. Метод автоматически вызывается JavaScript, когда объект нужно представить в текстовом виде. Если метод не переопределён, то он возвращает строку формата [object тип] , где тип — это строка, которая уточняет тип объекта
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// toString()

let monthNames = ["Янв", "Фев", "Мар", "Апр"];
let myVar = monthNames.toString(); 
// присваивает 'Янв,Фев,Мар,Апр' переменной myVar.

console.log(myVar); // Янв,Фев,Мар,Апр

```

<br> <br> <br>

<span style="font-size: 34px;"> **`16. toReversed()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод toReversed()`** обращает порядок элементов в массиве в обратном направлении, то есть делает первый элемент последним, а последний — первым. Метод изменяет массив, по отношению к которому вызван, и возвращает ссылку на изменённый массив.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// toReversed()

const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// Expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1);
// Expected output: "array1:" Array ["three", "two", "one"]


```


<br> <br> <br>

<span style="font-size: 34px;"> **`17. toSorted()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод toSorted()`** сортирует элементы массива. Порядок сортировки может быть буквенный, числовой, в порядке возрастания, или в порядке убывания. По умолчанию метод sort() сортирует значения в виде строк в алфавитном порядке возрастания. Это хорошо работает для строк ( «Blue» предшествует «Green»).
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// toSorted()

let fruit = ["арбузы", "бананы", "Вишня"];
fruit.sort(); 
console.log(fruit); // ['Вишня', 'арбузы', 'бананы']

let scores = [1, 2, 10, 21];
scores.sort(); 
console.log(scores); // [1, 10, 2, 21]

```



<br> <br> <br>

<span style="font-size: 34px;"> **`18. destructuring()`** <span>

 <span style="color: white; font-size: 24px;"> **`Метод destructuring()`** 
Деструктуризация (destructuring) – синтаксическая возможность "раскладывать" элементы массива (и не только) в отдельные константы или переменные. Деструктуризация относится к необязательным, но очень приятным возможностям языка. <br> <br>
`Для чего нужна Деструктуризация JS? `<br>
Деструктуризация (destructuring) — специальный синтаксис, позволяющий извлекать части из составных данных. Это удобный способ раскладывать объекты на части. Он позволяет сократить код и сделать его более понятным.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// destructuring()

var a, b, rest;
[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

[a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a); // 1
console.log(b); // 2
console.log(rest); // [3, 4, 5]

({ a, b } = { a: 1, b: 2 });
console.log(a); // 1
console.log(b); // 2

({ a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 });
console.log(a); // 1
console.log(b); // 2
console.log(rest); // { c:3, d:4 }

```


<br> <br> <br>

<span style="font-size: 34px;"> **`19. spread()`** <span>

 <span style="color: white; font-size: 24px;"> **`Оператор spread`** — это конструкция в JavaScript, которая позволяет передавать элементы массива или свойства объекта в виде отдельных аргументов. <br> <br> **`Как работает Spread JS?`**
<br> `Spread` оператор – это три точки перед именем переменной (или константы), внутри определения объекта. Он раскладывает соответствующий объект внутри нового объекта. С его помощью можно получить только копию, он не может изменять существующие объекты.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// spread()

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));
  // Expected output: 6
  
  console.log(sum.apply(null, numbers));
  // Expected output: 6

```



<br> <br> <br>

<span style="font-size: 34px;"> **`19. rest`** <span>

 <span style="color: white; font-size: 24px;"> **`Оператор rest`**
 — это синтаксическая конструкция в JavaScript, которая позволяет собирать оставшиеся элементы массива в другой массив или собирать оставшиеся свойства объекта в другой объект. Он всегда идёт последним и может использоваться только раз при одной операции «распаковки» массива или объекта.
<span>


<span style=" color: rgb(110, 148, 204); font-size: 18px; font-family: san serif;"> Например :<span>


```javascript

// spread()

function sum(...theArgs) {
    let total = 0;
    
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));
  // Expected output: 6
  
  console.log(sum(1, 2, 3, 4));
  // Expected output: 10
  

```