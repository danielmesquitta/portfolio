const nextTranslate = require('next-translate');

const env = require('./.env.json');

module.exports = { ...nextTranslate(), env };
