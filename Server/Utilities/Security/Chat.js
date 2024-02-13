

const Declarations = JSON.parse(require('fs').readFileSync('./Infrastructure.json'));
const { ParseToFamilyFriendly } = require('./FamilyFriendly');

const { MaxLength } = Declarations.Chat.Message;

const ParseMessage = (Message) => {
    if(Message.length > MaxLength)
        Message = Message.slice(0, MaxLength);
    return ParseToFamilyFriendly(Message);
}

module.exports = { ParseMessage };