const EventEmitter = require("events");

const chatEmitter = new EventEmitter();

chatEmitter.on("message", (user, message) => {
  console.log(`${user}: ${message}`);
});

function sendMessage(user, message, emitter) {
  emitter.emit("message", user, message);
}

sendMessage("Алиса", "Всем привет!", chatEmitter);
sendMessage("Боб", "Привет, Алиса!", chatEmitter);
sendMessage("Чат-бот", "Добро пожаловать в чат", chatEmitter);