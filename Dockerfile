# My first dockerized node app

FROM ubuntu:14.04

# install nodejs and npm
RUN apt-get update && apt-get install -y \
    nodejs \
    npm \
    git \
    git-core \
    build-essential \
 && ln -s /usr/bin/nodejs /usr/bin/node \
 && apt-get clean

 EXPOSE 8181

CMD ["node", "/opt/app"]