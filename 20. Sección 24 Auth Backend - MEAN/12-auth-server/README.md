# CursoAngular

# NOTAS IMPORTANTES

Configuración Inicial
=====================

Como este es un backend que se va a crear con node para crearlo debemos ejecutar los siguientes pasos:

1. npm init

2. Luego pregunta cual es el nombre del paquete, entonces lo podemos dejar vacío y presionar Enter.

3. La versión también la podemos dejar vacía y darle Enter.

4. La descripción también la podemos dejar vacía y presionar Enter

5. El punto de inicio index.js lo dejamos así y presionamos Enter

6. El test command también le podemos dar Enter.

7. El repositorio git también lo dejamos vacío y presionamos Enter

8. Los keywords los dejamos vacíos y presionamos Enter

9. El author también lo podemos dejar vacío y presionar Enter

10. La license la podemos dejar vacía y presionar Enter

11. Y en la confirmación le damos Enter para indicar que si

12. Y esto nos va a crear un archivo llamado package.json

13. Luego en la ruta nos creamos un archivo index.js que es nuestro punto inicial.

14. Podemos colocar un console.log('Hola desde Node') dentro del archivo index.js que creamos para probar.

15. Posteriormente procedemos a ejecutar en la consola el siguiente comando:
```
node index.js
```

Y esto nos va a responder con el consolo.log() que hayamos puesto.

Adicionalmente indicar la extensión .js al archivo es opcional y tenemos exactamente el mismo resultado.

```
node index
```

16. Adicionalmente debemos instalar Nodemon, el cual nos permite hacer live reload del servidor permitiendonos desarrollar de una manera más rápida. Para instalarlo debemos ejecutar el siguiente comando el cual instala el paquete de manera global:

```
npm install -g nodemon
```

NOTA: Como sabemos si no queremos instalar el paquete de manera global lo unico que debemos hacer es reemplazar el -g y por un --save-dev

Adicionalmente podemos ver más documentación sobre Nodemon en el siguiente enlace: 

* [Nodemon](https://www.npmjs.com/package/nodemon)

17. Posteriormente de tener instalado Nodemon lo unico que debemos hacer es ejecutar nuestro servidor ejecutando el siguiente comando:

```
nodemon index.js
```
Y de esta manera ahora el live reload va a estar escuchando siempre los cambios y podremos ver los cambios que realicemos en nuestro codigo en tiempo real y sin tener que bajar y volver a subir el servidor.

18. Luego también podemos configurar los scripts, los cuales no es que sea obligatorio configurarlos, pero nos va a ayudar a no tener que memorizarnos cual es el punto de inicio de nuestra aplicación, y que tengo que hacer cuando lo despliegue. Entonces para ello abrimos el archivo package.json que se había creado anteriormente y agregamos los siguientes scripts:

```
"dev": "nodemon index.js",
"start": "node index.js"
```

NOTA: Cuando especificamos "dev" lo que hace es ejecutar el index.js usando Nodemon para desarrollo y el "start" es para cuando pasemos la aplicación a producción y le indique que ejecute el archivo index.js usando el comando node.

18. Por lo tanto ya con la configuración de los scripts ya no sería necesario ejecutar el comando "nodemon index.js" como se había explicado anteriormente, sino que ya solo deberíamos usar el siguiente comando:

```
npm run dev
```

Y lo que le decimos es que cuando yo ejecute "npm run" le indicamos que ejecute un script llamado "dev", y por lo tanto tenemos exactamente el mismo resultado que cuando ejecutamos el comando "nodemon index.js"

19. Ahora ya cuando vayamos a ejecutar la aplicación en producción no es necesario indicar el "run" sino que simplemente ejecutamos "npm" y le indicamos que el script se llama "start" de la siguiente manera:

```
npm start
```

Instalaciones necesarias para el backend
=========================================

* El siguiente comando nos va a hacer las instalaciones necesarias para poner a correr nuestro backend que posterioemente va a interactuar con nuestra aplicación que desarrollemos en Angular.

```
npm i bcryptjs cors dotenv express express-validator jsonwebtoken mongoose
```

### NOTAS:

* Cuando le colocamos al comando el "bcryptjs" le indicamos que instale un paquete que va a permitir encriptar y hacer hash de una sola vía de las contraseñas para que nadie aunque tenga el código hash no lo va a poder reconstruir.

* Cuando le colocamos al comando el "cors" le indicamos que instale un paquete que nos va a permitir hacer peticiones Cross Domain, y esto es algo necesario entre comillas si vamos a aceptar peticiones provenientes de otros dominios. 

* Cuando le colocamos al comando el "dotenv" le indicamos que instale un paquete que sirve para configurar variables de entorno.

* Cuando le colocamos al comando el "express" le indicamos que instale un paquete que es la parte crucial para montar rápidamente el servidor con servicios REST, además de que es un Framework muy popular.

* Cuando le colocamos al comando el "express-validator" le indicamos que instale un paquete el cual sirve para hacer validaciones en express por ejemplo de que los campos tengan la información que se necesita.

* Cuando le colocamos al comando el "jsonwebtoken" le indicamos que instale un pauqete que sirve para crear JSON Web Tokens (JWT).

* Cuando le colocamos al comando el "mongoose" le indicamos que instale el paquete el cual es un ORM que nos va a servir para interactuar y realizar la comunicación, conexión y trabajo con la base de datos MongoDB.

### NOTA 2:

* Adicionalmente si necesitamos instalar una versión específica de un paquete lo podemos indicando un @ seguido de la versión a instalar. Un ejemplo sería el siguiente:

```
npm i express@4.17.1
```
