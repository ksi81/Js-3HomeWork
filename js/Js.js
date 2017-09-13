//alert ('test')

var myMas = [2,2,2,2,];
function myMasOut() {
	var p = document.getElementById('new');
	var element = '';
		for (var i = 0; i < myMas.length; i++) {
		if (myMas[i] != undefined) {
			element += myMas[i] + ', ';
		} else {
			element += ', ';
		}
	}
	p.innerHTML = element;
}
myMasOut(); /// 1.	Напишите функцию для вывода элементов массива в элемент <p id=”new”></p>.- выводим первоначальнный массив

/// 2.	Добавьте в предыдущую программу два элемента input, в которые можно ввести индекс массива и значение. По нажатию “ОК” - массив выводится.
document.getElementById('btnAdd').onclick=addNew;
function addNew() {
	var ind = document.getElementById('in').value;
	ind = parseInt(ind);
	var elem = document.getElementById('el').value;
	myMas[ind] = elem;
	myMasOut();
}
//3.	Добавьте кнопку pop реализующую метод pop() для введенного выше массива. 
document.getElementById('btnPop').onclick=fPop;
function fPop(){
	myMas.pop();
	myMasOut();
}
//4.	Добавьте кнопку shift реализующую метод shift() для введенного выше массива. 
document.getElementById('btnShift').onclick=fShift;
function fShift(){
	myMas.shift();
	myMasOut();
}
//5.	Добавьте кнопку push реализующую метод push() для введенного выше массива. 
document.getElementById('btnAddLast').onclick=fPush;
function fPush()  {
	var lastEl = document.getElementById('addLastEl').value;
	myMas.push(lastEl);
	myMasOut();
}

document.getElementById('btnAddfLast').onclick=fUnshift;
function fUnshift()  {
	var firstEl = document.getElementById('addFirstEl').value;
	myMas.unshift(firstEl);
	myMasOut();
}
