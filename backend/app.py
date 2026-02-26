#! /usr/bin/env python3

from flask import Flask, jsonify, request
from flask_cors import CORS
from random import randint
# building a flask app and applying CORS to it
app = Flask(__name__)
CORS(app)

# we're making a simple API to roll a die

@app.route('/roll', methods=['GET'])
def roll_die():
    # get the number of sides from the query parameters, default to 6
    # roll the die
    result = randint(1, 6)
    # return the result as JSON
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)