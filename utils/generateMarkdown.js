//function to add license badges to each license choice
function addLicenseBadge(license) {
  if (license === "GNU GPL v2") {
    return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  }
  else if (license === "GNU GPL v3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  else if (license === "GNU LGPL v3") {
    return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
  }
  else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else (license === "No License") 
    return ( ``)
}
//function to return license choice to the readme
  function writeLicenseInfo(license) {
    return (`## License Info
This is licensed with ${license} `)
}
//function for writing readme file and grabbing data from user input from index.js
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${writeLicenseInfo(data.license)}
  ${addLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Use](#use)
  * [Tests](#tests)
  * [Contributors](#contributors)
  ## Installation/Technologies used:
  ${data.installation}
  ## Use
  ${data.use}
  ## Tests
  ${data.tests}
  ## Contact for contributers
  ${data.contributors}
  ## My Contact Info
  ${data.github}
  ${data.email}
  

`;
}
//to get this module for index.js
module.exports = generateMarkdown;
  