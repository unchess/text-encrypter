const substitution = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u',
}

export const decrypt = (text) => {
    let newtext = text
    Object.keys(substitution).forEach((key) => {
        newtext = newtext.replaceAll(key, substitution[key]);
    })
    return newtext;
};

