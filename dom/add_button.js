var read = function() {
    var input = document.getElementById('input1');
    // input1이라는 아이디 가진 엘리먼트 가져와서 그것의 밸류 기록
    console.log(input.value);
}

var btn2 = document.createElement('button');
btn2.innerHTML = "Button2";
btn2.onclick = read;
var test = document.getElementById('test');
test.appendChild(document.createElement('br'));
test.appendChild(btn2);