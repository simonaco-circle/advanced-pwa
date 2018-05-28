FROM nginx:alpine
LABEL author="Simona Cotin"
COPY ./dist/pwa /usr/share/nginx/html
EXPOSE 80 443
ENTRYPOINT ["nginx","-g","daemon off;"]
