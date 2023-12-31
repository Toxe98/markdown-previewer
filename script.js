import * as React from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const defaultContent = `
![Toxe Logo](https://i.imgur.com/nB7aVm4.jpg)

# Hello!, 
## You'are welcome at
### Toxe's markdown Previewer


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My FreeCodeCamp profile](https://www.freecodecamp.org/Toxe)
[Visit My github profile](https://github.com/Toxe98)

> Block Quote

1. First list item
2. Second list item
`;

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const Editor = ({ content, handleTextareaChange }) => /*#__PURE__*/
React.createElement("textarea", { value: content, onChange: handleTextareaChange, id: "editor" });

const Previewer = ({ content }) => /*#__PURE__*/
React.createElement("div", { id: "preview",
  dangerouslySetInnerHTML: {
    __html: marked(content, { renderer: renderer }) } });




const App = () => {
  const [content, setContent] = React.useState(defaultContent);

  const handleTextareaChange = event => {
    setContent(event.target.value);
  };

  return /*#__PURE__*/(
    React.createElement("div", { class: "main" }, /*#__PURE__*/
    React.createElement(Editor, { content: content, handleTextareaChange: handleTextareaChange }), /*#__PURE__*/
    React.createElement(Previewer, { content: content })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector("#app"));