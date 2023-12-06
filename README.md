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

Entonces, vamos a mejorar la experiencia para el usuario y dependiendo de la ruta en la que estemos, vamos a cambiar los estilos para que se vea cuál está activo.

Para conseguir esto, *NextJs* cuenta con varios **hooks** que permiten de varias formas acceder a información de las rutas, de los path's, del router para que actualizarlo o cambiarlo.

En este caso, vamos a utilizar el hook **usePathName()** para leer el path en el que nos encontramos actualmente. Pero, por defecto, este hook solo se utiliza del lado del servidor por lo que si queremos tambien que se renderize del lado del cliente tenemos que agregar la directiva `use client` de la siguiente manera:

![Next.js 14](https://i.postimg.cc/zBmfW82b/nextjs-47.jpg "Hooks de Next Js")

De este modo, cada vez que naveguemos entre secciones, se va a colocar un fondo celeste y letras azul sobre la sección que estemos navegando actualmente.

![Next.js 14](https://i.postimg.cc/qMQNNtfz/nextjs-48.jpg "Hooks de Next Js")

### Base de datos: Postgres 

Una vez loggeados con nuestra cuenta de Vercel, creamos una nueva DB con el nombre **customer-invoices** por ejemplo. Luego, copiamos las siguientes variables de entorno:

![Next.js 14](https://i.postimg.cc/TYLYvbZ6/nextjs-49.jpg "Base de datos: Postgres")

Una vez copiadas las variables de entorno, nos dirigimos al archivo **.env.example**, le modificamos el nombre a **.env** y voy a copiar todas las variables de entorno de la base de datos que cree.

Con esto, ya estamos en condiciones de poder conectarnos a la base de datos.

Ahora, se pueden usar varios clientes de **postgresSQL** pero lo ideal es utilizar el de *Vercel* porque como *Vercel* ya sabe cuales son las variables de entorno, ni siquiera hay que crear la conexion.

Entonces, instalamos la dependencia para trabajar con la base de datos de Postgres en la carpeta de nuestro proyecto ejecutando el comando:

```bash
$ npm install @vercel/postgres
```

Ahora, el archivo **seed.js** dentro de la carpeta scripts, funciona como una semilla para crear datos en mi DB. Luego, nos dirigimos al archivo *package.json* y en la seccion de scripts creamos el siguiente comando:

![Next.js 14](https://i.postimg.cc/437zKP2x/nextjs-50.jpg "Base de datos: Postgres")

Con esto, va a importar (realizar un require, por eso `-r`) el modulo *dotenv/config* y ejecuta el script *seed.js* y asi nos aseguramos que está leyendo la variable de entorno.

Luego, ejecutamos el comando:

```bash
$ npm run seed
```

Obteniendo el siguiente resultado por consola:

![Next.js 14](https://i.postimg.cc/15gnC56Y/nextjs-51.jpg "Base de datos: Postgres")

Finalmente, volvemos a nuestra base de datos y vemos como se crearon exitosamente todas las tablas.

![Next.js 14](https://i.postimg.cc/DzFLWkDf/nextjs-52.jpg "Base de datos: Postgres")

### Fetching de datos

Una vez creada nuestra DB, vamos a proceder a realizar el fetching de datos.

En este caso, NextJs va a realizar el renderizado pero en el servidor para optimizar recursos y el cliente unicamente va a recibir la respuesta y renderizar lo que el contenido correspondiente.

Para ello, vamos a realizar el fetching de datos en el archivo **page.tsx** dentro de la carpeta *dashboard*.

Por defecto, los componentes (incluyendo a nuestra página **page.tsx**) se renderizan en el servidor. Por lo tanto, a esto lo lllamamos **React Server Component**. Una ventaja de estos componentes es que puede ser asíncrono. Por lo tanto, podríamos hacer un *await fetch* para poder obtener la información de la DB o de una API externa.

Pero como queremos utilizar nuestra DB, en el archivo **data.ts** dentro de la carpeta *lib* en el directorio *app*, nos encontramos con varias funciones que nos permiten realizan el fetch para obtener los datos de las tablas definidas en nuestra DB. Algunas de ellas son  *fetchRevenue()*, *fetchLatestInvoices()*, *fetchCustomers()*. Entonces, en el archivo **page.tsx**, aplicamos la función *fetchRevenue()* de la siguiente manera:

![Next.js 14](https://i.postimg.cc/kGBtpTjH/nextjs-53.jpg "Fetching de datos")

Observemos también como este archivo, al ser un componente de servidor, solo *consologea* el resultado del fetch en la terminal pero no en la consola del cliente, es decir, si inspeccionamos la pagina *dashboard*, vamos a observar que la consola no se muestra el resultado de *fetch*.

![Next.js 14](https://i.postimg.cc/WbLP1Xr6/nextjs-54.jpg "Fetching de datos")

### Renderizar datos en el dashboard

Ahora, vamos a renderizar los datos en el dashboard. Para ello, NextJs nos provee un esqueleto para completar que se muestra a continuación.

![Next.js 14](https://i.postimg.cc/XNrXBjJK/nextjs-55.jpg "Renderizar datos en el dashboard")

Por lo tanto, comenzamos pasando el gráfico (descomentando la linea 21) del Revenue para mostrar el gráfico dado que el componente **RevenueChart** muestra el gráfico (descomentar los comentarios en el archivo **revenue-chart.tsx**).

Luego, voy a querer mostrar los datos correspondientes a *latestInvoices* (descomentando la linea 22) de LatestInvoices para las facturas de los últimos compradores dado que el componente **LatestInvoices** muestra las facturas de los últimos compradores (descomentar los comentarios en el archivo **latest-invoices.tsx**).

Por lo tanto, el archivo *page.tsx* queda de la siguiente manera dejando de manera opcional poder obtener más información.

![Next.js 14](https://i.postimg.cc/7ZT2Gj16/nextjs-56.jpg "Renderizar datos en el dashboard")

Ahora, sabemos que el fetch de la función *fetchRevenue* demora 2 segundos y el fetch de la función *fetchLatestInvoices* demora 1 segundo. Por lo tanto, se demorará al menos 3 segundos en renderizar la página porque al utilizar **await** se espera que se cumpla un pedido para poder avanzar con el siguiente. 

Supongamos ahora, que la función *fetchRevenue* demora artificalmente 3 segundos (descomentamos la linea 22 en el archivo *data.ts*). Ahora, al recargar la página, demora 3 segundos, lo que empeora el rendimiento de la página dado que hasta no cargar todos estos datos, no puede continuar con el renderizado de la página.

### Loading

Para mejorar la experiencia del usuario y solucionar el problema, vamos a utilizar lo que se conoce como **Streaming de los datos**. Es decir, mostrar todo aquello que se encuentre disponible y lo que no está disponible, mostrar un **esqueleto**. A esto se lo conoce como **suspense**.

Ahora, el objetivo es que se puede renderizar todo sin necesidad de esperar al gráfico, es decir, a que se realice el *fetchRevenue*. Para lograr esto, tenemos dos opciones:

- Crear un componente **Loading**, que coloque la leyendo *Cargando* mientras espera que se realice el fetch creando un archivo **** y colocando el siguiente código:

![Next.js 14](https://i.postimg.cc/rFwc8FDk/nextjs-57.jpg "Loading")

De esta manera, NextJs reconoce al archivo **loading.tsx** (no cambiar el nombre) para que se muestre el contenido dentro de él mientras espera que se cargue el contenido de los demás componentes.

Sin embargo, esto es muy sencillo y podríamos llevarlo a otro nivel cargando, por ejemplo, el componente **** que se encuentra en el componente **skeletons.tsx** 

Ahora, al recargar la página, obtenemos el siguiente resultado:

![Next.js 14](https://i.postimg.cc/mDsh3Fg1/nextjs-58.jpg "Loading")

Sin embargo, podemos observar que, unicamente por la demora en cargar los gráficos (*fetchRevenue*) estamos viendo todo el esqueleto de la página y esto lo queremos mejorar mediante el **Straming de Datos**.

### Continuando con el Straming

Para realizar esta optimización, en el archivo **page.tsx**, envolvemos el componente (*RevenueChart*) que genera los gráficos y que genera conflictos en otro componente de React llamado **Suspense**. Este componente es asíncrono, lo vamos a esperar y le colocamos un *fallback*. Es decir, mientras el Revenue se este cargando, vamos a mostrar el *fallback* y una vez que se haya cargado, se renderizará el contenido del componente *Revenue*.

![Next.js 14](https://i.postimg.cc/DZx4Pdpp/nextjs-59.jpg "Continuando con el Straming")

Luego, quitamos la instrucción del fetch del *revenue* (linea 8) y nos dirigimos al archivo *revenue-chart.tsx* que contiene al componente **Revenue Chart**. Y en lugar de que le lleguen las *props*, vamos a hacer que el *Revenue* lo cargue de la siguiente manera:

![Next.js 14](https://i.postimg.cc/SKJKpFgd/nextjs-60.jpg "Continuando con el Straming")

Ahora, en el *fallback* del componente *Suspense* podemos cargar el esqueleto correspondiente al componente para mejorar aún más la experiencia.

![Next.js 14](https://i.postimg.cc/kM1qqhth/nextjs-61.jpg "Continuando con el Straming")

Finalmente, al recargar la página obtenemos el esqueleto correspondiente al componente del gráfico pero podemos observar como se renderiza el componente que contiene la factura de los últimos clientes .

![Next.js 14](https://i.postimg.cc/brB7krXS/nextjs-62.jpg "Continuando con el Straming")









































<!-- **** -->























