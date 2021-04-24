from flask import Flask, render_template, redirect, url_for, json, jsonify
import json
import html

from flask import Flask, request
from flask_json import FlaskJSON, JsonError, json_response, as_json

# import scrape_mars

#Create an instance of Flask
app=Flask(__name__)
# # Use flast_pymongo to set up mongo connection
# app.config["MONGO_URI"] ="mongodb://localhost:27017/FullData"
# mongo=PyMongo(app)
json = FlaskJSON(app)

with open ('Resources/mountains_db.json', 'r') as myfile:
	data= myfile.read()



@app.route('/')
# @app.route("/")
# def home():
	# print("This is working")
		# return "Welcome to Map Page"
	# mongo_data=mongo.db.mountains_db.find_one()
	# #print(list(data_from_mongo))	
	# if mongo_data:
	# 	return render_template('index.html', mountains_db=mongo_data)
	# else:
		# return 'Error Try Again'
	#return render_template('index.html', dict=data_from_mongo)
	# return render_template('index.html')
	# return redirect('/')

# @app.route("/")
def index():
    return render_template('index.html', title="page", jsonfile=jsonify(data))



# def showjson():
#     SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
#     json_url = os.path.join(SITE_ROOT, "Resources", "mountains_db.json")
#     data = json.load(open(json_url))
#     return render_template('showjson.jade', data=data)


if __name__=='__main__':
	app.run(debug=True)