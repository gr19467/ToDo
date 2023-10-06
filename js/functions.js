var green = true;
var blue = false;
var brown = false;

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
        node.setAttribute("onmouseover", "makeTabLighter(" + i + ")");
        node.setAttribute("onmouseleave", "makeTabLightest(" + i + ")");
        node.setAttribute("id", "noteTab" + i);
        
        /*add the div to the left bar*/
        document.getElementById("leftBar").appendChild(node);

        //make sure it's the right theme
        if(green){
            greenTheme();
        }else if (blue){
            blueTheme();
        }else{
            brownTheme();
        }

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

        //make sure it's the right theme
        if(green){
            greenTheme();
        }else if (blue){
            blueTheme();
        }else{
            brownTheme();
        }
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
        node.classList.add("to-do", "flex", "justify-between");
        node.classList.add("fadeIn");
        node.setAttribute("id", "toDo" + j);
        node.setAttribute("onmouseover", "makeToDoLighter(" + j + ")");
        node.setAttribute("onmouseleave", "makeToDoLightest(" + j + ")");

        /*add the div to the note*/
        document.getElementById("note" + num).appendChild(node);

        //make sure it's the right theme
        if(green){
            greenTheme();
        }else if (blue){
            blueTheme();
        }else{
            brownTheme();
        }
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
    const dark = document.getElementsByClassName("dark");
    const light = document.getElementsByClassName("light");
    const lighter = document.getElementsByClassName("lighter");
    const lightest = document.getElementsByClassName("lightest");
    const borders = document.getElementsByTagName("div");
    const white = document.getElementsByClassName("white");

    function blueTheme(){
        green = false;
        brown = false;
        blue = true;

        for (var i = 0; i < dark.length; i++) {
            dark[i].style.backgroundColor="#2E5EAA";
        }

        for (var i = 0; i < light.length; i++) {
            light[i].style.backgroundColor="#77aafb";
        }

        for (var i = 0; i < lighter.length; i++) {
            lighter[i].style.backgroundColor="#77aafb7c";
        }

        for (var i = 0; i < lightest.length; i++) {
            lightest[i].style.backgroundColor="#77aafb47";
        }

        for (var i = 0; i < borders.length; i++) {
            borders[i].style.borderColor = "#2E5EAA";
        }

        for(var i = 0; i < white.length; i++){
            white[i].style.backgroundColor = "transparent";
        }

        document.getElementById("rightArea").style.backgroundColor = "#FFFFFF";
    }

    function greenTheme(){
        green = true;
        brown = false;
        blue = false;

        for (var i = 0; i < dark.length; i++) {
            dark[i].style.backgroundColor="#5B7553";
        }

        for (var i = 0; i < light.length; i++) {
            light[i].style.backgroundColor="#C5DCA0";
        }

        for (var i = 0; i < lighter.length; i++) {
            lighter[i].style.backgroundColor="#c5dca080";
        }

        for (var i = 0; i < lightest.length; i++) {
            lightest[i].style.backgroundColor="#c5dca040";
        }

        for (var i = 0; i < borders.length; i++) {
            borders[i].style.borderColor = "#5B7553";
        }

        for(var i = 0; i < white.length; i++){
            white[i].style.backgroundColor = "transparent";
        }

        document.getElementById("rightArea").style.backgroundColor = "#FFFFFF";
    }

    function brownTheme(){
        green = false;
        brown = true;
        blue = false;

        for (var i = 0; i < dark.length; i++) {
            dark[i].style.backgroundColor="#453F38";
        }

        for (var i = 0; i < light.length; i++) {
            light[i].style.backgroundColor="#82796E";
        }

        for (var i = 0; i < lighter.length; i++) {
            lighter[i].style.backgroundColor="#82796e75";
        }

        for (var i = 0; i < lightest.length; i++) {
            lightest[i].style.backgroundColor="#82796e32";
        }

        for (var i = 0; i < borders.length; i++) {
            borders[i].style.borderColor = "#453F38";
        }

        for(var i = 0; i < white.length; i++){
            white[i].style.backgroundColor = "transparent";
        }

        document.getElementById("rightArea").style.backgroundColor = "#453f3871";
    }

    function makeTabLighter(num){
        elmnt = document.getElementById("noteTab" + num);

        if(green){
            elmnt.classList.add("lighter");
            elmnt.classList.remove("white");
            greenTheme();
        }else if(blue){
            elmnt.classList.add("lighter");
            elmnt.classList.remove("white");
            blueTheme();
        }else{
            elmnt.classList.add("lighter");
            elmnt.classList.remove("white");
            brownTheme();
        }
    }

    function makeTabLightest(num){
        elmnt = document.getElementById("noteTab" + num);

        if(green){
            elmnt.classList.add("white");
            elmnt.classList.remove("lighter");
            greenTheme();
        }else if(blue){
            elmnt.classList.add("white");
            elmnt.classList.remove("lighter");
            blueTheme();
        }else{
            elmnt.classList.add("white");
            elmnt.classList.remove("lighter");
            brownTheme();
        }
    }

    function makeToDoLighter(num){
        elmnt = document.getElementById("toDo" + num);

        if(green){
            elmnt.classList.add("lightest");
            elmnt.classList.remove("white");
            elmnt.classList.remove("lighter");
            greenTheme();
        }else if(blue){
            elmnt.classList.add("lightest");
            elmnt.classList.remove("white");
            elmnt.classList.remove("lighter");
            blueTheme();
        }else{
            elmnt.classList.add("lighter");
            elmnt.classList.remove("white");
            elmnt.classList.remove("lightest");
            brownTheme();
        }
    }

    function makeToDoLightest(num){
        elmnt = document.getElementById("toDo" + num);

        if(green){
            elmnt.classList.add("white");
            elmnt.classList.remove("lightest");
            elmnt.classList.remove("lighter");
            greenTheme();
        }else if(blue){
            elmnt.classList.add("white");
            elmnt.classList.remove("lightest");
            elmnt.classList.remove("lighter");
            blueTheme();
        }else{
            elmnt.classList.add("white");
            elmnt.classList.remove("lightest");
            elmnt.classList.remove("lighter");
            brownTheme();
        }
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

//local storage
function save(){
    //clear anything already in localstorage
    window.localStorage.clear();

    //store i and j
    localStorage.setItem("iValue", JSON.stringify(i));
    localStorage.setItem("jValue", JSON.stringify(j));

    //store the noteTabs
    const noteTabs = document.getElementsByClassName("noteTab");
    for (let k = 0; k < noteTabs.length; k++) {
        let noteTab = noteTabs[k];
        
        //save the note tab's text content
        localStorage.setItem(noteTab.id + "text", noteTab.textContent);
    }

    //store the notes
    const notes = document.getElementsByClassName("note");
    //for each note we have
    for (let k = 0; k < notes.length; k++) {
        let note = notes[k];

        const toDos = note.getElementsByClassName("to-do");
        
        //save the number of to-dos in this note
        localStorage.setItem("note" + (k+1) + "toDos", JSON.stringify(toDos.length));
        console.log("note" + (k+1) + " has " + toDos.length + " to dos");

        //for each to-do in this note
        for (let k = 0; k < toDos.length; k++) {
            const toDo = toDos[k];

            //save the to-do's text content
            localStorage.setItem(toDo.id + "text", toDo.textContent);

            //save the to-do's id
            localStorage.setItem(toDo.id + "id", toDo.id);
            console.log(toDo.id + " : " + toDo.textContent);
        }
    }

    //save the current theme
    if(green){
        localStorage.setItem("theme", "greenTheme()");
    }else if(blue){
        localStorage.setItem("theme", "blueTheme()");
    }else{
        localStorage.setItem("theme", "brownTheme()");
    }

    //flash the save button green
    saveButton = document.getElementById("save");
    saveButton.classList.remove("fadeIn");
    saveButton.classList.add("fadeOut");
    
    function temp(){
        saveButton.classList.remove("fadeOut");
        saveButton.classList.add("fadeIn");
    }
    
    setTimeout(temp, 500);
}

function sync(){
    console.log("syncing");
    console.log("synced with storage at " + localStorage.length + " items");

    

    //if i and j have a value
    if(localStorage.getItem("iValue") > 0 || localStorage.getItem("jValue") > 0 ){
        //get i and j
        i = parseInt(localStorage.getItem("iValue"));
        console.log("i = " + i);
        j = localStorage.getItem("jValue");
        console.log("j = " + j);
    }

    let l = 1;

    //get the noteTabs
    for (let k = 1; k <= i; k++) {
        tabTitle = localStorage.getItem("noteTab" + k + "text");
        tabId = "noteTab" + k;
        noteTabHTML(tabTitle, tabId);
        console.log(tabTitle);
        console.log(tabId);
        
        var toDoTitles = new Array();
        var toDoIds = new Array();

        //get this note's number of to-dos
        let toDoNum = localStorage.getItem("note" + k + "toDos");
        console.log("Note" + k + " has " + toDoNum + " to-dos");

        //make the arrays with all the to-dos for the note
        for (let m = 0; m < toDoNum; m++) {
            if(l <= j){
                let toDoTitle = localStorage.getItem("toDo" + l + "text");
                let toDoId = localStorage.getItem("toDo" + l + "id");
                toDoTitles[m] = toDoTitle;
                toDoIds[m] = toDoId;
                l++;
            }
        }
        noteHTML(tabTitle, "note" + k, toDoTitles, toDoIds);
        console.log(toDoTitles);
        console.log(toDoIds);
    }

    //get the theme
    theme = localStorage.getItem("theme");
    if(theme === "greenTheme()"){
        greenTheme();
    }else if(theme === "blueTheme()"){
        blueTheme();
    }else{
        brownTheme();
    }
}

function noteTabHTML(tabTitle, id){
    let num = id.charAt(id.length - 1);

    /*create the new div*/
    const tabDiv = document.createElement("div");

    /*create the note title div*/
    const titleDiv = document.createElement("div");
        const textnode = document.createElement("h1");
        textnode.textContent = tabTitle;
        textnode.setAttribute("contenteditable", "true");
        textnode.setAttribute("oninput", "changeTitle(" + num + ")");

        const openNote = document.createElement("img");
        openNote.setAttribute("src", "./Images/open.png");
        openNote.setAttribute("onclick", "openNote(" + num + ")");
        openNote.classList.add("self-center");

        titleDiv.appendChild(openNote);
        titleDiv.appendChild(textnode);

        titleDiv.classList.add("flex");

    /*create the trash image and add its classes/attributes*/
    const trash = document.createElement("img");
    trash.setAttribute("src", "./Images/trash.png");
    trash.setAttribute("onclick", "deleteNote(" + num + ")")
    trash.classList.add("self-center");
    
    /*add the title and image*/
    tabDiv.appendChild(titleDiv);
    tabDiv.appendChild(trash);

    /*add the note's classes/attributes*/
    tabDiv.classList.add("noteTab", "flex", "justify-between");
    tabDiv.classList.add("fadeIn");
    tabDiv.setAttribute("onmouseover", "makeTabLighter(" + num + ")");
    tabDiv.setAttribute("onmouseleave", "makeTabLightest(" + num + ")");
    tabDiv.setAttribute("id", id);
    
    /*add the div to the left bar*/
    document.getElementById("leftBar").appendChild(tabDiv);

    //make sure it's the right theme
    if(green){
        greenTheme();
    }else if (blue){
        blueTheme();
    }else{
        brownTheme();
    }
}

function noteHTML(title, id, toDoTitles, toDoIds){
    let num = id.charAt(id.length - 1);

    /*create the new note div*/
    const note = document.createElement("div");

    /*create the title div*/
    const titleDiv = document.createElement("div")

        /*create the note title*/
        const textnode = document.createElement("h1");
        textnode.textContent = title;
        textnode.setAttribute("id", "title" + num);

        /*create the buttons div*/
        const buttons = document.createElement("div");

        /*add the buttons attributes/classes*/
        buttons.classList.add("buttons", "flex", "justify-between");

            /*create the add image and add its classes/attributes*/
            const add = document.createElement("img");
            add.setAttribute("src", "./Images/add.png");
            add.setAttribute("onclick", "newToDo(" + num + ")")
                add.classList.add("self-center");

            /*create the close image and add its classes/attributes*/
            const close = document.createElement("img");
            close.setAttribute("src", "./Images/close.png");
            close.setAttribute("onclick", "closeNote(" + num + ")")
            close.classList.add("self-center");

            /*add the images to the buttons div*/
            buttons.appendChild(add);
            buttons.appendChild(close);
                    
        /*add the title and buttons*/
        titleDiv.appendChild(textnode);
        titleDiv.appendChild(buttons);

    /*add the title div's attributes/classes*/
    titleDiv.classList.add("noteTitle", "light", "flex", "justify-between");
    titleDiv.setAttribute("id", "note" + num + "header");

    /*create the footer*/
    const footer = document.createElement("div");

        /*create the text for the footer*/
        const clear = document.createElement("h1");
        clear.textContent = "Clear all completed";
        clear.classList.add("self-center");

        /*add the image*/
        const clearButton = document.createElement("img");
        clearButton.setAttribute("src", "./Images/clear.png");
        clearButton.setAttribute("onclick", "clearCompleted(" + num + ")");
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
    note.setAttribute("id", id);
    console.log("note's id is " + id);
    note.setAttribute("onmouseover", "dragElement(note" + num + ")");

    /*add the div to the right area*/
    document.getElementById("rightArea").appendChild(note);

    //add the note's to-dos
    for (let k = 0; k < toDoTitles.length; k++) {
        toDoHTML(toDoTitles[k], toDoIds[k], id);
    }

    //make sure it's the right theme
    if(green){
        greenTheme();
    }else if (blue){
        blueTheme();
    }else{
        brownTheme();
    }
}

function toDoHTML(title, id, note){
    let num = id.charAt(id.length - 1);

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
    textnode.textContent = title;
    textnode.setAttribute("contenteditable", "true");
    textnode.setAttribute("onclick", "this.focus()");

    /*add them to the div*/
    titleDiv.appendChild(check);
    titleDiv.appendChild(textnode);
    titleDiv.classList.add("flex");
        
    /*create the trash image and add its classes/attributes*/
    const trash = document.createElement("img");
    trash.setAttribute("src", "./Images/trash.png");
    trash.setAttribute("onclick", "deleteToDo(" + num + ")")
    trash.classList.add("self-center");
                
    /*add the title div & trash*/
    node.appendChild(titleDiv);
    node.appendChild(trash);
        
    /*add the to-do's classes/attributes*/
    node.classList.add("to-do", "flex", "justify-between");
    node.classList.add("fadeIn");
    node.setAttribute("id", "toDo" + num);
    node.setAttribute("onmouseover", "makeToDoLighter(" + num + ")");
    node.setAttribute("onmouseleave", "makeToDoLightest(" + num + ")");

    /*add the div to the note*/
    document.getElementById(note).appendChild(node);

    //make sure it's the right theme
    if(green){
        greenTheme();
    }else if (blue){
        blueTheme();
    }else{
        brownTheme();
    }
}