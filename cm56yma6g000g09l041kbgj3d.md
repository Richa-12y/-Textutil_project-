---
title: "🚀 How to Build a Reusable and Extensible Button Component in React with TypeScript"
seoTitle: "Building Reusable Button Components in React with TypeScript "
seoDescription: "Learn to create a reusable, customizable button component in React with TypeScript. Optimize code, enhance accessibility, and customize styles with props"
datePublished: Fri Dec 27 2024 16:21:05 GMT+0000 (Coordinated Universal Time)
cuid: cm56yma6g000g09l041kbgj3d
slug: how-to-build-a-reusable-and-extensible-button-component-in-react-with-typescript
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1735316087162/1c399526-25ce-4006-b47a-0c77a9c89a18.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1735316318194/60c1e561-97fb-4417-8ab5-7c855aa329ff.jpeg
tags: javascript, web-development, scss, reactjs, typescript, types, custom-software-development

---

Hello Coder👩‍💻👨‍💻 Buttons are an essential part of any web application, and creating a reusable, extensible button component can save time and ensure consistency. Plus, adding TypeScript to the mix makes our code more robust and less prone to errors. Here's a **step-by-step guide** to help you get started.

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1735316237769/6fe8a158-649f-4930-82c5-d0138c20e336.png align="center")

## 🌟 Why TypeScript is Important

TypeScript is a superset of JavaScript that adds **static typing**. Why is this a big deal?

* 🛠 **Error Prevention**: Catch errors at compile time rather than runtime.
    
* 🔍 **Improved Code Readability**: Your team will thank you for those explicit types.
    
* 🚀 **Enhanced Developer Experience**: Autocomplete and IntelliSense work like a charm.
    

Think of TypeScript as the coffee to your JavaScript’s morning routine. ☕

![Episode 9 Joey GIF by Friends](https://media1.giphy.com/media/llToceLTKQj0R1Asid/200.gif?cid=790b76119zd95d5lg1j4uwairnpooy5qswv8couq8s8riz09&ep=v1_gifs_search&rid=200.gif&ct=g align="center")

---

## 🖥 Setting Up TypeScript in Your Project

| **Step** | **Command/Action** | **Details** |
| --- | --- | --- |
| Install TypeScript | `npm install typescript` | Adds TypeScript as a dependency. |
| Add Config File | `npx tsc --init` | Creates a `tsconfig.json` for configuring TypeScript options. |
| Install React Types | `npm install @types/react @types/react-dom` | Ensures TypeScript understands React components. |
| Convert Files | Rename `.js` files to `.tsx` | Signals that these files use both React and TypeScript. |

💡 **Pro Tip**: Always configure `strict: true` in `tsconfig.json` for maximum type safety.

![monica geller GIF](https://media2.giphy.com/media/10vky7p3ipDREA/200.gif?cid=790b76119zd95d5lg1j4uwairnpooy5qswv8couq8s8riz09&ep=v1_gifs_search&rid=200.gif&ct=g align="center")

---

## 🧱 Building the Button Component

Let’s dive into the code for a reusable button component. Here's the plan:

### Step 1: Define Enums for Types and Sizes

Using **enums** helps standardize the available button types and sizes.

![Housefull 2 Bollywood GIF](https://media4.giphy.com/media/l1AvAPnlYcuCLtBQc/100.gif?cid=ecf05e47aw4jyp5wzwelry9fkmht974w28e6bfu0uh7x30rx&ep=v1_gifs_related&rid=100.gif&ct=g align="center")

```javascript
export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Success = 'success',
  Danger = 'danger',
  Warning = 'warning',
  Info = 'info',
  Light = 'light',
  Dark = 'dark',
  Link = 'link',
}

export enum ButtonSize {
  Large = 'large',
  Regular = 'regular',
  Small = 'small',
}
```

![Rashmika Pushpa GIF by Marathi PR](https://media2.giphy.com/media/8pGl0STQr2Pv53VY18/200w.gif?cid=ecf05e47aw4jyp5wzwelry9fkmht974w28e6bfu0uh7x30rx&ep=v1_gifs_related&rid=200w.gif&ct=g align="center")

### Step 2: Define Props Interface

This ensures all required and optional props are clearly defined.

```javascript
interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode | string;
  iconPosition?: 'left' | 'right';
  buttonType?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  onDisableClick?: () => void;
  loading?: boolean;
  label?: string;
  disabled?: boolean;
  spinnerClass?: string;
}
```

![Binod GIF by The Viral Fever](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTIyM2F6cnEwYTBqcm9sZXU4cTZibG1zNmtvOHZ3OW9tbGV1YWw4ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EylW79yUGgdeJdeyQz/giphy.gif align="center")

### Step 3: Create the Component

```javascript
const Button: React.FC<ButtonProps> = ({
  type = ButtonType.Primary,
  size = ButtonSize.Regular,
  className,
  children,
  icon,
  iconPosition = 'left',
  buttonType = 'button',
  onClick,
  onDisableClick,
  loading = false,
  disabled = false,
  spinnerClass = '',
  ...props
}) => {
  const buttonText = children ?? label;

  const buttonClass = classNames(
    'btn',
    `btn-${type}`,
    `btn-${size}`,
    {
      'btn-disabled': disabled,
      'btn-loading': loading,
      'btn-loading-background': loading,
    },
    className
  );

  const buttonProps = {
    type: buttonType,
    onClick: disabled ? onDisableClick : onClick,
    disabled,
    'aria-label': buttonText || icon ? undefined : 'Button',
    ...props,
  };

  const iconClass = classNames('btn-icon', {
    'btn-icon-left': iconPosition === 'left',
    'btn-icon-right': iconPosition === 'right',
  });

  return (
    <button className={buttonClass} {...buttonProps}>
      {loading && (
        <span className={classNames('btn-loading-spinner', spinnerClass)} />
      )}
      {icon && iconPosition === 'left' && (
        <span className={iconClass}>{icon}</span>
      )}
      {buttonText && <span className="btn-text">{buttonText}</span>}
      {icon && iconPosition === 'right' && (
        <span className={iconClass}>{icon}</span>
      )}
    </button>
  );
};

export default Button;
```

![Movie gif. Leonardo DiCaprio as Calvin in Django Unchained raises his eyebrows and smirks as if slightly impressed.  ](https://media3.giphy.com/media/Lk023zZqHJ3Zz4rxtV/giphy.gif?cid=790b7611sr2ltfq2z9pevr957ywft5ays4gf0nu2zruyjdol&ep=v1_gifs_search&rid=giphy.gif&ct=g align="left")

## 🎨 Styling the Button with SCSS

Buttons aren’t just functional—they need to look good too. Here’s how to make your buttons pop with SCSS:

| **Class** | **Purpose** | **Details** |
| --- | --- | --- |
| `.btn` | Base class for all buttons | Adds padding, cursor, and basic styles. |
| `.btn-primary` | Styles for primary buttons | Uses `$primary-color` for background. |
| `.btn-large` | Styles for large buttons | Adjusts padding and height for size. |
| `.btn-loading` | Adds a loading spinner overlay | Disables interactions and adds opacity. |

```scss
export default Button;
/* Define SCSS variables for colors and other design constants */
$primary-color: blue;
$secondary-color: gray;
$success-color: green;
$danger-color: red;
$warning-color: yellow;
$info-color: lightblue;
$light-color: white;
$dark-color: black;
$link-color: blue;

$font-size-large: 18px;
$font-size-medium: 16px;
$font-size-small: 14px;

$padding-large: 15px 30px;
$padding-medium: 10px 20px;
$padding-small: 5px 10px;

/* Base button styles */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  font-size: $font-size-medium;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;

  /* Prevent hover effects on disabled buttons */
  &:not(.btn-disabled):hover {
    transform: scale(1.05);
  }
  
  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }

  /* Default padding, which will be overridden by size-specific classes */
  padding: $padding-medium;
}

.btn-large {
  font-size: $font-size-large;
  padding: $padding-large;
  height: 52px;  
  width: 200px;  
}

.btn-medium {
  font-size: $font-size-medium;
  padding: $padding-medium;
  height: 42px;  
  width: 150px;  
}

.btn-small {
  font-size: $font-size-small;
  padding: $padding-small;
  height: 30px;  
  width: 100px; 
}

/* Button types using CSS variables */
.btn-primary {
  background-color: var(--primary-color);
  color: white;

  &:hover {
    background-color: var(--primary-color);
    opacity: 0.8;
  }
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: white;

  &:hover {
    background-color: var(--secondary-color);
    opacity: 0.8;
  }
}

.btn-success {
  background-color: var(--success-color);
  color: white;

  &:hover {
    background-color: var(--success-color);
    opacity: 0.8;
  }
}

.btn-danger {
  background-color: var(--danger-color);
  color: white;

  &:hover {
    background-color: var(--danger-color);
    opacity: 0.8;
  }
}

.btn-warning {
  background-color: var(--warning-color);
  color: black;

  &:hover {
    background-color: var(--warning-color);
    opacity: 0.8;
  }
}

.btn-info {
  background-color: var(--info-color);
  color: black;

  &:hover {
    background-color: var(--info-color);
    opacity: 0.8;
  }
}

.btn-light {
  background-color: var(--light-color);
  color: black;

  &:hover {
    background-color: var(--light-color);
    opacity: 0.8;
  }
}

.btn-dark {
  background-color: var(--dark-color);
  color: white;

  &:hover {
    background-color: var(--dark-color);
    opacity: 0.8;
  }
}

.btn-link {
  background-color: transparent;
  color: var(--link-color);
  text-decoration: underline;

  &:hover {
    background-color: transparent;
    text-decoration: none;
  }
}

.btn-icon {
  display: inline-flex;
  align-items: center;
}

/* Button icon styles */
.btn-icon-left {
  margin-right: 8px;
}

.btn-icon-right {
  margin-left: 8px;
}

.btn-disabled {
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  opacity: 0.6;
  pointer-events: none; /* Prevent click events on disabled button */
  &:hover {
    background-color: #ccc;
    opacity: 0.6;
  }
}

.btn-loading {
  position: relative;
  pointer-events: none; 
  opacity: 0.7; 

  &.btn-loading-background {
    background-color: transparent !important;
  }
}

/* Loading spinner */
.btn-loading-spinner {
  width: 20px;
  height: 20px;
 border-color: #666;
 border-top-color: white;
 border-left-color: white;
  border-radius: 50%;
  animation: spin 2s linear infinite;
  position: absolute;
  left: 0;
  top: 0;
  bottom:0;
  right: 0;
  margin: auto;
  border-width: 2px;
  border-style: solid;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* Set CSS custom properties for color theming */
:root {
  --primary-color: #{$primary-color};
  --secondary-color: #{$secondary-color};
  --success-color: #{$success-color};
  --danger-color: #{$danger-color};
  --warning-color: #{$warning-color};
  --info-color: #{$info-color};
  --light-color: #{$light-color};
  --dark-color: #{$dark-color};
  --link-color: #{$link-color};
}
```

### Folder Structure:

![Chal GIF by Zee Studios](https://media2.giphy.com/media/ZPAcF9ouDvwvBDfkZa/200.gif?cid=790b7611bo2du7cxtrz1q6nhcl1pcbag2y8w1mlu5u2rsei1&ep=v1_gifs_search&rid=200.gif&ct=g align="center")

```basic
├── public/
│   └── index.html                # The HTML template for the app
├── src/
│   ├── assets/                   # For images, fonts, and other assets
│   ├── components/
│   │   ├── button.tsx            # The Button component itself
│   │   ├── button.scss           # SCSS styling for the Button component
│   ├── App.tsx                   # The main App component
│   ├── App.scss                  # SCSS for the App component
│   ├── index.tsx                 # Entry point for the React app
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
```

#### 4\. **App.tsx (Main App Component)**

In the `App.tsx`, we will use the `Button` component. You can customize it by passing different `type`, `size`, and `className` values:

```javascript
// src/App.tsx

import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/button';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Welcome to the Button Demo</h1>

      {/* Default Primary Button */}
      <Button type={ButtonType.Primary}>Primary Button</Button>

      {/* Custom Small Danger Button */}
      <Button type={ButtonType.Danger} size={ButtonSize.Small} className="custom-danger-btn">
        Small Danger Button
      </Button>

      {/* Button with Icon */}
      <Button type={ButtonType.Success} icon="✅" iconPosition="left">
        Success Button with Icon
      </Button>

      {/* Disabled Button */}
      <Button type={ButtonType.Warning} disabled>
        Disabled Button
      </Button>
    </div>
  );
};

export default App;
```

#### 5\. **App.scss (Styling for App)**

You can style the `App` component itself in the `App.scss` file:

```scss
// src/App.scss

.App {
  text-align: center;
  padding: 20px;
}

.custom-danger-btn {
  background-color: red;
  color: white;
  border-radius: 10px;
  padding: 10px 20px;
  &:hover {
    background-color: darkred;
  }
}
```

---

#### 6\. **index.tsx (App Entry Point)**

Finally, ensure that the app is properly rendered in the `index.tsx` file:

```javascript
tsxCopy code// src/index.tsx

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

---

![News Looking Up GIF](https://media1.giphy.com/media/OfimqJmlD27lFqCUBj/giphy.gif?cid=790b7611bo2du7cxtrz1q6nhcl1pcbag2y8w1mlu5u2rsei1&ep=v1_gifs_search&rid=giphy.gif&ct=g align="left")

### 7\. **Result:**

With this structure:

* `Button.tsx` is reusable across the application.
    
* `Button.scss` handles the button styling and can be customized.
    
* You can add custom styles by passing `className` to the `Button` component.
    

For instance, we created a custom `custom-danger-btn` class in the `App.scss` file to style the `Danger` button differently when needed. You can use `className` to apply your custom styles globally.

---

### Final Thoughts ✨

Creating a reusable, customizable button component in React with TypeScript is not just a best practice, but also a key to building scalable, maintainable, and consistent UI elements across your web applications. By adding customizability through props like `className`, `type`, and `size`, we can ensure that our button component can be used across various parts of an application without repeating code.

#### 🔧 Areas for Improvement:

* **Button States:** We can further improve the button component by adding more interactive states such as `hover`, `focus`, and `active` to enhance the user experience.
    
* **Accessibility:** It’s essential to improve accessibility by adding ARIA attributes like `aria-label` and `aria-disabled` to make sure our button components are usable for all users.
    
* **Advanced Customization:** Allowing users to pass styles directly via props or implementing themes could take customization to the next level.
    

As always, optimization is a continuous process. You can further improve this code based on your specific use cases and feedback from your team or users.

---

#### 💬 Share Your Thoughts and Feedback:

* **Improvements**: Do you have any suggestions for making the `Button` component even better? I'd love to hear your thoughts! Whether it's about performance, design, or any other feature, your feedback matters.
    
* **Customization Ideas**: Are there any additional customization options you’d like to see for the button component? Let’s discuss new ideas!
    
* **Sharing**: If you found this blog helpful, please consider sharing it with your friends or colleagues. The more feedback we get, the more we can improve and learn together.
    

---

### Memes to Add Fun! 🎉

Sometimes, you just need a bit of fun to wrap up your day after coding. Check out these memes to lighten the mood:

1. **When you finally get the button to look perfect:**
    
    *"When you style your button component and it looks just as you imagined!"*
    
2. ![Newgenoldskool GIF by Digital Pratik](https://media2.giphy.com/media/bgWbYwRrDJ9OIa8KnU/giphy.gif?cid=ecf05e47eux6ytej46v0cpc1cr079ymxon6ay02u76yah1g1&ep=v1_gifs_search&rid=giphy.gif&ct=g align="left")
    
3. **When you're stuck on a bug for hours:**
    
    *"Debugging like a pro... or at least trying to."*
    
4. ![Nft Coding GIF](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExem82aXY2OTZwMjJ1emwzcjdjaDJvOXl4YXQycXNhajFtODJid2I2ciZlcD12MV9naWZzX3NlYXJjaCZjdD1n/bGgsc5mWoryfgKBx1u/giphy.gif align="left")
    
5. **When you need a break after coding all day:**
    
    *"Taking a break to recharge my creativity."*
    
6. ![coding electronic music GIF by Monstercat](https://media4.giphy.com/media/3o72F7RrTPW6jymXew/100.gif?cid=790b7611zo6iv696p22uzl3r7ch2o9yxat2qsaj1m82bwb6r&ep=v1_gifs_search&rid=100.gif&ct=g align="left")
    

---

### Let’s Connect!🤳

![Lu Lets Connect GIF by Health Promotion Board Singapore](https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHV5Mmt6cTc3ZGk3Y3lzdnBycWlhNTIzYzN6Z24zZzdkenZjcnF2dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/yyw1j16Smdl3CDIj5z/giphy.gif align="center")

* 💻 Follow me for more React and TypeScript tutorials
    
* 📲 Share this post with your network if you think it can help others
    
* ✍️ Drop your comments below, and let's discuss how we can enhance the React components!