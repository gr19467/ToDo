
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
    var j = 0;

    function newToDo(num){
                /*increment k*/
                k++;

                /*create the new to-do div*/
                const node = document.createElement("div");

                /*create the first new div: checkbox & title*/
                const titleDiv = document.createElement("div");

                /*create the checkbox*/
        
                /*create the to-do title*/
                const textnode = document.createTextNode("New to-do");

                /*add them to the div*/
        
                /*create the trash image and add its classes/attributes*/
                const trash = document.createElement("img");
                trash.setAttribute("src", "/images/trash.png");
                trash.setAttribute("onclick", "deleteToDo(" + k + ")")
                trash.classList.add("self-center");
                
                /*add the title div & trash*/
                node.appendChild(titleDiv);
                node.appendChild(trash);
        
                /*add the to-do's classes/attributes*/
                node.classList.add("to-do", "flex", "justify-between")
                node.setAttribute("id", "toDo" + k);
                
                /*add the div to the note*/
                document.getElementById("note" + num).appendChild(node);
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