# ---------- Build stage ----------
FROM node:18 AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build-time argument for backend URL
ARG REACT_APP_LINK_SERVICE_URL
ENV REACT_APP_LINK_SERVICE_URL=$REACT_APP_LINK_SERVICE_URL

# Build React app
RUN npm run build

# ---------- Production stage ----------
FROM nginx:alpine

# Remove default nginx config
RUN rm -rf /usr/share/nginx/html/*

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
# At container start, replace placeholder with ALB backend URL
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/config.template.js > /usr/share/nginx/html/config.js && nginx -g 'daemon off;'"]
