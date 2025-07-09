# Jaguaco-IMC-Angular
Repositorio para la materia de Programacion Web Avanzada - para una calculadora de indice de masa corporal 

# Pasos para dockerizar la aplicacion:
Crear la imagen jaguacoa2: nombre de usuario en mi docker hub docker build -t jaguacoa2/imc-app-angular .

Cargar la img: docker login docker push jaguacoa2/imc-app-angular

Crear repositorio docker run -d -p 8080:80 --name imc-container-jaguaco jaguacoa2/imc-app-angular

Eliminamos la imagen: docker rm imc-container-jaguaco

# Pasos para iniciar la app:
1. git clone
2. npm install
3. ng s -o
