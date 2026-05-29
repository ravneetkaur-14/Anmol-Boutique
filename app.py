from flask import Flask, render_template, request, redirect
import sqlite3

app = Flask(__name__)

# =========================
# DATABASE CONNECTION
# =========================

def connect_db():
    conn = sqlite3.connect('boutique.db')
    conn.row_factory = sqlite3.Row
    return conn

# =========================
# CREATE TABLE
# =========================

def create_table():

    conn = connect_db()

    conn.execute('''

        CREATE TABLE IF NOT EXISTS contacts(

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            name TEXT NOT NULL,

            phone TEXT NOT NULL,

            message TEXT NOT NULL

        )

    ''')

    conn.commit()
    conn.close()

create_table()

# =========================
# HOME PAGE
# =========================

@app.route('/')
def home():
    return render_template('index.html')

# =========================
# GALLERY PAGE
# =========================

@app.route('/gallery')
def gallery():
    return render_template('gallery.html')

# =========================
# PRICES PAGE
# =========================

@app.route('/prices')
def prices():
    return render_template('prices.html')

# =========================
# CONTACT PAGE
# =========================

@app.route('/contact', methods=['GET', 'POST'])

def contact():

    if request.method == 'POST':

        name = request.form['name']
        phone = request.form['phone']
        message = request.form['message']

        conn = connect_db()

        conn.execute(

            'INSERT INTO contacts(name, phone, message) VALUES(?,?,?)',

            (name, phone, message)

        )

        conn.commit()
        conn.close()

        return redirect('/contact')

    return render_template('contact.html')

# =========================
# VIEW DATABASE DATA
# =========================

@app.route('/admin')

def admin():

    conn = connect_db()

    data = conn.execute(

        'SELECT * FROM contacts ORDER BY id DESC'

    ).fetchall()

    conn.close()

    return render_template('admin.html', data=data)

# =========================
# RUN APP
# =========================

if __name__ == '__main__':
    app.run(debug=True)