function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)`;
    } else if (license === 'Apache') {
        return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    } else if (license === 'GPL') {
        return `![License: GPL ](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    } else {
        return '';
    }
}

function renderLicenseLink(license) {
  if (license !== 'None') {
    return '\n* [License](#license)\n';
  }
  return '';
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

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

If you have any questions, please contact me at ${data.email}. You can also find me on GitHub. My username is ${data.github}.
`;
}

export default generateMarkdown;
