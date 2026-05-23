const accountID = 12234
// let is good
let accountMail = "xako8804@gmail.com"
// var is like global one,  can be changed anytime and dont use it
var accountPassword = " 12345"
accountCity = "Jaipur"
console.log(accountCity);
accountCity = "nagar"
console.log(accountCity);
console.log(3+3);
let sahil= String(accountID);
console.log(sahil);
let Darshu= Number(accountMail);
console.log(Darshu);
// NAN  ->"33abc" conversion = NAN
console.log("3"+4/4);
const dd= new Date();
console.log(dd.getDay());
let sum=0;
for(i=0;i<=5;i++){
    sum+=i;
}
console.log(sum);

let teaCollection = [];
let tea;

do {
    tea = prompt('Enter your favourite tea (type "stop" to finish)');

    if (tea !== "stop") {
        teaCollection.push(tea);
    }

} while (tea !== "stop");

console.log(teaCollection);




