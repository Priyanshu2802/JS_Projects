function addelement(){
    var s=document.getElementById("todoInput").value;
    var text=document.createTextNode(s);
    console.log(text);
    var new_item=document.createElement("li");
    var text=document.createTextNode(s);
    // h2.setAttribute('id','out');
    new_item.appendChild(text);
    document.getElementById("todoList").appendChild(new_item);
}
function removediv(){
    document.getElementById('todoList').remove();
}