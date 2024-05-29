#!/bin/bash

git clone https://github.com/ollama/ollama.git
cd ollama
go generate ./...
go build .

# ./ollama serve &
# ./ollama run tinyllama