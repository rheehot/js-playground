function main() {
    // 가지고 와서 담기 
    // div 객체가 out 변수 안에 들어감 
    let out = document.getElementById("output");
    out.innerHTML = "계산기 구현하기";

    let string1 = document.getElementById("input1");
    let string2 = document.getElementById("input2");
    
    let num1 = Number(string1.value);
    let num2 = Number(string2.value);

    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);

}

