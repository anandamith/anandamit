
  //Switch statement
var year=2025;
var month=2;
var daycount;

switch(month){
  case 1:
  daycount=31;
  console.log("Jan");
  break;
  case 2:
  if(((year%4==0)&&(year%100!=0))||
  (year%400==0)){
  daycount=29;
  console.log("feb");
  break;
  }

  else
  {
  
    daycount=28;
    console.log("leap")
    break;
  }
  case 3:
  daycount=31;
  console.log("mar");
  break;

  case 4:
  daycount=30;
  console.log("apr");
  break;

  case 5:
  daycount=31;
  console.log("may");
  break;

  case 6:
  daycount=30;
  console.log("Jun");
  break;

  case 7:
  daycount=31;
  console.log("Jul");
  break;

  case 8:
  daycount=31;
  console.log("Aug");
  break;

  case 9:
  daycount=30;
  console.log("sep");
  break;

  case 10:
  daycount=31;
  console.log("oct");
  break;

  case 11:
  daycount=30;
  console.log("nov");
  break;

  case 12:
  daycount=31;
  console.log("Dec");
  break;
  default:
  console.log("yearend")
  



  
}

var x=90
//x=x%3

switch (x/10) {
    case 1:
        console.log('hi');
        break;
    case 2:
        console.log('hl');
        break;
    case 3:
        console.log('o');
        break;
    case 4:
        console.log("e");
        break;
    case 5:
        console.log("d");
        break;
    case 6:
        console.log("C");
       break;
     case 7:
        console.log("B");
        break;
    case 8:
        console.log("A");
        break;
    case 9:
        console.log("y");
        break;
    case 10:
        console.log("o");
        break;
    default:
      //  default_statement;
      console.log("wrong")
}

