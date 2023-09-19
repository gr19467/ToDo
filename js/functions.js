
/*New*/
    /*creates a new noteTab*/
    var i = 0;

    function newNote(){
        /*increment i*/
        i++;

        /*create the new div*/
        const node = document.createElement("div");

        /*create the note title*/
        const textnode = document.createTextNode("New Note");

        /*create the trash image and add its classes/attributes*/
        const trash = document.createElement("img");
        trash.setAttribute("src", "/images/trash.png");
        trash.setAttribute("onclick", "deleteNote(" + i + ")")
        trash.classList.add("self-center");
        
        /*add the title and image*/
        node.appendChild(textnode);
        node.appendChild(trash);

        /*add the note's classes/attributes*/
        node.classList.add("noteTab", "flex", "justify-between")
        node.setAttribute("id", "noteTab" + i);
        
        /*add the div to the left bar*/
        document.getElementById("leftBar").appendChild(node);
    }

    /*creates a new toDo*/
    function newToDo(){
        
    }

/*Delete/Close*/
    /*deletes a note*/
    function deleteNote(num){
        /*remove the note tab from the left bar*/
        document.getElementById("noteTab" + num).remove();

        /*hide the note if it was open*/
        document.getElementById("note" + num).hidden() = true;
    }

    /*hides a note*/
    function closeNote(num){
        document.getElementById("note" + num).hidden() = true;
    }

    /*deletes to-do*/
    function deleteToDo(num){
        document.getElementById("toDo" + num).remove();
    }