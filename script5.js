//Q.3 Print the following details name, capital, flag using forEach function
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var res=result.filter((ele)=>ele.name,(ele).capitals,(ele).flag);
       
    result.forEach((ele)=>console.log(ele));
 }  