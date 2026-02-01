from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route("/")
def home():
    random_number = random.randint(1, 10)
    list_ = [3, 4, 6, 7]
    return render_template('index.html', num=random_number, my_list=list_)


@app.route("/blog/<numb>")
def get_blog(numb):             # numb is the parameter that jinja is gonna pass 3 into
    print(numb)
    return "Meow"

if __name__ == "__main__":
    app.run(debug=True)