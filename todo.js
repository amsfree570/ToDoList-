document.getElementById("push").onclick= function(){
    const div = document.createElement("div");
    div.classList.add("task");
    const span = document.createElement("span");
    span.id="taskname"; 
    const node = document.createTextNode(document.getElementById("inputvalue").value);
    span.appendChild(node);
    div.appendChild(span);

    const element = document.getElementById("tasks");
    element.appendChild(div);
  
    const button=document.createElement("button");
    button.innerHTML="<i class="+"icon-trash"+"></i>"
    div.appendChild(button)
    button.classList.add("task")
    const tableau= document.getElementsByClassName("task")
    for(var i = 0; i < tableau.length; i++){
    tableau[i].addEventListener('click', function() {
    this.parentNode.remove();
    }
    );
    }
}