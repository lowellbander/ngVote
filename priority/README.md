priority
========

A collaborative task list with a focus on priority tasks implemented as a Flask app.

This specifically is the UI frontend - no data is stored in this app. Both [priorityDB](https://github.com/joshvillbrandt/priorityDB/) and [ldap-json-api](https://github.com/joshvillbrandt/ldap-json-api/) are required to use this app.

# Setup

Install flask and clone this repo:

    pip install flask
    git clone https://github.com/joshvillbrandt/priority.git

# Run

Run the server:

    cd priority
    python application.py

You should then be able to access the server at `http://localhost:8000/`.

# Todo

I need to look more into the best practices found in [ng-boilerplate](http://joshdmiller.github.io/ng-boilerplate/) and [angular-app](https://github.com/angular-app/angular-app/).
