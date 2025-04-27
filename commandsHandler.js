const help = require('./commands/help');
const start = require('./commands/start');
const exit = require('./commands/exit');
const owner = require('./commands/owner'); // ⬅️ NEW IMPORT

const commands = {
    help,
    start,
    exit,
    owner   // ⬅️ ADD IT HERE
};

function executeCommand(input) {
    const [command, ...args] = input.split(' ');

    if (commands[command]) {
        commands[command](args);
    } else {
        console.log(`❌ Unknown command: ${command}. Type "help" to see available commands.`);
    }
}

module.exports = { executeCommand };
