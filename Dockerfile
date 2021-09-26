FROM node:14.17.6 AS Builder
COPY . .
RUN ["npm", "install"]
RUN [ "npm", "run", "build" ]

FROM nginx:1.15.2-alpine
COPY --from=Builder ./build/. /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]