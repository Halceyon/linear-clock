interface IFrameElement extends Element {
  contentDocument: Document;
}

export const updateDarkMode = (window: Window, isDarkMode: boolean) => {
  // Access the story's HTML iframe
  const iframe = window.parent.document.querySelector('#storybook-preview-iframe') as IFrameElement;
  if (iframe) {
    // get the child HTML document from the iframe
    const childDocument = iframe.contentDocument;
    if (childDocument) {
      // set the background color of html
      const html = childDocument.documentElement;
      if (html) {
        html.classList.remove('dark', 'light');
        html.classList.add(isDarkMode ? 'dark' : 'light');
      }
      // set the background color of the body
      const body = childDocument.body;
      if (body) {
        body.classList.remove('dark', 'light');
        body.classList.add(isDarkMode ? 'dark' : 'light');
      }
    }
  }
};
