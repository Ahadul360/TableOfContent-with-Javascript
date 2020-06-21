const allPostHeader = document.getElementById("post").children;
let tableOfContent="";
for(let i=0; i<allPostHeader.length; i++){
    if(allPostHeader[i].className == "post-header"){
        allPostHeader[i].id = "post-header"+i;
        tableOfContent += '<li><a href="#post-header'+i+'">'+allPostHeader[i].innerHTML+'</a></li>';
    }
}
document.getElementById("tableOfContentContainer").innerHTML = tableOfContent;