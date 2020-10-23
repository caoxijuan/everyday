// 3. 假设某人有100,000现金。每经过一次路口需要进行一次交费。交费规则为当他现金大于50,000时每次需要交5%如果现金小于等于50,000时每次交5,000。请写一程序计算此人可以经过多少次这个路口
//声明变量计算过路口的次数
var count=0
//声明变量表示总钱数
var money=100000
//while循环，如果钱不够五万就跳出循环
while(money>=50000){
    //判断钱数是否大于5万
    if(money>50000){
        //如果大于5万就减去钱数的5%
        money=money-money*0.05
        //累加过路口的次数
        count++
    }
    //判断钱数是否小于5万
    if(money<=50000){
        //如果小于5万就减去5000
        money=money-5000
        //累加过路口的次数
        count++
    }    
}
//输出
console.log(count)
