#Utilizar o container do node para gerar o build 
FROM node:18-alpine as builder

WORKDIR /site/

COPY . ./

RUN npm install

RUN npm run build
RUN mv build portal-de-compras

#transferir o build para o apache
FROM httpd:2.4-alpine
COPY --from=builder /site/portal-de-compras/ /usr/local/apache2/htdocs/portal-de-compras/
COPY my-httpd.conf /usr/local/apache2/httpd.conf
EXPOSE 80
