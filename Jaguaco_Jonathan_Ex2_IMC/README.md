1. Crear la imagen
jaguacoa2: nombre de usuario en mi docker hub
docker build -t jaguacoa2/imc-app-angular .

2. Cargar la img:
docker login
docker push jaguacoa2/imc-app-angular

3. Crear repositorio
docker run -d -p 8080:80 --name imc-container-jaguaco jaguacoa2/imc-app-angular

4. Eliminamos la imagen:
docker rm imc-container-jaguaco


