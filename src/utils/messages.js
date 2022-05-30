function generateMessage(text, username) {
    return {
        username,
        text,
        createdAt: new Date().getTime(),
    };
}

function generateLocationMessage(url, username) {
    return {
        username,
        url,
        createdAt: new Date().getTime(),
    };
}

module.exports = {
    generateMessage,
    generateLocationMessage,
};
