React-Jobly Authorization, Tokens, and Things Elie Warned us About...

1. Login / Signup (forms)
   - Get Token (api response)
2. setToken (state)
   - Changing token state triggers our useEffect
     - useEffect: 
       - Decode the token, pull out the UserName
       - Send an Ajax request to users/:username
         - Receive userData 
       - useContext to set currUser from response
3. Token will stay in the State, but not get passed around.     
    - CurrUser will be our logic for "logged in?" 


**Step Two: Update Your Routes File**
Write them forms, baby
- [x] login form
  - [ ] Props: login Fn
  - [ ] Fields:
    - [ ] Username
    - [ ] Password
  - [ ] FlashMessage
    - [ ] alert alert-danger 
      - Insomnia returns {error:{message:"invalid username/password", Status:401}}

- [ ] signUp / edit form
  - [ ] Props: 
    - [ ] function (either signup or patch)
    - [ ] currUser = null
  - [ ] Fields:
    - [ ] Username
      - [ ] Add Logic: loggedIn ? disable input : enable/blank
    - [ ] Password
    - [ ] First Name
    - [ ] Last Name
    - [ ] Email
  - [ ] FlashMessage:
    - [ ] Array of error messages
 


**Routs**
- [ ] signUp
- [ ] login
- [ ] profile

**Homepage**
- [ ] signUp button
- [ ] login button
- [ ] Logic: If currUser not present, load buttons, else load:
        "Jobly
        All the jobs in one, convenient place.

        Welcome Back, test!"

- [ ] Logic to check for useContext:
  currUser 
  ? 
  display not-logged-in JSX
  : 
  display logged in JSX

**NavBar**
- [ ] Logic: If currUser not present, load buttons, else load: 
  - [ ] Jobly, Companies, Jobs, Profile, Log Out
- [ ] Logic to check for useContext:
  currUser 
  ? 
  display not-logged-in JSX
  : 
  display logged in JSX


**Functions**

**App.js:**
Token State
CurrUser State

-signup
  - accepts: formData
    - Make the axios post req.
      - setToken to response

-login
  - accepts: formData
    - Make the axios post req.
      - setToken to response

UseEffect [token]
- json-decode(token) => username
    - send GET w/username
      - setCurrUser with response


**ADD THIS TO MOST THINGS**
- [ ] Logic to check for useContext:
  currUser 
  ? 
  display not-logged-in JSX
  : 
  display logged in JSX

