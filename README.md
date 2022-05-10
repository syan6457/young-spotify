## Young Spotify
An app that offers the search and playback funcionalities of Spotify with additional features:
- lyrics display
- search bar voice input
- embedded music trivia game

As required by Spotify, using this App requires a valid Spotify Premium Account

# API
- Spotify Web API
  - Main API for this project that offers interactions with Spotify 
    - User has to authorize access when logging in through Spotify
    - Currently no user information is used by the application
      - Functions such as playlist retrival and modification may be added in the furure 
  - Specific APIs used:
    - Search API
      - Searching for items in Spotify Catalog
    - Player API
      - Web playback
  - Read more about it [here](https://developer.spotify.com/documentation/web-api/)
- Lyrics.ovh
  - An API that returns song lyrics based on the title and the artist. 
  - Read more about it [here](https://lyricsovh.docs.apiary.io/#)
- Open Trivia DB
  - A free-to-use trivia question database
  - Its JSON API provides trivia questions based on URL parameters
  - Read more about it [here](https://opentdb.com/)

# Backend
The backend is a simple express server that handles the app's authentication with Spotify (separate from user login). A backend is required because the chosen Spotify authorization flow involes the use of a client secrete obtained when registering the app on Spotify. The backend is hosted as serverless functions and is availble in a separate [repo](https://github.com/syan6457/young-spotify-server).

# Other information
Frontend framework: React
