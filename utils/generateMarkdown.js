// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
${data.description}

  ## Table of Contents
  
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [Technology](#Technology)
  * [Contributors](#Contributors)
  * [Installation](#Installation)
  
  ## Live Link
  ${data.url}

  ## Installation
  ${data.install}
  
  ## Tests
  ${data.test}
  
  ## Technology
  ${data.tech}

  ## Contributors
  ${data.contributors}
  
  ## Contact
  If you have any questions please email or checkout my github:
  Email: ${data.email}
  Github: https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
