/*New*/
    /*creates a new noteTab*/
    var i = 0;

    function newNoteTab(){
        /*increment i*/
        i++;

        /*create the new div*/
        const node = document.createElement("div");

        /*create the note title div*/
        const titleDiv = document.createElement("div");
            const textnode = document.createElement("h1");
            textnode.textContent = "New Note";
            textnode.setAttribute("contenteditable", "true");
            textnode.setAttribute("oninput", "changeTitle(" + i + ")");

            const openNote = document.createElement("img");
            openNote.setAttribute("src", "./Images/open.png");
            openNote.setAttribute("onclick", "openNote(" + i + ")");
            openNote.classList.add("self-center");

            titleDiv.appendChild(openNote);
            titleDiv.appendChild(textnode);

            titleDiv.classList.add("flex");

        /*create the trash image and add its classes/attributes*/
        const trash = document.createElement("img");
        trash.setAttribute("src", "./Images/trash.png");
        trash.setAttribute("onclick", "deleteNote(" + i + ")")
        trash.classList.add("self-center");
        
        /*add the title and image*/
        node.appendChild(titleDiv);
        node.appendChild(trash);

        /*add the note's classes/attributes*/
        node.classList.add("noteTab", "flex", "justify-between");
        node.classList.add("fadeIn");
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
            const textnode = document.createElement("h1");
            textnode.textContent = "New Note";
            textnode.setAttribute("id", "title" + i);

            /*create the buttons div*/
            const buttons = document.createElement("div");

            /*add the buttons attributes/classes*/
            buttons.classList.add("buttons", "flex", "justify-between");

                /*create the add image and add its classes/attributes*/
                const add = document.createElement("img");
                add.setAttribute("src", "./Images/add.png");
                add.setAttribute("onclick", "newToDo(" + i + ")")
                add.classList.add("self-center");

                /*create the close image and add its classes/attributes*/
                const close = document.createElement("img");
                close.setAttribute("src", "./Images/close.png");
                close.setAttribute("onclick", "closeNote(" + i + ")")
                close.classList.add("self-center");

                /*add the images to the buttons div*/
                buttons.appendChild(add);
                buttons.appendChild(close);
                    
            /*add the title and buttons*/
            titleDiv.appendChild(textnode);
            titleDiv.appendChild(buttons);

        /*add the title div's attributes/classes*/
        titleDiv.classList.add("noteTitle", "light", "flex", "justify-between");
        titleDiv.setAttribute("id", "note" + i + "header");

        /*create the footer*/
        const footer = document.createElement("div");

            /*create the text for the footer*/
            const clear = document.createElement("h1");
            clear.textContent = "Clear all completed";
            clear.classList.add("self-center");

            /*add the image*/
            const clearButton = document.createElement("img");
            clearButton.setAttribute("src", "./Images/clear.png");
            clearButton.setAttribute("onclick", "clearCompleted(" + i + ")");
            clearButton.classList.add("self-center");

            /*add the elements to the div*/
            footer.appendChild(clear);
            footer.appendChild(clearButton);

            /*add the footer's classes/attributes*/
            footer.classList.add("footer", "light", "flex", "justify-between");

        /*add the divs to the note*/
        note.appendChild(titleDiv);
        note.appendChild(footer);
        
        /*add the note's classes/attributes*/
        note.classList.add("note");
        note.classList.add("fadeIn");
        note.setAttribute("id", "note" + i);
        note.setAttribute("onmouseover", "dragElement(note" + i + ")");
                
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
        check.classList.add("box" + num);
        
        /*create the to-do title*/
        const textnode = document.createElement("h1");
        textnode.textContent = "New to-do";
        textnode.setAttribute("contenteditable", "true");
        textnode.setAttribute("onclick", "this.focus()");

        /*add them to the div*/
        titleDiv.appendChild(check);
        titleDiv.appendChild(textnode);
        titleDiv.classList.add("flex");
        
        /*create the trash image and add its classes/attributes*/
        const trash = document.createElement("img");
        trash.setAttribute("src", "./Images/trash.png");
        trash.setAttribute("onclick", "deleteToDo(" + j + ")")
        trash.classList.add("self-center");
                
        /*add the title div & trash*/
        node.appendChild(titleDiv);
        node.appendChild(trash);
        
        /*add the to-do's classes/attributes*/
        node.classList.add("to-do", "flex", "justify-between")
        node.classList.add("fadeIn");
        node.setAttribute("id", "toDo" + j);
        node.setAttribute("draggable", "true");

        /*add the div to the note*/
        document.getElementById("note" + num).appendChild(node);
    }

/*Open/Delete/Close*/
    /*opens the note*/
    function openNote(num){
        document.getElementById("note" + num).classList.remove("fadeOut");

        note.classList.add("fadeIn");

        function temp(){
            document.getElementById("note" + num).style.display = "block";
        }
        
        setTimeout(temp, 500);
    }

    /*deletes a note*/
    function deleteNote(num){
        noteTab = document.getElementById("noteTab" + num);
        note = document.getElementById("note" + num);

        noteTab.classList.remove("fadeIn");
        note.classList.remove("fadeIn");

        noteTab.classList.add("fadeOut");
        note.classList.add("fadeOut");

        function temp(){
            /*remove the note tab from the left bar*/
            noteTab.remove();

            /*remove the note*/
            note.remove();
        }

        setTimeout(temp, 500);
    }

    /*hides a note*/
    function closeNote(num){
        note = document.getElementById("note" + num);

        note.classList.remove("fadeIn");

        note.classList.add("fadeOut");

        function temp(){
            note.style.display = "none";
        }

        setTimeout(temp, 500);
    }

    /*deletes to-do*/
    function deleteToDo(num){
        document.getElementById("toDo" + num).classList.add("fadeOut");

        function temp(){
            document.getElementById("toDo" + num).remove();
        }

        setTimeout(temp, 500);
    }

    /*clears all completed to-dos*/
    function clearCompleted(num){
        // Pass the checkbox name to the function
        function getCheckedBoxes() {
            var checkboxes = document.getElementsByClassName("box" + num);
            var checkboxesChecked = [];
            // loop over them all
            for (var i=0; i<checkboxes.length; i++) {
                // And stick the checked ones onto an array...
                if (checkboxes[i].checked) {
                    checkboxesChecked.push(checkboxes[i]);
                }
            }
            // Return the array if it is non-empty, or null
            return checkboxesChecked.length > 0 ? checkboxesChecked : null;
        }
  
        // Call as
        var checkedBoxes = getCheckedBoxes("mycheckboxes");
        checkedBoxes.forEach(box =>{

            box.parentElement.parentElement.classList.add("fadeOut");

            function temp(){
                box.parentElement.parentElement.remove();
            }
            
            setTimeout(temp, 500);
        });
    }

/*changes note title upon input*/
function changeTitle(num){
    var newTitle = document.getElementById("noteTab" + num).textContent;
    document.getElementById("title" + num).textContent = newTitle;
}

/*note moving*/
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        //elmnt.onmousedown = dragMouseDown;
    
        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

//change theme
    const dark = document.querySelectorAll(".dark");
    const light = document.getElementsByClassName("light");
    const lighter = document.getElementsByClassName("lighter");
    const lightest = document.getElementsByClassName("lightest");

    function blueTheme(){
        dark.forEach(element => {
            element.style.backgroundColor = "#2E5EAA";
        });
    }

//dropdown
function dropdown(){
    const settings = document.getElementById('settings');

    if(settings.style.display === "none"){
        settings.style.display = "block";
    }else{
        settings.style.display = "none";
    }
}