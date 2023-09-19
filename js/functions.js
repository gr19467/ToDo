
/*New*/
    /*creates a new noteTab*/
    var i = 0;

    function newNoteTab(){
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

        /*create a new note to go with it*/
        newNote();
    }

    /*creates a new note*/
    function newNote(){
        /*create the new note div*/
        const note = document.createElement("div");

        /*create the title div*/
        const titleDiv = document.createElement("div")

            /*create the note title*/
            const textnode = document.createTextNode("New Note");

            /*create the buttons div*/
            const buttons = document.createElement("div");

            /*add the buttons attributes/classes*/
            buttons.classList.add("buttons", "flex", "justify-between");

                /*create the add image and add its classes/attributes*/
                const add = document.createElement("img");
                add.setAttribute("src", "/images/add.png");
                add.setAttribute("onclick", "newToDo(" + i + ")")
                add.classList.add("self-center");

                /*create the close image and add its classes/attributes*/
                const close = document.createElement("img");
                close.setAttribute("src", "/images/close.png");
                close.setAttribute("onclick", "closeNote(" + i + ")")
                close.classList.add("self-center");

                /*add the images to the buttons div*/
                buttons.appendChild(add);
                buttons.appendChild(close);
                    
            /*add the title and buttons*/
            titleDiv.appendChild(textnode);
            titleDiv.appendChild(buttons);

        /*add the title div's attributes/classes*/
        titleDiv.classList.add("noteTitle", "flex", "justify-between");    

        /*add the div to the note*/
        note.appendChild(titleDiv);
        
        /*add the note's classes/attributes*/
        note.classList.add("note");
        note.setAttribute("id", "note" + i);
                
        /*add the div to the right area*/
        document.getElementById("rightArea").appendChild(note);
    }

    /*creates a new toDo*/
    var j = 0;

    function newToDo(num){
        /*increment j*/
        j++;

        /*create the new to-do div*/
        const node = document.createElement("div");

        /*create the first new div: checkbox & title*/
        const titleDiv = document.createElement("div");

        /*create the checkbox*/
        const check = document.createElement("input");

        /*add the checkbox's attributes*/
        check.setAttribute("type", "checkbox");
        
        /*create the to-do title*/
        const textnode = document.createTextNode("New to-do");

        /*add them to the div*/
        titleDiv.appendChild(textNode);
        titleDiv.appendChild(check);
        
        /*create the trash image and add its classes/attributes*/
        const trash = document.createElement("img");
        trash.setAttribute("src", "/images/trash.png");
        trash.setAttribute("onclick", "deleteToDo(" + j + ")")
        trash.classList.add("self-center");
                
        /*add the title div & trash*/
        node.appendChild(titleDiv);
        node.appendChild(trash);
        
        /*add the to-do's classes/attributes*/
        node.classList.add("to-do", "flex", "justify-between")
        node.setAttribute("id", "toDo" + j);
                
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