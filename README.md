# A Single Page Notes App
This is a single page notes app built solely in JavaScript. You can add notes without refreshing the page.

## Installation
For local viewing only use
```
git clone git@github.com:kirillzabrodin/notes-SPA.git
open ./Relative_path/to_the/Project_folder/index.html
```
for localhost hosting
```
git clone git@github.com:kirillzabrodin/notes-SPA.git
npm install
npm start
open http://localhost:8080
```
Please note that 8080 is a default and might be different for you.

## Testing

Testing is done via a framework created by yours truly and Luisa Theodoro. It is called Ruzilian and to run it all you have to do is look at the SteroidNeymat.html page in a browser.

## Contributing

Please feel free to submit a Pull Request with additional code if you think some further functionality would be useful. The criteria are for the code to be solely vanilla JS and it must be tested using the framework(that could be expanded upon via a pull request too).

## Deployment

Type
```
heroku create
```
into the terminal and wait for the command to execute. Check that ```git remote -v``` shows the new heroku remote and then deploy by pushing to the master branch of the heroku remote.

## Live Demo

The app is currently deployed on https://stormy-escarpment-10799.herokuapp.com/#home and can be accessed there. Any questions feel free to open issues.
