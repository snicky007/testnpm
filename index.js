var app = require("koa")();

app.use(function *(){
	this.body = "koa say hi";
});

app.listen(3000);

console.log("Application started. ");