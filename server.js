var express = require('express');
var url=require('url');
var exphbs  = require('express-handlebars');
var app = express()
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.static('static'));
app.get('/ProductList',function(req,res){
	var name=req.query.pname;
	var brand=req.query.brand;
	var price=req.query.price;
	var desc=req.query.desc;


		var products = [
		{'ProductName': name,'Brand':brand,'Price':price, 'Discription': desc},{'ProductName': 'VIVO Y71 (Matte Black, 16 GB)','Brand': 'VIVO','Price': '10990', 'Discription':'13MP Rear Camera | 5MP Front Camera "<br>" 3360 mAh Li-ion Battery Qualcomm Snapdragon 425 Processor'} ,
			{'ProductName': 'Diesel On Full Guard Smartwatch','Brand': 'Diesel','Price': '24494' ,'Discription':'Touchscreen Notifier'},
			{'ProductName': 'DSLR Camera Body with Single Lens','Brand':'Canon EOS 1300D ','Price': '23990','Discription':'18 megapixel APS-C CMOS sensor & DIGIC 4+, Wi Fi and NFC supported, 9 point AF with 1 centre cross type AF point'},
			{'ProductName': 'Apple iPad','Brand':'Apple','Price':'23900', 'Discription': 'Apple'},
			{'ProductName': 'Laptop','Brand':'HP','Price': '43990','Discription' : ' HP 15 Core i5 7th Gen  8 GB 1 TB HDD/Windows Laptop'}]


			res.render('ProductList',{data : products});
		});
		app.get('/',function(req,res){
		res.render('index');
		});


		app.get('/addProduct',function(req,res){
		res.render('addProduct');
		});
		app.listen(4000,function(){
		console.log('listening in 4000')
		});