const readline = require('readline');
const { executeCommand } = require('./commandsHandler');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'MessengerBot > '
});

console.log('Welcome to Messenger Bot CLI! Type "help" to see available commands.');

rl.prompt();

rl.on('line', (line) => {
    const input = line.trim();
    executeCommand(input);
    rl.prompt();
}).on('close', () => {
    console.log('Exiting Messenger Bot CLI. Byee!');
    process.exit(0);
});
