

export const StringGenerator = (Length = 8, Characters = '123456789abcdefABCDEF') => {
    let Buffer = '';
    for(let Iterator = 0; Iterator < Length; Iterator++)
        Buffer += Characters.charAt(Math.floor(Math.random() * Length));
    return Buffer;
}