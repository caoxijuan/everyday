//5、求300到400所有不能被3整除的整数的第一个大于2000的和。
var sum=0
for(var i=300;i<=400;i++){
if(i%3!=0){
    sum+=i
    if(sum>2000){
        console.log(sum)
        break
    }
}
}