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
- 대표적인 예 : 이벤트 핸들러 처리