// program to print 'Fizz' for the numbers divisible by 3...
// and 'Buzz' for the numbers divisible by 5...
// and 'FizzBuzz' for those numbers divisible by 3 and 5
// 1 <= n <= 100

function startHere() {
 for(let i=1; i<=100; i++) {
  if(i%3==0 && i%5==0) {
    console.log('FizzBuzz');
  }
  else if(i%3==0) {
    console.log('Fizz');
  }
  else if(i%5==0) {
    console.log('Buzz');
  }
  else {
    console.log(i);
  }
 }
}

startHere();
