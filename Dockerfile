FROM node:17.1.0

WORKDIR /app/

COPY . .
RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]
