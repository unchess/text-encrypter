
export const copyToClipboard = (event) => {
    const message = document.getElementById('converted-message').innerText;
    navigator.clipboard.writeText(message);
};