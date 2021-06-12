# image yang akan dipakai disini kita pakai node alpine karena sizenya kecil
FROM node:alpine 

# apk = apt karena di alpine
RUN apk update && apk add ca-certificates openssl && update-ca-certificates

#buat directory app
RUN mkdir /app

#copy semua directory yang ada di sini ke dalam /app
ADD . /app

# otomatis ke set di directory app
WORKDIR /app

RUN npm install
CMD npm start

ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.6.0/wait /wait
RUN chmod +x /wait

RUN npm install
CMD /wait && npm start