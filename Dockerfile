FROM node:18.14.0 
RUN mkdir /server
WORKDIR /server
COPY . .
RUN npm i
EXPOSE 3000
CMD npm start