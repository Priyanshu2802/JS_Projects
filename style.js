function addelement(){
    var s=prompt("WRITE THE TASK!!");
    //console.log(s);
    var h2=document.createElement('h4');
    var text=document.createTextNode(s);
    h2.setAttribute('id','out');
    h2.appendChild(text);
    document.getElementById('output').appendChild(h2);
}
function removediv(){
    document.getElementById('out').remove();
}