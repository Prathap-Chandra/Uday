# Uday 

Subtraction API - when given digits in minuend and subtrahend, the API will generate the numbers and the corresponding options.
[You can find DB Schema here](https://github.com/Prathap-Chandra/Uday/blob/master/DB_SCHEMA.md)

## Getting Started

### Installing

Steps to run the app
```
git clone https://github.com/Prathap-Chandra/Uday.git
cd Uday
npm install
npm start
```

## Usage
- Subtraction API - Run the below CURL request in a terminal or postman.
```
curl --request POST 'http://localhost:3000/v1.0/maths/subtraction/' \
--header 'Content-Type: application/json' \
--header 'Content-Type: application/json' \
--data-raw '{
	"questions": 10,
	"digits": {
		"minuend": 5,
		"subtrahend": 3
	},
	"borrow": false
}'
```
You Should see the below response.

![Screenshot from 2020-04-27 10-45-24](https://user-images.githubusercontent.com/38378840/80336338-a429ad00-8874-11ea-838f-c4108a44b7e5.png)

Incase your request is not valid, you will get the below response

![Screenshot from 2020-04-27 10-50-21](https://user-images.githubusercontent.com/38378840/80336498-0c788e80-8875-11ea-9402-45b78af57f75.png)


