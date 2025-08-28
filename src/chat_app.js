const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

chatEmitter.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

function sendMessage(user, message, emitter) {
  emitter.emit("message", user, message);
}

// Export for use in other modules
module.exports = { chatEmitter, sendMessage };

// Demo messages (optional for testing)
if (require.main === module) {
  sendMessage("Алиса", "Всем привет!", chatEmitter);
  sendMessage("Боб", "Привет, Алиса!", chatEmitter);
  sendMessage("Чат-бот", "Добро пожаловать в чат", chatEmitter);
}