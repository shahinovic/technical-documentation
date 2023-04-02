function addCopyIcon(codeElement) {
  // Create the copy icon element
  const copyIcon = document.createElement("span");
  copyIcon.className = "copy-icon";
  copyIcon.innerHTML = `<i class="fa-solid fa-copy" style="color: #fff;"></i>`;

  // Add the copy icon element to the code element
  codeElement.parentNode.insertBefore(copyIcon, codeElement.nextSibling);

  // Initialize the ClipboardJS instance for the copy icon element
  new ClipboardJS(copyIcon, {
    text: () => codeElement.innerText.trim(),
  });
}
const codeElements = document.querySelectorAll("code");
codeElements.forEach(addCopyIcon);
