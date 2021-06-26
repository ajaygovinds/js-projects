// prints an array & it's sum based on the range and step value provided
// range take 'start' and 'end' arguements -- both are inclusive
// step take '-ve' or '+ve' value -- it's optional arguement and takes '1' on default

let start = process.argv[2];
start = parseInt(start);
let end = process.argv[3];
end = parseInt(end);
let step = process.argv[4];
if(step) step = parseInt(step);

let rangeArray = []

function getRange(start, end, step=1) {
 if(step>0) {
  for(let i=start; i<=end; i+=step) {
   rangeArray.push(i);
   start += step;
  }
 console.log(rangeArray);
 }
 else if(step<0) {
  for(let i=start; i>=end; i+=step) {
   rangeArray.push(i);
   start += step;
  }
 console.log(rangeArray);
 }
}

getRange(start,end,step);

