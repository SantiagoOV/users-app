# Usar una imagen base Node.js
FROM node:18

# Establecer el directorio de trabajo en la aplicación
WORKDIR /app

# Copiar los archivos de configuración
COPY package*.json ./

# Instalar las dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Compilar la aplicación
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD [ "npm", "run", "start:dev" ]