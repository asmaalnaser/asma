for (var o=2;o<=10;o++)
{
    console.log(o)

}
console.log(" ___ ___ ___")
for(var a=10;a>0;a--)
{
    console.log(a)
}


console.log( "___ ___ ___")
for(var s=4;s>=-16;s--){
console.log(s)
}
console.log("__ ___ __")
for(var h=8;h<=41;h+=5){
    console.log(h)
}

console.log("___ ___ ___")

//the classic Fizzbuzz progrm
console.log("__________ Fizzbuzz progrm _________")
for (var m=1;m<=100;m++){
    if (m%3==0 && m%5==0){

        console.log("fizzbuzz");}
        else if(m%3==0){
            console.log("Fizz");}
   else if(m%5==0){
          console.log("Bizz");
        }
    }

    //the even/odd reporter
    for(var u =0; u <=20; u++){
        if (u % 2 ==0){
            console.log(u +"even");
        }
        else{
            console.log(u +"odd");
        };;
    }

    //Nested for loop 
    for(let i=1 ; i<=5; i++){
        for(let k=1; k<=10;k++)
        console.log(i+ '*' + k + +'=' + i*k);
    }


    let gg =prompt("factorial")

    let fact =1;
    for (yy = 1; yy <= gg; yy++)
    {
        fast = fact * yy;
    }
    console.log("factorial "+ gg+"***" + fact);

let rt=1;
let unmber = prompt("Enter the number" );

while(rt<=unmber){
    if(yy%2!=0)
    console.log(rt);
    rt++;
}


for (let po =1; po <= 5; po++){
    for (let qw =1; qw <=10; qw++){
        console.log(po + "*" + qw + "=" + po *qw)
    }
}

let om=0;
let gh=1;
let f;
for(let ne=1;ne<=20;ne++){
    console.log(om)
    f=om+ne;
    om=gh;
    gh=f;
}