 
 //WHile loops
 var n = 1;
 var count=1
 while (count <=10) {

  if(count%2==0)
    console.log(count);
    count++;
 }


while(count <=100){
     if(count%5==0&&count%2==0)

  console.log(count)
   count+=5
 }


 while(count>=1){
   if(count%4==0&&count%2==0)
   console.log(count)
  count--
}
 while(count<100){
  if(count%10==0)
   console.log(count)

  //count*=10
   count++
}

var n=1;
 var count=0

 while(n<10){
  if(count==2)
  console.log(n)
  n++
 }
 var array = new Array(100);

 for (var i=2 ; i<=array.length-1; i++) {
     if((i%2===0) || (i%3===0))
         continue;
     console.log(i+",");
}
 