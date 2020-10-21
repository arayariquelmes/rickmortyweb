window.mostrarPersonaje = function(){
    //Obtener el personaje
    let p = this.personaje;
    console.log(p);
    //TODO: 1.Crear un Sweet Alert
    //TODO: 2. Agregar el personaje a ese SweetAlert
    //TODO: 3. Agregar iconos diferentes para cuando esta vivo, muerto o desaparecido
};
window.mostrar = (datos)=>{
    const contenidoDiv = document.querySelector("#contenido");
    let molde = document.querySelector('.card-molde');
    for(let i=0; i < datos.length; ++i){
        let personaje = datos[i];
        let div = molde.cloneNode(true);
        div.querySelector('.nombre-personaje').innerText = personaje.name;
        div.querySelector(".imagen-personaje").src = personaje.image;
        div.querySelector('.btn-detalle-personaje').personaje = personaje;
        div.querySelector('.btn-detalle-personaje')
            .addEventListener('click',window.mostrarPersonaje);
        contenidoDiv.appendChild(div);
    }
    
};
window.addEventListener('DOMContentLoaded', async ()=>{ //Se ejecuta cuando se carga la página
    //Todo lo que ponga aca dentro se va a ejecutar cuando la pagina este totalmente cargada.
    //Espera la resolución de esta promesa
    let resultado = await axios.get('https://rickandmortyapi.com/api/character/');
    window.mostrar(resultado.data.results);
    
});