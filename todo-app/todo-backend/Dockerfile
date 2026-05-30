FROM node:24

WORKDIR /usr/src/app

RUN chown -R node:node /usr/src/app

COPY --chown=node:node package.json package-lock.json ./

USER node

RUN npm ci

COPY --chown=node:node . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
