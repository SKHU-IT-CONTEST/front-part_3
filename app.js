function func() {

	let answer = document.getElementById('answer').value;
	if(answer == ""){
		alert('응답을 적어주세요!');
	}
	
	else{
    var Btn = document.createElement('button');
    var BtnText = document.createTextNode(answer);
    Btn.appendChild(BtnText);
    document.body.appendChild(Btn);

		document.getElementById('answer').value = ""; // answer 초기화
	}
}