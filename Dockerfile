# Use the official Node.js image
FROM node:22.21.1-alpine3.21

RUN apk add --no-cache libc6-compat git

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to leverage Docker caching
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./

# Install dependencies
RUN --mount=type=cache,target=/root/.npm \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi


# RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port Next.js runs on
# EXPOSE 3000

# Start the Next.js application
CMD ["npm", "run", "docker-dev"]
