from flask import Flask, make_response, jsonify, render_template
from flask_cors import CORS
from database import load_projects_from_db

app = Flask(__name__,
            static_url_path='',
            static_folder='../client/dist',
            template_folder='../client/dist')

CORS(app)

@app.route('/')
@app.route('/<int:id>')
def index(id=0):
    return render_template("index.html")

@app.route('/projects', methods=['GET'])
def projects():
    projects = load_projects_from_db()
    return make_response(jsonify(projects), 200)
 

if __name__ == '__main__':
    app.run(port=5555, debug=True)