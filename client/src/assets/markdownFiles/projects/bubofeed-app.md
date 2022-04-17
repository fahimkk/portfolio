Bubofeed is an Android App which provides an effortless browsing experience which helps you find and share recommendations for movies, TV shows, news, videos, cryptos and restaurants with your closest circle.

## Technologies

Fronted is developed completly using React-Native framework. Redux and Redux-Thunk are used for state management.

Backend is developed with the help of Python latest asynchronous framework FastAPI. Postgres database and for in-memmory we used Redis.

There are several microservices for scrapping latest movies, news, videos, crypto data, sending notification etc. All the services are written in Python and Dockerized.

Backend and microservices are deployed in Google Cloud with the help of Github, Google Cloud Build and Docker.

Secured the connection from Android App to backend server by using nginx and certbot.
