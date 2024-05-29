# TinyChatApp


Welcome to TinyChatApp, a minimal chat bot created with React and Ollama. This application offers a simple yet engaging chat experience powered by cutting-edge technology.

# Instructions
To get started, follow these simple steps (*Make sure `go` and `node-js` is pre-installed*):

1. **Install Dependencies**: Begin by installing the necessary dependencies for the application. 
```bash
npm install
npm run ollama_setup
```

2. **Installing and Setting up tinyllama** : Clone the Ollama repository to integrate its functionalities into TinyChatApp. Note that the installation process includes setting up Tinyllama, as it's optimized for smooth operation across various hardware configurations.    
```bash
git clone https://github.com/ollama/ollama.git
cd ollama
go generate ./...
go build .

./ollama serve # Starts the server

# On a separate terminal window download tinyllama.
./ollama run tinyllama
```

3. **Exit Command Line**: After completing the setup, exit from the command line interface by using the `Ctrl + c`.

4. **Start the Application**: Once the dependencies are installed and the setup is complete, launch the application in development mode. This command initiates the app and allows you to interact with the chat bot seamlessly.
```bash
npm run dev
```
