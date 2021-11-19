.PHONY: all test clean

install:
	npm install --save-dev mocha
	npm install

test:  
	npm test

start_dev:
	npm start