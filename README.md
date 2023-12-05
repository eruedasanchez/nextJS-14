<div align="center">
  
  ![GitHub repo size](https://img.shields.io/github/repo-size/eruedasanchez/multi-step-form)
  ![GitHub stars](https://img.shields.io/github/stars/eruedasanchez/multi-step-form?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/eruedasanchez/multi-step-form?style=social)
  [![Twitter Follow](https://img.shields.io/twitter/follow/RSanchez_Eze?style=social)](https://twitter.com/intent/follow?screen_name=RSanchez_Eze)
  <br />
  <br />

  <h2 align="center">Next.js 14</h2>

  Build a Multi Step Form which users should be able to complete each step of the sequence,
  go back to a previous step to update their selections, see a summary of their selections on the final step and confirm their order.<br/>Responsive for all devices. Build using React Js.

  <a href="https://multi-steps-form-six-gamma.vercel.app/multi-step-form/1" target="_blank"><strong>➥ Live Demo</strong></a>

</div>

<br />

### Inicialización de un proyecto

Para inicializar un projecto, comenzamos ejecutando el siguiente comando:

```bash
$ npx create-next-app@latest
```

Colocamos `@latest` para asegurarnos que estamos utilizamos la ultima versión y no una versión antigua que podriamos tener guardada.

Luego de ejecutar este comando, nos pregunta que nombre le queremos colocar al projecto. En este caso, lo nombramos con el nombre **ejemplo**. También nos consulta si queremos usar TypeScript, ESLint, TailwindCss, etc. Colocamos por defecto a todas con la opción **Yes** como se muestra en la imagen a continuación:

![Next.js 14](https://i.postimg.cc/dVTtHDR4/nextjs-1.jpg "Inicialización de un projecto")

### Capitulo 1

Anteriormente, vimos como inicializar un proyecto desde cero. Pero, Next.js nos ofrece una manera de inicializar un proyecto creado por ellos a modo de ejemplo para poder explorar todos sus recursos ejecutando el siguiente comando:

```bash
$ npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
```

Analicemos este comando:

- `npx create-next-app@latest nextjs-dashboard` crea el proyecto **nextjs-dashboard** como lo habiamos hecho anteriormente.

- `--use-npm` se utiliza para asegurarse que estamos utilizando **npm**. 

- `--example` indica que podemos crear un proyecto no desde cero sino a través de un repositorio dado que en este caso, por ejemplo, podemos utilizar el repositorio de **Vercel** https://github.com/vercel/next-learn/tree/main/dashboard/starter-example que nos provee el esqueleto para realizar el dashboard planteado.  

Una vez ejecutado este comando, comienza a inicializarse nuestro proyecto tomando las configuraciones del dashboard proporcionado por Vercel.

Ahora, podemos ejecutar el siguiente comando para ver los scripts que tenemos disponible:

```bash
$ npm run
```

Obteniendo el siguiente resultado:

![Next.js 14](https://i.postimg.cc/GpMKLkmx/nextjs-2.jpg "Scripts al iniciar un projecto")

- `start` correspondiente a producción

- `build` correspondiente a empaquetar nuestra aplicación

- `dev` correspondiente a desarrollo, que es en el que estamos trabajando actualmente.

Por lo tanto, ejecutamos el comando:

```bash
$ npm run dev
```

Y nos coloca el siguiente aviso:

![Next.js 14](https://i.postimg.cc/x1pgYvCy/nextjs-3.jpg "npm run dev")

Es decir, nos indica que la aplicación está utilizando la versión **14.0.2** de **Next.js**, está corriendo en el puerto local 3000 y que tardó 4 segundos en cargarse.

Si queremos que la aplicación sea cargada más rapidamente, existe una forma ejecutando el siguiente comando:

```bash
$ npm run dev -- --turbo
```

Es decir, se aplica una especie de **turbo** produciendo una demora en la carga de 1803ms, es decir, 1.8 segundos aproximadamente contra los 4 segundos de la ejecución sin turbo.

![Next.js 14](https://i.postimg.cc/y6cTqt27/nextjs-4.jpg "npm run dev -- --turbo")

Una vez que lanzamos nuestra aplicación, abrimos nuestra aplicación que se encuentra en puerto local 3000 ingresando a y obtenemos el siguiente resultado:

![Next.js 14](https://i.postimg.cc/4yC9d47B/nextjs-5.jpg "Visualización inicial de la app")

### Revisando código

Ahora, analicemos los archivos del proyecto:

![Next.js 14](https://i.postimg.cc/8Pz3fb66/nextjs-6.jpg "Archivos del proyecto")

- `tsconfig.json` cuenta con la configuración de **Typescript**

- `tailwind.config.ts` cuenta con la configuración de **tailwind**

- `postcss.config.js` es un archivo de configuración que necesita **tailwind** para poder funcionar

- `package-lock.json` que contiene las dependencias fijadas cuando utilizamos **npm** 

- `next.config.js` cuenta con la configuración de **next.js** y se encuentra inicialmente vacia

- `.gitignore` que cuenta con todos los archivos que queremos ignorar en nuestro repositorio de GitHub

- `.eslintrc.json` que cuenta con las reglas de ESLint para asegurarse que es rápida por defecto y cuando se utilicen "cosas" que pueden ser peligrosas, vamos a ser advertidos gracias a ello

- `package.json` que contiene todas las dependencias que estamos utilizando 

- `.nvmrc` es un archivo que va a intentar detectar que versión de node es la que tiene que utilizar. Por eso, en su contenido se encuentra el número 18 

### Analizando carpetas

Comenzamos analizando la carpeta **scripts**

![Next.js 14](https://i.postimg.cc/JzXCNTSt/nextjs-7.jpg "Carpeta scripts")

Esta carpeta la crea la plantilla extraida del repositorio de [Vercel](https://github.com/vercel/next-learn/tree/main/dashboard/starter-example) que estamos utilizando para crear el dashboard. Contiene el archivo `seed.js` de manera que cuando lo ejecutemos, va a inicializar toda una base de datos.

Continuamos analizando la carpeta **public**

![Next.js 14](https://i.postimg.cc/hvmn50pt/nextjs-8.jpg "Carpeta public")

Esta carpeta contiene todos los archivos que queremos que sean de tipo estático como imagenes, videos, etc. Contiene la carpeta `customers` que contiene imagenes de clientes que vamos a utilizar en nuestra web. Además, contiene el `favicon` de nuestra aplicación y unas capturas del diseño terminado de la aplicación. 

Ahora, vamos a analizar la carpeta **más importante** de **NextJS** que es **app**.

![Next.js 14](https://i.postimg.cc/d1VWStQH/nextjs-9.jpg "Carpeta app")

- `page.tsx` indica que, cada vez que quiera crear una ruta en nuestra página, vamos a tener que crear un archivo `page.tsx` Typescript o `page.jsx` en el caso de usar Javascript. En este caso, como no la contiene ninguna carpeta, y se encuentra luego de app, corresponde a la ruta `/`, es decir, su contenido es el que se muestra en http://localhost:3000/ o en http://localhost:3000.

- `layout.tsx` envuelve la página, en nuestro caso, `{children}` corresponde a `page.jsx`. Por ejemplo, si queremos, mostrar en todas nuestras rutas la barra de navegación, podriamos colocarla en el archivo de **layout** para que se visualice en todas las rutas que definamos.

- `ui` es un carpeta que contiene componentes ya creados y subidos al repositorio que vamos a utilizar para implementar el dashboard.

![Next.js 14](https://i.postimg.cc/fL1yyCLx/nextjs-10.jpg "Carpeta ui")

Además, cuenta con un archivo `global.css` con los estilos que vamos a tener que cargar.

- `lib` es un carpeta que contiene las herramientas para hacer fetching de datos `data.ts` para conectarse con DB **postgres**, utilidades `utils.ts`, definiciones `definitions.ts` de los tipos de TS que vamos a utilizar en nuestra aplicación y `placeholder-data.js` en el caso de que no deseemos hacer el fetching con sql y si con placeholder.

### Cargando los estilos

Para cargar los estilos globales, tenemos que ir a **layout.tsx** porque envuelve toda la aplicación y como queremos que los estilos globales queremos que sean para toda la aplicación, lo importamos en este archivo de la siguiente manera:

![Next.js 14](https://i.postimg.cc/nrTd9cN8/nextjs-11.jpg "Cargando estilos globales")

Ahora, visitamos la pagina y vemos que se aplicaron los estilos globales:

![Next.js 14](https://i.postimg.cc/RVm0dCyr/nextjs-12.jpg "Cargando estilos globales")

También tenemos otra forma de cargar estilos además de los estilos globaless y los de Tailwind. Esta forma es a traves de los **CSS modules**. Para ello, creamos un archivo dentro de la carpeta **ui** llamado **home.module.css** donde escribimos el nombre del archivo .module para poder detectar que estamos queriendo utilizar un módulo.

![Next.js 14](https://i.postimg.cc/mD8CFpV6/nextjs-13.jpg "Cargando estilos mediante CSS modules")

Una vez creado el archivo, creamos una clase **shape** que representa un triangulo de la siguiente manera:

![Next.js 14](https://i.postimg.cc/g0VDSDkG/nextjs-14.jpg "Cargando estilos mediante CSS modules")

Y finalmente, aplicamos este módulo en, por ejemplo, el archivo **page.tsx** de la siguiente manera:

![Next.js 14](https://i.postimg.cc/qR0tJfVC/nextjs-15.jpg "Cargando estilos mediante CSS modules")

Guardamos los cambios y regresamos a la página para verificar que se encuentra aplicado el triangulo.

![Next.js 14](https://i.postimg.cc/1zNqJcPJ/nextjs-16.jpg "Cargando estilos mediante CSS modules")

Ahora, si inspeccionamos la página podemos observar que al aplicar un CSS module, la clase tiene un **hash**, o sea, crea un identificador único para esa clase. 

![Next.js 14](https://i.postimg.cc/prBKbD0z/nextjs-17.jpg "Cargando estilos mediante CSS modules")

### Importar y carganr fuentes

Comenzamos creando en la carpeta **ui** un archivo llamado **fonts.ts**

![Next.js 14](https://i.postimg.cc/44c34DC3/nextjs-18.jpg "Importando y cargando fuentes")

Y en este archivo, podemos importar **Google Fonts** para luego crear, por ejemplo, una variable `Monserrat` correspondiente a este tipo de fuente y cargarle los estilos que yo desee como se muestra en la imagen a continuación.

![Next.js 14](https://i.postimg.cc/T2J0KYW7/nextjs-19.jpg "Importando y cargando fuentes")

Ahora, si la queremos utilizar, nos dirigimos al archivo **layout.tsx** que envuelve nuestra página y la aplicamos en el body de la siguiente manera:

![Next.js 14](https://i.postimg.cc/J7vC0xV4/nextjs-20.jpg "Importando y cargando fuentes")

Por último, guardamos los cambios y vemos como se cambio la fuente en nuestra página. 

![Next.js 14](https://i.postimg.cc/kGk0HJFt/nextjs-21.jpg "Importando y cargando fuentes")

### Agregar más fuentes al proyecto

Si queremos agregar más fuentes al proyecto, creamos otra variable, por ejemplo **lusitana** de la misma manera que para el caso de Montserrat:

![Next.js 14](https://i.postimg.cc/tgtQ8L2m/nextjs-22.jpg "Importando y cargando más fuentes")

Luego de esto, si la queremos aplicar en el texto de **Welcome to Acme.**, lo aplicamos en la etiqueta **strong** como en el caso anterior con la fuente Montserrat.

![Next.js 14](https://i.postimg.cc/52k5m0Bx/nextjs-23.jpg "Importando y cargando más fuentes")

Guardamos los cambios y vemos como ahora el titulo tiene aplicada la fuente **Lusitana**.

![Next.js 14](https://i.postimg.cc/XYvcFFyH/nextjs-24.jpg "Importando y cargando más fuentes")

### Imagenes

Para añadir imagenes, nos dirigimos al archivo **page.tsx** donde se encuentra comentado para añadir una imagen.

![Next.js 14](https://i.postimg.cc/VsF847gk/nextjs-25.jpg "Imagenes")

Una vez situados alli, vamos a insertar la imagen **hero-desktop.png** a través de una etiqueta **img** como hacemos comunmente.

![Next.js 14](https://i.postimg.cc/KvMpYjW3/nextjs-26.jpg "Imagenes")

Guardamos los cambios y regresamos a nuestra página para verificar que la imagen se encuentra aplicada.

![Next.js 14](https://i.postimg.cc/FKTVpkzR/nextjs-27.jpg "Imagenes")

Pero observemos que la etiqueta **img** se encuentra subrayada de amarillo porque puede causar un problema de rendimiento como se indica a continuación. 

![Next.js 14](https://i.postimg.cc/gkkwmt2x/nextjs-28.jpg "Imagenes")


Para solucionar esto, se recomienda utilizar el componente **Image**. Para ello, importamos el componente y lo utilizamos en reemplazo de la etiqueta **img** de la siguiente manera:

![Next.js 14](https://i.postimg.cc/NjmXJJGL/nextjs-29.jpg "Imagenes")

Guardamos los cambios y regresamos a la página y observamos que nos arroja un error en la compilación porque nos pide que el componente imagen debe tener necesariamente una propiedad **width**.

![Next.js 14](https://i.postimg.cc/nc671bJ6/nextjs-30.jpg "Imagenes")

Esta propiedad es necesaria para asegurarnos que es optima la imagen que se está cargando y dejar el espacio que se necesita configurando un alto y un ancho. De esta forma, el espacio que ocupa la imagen siempre va a estar ahi. Por lo tanto, configuramos el ancho y el alto de la siguiente manera:

![Next.js 14](https://i.postimg.cc/kGqxrLsT/nextjs-31.jpg "Imagenes")

Guardamos los cambios y recargamos la página para verificar que la imagen haya sido insertada de manera corecta.

![Next.js 14](https://i.postimg.cc/J0Ht2xVp/nextjs-32.jpg "Imagenes")

A simple vista parece que ambas etiquetas bien configuradas obtienen el mismo resultado. 

Pero analicemos en las herramientas de desarrollo cuando aplico la etiqueta **img**. Ingresamos a la sección **Network** y en la solapa **img** podemos ver la siguiente información:

![Next.js 14](https://i.postimg.cc/wMJC1RYW/nextjs-33.jpg "Imagenes")

El formato de la imagen es **PNG** y el tamaño es de 244B.

Ahora, cuando aplico el componente **Image**. Ingresamos a la sección **Network** y en la solapa **img** podemos ver la siguiente información:

![Next.js 14](https://i.postimg.cc/25HRMBDJ/nextjs-34.jpg "Imagenes")

El formato de la imagen es **webp** y el tamaño se encuentra en **disk cache** < 244B por lo que utilizar el componente **Image** resulta más optimo.

### Sistema de enrutado por archivos

Supongamos que queremos crear la ruta http://localhost:3000/dashboard. Inicialmente, esta ruta no existe y por lo tanto, arroja un error 404 como se muestra a continuación:

![Next.js 14](https://i.postimg.cc/dtggtSKq/nextjs-35.jpg "Enrutado por archivos")

Por lo tanto, de acuerdo a la documentación, para crear la ruta http://localhost:3000/dashboard, debemos crear una carpeta dentro de **app** llamada **dashboard** y dentro de ella, un archivo llamado **page.tsx** 

![Next.js 14](https://i.postimg.cc/J7jcf6zw/nextjs-36.jpg "Enrutado por archivos")

Una vez creado el archivo, creamos la función que actua como componente como se muestra en la imagen a continuación.

![Next.js 14](https://i.postimg.cc/QtdCfMCx/nextjs-37.jpg "Enrutado por archivos")

Con esto, basta simplemente para crear la ruta http://localhost:3000/dashboard. Guardamos los cambios y verificamos que los cambios se hayan aplicado a nuestra página 

![Next.js 14](https://i.postimg.cc/mr8XvdLN/nextjs-38.jpg "Enrutado por archivos")

### Rutas anidadas

Ahora, si queremos crear más rutas o rutas dentro de otras rutas. Por ejemplo, si queremos crear la ruta http://localhost:3000/dashboard/customers, inicialmente nos arroja error 404 porque no existe.

Para solucionar esto, creamos dentro de la carpeta *dashboard* la carpeta *customers* y dentro de ella, el archivo **page.tsx** con el componente de la misma manera como lo definimos para el caso del dashboard.

![Next.js 14](https://i.postimg.cc/wjc0J9rj/nextjs-39.jpg "Enrutado por archivos")


Guardamos los cambios y verificamos que los cambios se hayan aplicado correctamente.

![Next.js 14](https://i.postimg.cc/7PBZXzpF/nextjs-40.jpg "Enrutado por archivos")

### Layouts que envuelven secciones especificas de nuestras rutas

Anteriormente, vimos que el archivo **layout.tsx** envuelve a toda nuestra aplicación. Ahora bien, podemos tener layouts que envuelvan solamente parte de nuestras rutas.

Supongamos, por ejemplo, que quiero tener un layout que envuelva a los componentes de **dashboard**. Entonces, dentro de la carpeta *dashboard*, creo el archivo **layout.tsx** y escribo el código que se muestra a continuación:

![Next.js 14](https://i.postimg.cc/RZmTTPvs/nextjs-41.jpg "Layouts que envuelven secciones especificas de nuestras rutas")

- Si ingresamos a la seccion de **customers**, observamos que el *layout* se encuentra envolviendo este componente.

![Next.js 14](https://i.postimg.cc/cLXYgzSf/nextjs-42.jpg "Layouts que envuelven secciones especificas de nuestras rutas")

- Si ingresamos a la seccion de **invoices**, observamos que el *layout* se encuentra envolviendo este componente.

![Next.js 14](https://i.postimg.cc/fbydxvzp/nextjs-43.jpg "Layouts que envuelven secciones especificas de nuestras rutas")

Si nos dirigimos al directorio raiz (http://localhost:3000/) observamos que este layout no lo está envolviendo porque solo envuelve a los componentes que contiene **dashboard** como mencionamos anteriormente.

![Next.js 14](https://i.postimg.cc/G2g0NdGq/nextjs-44.jpg "Layouts que envuelven secciones especificas de nuestras rutas")

### Navegación: Componente Link

Ahora, cada vez que navego por la página, es decir, voy desde *invoices* a *customers* o viceversa por ejemplo se recarga toda la página y esto produce un rendimiento negativo para el usuario y además creamos el componente *SideNav* en el layout para evitar tenerlo que cargar cada vez estoy navegando por el dashboard. Además, en el caso de tener un estado, se lo pierde porque se vuelve a recargar la página.

Por lo tanto, queremos que haya una navegación fluida como si fuera una **Single Page Application**, es decir, que reutilice todos los recursos posibles, que renderice solo los componentes que cambian y actualizar la URL sin necesidad de recargar toda la página.

Por lo tanto, para hacer este tipo de navegaciones podemos usar el componente de *NextJs* llamado **Link**.

Para utilizarlo, abrimos el archivo **nav-links.tsx** y analizamos su contendido.

![Next.js 14](https://i.postimg.cc/T1n31s6X/nextjs-45.jpg "Navegación: Componente Link")

- En primer lugar, se importan los iconos correspondientes a cada sección (Home, Customers, Invoices).

- Luego, se encuentra el arreglo **links** que contiene justamente el nombre, la ruta y el icono de cada enlace.

- Finalmente, la función **NavLinks** realiza un mapeo para cada link agregando una etiqueta `<a>` con el nombre y el icono del link

Observemos que cada link está envuelto por una etiqueta anchor `<a>` que recarga la página cada vez navegamos y no es lo que queremos, vamos a reemplazar la etiqueta `<a>` por el componente `<link>` de la siguiente manera:

![Next.js 14](https://i.postimg.cc/Pfpq8xjK/nextjs-46.jpg "Navegación: Componente Link")

De esta manera, se logra una carga más rápida de la página porque solo carga lo necesario.

### Hooks de Next Js

Una vez terminada la navegación, podemos navegar tranquilamente entre las secciones pero cuando cambiamos, por ejemplo, de invoices a customers no se detalla que estamos en esa sección a pesar de que la ruta se actualiza y el contenido también.





















<!-- **** -->























