// Require the chalk module
const chalk = require('chalk').default; // Add .default to access the default export


// Use chalk to style and log text to the terminal
console.log(chalk.blue('This text is blue!'));
console.log(chalk.red.bold('This text is bold and red!'));
console.log(chalk.green.bgWhite('This text has a green foreground color and white background!'));
console.log(chalk.yellow.underline('This text is underlined and yellow!'));
