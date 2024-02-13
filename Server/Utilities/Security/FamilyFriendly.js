

const Declarations = JSON.parse(require('fs').readFileSync('./Infrastructure.json'));
const { ReplaceAll } = require('../Algorithms/String');

const { BlockedWords } = Declarations.FamilyFriendly;

const ReplaceBlockedWord = (BlockedWord, Message) => {
    let FamilyFriendlyWord = BlockedWord;
    for(let Iterator = 0; Iterator < BlockedWord.length / 2; Iterator++)
        FamilyFriendlyWord = 
            FamilyFriendlyWord.substr(0, Iterator) 
            + '*' 
            + FamilyFriendlyWord.substr(Iterator + 1);
    return ReplaceAll(Message, BlockedWord, FamilyFriendlyWord);
}

const ParseToFamilyFriendly = (Message) => {
    if(!Message)
        return;
    BlockedWords.forEach((Word) => {
        Word = Word.toLowerCase();
        if(Message.toLowerCase().includes(Word))
            Message = ReplaceBlockedWord(Word, Message);
    });
    return Message;
}

module.exports = { ParseToFamilyFriendly };