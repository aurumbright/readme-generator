# README Generator
[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

## Description
This node.js package allows you to generate a professional README from the command line. It uses the inquirer package and allows users to select their license, provide their email and GitHub profiles for contact info, and otherwise create a README markdown file of useful information for future users of their apps.

## Mock-Up
A video showing this app's functionality can be found [here](https://drive.google.com/file/d/1QH6ltB82r7kvF5BbiI2k284gnYXmRmmj/view?usp=sharing).

## Table of Contents

- [README Generator](#readme-generator)
  - [Description](#description)
  - [Mock-Up](#mock-up)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)

## Installation
Download the package and make sure to install all dependencies, including inquirer 8.2.4, before use.

## Usage
This is a command-line application. Navigate to the appropriate directory and use node index.js to begin running the application. Follow the prompts to generate your README.

## License
[The Unilicense](https://choosealicense.com/licenses/unlicense/)

Copyright (c) 2022 Eleanor Gold

## Contributing
Contributions to this project are welcome. Please ensure to update the README to reflect any changes.
  
## Tests
Test the app by running it in the command line. Resolve any problems or simply respond to the prompts.

## Questions
✉️ For questions about the app, you can reach me at my email: aurum.elean@gmail.com

[Find me on GitHub!](https://github.com/aurumbright)

_This README was generated with ❤️ by [readme-generator](https://github.com/aurumbright/readme-generator)_


## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
