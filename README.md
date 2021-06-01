<img  align="left" height="50" style="float: left;" src="./assets/images/logos/solotexto.png">
<img  align="right" height="50" style="float: right;" src="./assets/images/logos/ijk.png">

<br/><br/><br/>


# Classic Spaceship Shooter Game - PWA

Versión: 2 de junio de 2021

## Abstract

PWA consistente en un clásico juego de disparos de naves espaciales con perspectiva cenital. No hay canvas, el juego transcurre directamente en el body.

## Descripción

Juego desarrollado con HTML, CSS y JavaScript. No se ha usado canvas. Clásico juego de disparos, en el que manejaremos nuestra nave desde una perspectiva cenital utilizando las flechas del teclado o la pantalla táctil. **El objetivo es todo un clásico: disparar a una serie de naves que aparecerán en la pantalla a la vez que esquivamos sus disparos.**

<p align="center">
  <img width="600" height="537" style="border: 1px solid grey;" src="./assets/images/del_readme/juego.jpg">
</p>

## Elementos del juego

En este código, para modelar cada uno de los elementos del juego empleamos una clase JavaScript con sus métodos y atributos, los cuales se describen a continuación:

-  **Entity:** Cada uno de los elementos que se pintan en el juego
-  **Character**: Cada uno de los personajes del juego, es decir, aquellos elementos que tienen "vida". Hereda de la clase _Entity_
-  **Player**: Personaje principal del juego. Hereda de la clase _Character_
-  **Opponent**: Forma a la que tenemos que convertir en estrella. Hereda de la clase _Character_
-  **Shot**: Disparo de un _Character_. Hereda de la clase _Entity_
-  **Game**: El propio juego

En el propio código están documentados todos los atributos y métodos de estas clases con detalle. 
El siguiente diagrama muestra la jerarquía de herencia de clases:

<p align="center">
  <img width="495" height="591" src="./assets/images/del_readme/clases.png">
</p>

## Comienzo y actualización del juego

En el fichero ``index.html`` se importan todos los scripts necesarios para el funcionamiento del juego, entre los que figuran todas las clases necesarias y el fichero ``main.js``. En este fichero se definen una serie de constantes necesarias para el juego, se crea una instancia de la clase _Game_ y se llama a su método _start_ para comenzar la partida.

El método _start_ crea los personajes, pinta el juego según el tamaño de la pantalla e inicializa los escuchadores de eventos (los cuales veremos en el siguiente apartado). Adicionalmente, en este método se da comienzo a un temporizador que llama a la función _update_ cada 50 ms para actualizar y pintar el estado del juego actualizado según las acciones del usuario, de los movimientos del oponente y de la posición de los disparos. Este intervalo de tiempo es equivalente a 20 marcos por segundo, es decir, estamos cambiando lo que muestra el juego 20 veces cada segundo, más que suficiente para crear la ilusión de movimiento.

## Manejo de eventos

Para poder manejar el personaje principal del juego con las flechas del teclado o con la pantalla táctil debemos hacer uso de los eventos que nos proporciona el navegador para este propósito. En el método _start_ de la clase _Game_, inicializamos los escuchadores de eventos necesarios:

- **keydown** : Se llama cuando el usuario pulsa una tecla. Guarda la tecla pulsada en el atributo _keyPressed_ de _Game_.
- **keyup** : Se llama cuando el usuario deja de pulsar una tecla. Elimina el contenido del atributo _keyPressed_ de _Game._
- **touchstart** : Se llama cuando el usuario toca la pantalla. Guarda la posición horizontal (x) donde el usuario ha tocado en el atributo _xDown_ de _Game_.
- **touchmove** : Se llama cuando el usuario arrastra el dedo por la pantalla. Elimina el contenido del atributo _xDown_ de _Game_.

Como hemos visto antes, cada 50ms se llama al método _update_ de _Game_. Este método comprueba el valor de _xDown_ y _keyPressed_ para actualizar la posición del personaje principal en función de las acciones del usuario.

## Tareas

Se pide modificar el código proporcionado para lograr tres funcionalidades nuevas:

- Registro de los **puntos conseguidos** por el usuario. Cada vez que convierta a un oponente en estrella debe incrementar el número de puntos en una unidad.
- El personaje principal debe contar con **tres vidas**. Si es alcanzado por un disparo, en vez de perder, el número de vidas disminuirá en una unidad, otorgándole una nueva oportunidad para ganar. Si el número de vidas llega a cero, se termina el juego.
- Si el jugador consigue alcanzar con un disparo al oponente (triángulo) y convertirlo en estrella, se le presentará una **oponente final** más poderoso (pentágono). Éste se moverá al **doble de velocidad** que el triángulo.

Para implementar las tres funcionalidades debes seguir los siguientes pasos:

1. Añadir un atributo nuevo _score_ a la clase _Game_ que refleje la puntuación (inicialmente 0).
2. Modificar el código del método _collide_ de la clase _Opponent_ para que sume un punto a _score_ cada vez que se alcanza con un disparo a un triángulo.
3. Añadir un atributo nuevo _lives_ a la clase _Player_ que valga 3 inicialmente. Puedes definir el nº de vidas inicial en una constante en main.js.
4. Modificar el código del método _collide_ de la clase _Player_ para que reste una vida cada vez que al jugador le alcance un disparo mientras esté vivo.
	- Si al jugador le quedan vidas, debe morirse durante dos segundos (llamando al método `collide` de su superclase _Character_) y renacer al cabo de ese tiempo. Para ello, el atributo `src` de `this.image` debe recuperar su valor original (el de `this.myImage` y poner a `false` el atributo `this.dead`.
	- Si al jugador no le quedan vidas, debe morirse definitivamente (llamando al método `collide` de su superclase _Character_) y terminar el juego llamando al método `endGame` del juego.
5. Añadir el código necesario para pintar la puntuación y las vidas en la pantalla del juego en todo momento. Para ello crea una lista (etiqueta ul de HTML) con dos elementos (etiqueta li). El primero, con id &quot;scoreli&quot;, mostrará la puntuación con el siguiente formato:  ``Score: x``, siendo ``x`` el valor del atributo _score_ del juego. El segundo, con id ``livesli``, mostrará el nº de vidas con el siguiente formato: ``Lives: y``, siendo ``y`` el valor del atributo _lives_ del jugador. Para actualizar el HTML con los valores de puntuación y vidas utiliza el método `innerHTML` del elemento HTML correspondiente (es importante no utilizar el método `innerText` puesto que es incompatible con la herramienta de autocorreccióngi).
6. Crear una clase nueva llamada _Boss_ en un nuevo fichero llamado ``Boss.js`` (no te olvides de importarlo en `index.html`). Esta clase debe heredar los métodos y atributos necesarios de la clase _Opponent_ sobreescribiendo aquellos que sean necesarios para lograr la funcionalidad requerida. Para representar al jefe final puedes usar las imágenes ``jefe.png`` y ``jefe_muerto.png`` de la carpeta assets.
7. Modificar el código necesario en el método `removeOpponent` de _Game_ para que cuando el jugador consiga matar al triángulo, le aparezca el desafío final. Es decir, el atributo opponent de la instancia de _Game_ debe contener un objeto `_Boss_`cuando el jugador derrote al oponente inicial. 
8. Modificar el código de la función ``endGame`` (no modificar la cabecera) para que, si el jugador consigue derrotar al jefe final, es decir, gane la partida con mas de 0 vidas, aparezca la imagen ``you_win.png`` de la carpeta assets, en vez de ``game_over.png``.
