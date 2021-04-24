from flask import (Flask,render_template,request,redirect, jsonify)
from flask_pymongo import PyMongo


app = Flask(__name__)

# client = pymongo.MongoClient("mongodb+srv://dalberghini:Jjaxxpass2@project2.7h3eu.mongodb.net/FullData?retryWrites=true&w=majority")
# db = client.FullData
mongo = PyMongo(app, uri = 'mongodb+srv://dalberghini:Jjaxxpass2@project2.7h3eu.mongodb.net/FullData?retryWrites=true&w=majority')

@app.route("/")
def index():
   
    return render_template('index.html')

@app.route("/jsonify")
def data():
    mountains = mongo.db.mountains_db.find()
    
    return jsonify(mountains)

if __name__ == "__main__":
    app.run(debug=True)