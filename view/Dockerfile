FROM node:12.16.2-alpine

WORKDIR '/app/'

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]
#CMD ["npm","start"]