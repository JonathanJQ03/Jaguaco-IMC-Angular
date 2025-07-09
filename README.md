# Jaguaco-IMC-Angular

Repositorio para la materia de Programación Web Avanzada, que contiene una calculadora de índice de masa corporal (IMC) desarrollada en Angular.

---

## Pasos para dockerizar la aplicación

```bash
# 1. Crear la imagen Docker (ajusta el usuario si es necesario)
docker build -t jaguacoa2/imc-app-angular .

# 2. Iniciar sesión en Docker Hub (te pedirá usuario y contraseña)
docker login

# 3. Subir la imagen a Docker Hub
docker push jaguacoa2/imc-app-angular

# 4. Crear y correr el contenedor en background mapeando puerto 8080 a 80
docker run -d -p 8080:80 --name imc-container-jaguaco jaguacoa2/imc-app-angular

# 5. Para detener y eliminar el contenedor cuando ya no lo necesites
docker rm -f imc-container-jaguaco

Pasos para iniciar la aplicación localmente sin Docker

# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/jaguaco-imc-angular.git
cd jaguaco-imc-angular

# 2. Instalar dependencias
npm install

# 3. Ejecutar la app en modo desarrollo y abrir el navegador
ng serve --open
