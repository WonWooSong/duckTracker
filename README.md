# Duck Tracker Web Application

This project is to make a web application where it can gather how ducks are being fed in parks arond the world.

## Getting Started

### Prerequisites

* Python 3 (preferred version 3.7.8)
* Django (preferred version 3.1)
* React
* npm

### Installing

* please have two separate terminals for backend and frontend

Run the following commands to get started for backend:

```
cd backend/src
source venv/bin/activate

pip install Django
pip install djangorestframework
pip install django-cors-headers

python manage.py makemigrations ducks
python manage.py migrate
```

Run the following commands to get started for frontend:

```
cd frontend/gui

npm install
npm i --save react-redux
npm i --save redux redux-thunk

```


## Deployment

* please have two separate terminals for backend and frontend

Run the following commands to get deploy for backend:

```
cd backend/src
source venv/bin/activate
python manage.py runserver
```

Run the following commands to get deploy for frontend:

```
npm start
```

## Built With

* [python 3](https://www.python.org/) - Language used
* [django](https://www.djangoproject.com/) - The web framework used
* [django-rest-framework](https://www.django-rest-framework.org/) - Rest framework used
* [Ant Design](https://ant.design/) - Frontend Design

## Author

* **Won Woo Song** - [Github](https://github.com/WonWooSong)

