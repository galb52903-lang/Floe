# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the static website files to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 for the web server
EXPOSE 80

# The default command for the Nginx image starts the server automatically, 
# so we don't need an explicit CMD.
