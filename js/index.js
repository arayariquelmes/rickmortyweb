window.mostrarPersonaje = function(){
    //Obtener el personaje
    let p = this.personaje;
    let molde = document.querySelector('.modal-molde').cloneNode(true);
    molde.querySelector('.imagen-personaje-modal').src = p.image;
    molde.querySelector('.nombre-personaje-h3').innerText = p.name;
    molde.querySelector('.genero-personaje-h3').innerText = p.gender;
    let spanEstado = molde.querySelector('.estado-personaje-sp');
    let icono = document.createElement('i');
    icono.classList.add('icono-estado');
    if(p.status =='Alive'){
        icono.classList.add('fas','fa-heart', 'text-info');
    }else if(p.status == 'Dead'){
        icono.classList.add('fas', 'fa-book-dead', 'text-danger');
    } else {
        icono.classList.add('fas','fa-question', 'text-warning');
    }
    //Agregar el icono al molde
    spanEstado.appendChild(icono);
    Swal.fire({
        title: p.name,
        html: molde.innerHTML,
        confirmButtonText: "Cerrar"
    });
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