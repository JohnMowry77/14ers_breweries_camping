from flask import (Flask,render_template,request,redirect, jsonify)
from flask_pymongo import PyMongo


app = Flask(__name__)

# client = pymongo.MongoClient("mongodb+srv://dalberghini:Jjaxxpass2@project2.7h3eu.mongodb.net/FullData?retryWrites=true&w=majority")
# db = client.FullData
# mongo = PyMongo(app, uri = 'mongodb+srv://dalberghini:Jjaxxpass2@project2.7h3eu.mongodb.net/FullData?retryWrites=true&w=majority')

# app.config["MONGO_URI"] = 'mongodb+srv://dalberghini:Jjaxxpass2@project2.7h3eu.mongodb.net/FullData'# ?retryWrites=true&w=majority'
# mongo = PyMongo(app)

# client = pymongo.MongoClient("mongodb+srv://dalberghini:<password>@project2.7h3eu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
db = client.test

@app.route("/")
def index():
   
    return render_template('index.html')

@app.route("/jsonify")
def data():
    mountains = mongo.db.mountains_db.find_one()
    print(mountains)
    return None
    # return jsonify(list(mountains))

if __name__ == "__main__":
    app.run(debug=True)