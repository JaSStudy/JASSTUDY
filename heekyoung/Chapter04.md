# Chapter04. 함수와 프로토타입 체이닝

## 4.1 함수 정의
함수 생성하는 3가지 방법<br>
1. 함수 선언문
2. 함수 표현식
3. Function() 생성자 함수

### 4.1.1 함수 리터럴
함수 리터럴을 이용해 함수 생성 가능

```javaScript
function add(x,y) {
	return x+y;
}
```

### 4.1.2 함수 선언문 방식으로 함수 생성하기
- 함수 선언문 방식으로 정의된 함수는 반드시 함수명이 정의되어 있어야 함

### 4.1.3 함수 표현식 방식으로 함수 생성하기
- 함수도 하나의 값처럼 취급
- 함수도 숫자나 문자열처럼 변수에 할당 가능
- 함수리터럴로 하나의 함수를 만들고 여기서 생성된 함수를 변수에 할당하여 함수를 생성하는 것 => 함수 표현식
- 함수 리터럴로 생성한 함수는 함수명이 없으므로 익명 함수임

```javaScript
// add()함수 표현식
var add = function (x, y) {
	return x + y;
};

var plus = add;

console.log(add(3,4));
console.log(plus(5,6));
```

익명 함수를 이용한 함수 표현식 방법(익명 함수 표현식) <br/>
익명 함수의 호출은 함수 호출 연산자인 ()를 붙여서 기술<br/>

```javaScript
//기명 함수 표현식의 함수 호출 방법
var add - function sum(x, y) {
	return x + y;
}

console.log(add(3,4));
console.log(sum(3,4));
```

** function statement와 function expression에서의 세미콜론 **
- 함수 선언문에서는 ;을 붙이지 않지만 함수 표현식에서는 ;을 사용함

### 4.1.4 Function() 생성자 함수를 통한 함수 생성하기
- Function()이라는 기본 내장 생성자 함수로부터 생성된 객체

```javaScript
//Function() 생성자 함수를 이용한 add() 함수 생성
var add = new Function('x', 'y', 'return x+y');
console.log(add(3,4)); //7
```

### 4.1.5 함수 호이스팅

```javaScript
add(2,3); //5

//함수 선언문 형태로 add() 함수 정의
function add(x,y) {
	return x + y;
}

add(3,4); //7
```

- add(2,3)은 에러가 나지 않음<br/>
 => add 함수의 유효 범위가 코드의 맨 처음부터 이기 때문에(함수 호이스팅)
 
```javaScript
add(2,3); //uncaught type error

// 함수 표현식 형태로 add() 함수 정의
function add(x,y) {
	return x + y;
}

add(3,4); //7
```

- 함수 표현식 형태로 정의되어 있으면 함수 호이스팅은 일어나지 않음
- 함수 호이스팅은 자바스크립트의 변수 생성과 초기화 때문에 일어남

## 4.2 함수 객체 : 함수도 객체다

### 4.2.1 자바스크립트에서는 함수도 객체다
- 함수 자체도 프로퍼티를 가질 수 있다

### 4.2.2 자바스크립트에서 함수는 값으로 취급
- 함수도 일반 객체로 취급될 수 있다.
- 리터럴에 의해 생성 가능
- 변수나 배열의 요소, 객체의 프로퍼티 등에 할당 가능
- 함수의 인자로 전달 가능
- 함수의 리턴값으로 리턴 가능
- 동적으로 프로퍼티를 생성 및 할당 가능

#### 4.2.2.1 변수나 프로퍼티의 값으로 할당
함수는 숫자나 문자열처럼 변수나 프로퍼티의 값으로 할당 될 수 있다.

#### 4.2.2.2 함수 인자로 전달
- 함수는 다른 함수의 인자로도 전달 가능

#### 4.2.2.3 리턴값으로 활용
- 함수는 다른 함수의 리턴값으로 활용할 수 있다

### 4.2.3 함수 객체의 기본 프로퍼티
- 함수도 객체다
- 일반 객체와는 다르게 추가로 함수 객체만읜 표준 프로퍼티가 정의되어 있음
- name : 함수의 이름
- caller : 자신을 호출한 함수
- arguments : 함수를 호출할 때 전달된 인자값
- _proto_ : 자신의 프로토타입을 가리키는 [[Prototype]]라는 내부 프로퍼티를 가짐
- 부모 역할을 하는 프로토타입 객체 : Function.prototype 객체
- Function.prototype 함수 객체의 부모는 Object.prototype 객체
- Funciont.prototype 객체는 모든 함수들의 부모 역할을 하는 프로토타입 객체

#### 4.2.3.1 length 프로퍼티
- ECMAScript에서 정한 모든 함수가 가져야 하는 표준 프로퍼티
- 함수가 정상적으로 실행 될 때 기대되는 인자의 개수

```javaScript
function func0(){

}

function func1(x){
 return x;
}

console.log('func0.length - ' + func0.length); //func0.length - 0
console.log('func1.length - ' + func1.length); //func0.length - 1
```

#### 4.2.3.2 prototype 프로퍼티
- 모든 함수는 객체로서 prototype 프로퍼티를 가지고 있음
- 함수를 생성할 때, 함수 자신과 연결된 프로토타입 객체를 동시에 생성함
- prototype과 constructor 프로퍼티는 서로를 참조함
- 함수 객체와 프로토타입 객체는 서로 밀접한 연결이 되어 있음
![image](https://user-images.githubusercontent.com/46592018/123391879-6c80d700-d5d7-11eb-802d-54d96e400353.png)

## 4.3 함수의 다양한 형태
### 4.3.1 콜백 함수
- 익명 함수의 대표적인 용도 : 콜백 함수
- 콜백함수 : 함수를 등록하기만 하고 어떤 이벤트가 발생했거나 특정 시점에 도달했을 때 시스템에서 호출되는 함수
- 특정 함수의 인자로 넘겨서, 코드 내부에서 호출되는 함수도 콜백함수
<<<<<<< HEAD
- 대표적인 예 : 이벤트 핸들러 처리

### 4.3.2 즉시 실행 함수
- 함수를 정의함과 동시에 바로 실행하는 함수

```javaScript
//즉시 실행 함수 예제
(function (name) {
	console.log("this is the immediate function => " + name);
})('foo');
```
- foo를 인자로 넘긴 것
- 즉시 실행 함수는 같은 함수를 다시 호출 할 수 없음
- 최초 한번의 실행만을 필요로 하는 초기화 코드 부분에 사용
- 자바스크립트에서는 함수 유효 범위를 지원 함

### 4.3.3 내부 함수
- 자바 스크립트에서는 함수 코드 내부에서도 다시 함수 정의가 가능(내부 함수)
- 클로저를 생성하거나 부모 함수 코드에서 외부에서의 접근을 막고 독립적인 헬퍼 함수를 구현 하는 용도
- 내부 함수는 자신을 둘러싼 부모 함수의 변수에 접근 가능<br/>
=> 스코프 체이닝 때문에 가능함
- 내부 함수는 일반적으로 자신이 정의된 부모 함수 내부에서만 호출 가능
- 부모 함수에서 내부 함수를 외부로 리턴하면, 부모 함수 밖에서도 내부 함수 호출이 가능

### 4.3.4 함수를 리턴하는 함수
- 함수를 호출함과 동시에 다른 함수로 바꾸거나, 자기 자신을 재정의하는 함수를 구현할 수 있음

## 4.4 함수 호출과 this

### 4.4.1 arguments 객체

```javaScript
function func(arg1, arg2) {
	console.log(arg1, arg2);
}

func(); //undefined undefined
func(1); //1 undefined
func(1,2); //1 2
func(1, 2, 3); //1 2
```

- arguments 객체 : 함수를 호출 할 때 넘긴 인자들이 배열 형태로 저장된 객체, 유사 배열 객체

### 4.4.2 호출 패턴과 this 바인딩
- 함수를 호출할 때, 기존 매개변수로 전달되는 인자값에 더해 arguments 객체 및 this 인자가 함수 내부로 암묵적으로 전달 됨

#### 4.4.2.1 객체의 메서드 호출할 때 this 바인딩
- 메서드를 호출할 때, 메서드 내부 코드에서 사용된 this는 해당 메서드를 호출한 객체로 바인딩

```javaScript
// myObject 객체 생성
var myObject = {
	name : 'foo',
	sayName : function () {
		console.log(this.name);
	}
};

// otherObject 객체 생성
var otherObject = {
	name: 'bar'
};

// otherObject.sayName() 메서드
otherOBject.sayName = myobejct.sayName();

// sayName() 메서드 호출
myObject.sayName();
otherObject.sayName();
```

#### 4.4.2.2 함수를 호출할 때 this 바인딩
- 함수를 호출하면, 해당 함수 내부 코드에서 사용된 this는 전역 객체에 바인딩<br/>
	=> 브라우저에서 자바스크립트를 실행하면 전역 객체는 window 객체가 됨

```javaScript
// 전역 변수 value 정의
var value = 100;

// myObject 객체 생성
var myObject = {
	value : 1,
	func1 : function () {
		this.value += 1;
		console.log("func1() called. this.value : " + this.value);

		//func2() 내부 함수
		func2 = function () {
			this.value += 1;
			console.log("func2() called. this.value : " + this.value);

			//func3() 내부 함수
			func3 = function () {
				this.value += 1;
				console.log("funct3() called. this.value : " + this.value);
			}
			func3();
		}
		func2();
	}
};
myObject.func1();
```

내부 함수 호출 패턴 규칙에 따라 this는 전역 객체에 바인딩 되므로 2,3,4가 아니라 2,101,102가 출력 됨
- 부모함수의 this를 내부 함수가 접근 가능한 다른 변수에 저장하는 방법 사용
- this를 칭하는 변수의 이름을 that으로 많이 지음

#### 4.4.2.3 생성자 함수를 호출할 때 this 바인딩
- 기존 함수에 new 연산자를 붙여서 호출하면 생성자 함수로 동작
- 함수 이름의 첫 문자를 대문자로 쓰기를 권함

** 생성자 함수가 동작하는 방식 **
1. 빈 객체 생성 및 this 바인딩
2. this를 통한 프로퍼티 생성
3. 생성된 객체 리턴

```javaScript
// 객체 리터럴 방식으로 foo 객체 생성
var foo = {
	name : 'foo',
	age: 35,
	gender :'man'
};
console.dir(foo);

// 생성자 함수
function Person(name, age, gender, position) {
	this.name = name;
	this.age = age;
	this.gender = gender;
}

// Person 생성자 함수를 이용해 bar 객체 ,baz 객체 생성
var bar = new Person('bar', 33, 'woman');
console.dir(bar);

var bar = new Person('baz', 25, 'woman');
console.dir(baz);
```

- 프로토타입 객체(_proto_프로퍼티)에 있음<br/>
 => 객체 리터럴 방식 : Object (Object.prototype)<br/>
	생성자 함수 방식 : Person (Person.prototype)<br/>
- 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체로 설정

** 생성자 함수를 new를 붙이지 않고 호출할 경우 **
- 일반 함수 호출의 경우 : tihs가 window 전역 객체에 바인딩
- 생성자 함수 호출의 경우 : this는 새로 생성되는 빈 객체에 바인딩

```javaScript
var qux = Person('qux', 20, 'man');
console.log(qux); //undefined

console.log(window.name); //qux
console.log(window.age); //20
console.log(window.gender); //man
```

#### 4.4.2.4 call과 apply 메서드를 이용한 명시적인 this 바인딩
apply() 메서드

```javaScript
	function.apply(thisArg, argArray)
```
- apply() 메서드를 호출하는 주체가 함수이고, apply() 메서드도 tihs를 특정 객체에 바인딩 할 뿐
- thisArg는 apply() 메서드를 호출한 함수 내부에서 사용한 this에 바인딩할 객체
	=> 첫번째 인자로 넘긴 객체가 this로 명시적으로 바인딩
- argArray는 함수를 호출할 때 넘길 인자들의 배열을 가리킴

```javaScript
//생성자 함수
function Person(name, age, gender){
	this.name = name;
	this.age = age;
	this.gender = gender;
}

// foo 빈 객체 생성
var foo = {};

// apply() 메서드 호출
Person.apply(foo, ['foo', 30, 'man']);
console.dir(foo);
```

- apply()는 배열 형태로 넘기지만 call() 메서드는 각각 하나의 인자로 넘김

### 4.4.3 함수 리턴
- 자바스크립트 함ㄴ수는 항상 리턴 값을 반환

#### 4.4.3.1 규칙1) 일반 함수나 메서드는 리턴 값을 지정하지 않을 경우, undefined 값이 리턴

#### 4.4.3.2 규칙2) 생성자 함수에서 리턴값을 지정하지 않을 경우 생성된 객체가 리턴
- this로 바인딩된 새로 생성된 객체가 리턴됨
- 일반적으로 리턴값을 지정하지 않는다.

```javaScript
// 생성자 함수에서 명시적으로 객체를 리턴했을 경우
// Person()생성자 함수
function Person(name, age, gender) {
	this.name = name;
	this.age = age;
	this.gender = gender;

	// 명시적으로 다른 객체 반환
	return {name : 'bar', age : 20, gender : 'woman'};
}

var foo = new Person('foo', 30, 'man');
console.dir(foo);
```

- 생성자 함수를 호출해서 새로운 객체를 생성하더라도, 리턴 값에서 명시적으로 넘긴 객체나 배열이 리턴 됨
- 생성자 함수의 리턴값으로 넘긴 값이 객체가 아닌 불린, 숫자, 문자열이면 리턴값을 무시하고 this로 바인딩된 객체가 리턴 됨

## 4.5 프로토타입 체이닝

### 4.5.1 프로토타입의 두가지 의미
- 프로토타입 기반의 객체지향 프로그래밍
- 모든 객체는 자신의 부모인 프로토타입 객체를 가리키는 참조 링크 형태의 숨겨진 프로퍼티가 있음<br/>
	=> 암묵적 프로토타입 링크, 모든 객체의 [[Prototype]]에 저장됨
- 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 프로토타입 객체를 자신의 부모 객체로 설정하는 [[Prototype]] 링크로 연결
- _proto_ 프로퍼티나 [[Prototype]] 프로퍼티는 같다고 간주함

### 4.5.2 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝
- 자기 자신 뿐만 아니라, 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티에도 접근 가능
- 객체 리터럴로 생성한 객체는 Object()라는 내장 생성자 함수로 생성된 것

### 4.5.3 생성자 함수로 생성된 객체의 프로토타입 체이닝
- 모든 객체는 자신을 생성한 생성자 함수의 prototype 프로퍼티가 가리키는 객체를 자신의 프로토타입 객체(부모 객체)로 취급

### 4.5.4 프로토타입 체이닝의 종점
- Object.prototype 객체는 프로토타입 체이닝의 종점

### 4.5.5 기본 데이터 타입 확장
- Object.prototpye, String.prototype 등과 같이 표준 빌트인 프로토타입 객체에도 사용자가 직접 정의한 메서드들을 추가하는 것이 허용됨<br/>
	=> 일반 문자열 표준 메서드처럼, 모든 문자열에서 접근 가능함
- String.prototype의 포로토타입은 Object.prototype<br/>
	=> hasOwnProperty() 같은 Object.prototpye 메서드 호출 가능

### 4.5.6 프로토타입도 자바스크립트 객체다
- 프로토타입 객체도 자바스크립트 객체이므로 동적으로 프로퍼티 추가/삭제 가능

### 4.5.7 프로토타입 메서드와 this 바인딩
- 프로토타입 객체는 메서드를 가질 수 있음
- 메서드 호출 패턴에서의 this는 그 메서드를 호출한 객체에 바인딩

### 4.5.8 디폴트 프로토타입은 다른 객체로 변경 가능
- 디폴트 프로토 타입 객체는 함수가 생성될 때 같이 생성되며, 함수의 prototype 프로퍼티에 연결됨<br/>
	=> 디폴트 프로토타입을 다른 일반 객체로 변경하는 것이 가능
- 생성자 함수의 프로토타입이 객체가 변경되면, 변경된 시점 이후에 생성된 객체들은 변경된 프로토 타입 객체로 [[Prototype]] 링크를 연결함
- 변경 이전에 생성된 객체들은 기존 프로토타입 객체로의 [[Prototype]] 링크를 그대로 유지

### 4.5.9 객체의 프로퍼티 읽기나 메서드를 실행할 때만 프로토타입 체이닝이 동작한다.
- 프로퍼티가 해당 객체에 없는 경우 프로토타입 체이닝이 발생
- 객체에 없는 프로퍼티에 값을 쓰려고 할 경우 동적으로 객체에 프로퍼티를 추가
=======
- 대표적인 예 : 이벤트 핸들러 처리
>>>>>>> refs/remotes/origin/heekyoung
