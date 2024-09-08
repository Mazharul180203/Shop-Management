# Use an official Node.js image as the base image
FROM node:16-alpine

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the backend API port
EXPOSE 5030

# Start the backend server
CMD ["npm", "start"]
