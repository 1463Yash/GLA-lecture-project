let arr=[1,2,3,8,4,5,6,7];
let i=0;
for( i=0;i<arr.length;i++){
    console.log(arr[i]);
}
let are={
    name:"Yash",
    age:23,

}
console.log("  ")
for(const item in are){
    console.log(are[item]);
}
const complexobj={
    memship:{
        name:"Mega",
        price:"2000",
        device:{
            devicename:"Iphone 15",
            ipaddress:"192.168.1.1"
        }
    }
}