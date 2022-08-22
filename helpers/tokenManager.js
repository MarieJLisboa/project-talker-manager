const fs = require('fs');

const storedTokensPath = '../data/tokens.txt';

const getSavedTokens = () => {
    const data = fs.readFileSync(storedTokensPath);
    return data;
};

const storeToken = (token) => {
    let savedTokens = getSavedTokens();
    if (savedTokens === '' || !savedTokens) {
        return fs.writeFileSync(storedTokensPath, token);
    } 
    savedTokens += `\n${token}`;
    fs.writeFileSync(storedTokensPath, savedTokens);
};

module.exports = {
    storeToken,
    getSavedTokens,
};