from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Renderiza la página principal ubicada en templates/index.html
    return render_template('index.html')

if __name__ == '__main__':
    # Modo debug para ver cambios en vivo durante el desarrollo
    app.run(debug=True)