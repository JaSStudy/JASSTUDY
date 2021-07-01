// 객체 리터럴 방식에서의 프로토타입 체이닝
var myObject = {
    name :'foo',
    sayName : function () {
        console.log('My Name is ' + this.name);
    }
};

myObject.sayName();
//hasOwnProperty() : 메서드를 호출한 객체에 인자로 넘긴 만주열 이름의 프로퍼티나 메서드가 있는지 체크하는 자바스크립트 표준 API
console.log(myObject.hasOwnProperty('name')); 
console.log(myObject.hasOwnProperty('nickName'));
myObject.sayNickName();