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



<!-- **** -->














<!-- **winston** -->








