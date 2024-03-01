var company = new Object();
company.name="Facebook";
company.ceo=new Object;
company.ceo.firstName="Mark";
company.ceo.favColor="red";


console.log(company);

console.log("compabny ceo firstname is : "+company.ceo.firstName);

console.log(company["name"]);
company["stock of company"]=110
console.log("stock price is "+company["stock of company"]);

var stockPropName="stock of Company"
company[stockPropName]=120
console.log("stock price is "+company["stock of Company"]);

console.log(company);

//better way: object litetal
// "," should be add at the end

var facebook={
    name:"Facebook",
    ceo:{
        firstName:"Mark",
        favCOlor:"red"
    },
    "stock of company":110
};
console.log(facebook);