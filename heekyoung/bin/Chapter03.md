# Chapter03. 자바스크립트 데이터 타입과 연산자

## 3.1 자바스크립트 기본 타입
- 숫자, 문자열, 불린값, null, undefined
- 변수의 타입을 typeof 연산자를 이용해 출력<br>
   => typeof 연산자는 피연산자를 리턴
- 느슨한 타입 체크 언어<br>
  => 초기에 지정할 때 타입을 따로 정하지 않고 var로 선언

```javaScript
// 숫자 타입
var intNum = 10;
var floatNum = 0.1;

// 문자열 타입
var singleQuoteStr = 'single quote string';
var doubleQuoteStr = 'double quote string';
var singleChar = 'a';

// 불린 타입
var boolVar = true;

// undefined 타입
var emptyVar;

// null 타입
var nulVar = null;
```

### 3.1.1 숫자
- 하나의 숫자형만 존재<br>
  => 모든 숫자를 64비트 부동소수점 형태로 저장
- 정수형이 따로 없고 모든 숫자를 실수로 처리

### 3.1.2 문자열
- 작은 따옴표(')나 큰 따옴표(")로 생성
- 한번 정의된 문자열은 변하지 않는다

### 3.1.3 불린값
- true와 false 값을 나타내는 불린 타입을 가짐

### 3.1.4 null과 undefined
- 값이 비어있음을 나타냄
- 값이 할당되어 있지 않으면 undefined
- undefined 타입의 변수는 변수 자체의 값 또한 undefined임
- null 타입 변수는 개발자가 명시적으로 값이 비어있음을 나타내는데 사용<br>
 => null 타입 변수의 typoe 결과는 object임<br>
 	그렇기 때문에 null 타입 변수인지 확인하고 싶을 때는 typeof 연산자가 아니고 일치 연산자(==)를 사용해서 변수의 값을 직접 확인해야 함

```javaScript
//null 타입 변수 생성
var nullVar = null;

console.log(typeof nullVar == null); //출력값 false
console.log(nullVar == null); //출력값 true
```

## 3.2 자바스크립트 참조 타입(객체 타입)
- 자바스크립트에서는 숫자, 문자열, 불린값, null, undefined 같은 기본 타입을 제외한 모든 값은 객체임<br>
 => 배열, 함수, 정규표현식 등도 객체로 표현
- 자바스크립트에서 객체는 '이름(key):값(value)' 형태의 프로퍼티들을 저장하는 컨테이너
- 기본 타입은 하나의 값만을 가지는데에 비해 참조타입 객체는 여러 개의 프로퍼티들을 포함할 수 있음<br>
 => 참조 타입 객체의 프로퍼티는 기본 타입의 값을 포함하거나, 다른 객체를 가리킬 수 있음
- 객체의 프로퍼티는 함수로 포함할 수 있으며 이러한 프로퍼티를 메소드라 함

### 3.2.1 객체 생성
- 클래스라는 개념이 없고, 객체 리터럴이나 생성자 함수 등 별도의 생성 방식이 존재<br>
*객체 생성의 세가지 방법
1. 기본 제공 Object() 객체 생성자 함수를 이용하는 방법
2. 객체 리터럴을 이용
3. 생성자 함수를 이용

#### 3.2.1.1 Object() 생성자 함수 이용
- 객체를 생성할 때, 내장 Object() 생성자 함수 제공

```javaScript
// Object()를 이용해서 foo 빈 객체 생성
var foo = new Object();

// foo 객체 프로퍼티 생성
foo.name = "foo";
foo.age = 30;
foo.gender = "male";

console.log(typeof foo);
console.log(foo);
```

#### 3.2.1.2 객체 리터럴 방식 이용
- 객체 리터럴은 중괄호{}를 이용해서 객체를 생성
- {} 안에 아무것도 적지 않으면 빈 객체가 생성, 중괄호 안에 "프로퍼티 이름":"프로퍼티 값" 형태로 표기하면 프로퍼티가 추가된 객체 생성 가능
- 프로퍼티 이름은 문자열이나 숫자 가능
- 프로퍼티 값으로는 어떤 표현식도 가능, 이 값이 함수일 경우 메소드라고 부름

```javaScript
// 객체 리터럴 방식으로 foo 객체 생성
var foo = {
	name : 'foo',
	age :30,
	gender : 'male'
};

console.log(typeof foo);
console.log(foo);
```

#### 3.2.1.3 생성자 함수 이용
- 함수를 통해서 객체 생성 가능(생성자 함수)

### 3.2.2 객체 프로퍼티 읽기/쓰기/갱신
객체 프로퍼티에 접근하기 위한 방법
1. 대괄호([]) 표기법
2. 마침표(.) 표기법

```javaScript
// 객체 리터럴 방식을 통한 foo 객체 생성
var foo = {
	name : 'foo',
	major : 'computer science'
};

//객체 프로퍼티 읽기
console.log(foo.name); //foo
console.log(foo['name']); //foo
console.log(foo.nickname); //undefined


// 객체 프로퍼티 생성
foo.age = 30;
console.log(foo.age); //30

// 대괄호 표기법을 사용해야 할 경우
foo['full-name'] = 'foo bar';
console.log(foo['full-name']); //foo bar
console.log(foo.full-name]); //NaN
console.log(foo.full); //undefined
```

- 대괄호 표기법은 대괄호 안에 프로퍼티 이름을 문자열 형태로 만들어야 함<br>
 => foo['name']은 foo가 나오지만 foo[name]은 undefined 값이 출력

### 3.2.3 for in 문과 객체 객체 프로퍼티 출력
- 객체에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 잇음

```javaScript
// 객체 리터럴을 통한 foo 객체 생성
var foo = {
	name : 'foo',
	age : 30,
	major : 'computer science'
};

// for in 문을 이용한 객체 프로퍼티 출력
var prop;
for (prop in foo)[
	console.log(prop, foo[prop])
}
```

### 3.2.4 객체 프로퍼티 삭제
- delete 연산자를 이용해 즉시 삭제 할 수 있음
- delete 연산자는 객체의 프로퍼티를 삭제할 뿐, 객체 자체를 삭제하지 않음

## 3.3 참조 타입의 특성
- 숫자, 문자열, 불린값, null, undefined를 제외한 모든 값은 객체임<br>
 => 배열이나 함수 또한 객체(참조타입)

```javaScript
var objA = {
	val : 40
};
var objB = objA;

console.log(objA.val); //40
console.log(objB.val); //40

objB.val = 50;
console.log(objA.val); //50
console.log(objB.val); //50
```

- objA 변수는 객체 자체를 저장하고 있는 것이 아니라 생성된 객체를 가리키는 참조값을 저장하고 있음<br>
objA와 objB 변수가 동일한 객체를 가리키는 참조값을 가지게 됨

### 3.3.1 객체 비교
동등 연산자(==)를 사용하여 두 객체를 비교할 때도 객체의 프로퍼티 값이 아닌 참조값을 비교한다

```javaScript
var a = 100;
var b = 100;

var objA = { value : 100 };
var objB = { value : 100 };
var objC = objB;

console.log(a == b); //true
console.log(objA == objB); //false
console.log(objB == objC); true
```

- a와 b는 숫자를 저장하고 있는 기본타입임<br>
 => 기본 타입이기 때문에 값을 비교 함<br>
 => 같은 값이기 때문에 true
- objA와 objB는 다른 객체지만 같은 형태의 프로퍼티를 가지고 있음<br>
 => 객체와 같은 참조 타입의 경우에는 참조값이 같아야 true<br>

### 3.3.2 참조에 의한 함수 호출 방식
- 기본 타입은 값에 의한 호출(Call By Value) 동작<br>
 => 인자로 기본 타입의 값을 넘기면 호출된 함수의 매개변수로 복사된 값이 전달
- 객체와 같은 참조 타입은 참조에 의한 호출(Call By Reference)방식으로 동작<br>
  => 인자로 참조 타입인 객체를 전달하면 객체의 프로퍼티 값이 함수의 매개변수로 복사되지 않고, 인자로 넘긴 객체의 참조값이 그대로 함수 내부로 전달 됨<br>
     함수 내부에서 참조값을 이용해서 인자로 넘긴 실제 객체의 값을 변경할 수 있음 <br>

```javaScript

var a = 100;
var objA = { value : 100 };

function changeArg(num, obj) {
	num = 200;
	obj.value = 200;
	
	console.log(num); //200
	console.log(obj); //200
}

changeArg(a, objA);

console.log(a); //100
console.log(obj); //200
```

## 3.4 프로토타입
- 자바스크립트의 모든 객체는 자신의 부모 역할을 하는 객체와 연결되어 있음<br>
	=> 이렇나 부모가 프로토타입 객체(프로토타입)
- 객체 리터럴 방식으로 생성된 객체는 Object.prototype 객체가 프로토타입 객체가 됨<br>
	=> toString(), valueOf() 등 기본 내장 메서드가 포함
- 부모 객체를 동적으로 바꿀 수 있음

## 3.5 배열
크기를 지정하지 않아도 되고 어느 타입의 데이터를 어떤 위치에서 사용하더라도 에러가 발생하지 않음

### 3.5.1 배열 리터럴
- 새로운 배열을 만드는데 사용
- [] 대괄호를 사용
- 각 요소의 값만 포함
- 접근 하고자하는 원소에 배열 내 위치 인덱스값을 넣어서 접근

```javaScript
//배열 리터럴을 통한 5개 원소를 가진 배열 생성
var colorArr = ['orange', 'yellow', 'green', 'blue', 'red'];
console.log(colorArr[0]); //orange
console.log(colorArr[2]); //green
```

### 3.5.2 배열의 요소 생성
- 배열도 동적으로 배열 우너소를 추가할 수 있음
- 아무 인덱스 위치에나 값을 넣ㅇ르 수 있다.

### 3.5.3 배열의 length 프로퍼티
- length 프로퍼티가 있음
- 배열의 원소 개수를 나타내지만 실제 배열에 존재하는 원소 개수와 일치하진 않음
- 배열 내에 존재하는 가장 큰 인덱스에 1을 더한 값임
- 배열의 length 프로퍼티는 코드로 명시적으로 값 변경 가능

#### 3.5.3.1 배열 표준 메서드와 length 프로퍼티
- 배열 메서드는 length 푸로퍼티를 기반으로 동작
- push() 메서드는 인수로 넘어온 항목을 배열의 끝에 추가하는 자바스크립트 표준 배열 메서드<br>
   => 배열의 현재 length 값의 위치에 새로운 원소값을 추가

### 3.5.4 배열과 객체
- 배열도 객체이지만 일반 객체와는 차이가 있음

```javaScript
//colorsArray 배열
var colorsArray = ['orange', 'yellow', 'green'];
console.log(colorsArray[0]); //orange
console.log(colorsArray[1]); //yellow
console.log(colorsArray[2]); //green

// colorsObj 객체
var colorsObj = {
	'0' : 'orange',
	'1' : 'yellow',
	'2' : 'green'
};
console.log(colorsObj[0]); //orange
console.log(colorsObj[1]); //yellow
console.log(colorsObj[2]); //green

//typeof 연산자 비교
console.log(typeof colorsArray); //object (배열이 아님)
console.log(typeof colorsObj); //object

//length 프로퍼티
console.log(colorsArray.length); //3
console.log(colorsObj.length); //undefined

// 배열 표준 메서드
colorsArray.push('red'); //orange, yellow, green, red
colorsObj.push('red'); // Uncaught TypeError: Object #<Object> has no method 'push';
```

### 3.5.5 배열의 프로퍼티 동적 생성
- 배열의 length 프로퍼티는 배열 우너소의 가장 큰 인덱스가 변했을 경우에만 변경 됨

### 3.5.6 배열의 프로퍼티 열거

```javaScript
for (var prop in arr) {
	console.log(porp, arr[prop]);
}

for (var i=0; i < arr.length; i++) {
	console.log(i, arr[i]);
}
```

### 3.5.7 배열 요소 삭제
- 배열 요소나 프로퍼티를 삭제하는데 delete 연산자 사용 가능
- delete는 요소의 값을 undefined로 설정할 뿐, 원소 자체를 삭제하지 않음
- 요소들을 완전히 삭제할 경우 splice() 배열 메소드를 사용함
<br>
**splice() 배열 메서드**<br>
splice(start, deleteCount, item...)<br>
start - 배열에서 시작 위치 <br>
deleteCount - start에서 지정한 시작 위치부터 삭제할 요소의 수<br>
item - 삭제할 위치에 추가할 요소

### 3.5.8 Array() 생성자 함수
- 생성자 함수로 배열과 같은 객체를 생성할 때는 반드시 new 연산자를 써야 함
- 호출할 때 인자가 1개이고 숫자일 경우 : 호출된 인자를 length로 갖는 빈 배열 생성
- 그 외의 경우 : 호출된 인자를 요소로 갖는 배열 생성

```javaScript
var foo = new Array(3);
console.log(foo); // [undefined, undefined, undefined]
console.log(foo.length); //3

var bar = new Array(1, 2, 3);
console.log(bar); // [1, 2, 3]
console.log(bar.length); //3
```

### 3.5.9 유사 배열 객체
- length 프로퍼티각 있는 객체를 유사 배열 객체라고 함
- 유사 배열 객체는 apply 메서드를 이용하면 배열 메서드를 활용 가능

## 3.6 기본 타입과 표준 메서드
- 기본 타입이지만 정의돈 표준 메서드들을 이용해 객체처럼 호출 할 수 있다

## 3.7 연산자

### 3.7.1 + 연산자
- 더하기 연산과 문자열 연결 연산

### 3.7.2 typeof 연산자
- 피연산자의 타입을 문자열 형태로 리턴
- null과 배열이 object이고 함수는 function임

### 3.7.3 == 동등 연산자와 === 일치 연산자
- 비교하는 두 값이 동일한지 확인 할 때에 두 연산자 모두 사용 가능
- == 연산자는 비교하려는 피연산자의 타입이 다르면 타입 변환을 하고 비교 함
- === 연산자는 피연산자의 타입이 달라도 타입을 변경하지 않고 비교

```javaScript
console.log(1 == '1'); //true '1'을 타입변환하면 같기 때문에
console.log(1 === '1'); //false 타입 변환하지 않고 비교하는데 타입 자체가 다르기 때문에 false
```

- == 연산자 보다는 ===을 권장

### 3.7.4 !! 연산자
- 피연산자를 불린값으로 반환하는 것

```javaScript
console.log(!!0); //false
console.log(!!1); //true
console.log(!!'string'); //true
console.log(!!''); //false
console.log(!!true); //true
console.log(!!false); //false
console.log(!!null); //false
console.log(!!undefined); //false
console.log(!!{}); //true
console.log(!![1,2,3]); //true