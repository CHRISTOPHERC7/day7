  //Q.1 Get all the countries from the Asia continent /region using the Filter function
var request=new XMLHttpRequest();
request.open ("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result);
  var res =result.filter((ele)=>ele.region==="Asia")
  console.log(res);

}