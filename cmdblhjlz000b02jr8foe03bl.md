---
title: "Getting Started with Lit.js: A Beginner-Friendly Guide for Developers 💡"
datePublished: Sun Jul 20 2025 11:29:58 GMT+0000 (Coordinated Universal Time)
cuid: cmdblhjlz000b02jr8foe03bl
slug: getting-started-with-litjs-a-beginner-friendly-guide-for-developers
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1753010506377/b4794b4f-7121-4eb2-8b19-6150fc79f5b9.png
tags: news, webdevelopment, javascript, web-development, webdev, react-js, reactjs, html5, newtechnology, litjs

---

Lit.js is a lightweight, fast, and modern JavaScript library used to build web components. Unlike React or Next.js, which use virtual DOM and tight component ecosystems, [`Lit.js`](https://lit.dev/) focuses on web standards, keeping things native and close to the browser.

In my current role on a banking project, our team uses Lit.js instead of React or Next.js. Here's everything you need to know if you're new to Lit.js—from why teams choose it, how to set it up, to a working CRUD example using a table. In this blog, we'll explore:

* 🔍 What is Lit.js and why it’s used
    
* 🏦 Why our banking project chose Lit.js over React/Next.js
    
* ⚙️ How to set up a basic Lit.js project step-by-step
    
* 🧠 Lifecycle methods
    
* 🧪 A hands-on example: Add/Edit/Delete table
    
* ❓ Common interview questions
    

---

## 🚀 What is Lit.js?

Lit.js is a tiny JavaScript library (from the makers of Polymer) that helps build **web components** with ease. It makes writing reactive and fast UI components a breeze, without the heavy overhead of bigger frameworks.

### 🔧 Key Features:

* Uses **native Web Components API**
    
* Minimal bundle size
    
* Fast rendering via template literals
    
* Great interoperability
    

---

## 🏦 Why Our Banking Project Chose Lit.js Over React/Next.js

While React and Next.js are powerful, Lit.js offers distinct advantages in enterprise-grade systems like banking platforms:

### ✅ Advantages:

* 🔋 **Performance**: No virtual DOM, just real DOM updates — faster!
    
* 🧩 **Web Standards Based**: Easily integrates with vanilla JS or other libraries.
    
* 🔄 **Reusable Components**: Shareable across teams and platforms.
    
* 🏗️ **Better Encapsulation**: Shadow DOM protects styles and logic.
    

### ⚠️ Disadvantages:

* 📚 Smaller community compared to React
    
* 🧪 Fewer ready-made libraries
    
* 🧵 State management must be done manually
    

---

## 🛠️ Step-by-Step Setup for Lit.js

### 1️⃣ Install Node.js (Skip if already installed)

Download from: [https://nodejs.org/](https://nodejs.org/)

### 2️⃣ Create a new project folder

```bash
mkdir lit-demo-app
cd lit-demo-app
npm init -y
```

### 3️⃣ Install Lit

```bash
npm install lit
```

### 4️⃣ Create your first Lit component

**simple-greeting.js**

[Here You can Play around this code](https://lit.dev/playground/#)

```js
import { LitElement, html, css } from 'lit';

class SimpleGreeting extends LitElement {
  static styles = css`
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
      padding: 10px;
    }
    button {
      margin-right: 5px;
    }
  `;

  static properties = {
    data: { type: Array },
    newName: { type: String },
    editIndex: { type: Number },
    editName: { type: String },
  };

  constructor() {
    super();
    this.data = ['Apple', 'Banana', 'Mango'];
    this.newName = '';
    this.editIndex = -1;
    this.editName = '';
  }

  updateName(e) {
    this.newName = e.target.value;
  }

  addItem() {
    if (this.newName.trim()) {
      this.data = [...this.data, this.newName.trim()];
      this.newName = '';
    }
  }

  deleteItem(index) {
    this.data = this.data.filter((_, i) => i !== index);
  }

  startEdit(index) {
    this.editIndex = index;
    this.editName = this.data[index];
  }

  saveEdit() {
    const updated = [...this.data];
    updated[this.editIndex] = this.editName;
    this.data = updated;
    this.editIndex = -1;
    this.editName = '';
  }

  render() {
    return html`
      <h2>Fruit List 🍎</h2>
      <input type="text" .value=${this.newName} @input=${this.updateName} />
      <button @click=${this.addItem}>Add</button>

      <table>
        <tr>
          <th>Item</th>
          <th>Actions</th>
        </tr>
        ${this.data.map(
          (item, index) => html`
            <tr>
              <td>
                ${this.editIndex === index
                  ? html`<input type="text" .value=${this.editName} @input=${e => this.editName = e.target.value} />`
                  : item}
              </td>
              <td>
                ${this.editIndex === index
                  ? html`<button @click=${this.saveEdit}>Save</button>`
                  : html`<button @click=${() => this.startEdit(index)}>Edit</button>`}
                <button @click=${() => this.deleteItem(index)}>Delete</button>
              </td>
            </tr>
          `
        )}
      </table>
    `;
  }
}

customElements.define('simple-greeting', SimpleGreeting);
```

### 5️⃣ Create an HTML file to render it

**index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Lit Table Example</title>
    <script type="module" src="./simple-greeting.js"></script>
  </head>
  <body>
    <simple-greeting></simple-greeting>
  </body>
</html>
```

### 6️⃣ Run it locally

You can use any local server, e.g., `Live Server` extension in VS Code or run:

```bash
npx serve .
```

---

## 🔁 Lifecycle Methods in Lit.js

* **constructor**: Runs when the component is created.
    
* **connectedCallback()**: Invoked when the component is inserted into the DOM.
    
* **disconnectedCallback()**: When it's removed.
    
* **render()**: The main method that returns HTML.
    
* **updated(changedProperties)**: Called whenever properties change.
    

---

## ❓ Top Interview Questions for Lit.js

1. **What is Lit.js and how is it different from React?**
    
    * Lit is a library for building web components using native browser features.
        
2. **How does Lit handle reactivity?**
    
    * Uses reactive properties and `requestUpdate()` for state changes.
        
3. **What is the purpose of the** `render()` function?
    
    * To define the component’s HTML template.
        
4. **Explain the lifecycle methods of LitElement.**
    
    * Refer to the section above.
        
5. **How do you style components in Lit?**
    
    * Using `static styles = css``;` or Shadow DOM scoped styles.
        

---

## 💬 Final Thoughts

If you're working in large-scale applications like banking systems and looking for speed, modularity, and web standard alignment, Lit.js is a great tool to explore. With this guide and example, you should be ready to create your first component and understand its core concepts.

---

## 📣 What do you think?

Have you used Lit.js in your project? How was your experience? Drop your feedback and let's connect 💬