
document.addEventListener('DOMContentLoaded', () => {

        const divTop = document.createElement('div');
        divTop.style.margin = '20px 0';

        const generarBtn = document.createElement('button');
        generarBtn.textContent = 'Generar planta';
        generarBtn.style.marginRight = '10px';

        const borrarBtn = document.createElement('button');
        borrarBtn.textContent = 'Borrar fila';

        divTop.appendChild(generarBtn);
        divTop.appendChild(borrarBtn);

        // insertar botones
        const h1 = document.querySelector('h1');
        h1.parentNode.insertBefore(divTop, h1.nextSibling);

        // boton inferior
        const divBottom = document.createElement('div');
        divBottom.style.margin = '20px 0';
        // numero de filas
        const contarBtn = document.createElement('button');
        contarBtn.textContent = 'Mostrar numero de filas';

        divBottom.appendChild(contarBtn);
        document.body.appendChild(divBottom);

            //funciones de los botones
            generarBtn.addEventListener('click', () => {

                const nombre = prompt('Nombre de la planta:');
                const ubicacion = prompt('Ubicación:');
                const ejemplares = prompt('Ejemplares:');
                const flor = prompt('Flor:');

                if (nombre && ubicacion && ejemplares && flor) {

                    const tbody = document.getElementById('cuerpoTabla');
                    const tr = document.createElement('tr');

                    const td1 = document.createElement('td');
                    td1.textContent = nombre;
                    const td2 = document.createElement('td');
                    td2.textContent = ubicacion;
                    const td3 = document.createElement('td');
                    td3.textContent = ejemplares;
                    const td4 = document.createElement('td');
                    td4.textContent = flor;

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);

                    tbody.appendChild(tr);
                }
            });
        //accion para borrar
        borrarBtn.addEventListener('click', () => {
            const tbody = document.getElementById('cuerpoTabla');
            if (tbody.lastElementChild) {
                tbody.removeChild(tbody.lastElementChild);
            }
        });
        //contador
        contarBtn.addEventListener('click', () => {
            const tbody = document.getElementById('cuerpoTabla');
            const numeroFilas = tbody.children.length;
            alert('Número de filas: ' + numeroFilas);
        });
});