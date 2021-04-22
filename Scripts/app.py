from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
# import scrape_mars

#Create an instance of Flask
app=Flask(__name__)
# Use flast_pymongo to set up mongo connection
app.config["MONGO_URI"] ="mongodb://localhost:27017/classDB"
mongo=PyMongo(app)

@app.route('/')
def home():
	mongo_data=mongo.db.brewery_14ers_db.find_one()
	#print(list(data_from_mongo))	
	if mongo_data:
		return render_template('index.html', brewery_14ers_db=mongo_data)
	else:
		return 'Error Try Again'
	#return render_template('index.html', dict=data_from_mongo)

	return redirect('/')

if __name__=='__main__':
	app.run(debug=True)