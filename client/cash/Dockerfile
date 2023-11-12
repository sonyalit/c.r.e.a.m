
   # Pull base image
   FROM node:18

   # Set working directory
   WORKDIR /app

   # Install dependencies
   COPY package*.json ./
   RUN npm install
   # Copy source code
   COPY . .

   # Build app
   RUN npm run build

   # Start app
   CMD ["npm", "start"]
