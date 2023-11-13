// Function to copy the text
function copyText() {
  const textElement = document.getElementById('contractText');
  const textToCopy = textElement.textContent;

  // Create an invisible textarea and add the text to it
  const textArea = document.createElement('textarea');
  textArea.value = textToCopy;
  document.body.appendChild(textArea);

  // Select the text in the textarea and copy it
  textArea.select();
  document.execCommand('copy');

  // Remove the invisible textarea
  document.body.removeChild(textArea);

  // Show a message that the text has been copied
  alert('Text has been copied: ' + textToCopy);
}

// Add a click event listener to the button
const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyText);
