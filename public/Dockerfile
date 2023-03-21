FROM node:16

COPY . /app

WORKDIR /public

RUN  npm init && npm install && npm install sqlite3 && npm install express && npm install sequelize && npm install bcrypt && npm run seed

EXPOSE 3000

CMD [ "node", "npm run client-dev"]