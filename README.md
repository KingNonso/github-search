# github-search
A simple github search api with frontend in react and backend in django

## How to get started with this project
Please follow the following instructions to setup this project, if you have any troubles, raise an issue

Clone the repo at `git clone https://github.com/KingNonso/github-search.git`
### The Backend (Python/Django)
To setup the backend, you would need to enter into the backend directory 
and create a virtual environment into which you install the requirements file.
And then create the sqlite3 db and migrate the database, then start the server
```
cd github-search/backend
virtualenv env
sqlite3 db.sqlite3  # create an sqlite3 database
pip install -r requirements.txt
python manage.py migrate
python manage.py createsuperuser  # to create an admin user
python manage.py collectstatic
python manage.py runserver  # runs server at 127.0.0.1:8000 
```
You make then go to 127.0.0.1/admin to access the admin records 

### The Frontend
To setup the frontend, you would need to enter into the frontend directory 
and install node modules, then start the server.

```
cd github-search/frontend
yarn install
yarn start
```
The server should now be running at localhost:3000, where you can access the form
and enter a search term to see results.
