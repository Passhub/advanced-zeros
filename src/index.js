module.exports =
function getZerosCount(number, base) {
  let count1 = 0;
  let count2 = 0;
  let count = 0;
  if (!isPrime(base)){
      let stack = findPrimeFactors(base);
      let t1 = stack[0];
      let t2 = stack[1];
      let num1 = number;
      let num2 = number;
        while(num1 >= t1){
          num1 = (num1 - num1 % t1) / t1;
          count1 += num1;
        }
        while(num2 >= t2){
          num2 = (num2 - num2 % t2) / t2;
          count2 += num2;
        }
        if(count1 <= count2)
          return count1;
        else return count2;
    }
  else{
      while(number >= base){
        number = (number - number % base) / base;
        count += number;
    }
    return count;
  }

}


function isPrime(n){
	if(n == 1) // 1 - не простое число
		return false;
	// перебираем возможные делители от 2 до sqrt(n)
	for(d = 2; d*d <= n; d++){ 
		// если разделилось нацело, то составное
		if(n % d == 0) 
			return false;
		}
	// если нет нетривиальных делителей, то простое
	return true;
	}

function findPrimeFactors (n){
  let stack = [];
    if (n % 2 == 0){
      stack.push(2, n / 2);
      return stack;
    }
    else{
      let a = Math.ceil(Math.sqrt(n)); 
      let b2 = a*a - n;
      while (Math.sqrt(b2) != (Math.ceil(Math.sqrt(b2))) ){
        a += 1;
        b2 = a*a - n;
    }
      stack.push(a - Math.sqrt(b2), a + Math.sqrt(b2));
      return stack;
  }
}

