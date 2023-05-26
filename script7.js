//Q.5 Print the country which uses US Dollars as currency.
var request=new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var res=result.reduce((acc,cv)=>acc+cv.dollars,0);
    console.log(res);
}