// file: hello-jasmine.js

// 함수를 정의한다.
var getHello = function() {
    return 'hello';
};

// module을 object로 정의한다.
!function() {
    if (typeof module !== 'undefined')
        module.exports = {
            // getHello를 exports에 매핑 시켜 준다.
            getHello: getHello
        };
}();