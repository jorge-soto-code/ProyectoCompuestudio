# Proyecto CompueStudio

Aplicación web desarrollada como proyecto final de la formación técnica en Análisis y Desarrollo de Software. En este proyecto integré conocimientos de backend, conexión a bases de datos NoSQL, arquitectura por rutas, modelos de datos y vistas dinámicas.

El proyecto implementa un sistema de gestión de registros. Permite visualizar los registros almacenados, crear nuevos registros, consultar un registro individual, actualizarlo y eliminarlo mediante una API de rutas conectada a MongoDB.

## Funcionalidades

- Página de inicio renderizada con EJS.
- Formulario para crear un nuevo registro.
- Consulta de todos los registros almacenados.
- Consulta individual mediante el identificador del documento.
- Actualización de registros mediante una solicitud `PUT`.
- Eliminación de registros mediante una solicitud `DELETE`.
- Servidor HTTP con Express y procesamiento de formularios mediante Body Parser.

## Tecnologías utilizadas

- **Node.js:** entorno de ejecución de JavaScript.
- **Express:** creación del servidor y definición de rutas.
- **EJS:** motor de plantillas para generar vistas HTML dinámicas.
- **MongoDB:** base de datos NoSQL utilizada para almacenar los registros.
- **Mongoose:** conexión con MongoDB y definición del modelo de datos.
- **CSS y JavaScript:** presentación e interacción de la interfaz.

## Estructura del proyecto

```text
ProyectoCompuestudio/
├── app.js                 # Configuración del servidor y conexión a MongoDB
├── models/
│   └── schema.js          # Esquema y modelo de datos de Mongoose
├── router/
│   ├── rutas.js           # Rutas principales y formulario de creación
│   └── Usuarios.js        # Rutas CRUD de los registros
├── views/                 # Plantillas EJS de la interfaz
├── public/                # Archivos estáticos, estilos y scripts
├── package.json           # Dependencias y configuración del proyecto
├── package-lock.json      # Versiones exactas de dependencias
└── .gitignore
```

## Requisitos

- Node.js y npm instalados.
- MongoDB instalado y ejecutándose localmente, o una instancia accesible.
- Git, si deseas clonar el repositorio.

La versión actual trabaja con una conexión local a MongoDB y utiliza la base de datos `BD_Tareas`.

Puedes comprobar Node.js y npm con:

```bash
node --version
npm --version
```

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/jorge-soto-code/ProyectoCompuestudio.git
   cd ProyectoCompuestudio
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

   Este comando instala todas las dependencias declaradas en `package.json`, incluido `mongoose`. Si el proyecto muestra un error indicando que no encuentra Mongoose, ejecuta:

   ```bash
   npm install mongoose
   ```

   Si aparece un error similar con otra dependencia, ejecuta nuevamente `npm install` desde la carpeta raíz del proyecto.

3. Inicia MongoDB en tu equipo.

4. Revisa la conexión ubicada en `app.js`. La aplicación espera encontrar una base de datos llamada `BD_Tareas` en MongoDB local. Si utilizas otro usuario, contraseña, servidor o nombre de base de datos, actualiza la cadena de conexión antes de iniciar el servidor.

5. Inicia la aplicación:

   ```bash
   node app.js
   ```

   Durante el desarrollo también puedes utilizar:

   ```bash
   npx nodemon app.js
   ```

6. Abre el navegador en:

   ```text
   http://localhost:3001/
   ```

## Rutas principales
_____________________________________________________________________________
| Método   | Ruta           | Función                                       |
| ---------|----------------|-----------------------------------------------|
| `GET`    | `/`            | Muestra la página principal.                  |
| `GET`    | `/crear`       | Muestra el formulario para crear un registro. |
| `GET`    | `/usuario`     | Lista los registros almacenados.              |
| `POST`   | `/usuario`     | Guarda un nuevo registro.                     |
| `GET`    | `/usuario/:id` | Consulta un registro por su identificador.    |
| `PUT`    | `/usuario/:id` | Actualiza un registro existente.              |
| `DELETE` | `/usuario/:id` | Elimina un registro.                          |
|__________|________________|_______________________________________________|

## Base de datos

La conexión utiliza MongoDB y Mongoose. La base de datos configurada originalmente en el proyecto es `BD_Tareas`. La colección se genera a partir del esquema definido en `models/schema.js`.

El proyecto no necesita un archivo SQL porque MongoDB es una base de datos NoSQL. La base de datos y la colección se crean cuando la aplicación se conecta y guarda información por primera vez.

## Seguridad

La versión original del proyecto contiene la cadena de conexión a MongoDB directamente en `app.js`. Antes de publicar o compartir nuevas versiones, se recomienda:

- Revocar o cambiar cualquier contraseña que haya quedado expuesta en el historial del repositorio.
- Guardar la conexión en variables de entorno mediante un archivo `.env`.
- Agregar `.env` al `.gitignore`.
- No publicar usuarios, contraseñas ni cadenas privadas dentro del código.

## Solución de problemas frecuentes

### `Cannot find module 'mongoose'`

Este error indica que la dependencia no está instalada en `node_modules`, aunque aparezca declarada en `package.json`. Solución:

```bash
npm install mongoose
```

Después vuelve a iniciar el servidor:

```bash
node app.js
```

### Error de conexión con MongoDB

Verifica que MongoDB esté iniciado y que la cadena de conexión de `app.js` corresponda a tu usuario, contraseña, servidor y base de datos local. Si cambias la configuración, no publiques credenciales en GitHub; utiliza variables de entorno.

### El puerto 3001 está ocupado

Cierra el proceso que está usando el puerto o cambia el valor de `PORT` en `app.js` y abre la nueva dirección en el navegador.

## Contexto del proyecto

Este fue el proyecto final que presenté durante la técnica en Análisis y Desarrollo de Software. A diferencia de mis primeros proyectos, aquí pude aplicar conocimientos más avanzados de backend, separación de responsabilidades, rutas HTTP, modelos de datos, vistas EJS y persistencia con MongoDB.

Representa una etapa importante de mi evolución como desarrollador y demuestra cómo fui pasando de proyectos iniciales con PHP y MySQL a una aplicación con Node.js, Express y una base de datos NoSQL.

## Repositorio

[github.com/jorge-soto-code/ProyectoCompuestudio](https://github.com/jorge-soto-code/ProyectoCompuestudio)
