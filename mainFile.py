from flask import Flask, render_template, request
from json import dump
from functions import Score
app = Flask(__name__)

@app.route('/cricketAPP01')
def index():
    
    return  render_template("components/index.html",score = Score())



if __name__ == '__main__':
    app.run()