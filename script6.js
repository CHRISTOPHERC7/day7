//Q.4 Print the total population of countries using reduce function
var request=new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
    var res=result.reduce((acc,cv)=>acc+cv.population,0);
    console.log(res);
}