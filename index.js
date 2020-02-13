const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([ {
    message: "Enter your GitHub username",
    name: "username"
    
  },{
      type: "input",
      message: "What is the title of your project?",
      name: "title"

  },{
      type: "input",
      message: "Instructions for installing:",
      name: "instructions"
  },{
      type: "input",
      message: "How do you use your project?",
      name: "usage"
  },{
      type: "input",
      name: "contributing",
      message: "Who contributed to this project?"
  }])
  .then(function({ username, title, usage, instructions, contributing }) {
    const queryUrl = `https://api.github.com/users/${username}`;
    axios
    .get(queryUrl)
    .then(function(res){
      userImg = res.data.avatar_url;
      console.log(res.data.avatar_url);

       readme = `# Title: ${title} \n## Instructions \n${instructions} \n## Usage \n${usage} \n## Contributors \n${contributing} \n\n\n ![userimg](${res.data.avatar_url})`;
      
      fs.writeFile("README.md", readme, function(err){
        if(err) throw err;
      }) 
         
        
    });

  
  });
