let count = process.argv[2]; //to cli input, provided without whitespaces
let toPrint = '';
let stepCount = 1;
while(count) {
  for(let i=1; i<=stepCount; i++) {
   toPrint += '#';
  }
   console.log(toPrint);
   toPrint = '';
   stepCount++;
   count--;
}
