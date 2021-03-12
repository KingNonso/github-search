# github-search
A simple github search api with frontend in react and backend in django

## How to get started with this project
Please follow the following instructions to setup this project, if you have any troubles, raise an issue

Clone the repo at `git clone https://github.com/KingNonso/github-search.git`
### The Backend (Python/Django)
To setup the backend, you would need to enter into the backend directory 
and create a virtual environment into which you install the requirements file.
And then create the sqlite3 db and migrate the database, then start the server.

~Note: I configured my environment to use python3 and pip3, using a bash alias, hence python3 is recommended~ 
```
cd github-search/backend
virtualenv env
source env/bin/activate  # activate virtualenv for Mac OS/ Linux
env\Scripts\activate   # activate virtualenv for windows
sqlite3 db.sqlite3  # create an sqlite3 database then exist sql console with ctrl+c
pip install -r requirements.txt
python3 manage.py migrate # or you can use just 'python manage.py' commands
python3 manage.py createsuperuser  # to create a super admin user & password
python3 manage.py runserver  # runs server at 127.0.0.1:8000 
```
Django admin server should now be accessible via [127.0.0.1/admin](http://127.0.0.1/admin)  

### The Frontend
To setup the frontend, you would need to enter into the frontend directory 
and install node modules, then start the server.

```
cd github-search/frontend
yarn install
yarn start
```
The server should now be running at [localhost:3000](http://localhost:3000), where you can access the form
and enter a search term to see results.
