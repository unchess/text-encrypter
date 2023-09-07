const substitution = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
     'u': 'ufat',
}

export const encrypt = (text) => {
    let newtext = text
    Object.keys(substitution).forEach((key) => {
        newtext = newtext.replaceAll(key, substitution[key]);
    })
    return newtext;
}