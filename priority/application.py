from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', STATIC_URL='/static/')

if __name__ == '__main__':
    #http://stackoverflow.com/questions/9036013/python-command-line-parameters
    app.run(host='0.0.0.0', debug=True, port=8000)