const allPostHeader = document.getElementById("post").children;
let tableOfContent="";
for(let i=0; i<allPostHeader.length; i++){
    if(allPostHeader[i].tagName == "H1" || allPostHeader[i].tagName == "H2" || allPostHeader[i].tagName == "H3" || allPostHeader[i].tagName == "H4"){
        allPostHeader[i].id = "post-header"+i;
        tableOfContent += '<li><a href="#post-header'+i+'">'+allPostHeader[i].innerHTML+'</a></li>';
    }
}
console.log(allPostHeader)
document.getElementById("tableOfContentContainer").innerHTML = tableOfContent;