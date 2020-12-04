# Tech Stack
- backend: Firebase
- routing: React Router
- state management: Context
- styling: styled-components

# Features
- user accounts
  - users can create an account, log in, and log out
  - users can read and update their profile information
- notes
  - users can create notes
  - once a note is created, it can be read, updated, and deleted by its creator
- social aspect
  - users can read the public profile information of other users
  - users can view a 'feed' of other users' notes, but cannot update or delete them
- favorites
  - users can 'favorite' the notes of others
  - users can view a list of the notes they've favorited

# External State (Stored, Persisted)
- user profile information
- users's notes
- users' favorites

For every external state in our application, we'll need to implement:
- backend
- client (communication, interface)
- Context components with useState and functions for getting and updating state

# Implementation
- React Components
  - User Interface
    - Pages
    - Layout Components
      - Headers, Navs, Footers, Profile
    - Domain Components
      - NotesFeed
      - Note
      - Favorites Button
    - Generic UI Components
      - Button
      - ButtonAsLink
      - Lists
      - Dropdowns
      - Spinners/Loaders
      - Alert Messages / Popups
  - State Components
    - Contexts (NotesProvider)
  - Functionality Components
    - Routing Component
    - Authentication and Authorization Components (PrivateRoute)
-  Non-React Code
  - backend integration
  - Auth
  - storage
  - domain models
