// This function creates the license badge and returns an empty string if there is no license
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'GNU GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'ISC License':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
      break;
    case 'Mozilla Public License 2.0':
      return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
      break;
    case 'Boost Software License 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'The Unilicense':
      return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
      break;
    default:
      return '';
      break;
  }
}

// This function creates the license link and returns an empty badge if there is no license
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/';
      break;
    case 'Apache 2.0':
      return 'https://choosealicense.com/licenses/apache-2.0/';
      break;
    case 'GNU GPLv3':
      return 'https://choosealicense.com/licenses/gpl-3.0/';
      break;
    case 'ISC License':
      return 'https://choosealicense.com/licenses/isc/';
      break;
    case 'Mozilla Public License 2.0':
      return 'https://choosealicense.com/licenses/mpl-2.0/';
      break;
    case 'Boost Software License 1.0':
      return 'https://choosealicense.com/licenses/bsl-1.0/';
      break;
    case 'The Unilicense':
      return 'https://choosealicense.com/licenses/unlicense/';
      break;
    default:
      return '';
      break;
  }
}

// This function creates the license section for the markdown file and returns an empty badge if there is no license
function renderLicenseSection(license, person, year) {
  const licenseLink = renderLicenseLink(license);

  if (license) {
    return `[${license}](${licenseLink})

  Copyright (c) ${year} ${person}`;
  } else {
    return ``;
  }
}

// This function generates the markdown file
function generateMarkdown(data) {
  const newLicense = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license, data.person, data.year);

  return `# ${data.name}
${newLicense}

## Description
${data.description}

## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${licenseSection}

## Contributing
${data.contributing}
  
## Tests
${data.tests}

## Questions
✉️ For questions about the app, you can reach me at my email: ${data.email}

[Find me on GitHub!](https://github.com/${data.github})

_This README was generated with ❤️ by [readme-generator](https://github.com/aurumbright/readme-generator)_

`;
}

module.exports = generateMarkdown;
