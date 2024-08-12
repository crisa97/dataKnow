# Prueba Full Stack de DataKnow

## Descripción

Este repositorio contiene el código y los cambios realizados durante la prueba suministrada por DataKnow. El proyecto se desarrolló en Node.js, utilizando las librerías Express, Axios, y el ORM Sequelize.

El proceso incluyó:

1. **Creación del proyecto**: Inicialmente, se configuró un proyecto en Node.js.
2. **Configuración de la base de datos**: Se creó una base de datos y se generaron las migraciones que especifican las tablas con sus respectivos campos y relaciones. También se definieron los modelos correspondientes a cada una de las tablas.
3. **Carga de datos**: Se creó un seeder con la información precargada para la tabla "documentos".
4. **Migración y seeders**: Se ejecutaron las migraciones en la base de datos utilizando Sequelize y se cargaron los datos precargados.
5. **Desarrollo de servicios y controladores**: Se implementaron los servicios para cada modelo de la base de datos y se generaron los controladores correspondientes.
6. **Creación de rutas**: Se definieron las rutas para cada controlador.
7. **Verificación**: Se probó la arquitectura MVC del backend utilizando Postman, donde se creó una colección para testear el CRUD de cada uno de los endpoints definidos.

## Ejecución del Backend

A continuación, se describe brevemente cómo descargar y ejecutar el backend localmente para verificar su funcionalidad:

1. **Clonar el repositorio**: Accede al repositorio en GitHub. En la opción **Code**, selecciona **HTTPS** y copia el enlace proporcionado. Luego, ejecuta el siguiente comando en tu consola para clonar el repositorio:

   ```bash
   git clone https://github.com/bedwin1997/dataKnow.git
    ```

2. **Instalación de dependencias:**: Una vez clonado el repositorio, ingresa a la carpeta **dataKnow** ejecuta el comando: 

    ```bash
    npm install 
    ```

3. **Creación de la base de datos**: Ingresa a la carpeta src y ejecuta el siguiente comando para crear la base de datos en **MySQL**:

    ```bash
    npx sequelize-cli db:creat
    ```

4. **Migración de las tablas a la base de datos**: Ejecuta el siguiente comando para migrar cada una de las tablas a la base de datos con sus respectivas relaciones:

    ```bash
    npx sequelize-cli db:migrate
    ```

5. **Creación de los seeders**: Ejecuta el siguiente comando para cargar los datos precargados de los tipos de documentos:
    ```bash
    npx sequelize-cli db:seed:all
    ```

6. **Ejecución del backend**: Verifica que estás en la carpeta src y corre el backend utilizando el siguiente comando:
    ```bash
    npm run dev
    ```

7. **Validación del backend**: Para validar que el backend se encuentre corriendo correctamente, ingresa a la siguiente URL [local](http://localhost:3100). Esto debería mostrar un **Hello world!**.

8. **Validación de rutas**: Para validar las rutas, abre el archivo `index.js`, donde existe un apartado de versionamiento de APIs entre las líneas 27 y 29, el cual indica cómo ingresar a cada una de las rutas del backend. Si deseas saber cómo están estructuradas las rutas, explora la carpeta **V1/routes/**, donde podrás visualizar en cada fichero cómo está definida cada una de las rutas.





