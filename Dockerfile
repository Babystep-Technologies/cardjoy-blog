# Match CI (.github/workflows/deploy.yml uses Node 20). Astro needs >=18.20.8.
FROM node:20

WORKDIR /app

# Copy manifest + lockfile first for better layer caching. yarn.lock is the
# source of truth (CI runs `yarn install`); there is no package-lock.json.
COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

EXPOSE 3003

# Dev server on 0.0.0.0:3003 (see the "dev" script in package.json)
CMD ["yarn", "dev"]
