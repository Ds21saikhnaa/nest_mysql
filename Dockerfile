FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build


EXPOSE 3000

CMD [ "node", "dist/src/main.js" ]

#CMD ["npm", "run", "start"]