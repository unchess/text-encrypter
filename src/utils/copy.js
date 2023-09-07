import clipboardCopy from 'clipboard-copy';

export const copyToClipboard = (text) => {
    clipboardCopy(text);
};