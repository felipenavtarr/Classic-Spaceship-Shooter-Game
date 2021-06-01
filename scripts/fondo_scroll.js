const ESTRELLAS_POR_PANTALLA = 25;

let rellena_de_estrellas = (elem) => {
    for(i = 0; i < ESTRELLAS_POR_PANTALLA*2; i++) {
        let pos_x = Math.random() * window.innerWidth;
        let pos_y = Math.random() * elem.offsetHeight;
        let alfa = Math.random();
    
        let star = document.createElement('div');
        star.className = 'star';
        star.style.cssText = `left: ${pos_x}px; top: ${pos_y}px; opacity: ${alfa}`;
    
        elem.append(star);
    }
}

const crear_fondo = () => {
    /* let fondo1 = document.createElement('div');
    fondo1.className = "fondo";
    fondo1.id = "fondo1";
    document.body.append(fondo1);

    let fondo2 = document.createElement('div');
    fondo2.className = "fondo";
    fondo2.id = "fondo2";
    document.body.append(fondo2);

    let fondo_inic = document.createElement('div');
    fondo_inic.className = "fondo";
    fondo_inic.id = "fondo_inic";
    document.body.append(fondo_inic); */

    for (elem of document.getElementsByClassName('fondo')) {
        rellena_de_estrellas(elem);
    }

    fondo_inic = document.getElementById('fondo_inic');
    fondo_inic.addEventListener('animationend', (ev) => {
        fondo_inic.remove();
    });

};

const iniciar_fondo = () => {
    
    for (elem of document.getElementsByClassName('fondo')) {
        elem.style.animationPlayState = "running";
    }
};

const parar_fondo = () => {
    for (elem of document.getElementsByClassName('fondo')) {
        elem.style.animationPlayState = "paused";
    }
};
