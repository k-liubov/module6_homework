//������ 6 ������� 2
function primeNum(num) {
	let isPrime, result;
	isPrime = true;
	if (num > 1 && num <= 1000) {
		for (let i = 2; i < num; i++) {
			if(num % i === 0) {
				isPrime = false;
			}
		}
		result = isPrime ? `����� ${num} - ������� �����` : `����� ${num} - ��������� �����`;
	} else if (num > 1000){
		result = '������ �������';
	}
	console.log(result);
}
primeNum(6); 

