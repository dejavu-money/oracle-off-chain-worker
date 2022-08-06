# TODO: we should use multi-stage builds
FROM node:16.16.0-bullseye
COPY . ./app
WORKDIR /app
RUN npm install
RUN npm run build
ENV NODE_ENV production
CMD ["sh", "./start-docker.sh"]
