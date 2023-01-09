from flask import Flask, request
from flask import render_template, redirect, url_for
import datetime



app = Flask(__name__)

apiKey = "f3652ca78db0b27839381a4b6d65b24a2bec344ef964f8371c519ec0e12a339a"
NetworkID = "spothero"

@app.route("/")
def index():
    current_year = datetime.datetime.now().year
    return render_template("index.html", year=current_year)

@app.route("/es")
def es():
    current_year = datetime.datetime.now().year
    return render_template("es.html", year=current_year)

@app.route("/sitemap.xml")
def sitemap():
    current_year = datetime.datetime.now().year
    return render_template("sitemap.xml", year=current_year)

@app.route("/robots.txt")
def robots():
    current_year = datetime.datetime.now().year
    return render_template("robots.txt", year=current_year)

@app.route("/8e360f9b2f714240bb497848eba479fd.txt")
def indexNow():
    current_year = datetime.datetime.now().year
    return render_template("8e360f9b2f714240bb497848eba479fd.txt", year=current_year)

@app.route("/yandex_6110cff4bbd6dde6.html")
def Yandex():
    current_year = datetime.datetime.now().year
    return render_template("yandex_6110cff4bbd6dde6.html", year=current_year)

@app.before_request
def force_https():
    if request.endpoint in app.view_functions and not request.is_secure:
        return redirect(request.url.replace('http://', 'https://'), code=301)

if __name__ == "__main__":
    app.run()
