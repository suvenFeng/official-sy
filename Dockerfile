
FROM node:14.4.0

LABEL key="pung" 

COPY ./ ./

EXPOSE 8081

RUN npm install

RUN npm run build

CMD npm start