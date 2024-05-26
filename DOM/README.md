### What is DOM?
#### When a web page is loaded, the browser creates a Document Object Model of the page.

- A programming interface for web documents.
- DOM is not a programming language.
- Represents the page so that programs can change the document structure, style, and content.
- The DOM is a tree-like representation of the web page that gets loaded into the browser.
- The DOM represents the document as nodes and objects.
- Without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts.
- Web API used to build websites

#### The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, allowing programs to manipulate the document's structure, style, and content. Here's a detailed explanation of the DOM with examples:

### 1. The DOM Tree

When a web page is loaded, the browser creates a DOM of the page. This DOM is a tree-like structure where each node represents a part of the document.

The DOM tree for this HTML would look like this:

```
Document
 ├── html
      ├── head
      │    └── title (Sample Page)
      └── body
           ├── h1 (Hello, World!)
           └── p (This is a paragraph.)
```

### 2. Accessing DOM Elements

You can access and manipulate DOM elements using JavaScript. Here are some common methods:

#### `document.getElementById(id)`
Selects an element by its ID.

Example:
```html
<p id="myParagraph">This is a paragraph.</p>
<script>
  var paragraph = document.getElementById("myParagraph");
  console.log(paragraph.textContent);  // Outputs: This is a paragraph.
</script>
```

#### `document.getElementsByClassName(className)`
Selects elements by their class name.

Example:
```html
<p class="text">First paragraph.</p>
<p class="text">Second paragraph.</p>
<script>
  var paragraphs = document.getElementsByClassName("text");
  console.log(paragraphs.length);  // Outputs: 2
</script>
```

#### `document.getElementsByTagName(tagName)`
Selects elements by their tag name.

Example:
```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
<script>
  var paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs.length);  // Outputs: 2
</script>
```

#### `document.querySelector(selector)`
Selects the first element that matches a CSS selector.

Example:
```html
<p class="text">First paragraph.</p>
<p class="text">Second paragraph.</p>
<script>
  var firstParagraph = document.querySelector(".text");
  console.log(firstParagraph.textContent);  // Outputs: First paragraph.
</script>
```

#### `document.querySelectorAll(selector)`
Selects all elements that match a CSS selector.

Example:
```html
<p class="text">First paragraph.</p>
<p class="text">Second paragraph.</p>
<script>
  var allParagraphs = document.querySelectorAll(".text");
  console.log(allParagraphs.length);  // Outputs: 2
</script>
```

### 3. Manipulating DOM Elements

Once you have selected an element, you can manipulate it in various ways.

#### Changing Content
You can change the text content of an element using `textContent` or `innerHTML`.

Example:
```html
<p id="myParagraph">This is a paragraph.</p>
<script>
  var paragraph = document.getElementById("myParagraph");
  paragraph.textContent = "This is updated text.";
</script>
```

#### Changing Attributes
You can change the attributes of an element using `setAttribute`.

Example:
```html
<img id="myImage" src="old-image.jpg" alt="Old Image">
<script>
  var image = document.getElementById("myImage");
  image.setAttribute("src", "new-image.jpg");
  image.setAttribute("alt", "New Image");
</script>
```

#### Changing Styles
You can change the styles of an element using the `style` property.

Example:
```html
<p id="myParagraph">This is a paragraph.</p>
<script>
  var paragraph = document.getElementById("myParagraph");
  paragraph.style.color = "blue";
  paragraph.style.fontSize = "20px";
</script>
```

### 4. Adding and Removing Elements

#### Creating and Appending Elements
You can create new elements using `document.createElement` and append them using `appendChild`.

Example:
```html
<div id="container"></div>
<script>
  var container = document.getElementById("container");
  var newParagraph = document.createElement("p");
  newParagraph.textContent = "This is a new paragraph.";
  container.appendChild(newParagraph);
</script>
```

#### Removing Elements
You can remove elements using `removeChild`.

Example:
```html
<div id="container">
  <p id="myParagraph">This is a paragraph.</p>
</div>
<script>
  var container = document.getElementById("container");
  var paragraph = document.getElementById("myParagraph");
  container.removeChild(paragraph);
</script>
```

### 5. Event Handling

You can add event listeners to DOM elements to handle user interactions.

Example:
```html
<button id="myButton">Click Me</button>
<p id="message"></p>
<script>
  var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    var message = document.getElementById("message");
    message.textContent = "Button was clicked!";
  });
</script>
```
Event listeners are essential in JavaScript for handling events triggered by user interactions or other occurrences in the web document. Here is a comprehensive guide to the most commonly used event listeners, categorized by the types of events they handle.

### 1. **Mouse Events**

Mouse events are triggered by mouse actions.

- **click**: Triggered when an element is clicked.
  ```javascript
  element.addEventListener("click", function() {
    console.log("Element clicked!");
  });
  ```

- **dblclick**: Triggered when an element is double-clicked.
  ```javascript
  element.addEventListener("dblclick", function() {
    console.log("Element double-clicked!");
  });
  ```

- **mousedown**: Triggered when a mouse button is pressed down on an element.
  ```javascript
  element.addEventListener("mousedown", function() {
    console.log("Mouse button pressed down!");
  });
  ```

- **mouseup**: Triggered when a mouse button is released over an element.
  ```javascript
  element.addEventListener("mouseup", function() {
    console.log("Mouse button released!");
  });
  ```

- **mouseover**: Triggered when the mouse pointer is moved onto an element.
  ```javascript
  element.addEventListener("mouseover", function() {
    console.log("Mouse pointer over element!");
  });
  ```

- **mouseout**: Triggered when the mouse pointer is moved out of an element.
  ```javascript
  element.addEventListener("mouseout", function() {
    console.log("Mouse pointer out of element!");
  });
  ```

- **mousemove**: Triggered when the mouse pointer is moved within an element.
  ```javascript
  element.addEventListener("mousemove", function() {
    console.log("Mouse pointer moved within element!");
  });
  ```

- **mouseenter**: Triggered when the mouse pointer is moved onto an element (does not bubble).
  ```javascript
  element.addEventListener("mouseenter", function() {
    console.log("Mouse entered element!");
  });
  ```

- **mouseleave**: Triggered when the mouse pointer is moved out of an element (does not bubble).
  ```javascript
  element.addEventListener("mouseleave", function() {
    console.log("Mouse left element!");
  });
  ```

### 2. **Keyboard Events**

Keyboard events are triggered by keyboard actions.

- **keydown**: Triggered when a key is pressed down.
  ```javascript
  element.addEventListener("keydown", function(event) {
    console.log("Key pressed down: " + event.key);
  });
  ```

- **keyup**: Triggered when a key is released.
  ```javascript
  element.addEventListener("keyup", function(event) {
    console.log("Key released: " + event.key);
  });
  ```

- **keypress**: Triggered when a key is pressed down and released.
  ```javascript
  element.addEventListener("keypress", function(event) {
    console.log("Key pressed: " + event.key);
  });
  ```

### 3. **Form Events**

Form events are triggered by actions in form elements.

- **submit**: Triggered when a form is submitted.
  ```javascript
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    console.log("Form submitted!");
  });
  ```

- **reset**: Triggered when a form is reset.
  ```javascript
  form.addEventListener("reset", function() {
    console.log("Form reset!");
  });
  ```

- **focus**: Triggered when an element gains focus.
  ```javascript
  input.addEventListener("focus", function() {
    console.log("Input focused!");
  });
  ```

- **blur**: Triggered when an element loses focus.
  ```javascript
  input.addEventListener("blur", function() {
    console.log("Input lost focus!");
  });
  ```

- **change**: Triggered when the value of an element changes.
  ```javascript
  input.addEventListener("change", function() {
    console.log("Input value changed!");
  });
  ```

- **input**: Triggered when the value of an element is being input.
  ```javascript
  input.addEventListener("input", function() {
    console.log("Input event triggered!");
  });
  ```

### 4. **Window Events**

Window events are triggered by actions related to the window or document.

- **load**: Triggered when the entire page has loaded.
  ```javascript
  window.addEventListener("load", function() {
    console.log("Page fully loaded!");
  });
  ```

- **resize**: Triggered when the window is resized.
  ```javascript
  window.addEventListener("resize", function() {
    console.log("Window resized!");
  });
  ```

- **scroll**: Triggered when the window is scrolled.
  ```javascript
  window.addEventListener("scroll", function() {
    console.log("Window scrolled!");
  });
  ```

- **unload**: Triggered when the document or a child resource is being unloaded.
  ```javascript
  window.addEventListener("unload", function() {
    console.log("Page unloaded!");
  });
  ```

### 5. **Clipboard Events**

Clipboard events handle copy-paste actions.

- **copy**: Triggered when content is copied.
  ```javascript
  element.addEventListener("copy", function() {
    console.log("Content copied!");
  });
  ```

- **cut**: Triggered when content is cut.
  ```javascript
  element.addEventListener("cut", function() {
    console.log("Content cut!");
  });
  ```

- **paste**: Triggered when content is pasted.
  ```javascript
  element.addEventListener("paste", function() {
    console.log("Content pasted!");
  });
  ```

### 6. **Drag and Drop Events**

Drag and drop events handle elements being dragged and dropped.

- **drag**: Triggered repeatedly while an element is being dragged.
  ```javascript
  element.addEventListener("drag", function() {
    console.log("Element being dragged!");
  });
  ```

- **dragstart**: Triggered when the drag operation starts.
  ```javascript
  element.addEventListener("dragstart", function() {
    console.log("Drag operation started!");
  });
  ```

- **dragend**: Triggered when the drag operation ends.
  ```javascript
  element.addEventListener("dragend", function() {
    console.log("Drag operation ended!");
  });
  ```

- **dragover**: Triggered when an element is dragged over a valid drop target.
  ```javascript
  element.addEventListener("dragover", function(event) {
    event.preventDefault(); // Allow the drop
    console.log("Element dragged over!");
  });
  ```

- **dragenter**: Triggered when a dragged element enters a valid drop target.
  ```javascript
  element.addEventListener("dragenter", function() {
    console.log("Dragged element entered drop target!");
  });
  ```

- **dragleave**: Triggered when a dragged element leaves a valid drop target.
  ```javascript
  element.addEventListener("dragleave", function() {
    console.log("Dragged element left drop target!");
  });
  ```

- **drop**: Triggered when a dragged element is dropped on a valid drop target.
  ```javascript
  element.addEventListener("drop", function(event) {
    event.preventDefault(); // Handle the drop
    console.log("Element dropped!");
  });
  ```

### 7. **Touch Events**

Touch events handle touch interactions on touch-screen devices.

- **touchstart**: Triggered when a touch point is placed on the touch surface.
  ```javascript
  element.addEventListener("touchstart", function() {
    console.log("Touch started!");
  });
  ```

- **touchmove**: Triggered when a touch point is moved along the touch surface.
  ```javascript
  element.addEventListener("touchmove", function() {
    console.log("Touch moved!");
  });
  ```

- **touchend**: Triggered when a touch point is removed from the touch surface.
  ```javascript
  element.addEventListener("touchend", function() {
    console.log("Touch ended!");
  });
  ```

- **touchcancel**: Triggered when a touch point is disrupted.
  ```javascript
  element.addEventListener("touchcancel", function() {
    console.log("Touch canceled!");
  });
  ```
