# Github Search 
A simple github search api with frontend in react and backend in django
- [x] a single page React application and small server side application to process API requests from the client side
- [x] The end user is able to click on one of 3 tabs: “JavaScript”, “CSS” or “HTML”
- [x] On click, the user is able to see a search input and submit button to perform a
code search
- [x] When submitting, the application is able to asynchronous request to the server
side to search code on GitHub
- [x] The server application caches API request using a filebased system o prevent the client from hitting the endpoint’s rate limit.
- [x] A history of searches should be stored in an SQLite3 table called “searches” containing an ID, the client IP, the search and the search date and time
- [x] The search results are rendered in a table showing: the “name”, “path” and a link to “html_url”.

## How to get started with this project
Please follow the following instructions to setup this project, if you have any troubles, raise an issue

Clone the repo at `git clone https://github.com/KingNonso/github-search.git`
### The Backend (Python/Django)
To setup the backend, you would need to enter into the backend directory 
and create a virtual environment into which you install the requirements file.
And then create the sqlite3 db and migrate the database, then start the server.

*Note: I configured my environment to use python3 and pip3, using a bash alias, hence python3 is recommended* 
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

##What can be improved

Frontend | Backend
-------- | -------
The styling: Frontend was done in bootstrap could use a lot of styling help  | Caching: using memcache for more robust and distributed caching instead of a filebased system
Add Pagination | Add some pagination to the retrieved request and paginate it 
Large App.js (not to large though) which can be further broken down as the project scope increase | use a better database instead of sqlite3 (e.g. postgres)
Use Atomic Design methodology | Use API Driven Design Methodology
Add more test cases | Add more test cases
:thinking: | tighten CORS Headers to only allow our requested URL (from the frontend)
:thinking: | Use .env to store site secrets
:thinking: | Add only required IP addresses and domain names to ALLOWED_HOSTS in settings
:sunglasses: | More robust settings file for local, dev and prod use cases


