FROM node:16
# Set the working directory to /app
WORKDIR /stk_pred_class/frontend-react
# Copy package.json and package-lock.json files
COPY package.json package-lock.json ./ 
# Install the required Node.js packages
RUN npm install
# Copy the rest of the React project
COPY . .
# Expose port 5173 to communicate with the host
EXPOSE 5173
# Command to run the React app
CMD ["npm", "run", "dev", "--", "--host"]