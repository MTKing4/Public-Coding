
from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"       # it accepts HTML tags directly

@app.route("/bye")
def say_hi():
    return "bye"

@app.route("/username/<name>")          # Variable URLs: <name> is how you declare a variable in the url that will get passed to the function
def greet(name):
    return f"Hello {name+2}"


@app.route("/email/<path:email>")       # converter, syntax: <converter:variable>, basically static typing, by default without a converter the type is string, when type is path, whatever is typed in the url will be included in the variable, ex. /email/mohammad/2, the variable will be mohammad/2
def inbox(email):
    return f"Hello {email}"

@app.route("/phone/<name1>/<int:number>")       # Multiple variables
def call(name1, number):
    return f"Hello {name1} {number}"


if __name__ == "__main__":
    app.run(debug=True)               # this equates to flask run, now IDE buttons for starting and stopping the code will run and close the server, adding debud=True will enable the debugger, automatic reloader, and debug mode on flask app