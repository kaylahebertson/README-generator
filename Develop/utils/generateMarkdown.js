function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
    } else if (license === 'Apache') {
        return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (license === 'GPL') {
        return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else {
        return '';
    }
}

function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === 'Apache') {
        return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license === 'GPL') {
        return `[GPL](https://opensource.org/licenses/gpl-3.0)`;
    } else {
        return '';
    }
}

function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `## License
        This project is licensed under the ${license} license.`;
    }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}
## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Questions
If you have any questions, please contact me at ${data.email}. You can also find me on GitHub at [${data.github}](
`;
}

export default generateMarkdown;
