

document.addEventListener('DOMContentLoaded', () => {

    // Contenedor de img
    const container = document.getElementById('personajes');

    // Botones para las opciones
    const divTop = document.createElement('div');
    divTop.style.margin = '20px 0';

    const generarBtn = document.createElement('button');
    generarBtn.textContent = 'Generar personaje';
    generarBtn.style.marginRight = '10px';

    const borrarBtn = document.createElement('button');
    borrarBtn.textContent = 'Borrar personaje';

    divTop.appendChild(generarBtn);
    divTop.appendChild(borrarBtn);

    
    const h1 = document.querySelector('h1');
    h1.parentNode.insertBefore(divTop, h1.nextSibling);


    const divBottom = document.createElement('div');
    divBottom.style.margin = '30px 0';

    //obtener los personajes, con sus fotos, y guardarlos en el array
    const personajes = [
        {nombre: 'Sanji', archivo: 'sanji.png'},
        {nombre: 'Zoro', archivo: 'zoro.png'},
        {nombre: 'Nami', archivo: 'nami.png'},
        {nombre: 'Luffy', archivo: 'luffy.png'}
    ];

    personajes.forEach(p => {
        const btn = document.createElement('button');
        btn.textContent = 'Nº ' + p.nombre;
        btn.style.margin = '0 10px';
        btn.addEventListener('click', () => {
            const count = document.querySelectorAll('#personajes img[alt="' + p.nombre + '"]').length;
            alert('Número de ' + p.nombre + ': ' + count);
        });
        divBottom.appendChild(btn);
    });

    document.body.appendChild(divBottom);

    // generar personaje, en base a las opciones disponibles
    generarBtn.addEventListener('click', () => {
        const opcion = prompt('Elija el nombre del personaje: 1. Sanji, 2. Zoro, 3. Nami, 4. Luffy.');

        let archivo = '';
        let alt = '';

        switch (opcion) {
            case '1':
                archivo = 'sanji.png';
                alt = 'Sanji';
                break;
            case '2':
                archivo = 'zoro.png';
                alt = 'Zoro';
                break;
            case '3':
                archivo = 'nami.png';
                alt = 'Nami';
                break;
            case '4':
                archivo = 'luffy.png';
                alt = 'Luffy';
                break;
            default:
                return;
        }

        const img = document.createElement('img');
        img.src = 'img/' + archivo;
        img.alt = alt;
        img.className = 'imgPersonaje';

        container.appendChild(img);
    });

    //borrado de uttima img
    borrarBtn.addEventListener('click', () => {
        if (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
    });
});