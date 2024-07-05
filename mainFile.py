from flask import Flask, render_template, request
from functions import Score
app = Flask(__name__)

@app.route('/')
def index():
    
    return  render_template("components/index.html",score = Score())



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8010,debug=True)