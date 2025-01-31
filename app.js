// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 let amigo=[];

 function agregarAmigo() {
    elementoHTML=document.getElementById("amigo").value;
        
    if (elementoHTML === "") {
        alert("Input cannot be empty!");
        return;
    }
        let list = document.getElementById("listaAmigos");
        let listItem = document.createElement("li");
        listItem.textContent = elementoHTML;
        list.appendChild(listItem);
       console.log(list);
    siguienteNombre();

 }


function siguienteNombre(){
    let siguienteAmigo=document.getElementById("amigo");
    siguienteAmigo.value="";
}

function sortearAmigo(){
    let list = document.getElementById("listaAmigos");
            let items = list.getElementsByTagName("li");
            if (items.length === 0) {
                alert("The list is empty!");
                return;
            }
            let randomIndex = Math.floor(Math.random() * items.length);
            alert("Random Pick: " + items[randomIndex].textContent);
}