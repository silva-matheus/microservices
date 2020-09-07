# Define Node Image
FROM node:latest

# Create app directory
WORKDIR /usr/src/product

# Install Dependencies
COPY package*.json ./

RUN npm install

# Copy APP Source Code to Image
COPY . .

# Map the ports <Container Port>:<Application Port>
# EXPOSE 3000:3000

# Run the Application
CMD [ "node", "server.js" ]



