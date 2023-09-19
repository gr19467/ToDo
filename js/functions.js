var i = 0;

function newNote(){
    i++;

    const node = document.createElement("div");

    const textnode = document.createTextNode("New Note");

    const trash = document.createElement("img");
    trash.setAttribute("src", "/images/trash.png");
    trash.setAttribute("onclick", "deleteNote(" + i + ")")
    trash.classList.add("self-center");
    
    node.appendChild(textnode);
    node.appendChild(trash);

    node.classList.add("noteTab", "flex", "justify-between")
    node.setAttribute("id", "note" + i);
    
    document.getElementById("leftBar").appendChild(node);
}

function deleteNote(num){
    document.getElementById("note" + num).remove();
}