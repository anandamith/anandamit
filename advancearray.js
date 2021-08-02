//Advanced arrays

// if we want to multiply every single number in the array

const array=[22,65,78,45]

const double=[]

const newArray=array.forEach((num)=>{
	double.push(num*2)

})
console.log(double);


//mapThe map() method in JavaScript creates an array by calling a specific function on each element present in the parent array. It is a non-mutating method. Generally map() method is used to iterate over an array and calling function on every element of array
const mapArray=array.map((num)=>{
	return num*2;
});
// if you want to wconst mapArray=array.map((num=>num*2)rite in short when we have single parameter.
const mapArray=array.map(num=>num*2);

console.log(mapArray);



//filter

// we can filter our array with a condition 
 const filterArray=array.filter(num=> num>50);

 console.log('filter'.filterArray);

 //reduce   ( The reduce() method executes a reducer function for each value of an array. )
    const reduceArray=array.reduce((accumulator,num)=>{
    	//accumulator is something where we can store the information that happens in the body of the function.
      return accumulator+num

    },0)
    console.log('reduce',reduceArray);