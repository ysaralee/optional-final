# CPSC113 Social todo app

This is my app. It is going to be sick.

## How to run this

Get the repo

    git clone https://github.com/kljensen/cpsc113-social-todo-node
    cd cpsc113-social-todo-node

Install the dependencies

    npm install

You'll need to start MongoDB somewhere to store data. And, you'll need to
choose a secret for signing browser cookies.

You can run the server with something similar to

    PORT=5000 SESSION_SECRET='sdf' MONGO_URL="mongodb://localhost:27017/social-todo" ./node_modules/.bin/nodemon index.js

where your values of `PORT`, `SESSION_SECRET`, and `MONGO_URL` could be different.
If you are on Cloud9, don't set `PORT`. `SESSION_SECRET` can be whatever you
want.

To see how this app was built, follow these videos. (I should have indexed the
videos by commit so that you could rewind this code. That would tough,
perhaps next time.) This code passes 31 of the tests in the test suite. It
does everything except task completion and deletion. It is roughly 250 lines
long, many of which are comments.

1. [Overview of social todo app](https://youtu.be/fZrtAwUUgyE)
1. [Running the testing code](https://youtu.be/7U5elRuEgR4)
1. [Getting started with node and express](https://youtu.be/BJPDWI4Muhg)
1. [add view layer to express](https://youtu.be/LswuoN0Ru68)
1. [add login forms to views](https://youtu.be/QiVs4iaRMco)
1. [handle submitted registration form](https://youtu.be/VKz4tKH2mME)
1. [Add mongodb support](https://youtu.be/fh5yIRR5eTU)
1. [Add form validation ](https://youtu.be/kMWyKoJ_cwc)
1. [Add session handling](https://youtu.be/vRxzjfxfCc8)
