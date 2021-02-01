Created a React app
Removed irrelevant files (optional)
Created a "components" directory in the src directory
Created TopRepos.js in ./components
Created a functional component named TopRepos in TopRepos.js
Exported the TopRepos component.
Imported TopRepos in App.js
Added <TopRepos /> to the App component
Rendered a nav in TopRepos
Added a state variable using the useState hook called languages and initialized it with an array of 5 languages
Mapped the languages array to create 5 buttons.
Created another state variable called selectedLanguage
Added an onClick function to the buttons that changes the selectedLanguage to that of the current button.
Added a css class called selected that turns the text color into orange.
Used the ternary operator to give the className of selected to the button if it has been clicked i.e. the selectedLanguage === language <--- language of the button
Now the button changes text color if it is clicked.
END

Ignore this for now
`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`
