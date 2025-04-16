FROM node:18-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install

# Hapus deploy dari build time karena butuh env (lihat catatan di bawah)
# RUN npm run deploy

CMD [ "node", "index.js" ]
