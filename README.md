# Servidor REST con patron DAO/DTO/Factory

##  

### Para instalar los paquetes necesarios usar:

``` npm install ```

### Para usar en local ejecutar:

``` npm run dev ``` or ``` npm start ```
### En el .env se debe cambiar el valor de la variable PERSISTENCE por MONGO o FIREBASE y luego arrancar el servidor

### Para probar, usar postman o cualquier otro cliente de apis de la siguiente:

get localhost:PORT/users
post localhost:PORT/users y mandar el objeto por ejemplo:

{
    "email": "usuario@email.com",
    "username": "usuario1",
    "password": "12345"
}
