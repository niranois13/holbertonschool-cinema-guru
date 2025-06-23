# 🎬 Cinema Guru

![cinema_guru](https://i.imgur.com/3qegTgZ.jpeg)

A simple React-based web app to keep track of your favorite movies and build a "Watch Later" list. This project is part of a school assignment and uses a containerized backend provided separately.

## 🚀 Project Overview

The Cinema Guru app allows users to:
- Browse movies
- Mark movies as **Favorites**
- Add movies to a **Watch Later** list
- Navigate between pages using React Router

---

## ⚙️ Tech Stack

### Frontend
- **React** `^18.3.1`
- **React DOM** `^18.3.1`
- **React Router DOM** `^7.6.2`
- **React Scripts** `5.0.1`

### Backend
- A **provided containerized backend**, assumed to expose RESTful APIs for movie data and user preferences (e.g., favorite and watch later lists).

---

## 🛠️ Getting Started

### 1. Clone the Repository

```
git clone https://github.com/niranois13/holbertonschool-cinema-guru.git
cd pocket-movie-app
````

### 2. Install Dependencies (Using Yarn)

```
yarn install
```

### 3. Start the Development Server

```
yarn start
```

The app will run at `http://localhost:3000`.

> ⚠️ Make sure the backend container is running and accessible. The frontend will try to fetch data from it.

---

## 📁 Project Structure

```
holberton-cinema-guru/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
```

---

## 📦 Backend Setup

Ensure the provided backend container is running. If using Docker:

```
docker-compose build --no-cache --force-rm
docker-compose up
```


## ✨ Features

* **Favorites:** Add or remove movies from your favorites.
* **Watch Later:** Maintain a personal watchlist.
* **Routing:** Navigate using a clean URL structure.
