priorityDB
==========

A collaborative task list with a focus on priority tasks implemented as a Django app. This specifically is the database backend - no UI is present in this app.

# Setup

This is the API layer for the priority app. It requires Django >= 1.5 and Tastypie. If you don't have these things installed, run the following (sudo might be required):

    sudo apt-get install python-pip
    sudo pip install django==1.5 python-dateutil python-mimeparse django-tastypie

Then check out this code and run the server. When you run the [priority UI](https://github.com/joshvillbrandt/priority), you will set the API URL to the IP address and port number below.

    git clone https://github.com/joshvillbrandt/priorityDB.git
    cd priorityDB
    python manage.py runserver 0.0.0.0:8000

A database is included in this repo. The admin credentials are admin:password. (The Django /admin/ interface is active.) If you wish to reset the database, remove the db.sqlite3 file and run:

    python manage.py syncdb
