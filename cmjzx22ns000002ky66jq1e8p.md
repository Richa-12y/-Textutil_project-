---
title: "🧪 Complete Jest & React Testing Library Guide"
seoTitle: "Jest & React Testing Guide Explained"
seoDescription: "Guide to testing React with Jest and React Testing Library: basics, real-world scenarios, common mistakes, best practices"
datePublished: Sun Jan 04 2026 15:58:34 GMT+0000 (Coordinated Universal Time)
cuid: cmjzx22ns000002ky66jq1e8p
slug: complete-jest-and-react-testing-library-guide
cover: https://cdn.hashnode.com/res/hashnode/image/stock/unsplash/tZnbakTUcTI/upload/e05bb6b2990c4c77e5fdac9dfb873233.jpeg
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1767542263948/249ff720-c230-47f4-b981-c2ebb4bec01d.jpeg
tags: unit-testing, web-development, reactjs, typescript, frontend-development, jest

---

## Table of Contents

1. [Why Testing Matters](#why-testing-matters)
    
2. [Jest Basics](#jest-basics)
    
3. [Setup & Configuration](#setup--configuration)
    
4. [Writing Your First Test](#writing-your-first-test)
    
5. [React Testing Library Essentials](#react-testing-library-essentials)
    
6. [Real-World Testing Scenarios](#real-world-testing-scenarios)
    
7. [Mocking in Depth](#mocking-in-depth)
    
8. [Common Mistakes & Best Practices](#common-mistakes--best-practices)
    
9. [Interview Questions](#interview-questions)
    
10. [Testing File Organization](#testing-file-organization)
    
11. [Common Errors & Solutions](#common-errors--solutions)
    
12. [Testing Checklist for PRs](#testing-checklist-for-prs)
    
13. [Quick Cheatsheet](#quick-cheatsheet)
    

---

## ⚡ Beginner's Quick Start (5-Minute Version)

**Just want to get started? Read this first!**

### The 3-Minute Test

```typescript
// 1. Install (already done in Create React App)
npm test

// 2. Create your first test
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders button', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button')).toBeInTheDocument();
});

// 3. That's it! Run: npm test
```

### The Testing Triangle (Visualized)

```plaintext
What to test?

     Unit Tests        ← Start here
    (60% of tests)      Functions & components
    
  Integration Tests   ← Then this
  (30% of tests)      Multiple components
  
      E2E Tests        ← Last
    (10% of tests)     Full user journey
```

### One-Page Survival Guide

| Need | Code | When |
| --- | --- | --- |
| Find a button | `screen.getByRole('button')` | Always try this first |
| Type in input | `await user.type(input, 'text')` | Form testing |
| Click element | `await` [`user.click`](http://user.click)`(button)` | User interactions |
| Check if exists | `expect(element).toBeInTheDocument()` | Verify rendering |
| Wait for data | `await screen.findByText('data')` | API calls |
| Mock API | `jest.mock('./api')` | External dependencies |

### Common Test Pattern (Copy-Paste Ready)

```typescript
// ✅ Use this template for 80% of your tests
test('should [action] when [condition]', async () => {
  // Setup
  const mockFn = jest.fn();
  const user = userEvent.setup();
  render(<Component onAction={mockFn} />);
  
  // Act
  await user.click(screen.getByRole('button'));
  
  // Assert
  expect(mockFn).toHaveBeenCalled();
});
```

### Skip the Complicated Stuff (For Now)

❌ Don't worry about:

* Snapshot testing
    
* Advanced mocking patterns
    
* Performance testing
    
* Custom hooks complexity
    

✅ Focus on:

* Making tests pass
    
* Testing user interactions
    
* Mocking API calls
    
* Understanding error messages
    

**→ Ready to dive in? Jump to "Jest Basics" section below**

---

## Why Testing Matters

### What is Testing?

Testing is the process of checking if your code works as expected. Think of it like quality assurance before shipping a product to customers.

### Why Should You Test?

* **Confidence**: Know your code actually works before pushing to production
    
* **Bug Prevention**: Catch bugs early, save money and headaches later
    
* **Refactoring Safety**: Change code without fear of breaking things
    
* **Documentation**: Tests show how your code is supposed to be used
    
* **Career Growth**: Testing is a critical skill all senior developers have
    

### The Testing Pyramid

```plaintext
        🔼 E2E Tests (10%)
        ⬆️ Integration Tests (30%)
    🔼 Unit Tests (60%)
```

**Unit Tests** are the foundation - they test individual functions/components in isolation.

---

## Jest Basics

### What is Jest?

Jest is a **JavaScript testing framework** made by Facebook (Meta). It's the most popular choice because:

* ✅ Zero configuration for React apps (Create React App includes it)
    
* ✅ Fast and parallel test execution
    
* ✅ Great error messages
    
* ✅ Built-in mocking capabilities
    
* ✅ Code coverage reporting
    
* ✅ Snapshot testing
    

### Jest vs Other Testing Frameworks

| Feature | Jest | Mocha | Vitest |
| --- | --- | --- | --- |
| Setup | Zero config | Needs config | Fast |
| Speed | Fast | Slow | Faster |
| Mocking | Built-in | Needs Sinon | Built-in |
| React Support | Excellent | Good | Excellent |
| Learning Curve | Easy | Moderate | Easy |

---

## Setup & Configuration

### Installation (For Create React App)

Good news! If you created your app with Create React App, Jest is **already installed**. ✨

```bash
# Verify Jest is installed
npm test
```

### Installation (For Custom Project)

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### Configuration (jest.config.js)

For most React projects, you need minimal config:

```javascript
// jest.config.js
module.exports = {
  testEnvironment: 'jsdom', // Use DOM environment for React
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // Setup file
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
};
```

### Setup File (setupTests.ts)

This file runs before every test:

```typescript
// src/setupTests.ts
import '@testing-library/jest-dom';

// This allows you to use custom matchers like:
// expect(element).toBeInTheDocument()
// expect(element).toBeVisible()
```

### Running Tests

```bash
npm test                    # Run all tests in watch mode
npm test -- --coverage      # Run with coverage report
npm test -- Button.test.tsx # Run specific test file
npm test -- --no-coverage   # Run without coverage
```

---

## Writing Your First Test

### Test Structure (AAA Pattern)

Every good test follows this pattern:

```plaintext
┌─────────────────────────────────────────┐
│         AAA Test Pattern                │
├─────────────────────────────────────────┤
│ 🔵 ARRANGE                              │
│ └─ Set up test data                     │
│                                         │
│ 🟢 ACT                                  │
│ └─ Perform the action                   │
│                                         │
│ 🔴 ASSERT                               │
│ └─ Check the result                     │
└─────────────────────────────────────────┘
```

```typescript
// 🔵 Arrange - Set up what you need
// 🟢 Act - Perform the action
// 🔴 Assert - Check the result

test('should do something', () => {
  // Arrange
  const value = 5;
  
  // Act
  const result = value * 2;
  
  // Assert
  expect(result).toBe(10);
});
```

### Simple Example: Testing a Function

```typescript
// calculator.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// calculator.test.ts
import { add, subtract } from './calculator';

describe('Calculator Functions', () => {
  
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(5, -3)).toBe(2);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should handle negative results', () => {
      expect(subtract(2, 5)).toBe(-3);
    });
  });
});
```

### Common Matchers (Assertions)

```typescript
// Equality
expect(value).toBe(5);                    // Exact match (===)
expect(value).toEqual({ name: 'John' }); // Deep equality
expect(value).toStrictEqual(value);       // Strict equality

// Truthiness
expect(value).toBeTruthy();               // Truthy values
expect(value).toBeFalsy();                // Falsy values
expect(value).toBeNull();                 // null
expect(value).toBeUndefined();            // undefined
expect(value).toBeDefined();              // not undefined

// Numbers
expect(value).toBeGreaterThan(5);
expect(value).toBeGreaterThanOrEqual(5);
expect(value).toBeLessThan(5);
expect(value).toBeLessThanOrEqual(5);
expect(0.1 + 0.2).toBeCloseTo(0.3);       // Floating point

// Strings
expect(text).toMatch('hello');            // Contains substring
expect(text).toMatch(/HELLO/i);           // Regex match

// Arrays & Objects
expect(array).toContain('item');          // Array contains value
expect(array).toHaveLength(3);
expect(object).toHaveProperty('name');
expect(object).toHaveProperty('name', 'John');

// Exceptions
expect(() => {
  throw new Error('Oops');
}).toThrow();
expect(() => {
  throw new Error('Oops');
}).toThrow('Oops');
```

---

## React Testing Library Essentials

### What is React Testing Library?

React Testing Library is a testing utility that helps you **test React components the way users interact with them**.

### Key Philosophy

> ❌ Don't test implementation details (state, props, internal structure) ✅ Test like a real user would (clicks, text, visibility)

### Rendering Components in Tests

```typescript
import { render, screen } from '@testing-library/react';
import Button from './Button';

test('should render button', () => {
  render(<Button>Click me</Button>);
  
  // Component is now rendered in test DOM
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
```

### Finding Elements (Query Methods)

#### getBy\* - Throws error if not found

```typescript
// Use when element MUST exist
const button = screen.getByRole('button');
const input = screen.getByLabelText('Email');
const heading = screen.getByText('Welcome');
const element = screen.getByTestId('my-element');
```

#### queryBy\* - Returns null if not found

```typescript
// Use when testing that element does NOT exist
const element = screen.queryByText('Error message');
expect(element).not.toBeInTheDocument();
```

#### findBy\* - Async, waits for element

```typescript
// Use when element appears after async operations
const element = await screen.findByText('Loaded data');
expect(element).toBeInTheDocument();
```

### Priority of Query Methods (Use in this order)

1. **getByRole** - Most accessible ✅
    
2. **getByLabelText** - Good for forms
    
3. **getByPlaceholderText** - Okay for inputs
    
4. **getByText** - For static text
    
5. **getByTestId** - Last resort
    

#### Query Selection Flowchart

```plaintext
                START: Finding an Element
                         |
                         v
              Is it a button, input, etc?
                    /          \
                  YES           NO
                   |             |
                   v             v
            getByRole()    Is it in a form?
                              /      \
                            YES       NO
                             |        |
                             v        v
                      getByLabelText() Can you see
                                      the text?
                                        /    \
                                      YES    NO
                                       |      |
                                       v      v
                                  getByText() getByTestId()
                                    (Last Resort)
```

---

## Real-World Testing Scenarios

### Scenario 1: Testing Button Clicks

```typescript
// Button.tsx
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export function Button({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>;
}

// Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

test('should call onClick handler when button is clicked', async () => {
  const mockHandler = jest.fn();
  const user = userEvent.setup();
  
  render(<Button onClick={mockHandler}>Click me</Button>);
  
  const button = screen.getByRole('button');
  await user.click(button);
  
  expect(mockHandler).toHaveBeenCalledTimes(1);
});

test('should render button with correct text', () => {
  render(<Button onClick={jest.fn()}>Submit</Button>);
  
  const button = screen.getByRole('button', { name: /submit/i });
  expect(button).toBeInTheDocument();
});
```

### Scenario 2: Testing Form Input

```typescript
// LoginForm.tsx
import { useState } from 'react';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form>
  );
}

// LoginForm.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LoginForm } from './LoginForm';

test('should handle form submission with correct values', async () => {
  const mockSubmit = jest.fn();
  const user = userEvent.setup();

  render(<LoginForm onSubmit={mockSubmit} />);

  // Find inputs and type values
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');

  await user.type(emailInput, 'user@example.com');
  await user.type(passwordInput, 'password123');

  // Submit the form
  const submitButton = screen.getByRole('button', { name: /login/i });
  await user.click(submitButton);

  expect(mockSubmit).toHaveBeenCalledWith('user@example.com', 'password123');
});
```

### Scenario 3: Testing Conditional Rendering

```typescript
// UserProfile.tsx
interface UserProfileProps {
  user: { name: string; email: string } | null;
  isLoading: boolean;
}

export function UserProfile({ user, isLoading }: UserProfileProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user found</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
}

// UserProfile.test.tsx
import { render, screen } from '@testing-library/react';
import { UserProfile } from './UserProfile';

test('should show loading state', () => {
  render(<UserProfile user={null} isLoading={true} />);
  
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('should show no user message when user is null', () => {
  render(<UserProfile user={null} isLoading={false} />);
  
  expect(screen.getByText('No user found')).toBeInTheDocument();
});

test('should display user information when user is provided', () => {
  const user = { name: 'John Doe', email: 'john@example.com' };
  render(<UserProfile user={user} isLoading={false} />);
  
  expect(screen.getByText('John Doe')).toBeInTheDocument();
  expect(screen.getByText('john@example.com')).toBeInTheDocument();
});
```

### Scenario 4: Testing API Calls

```typescript
// UserService.ts
export async function fetchUser(id: string) {
  const response = await fetch(`/api/users/${id}`);
  if (!response.ok) throw new Error('Failed to fetch user');
  return response.json();
}

// UserCard.tsx
import { useEffect, useState } from 'react';
import { fetchUser } from './UserService';

interface UserCardProps {
  userId: string;
}

export function UserCard({ userId }: UserCardProps) {
  const [user, setUser] = useState<{ name: string } | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div role="alert">{error}</div>;
  if (!user) return <div>No user found</div>;

  return <h2>{user.name}</h2>;
}

// UserCard.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { UserCard } from './UserCard';
import * as UserService from './UserService';

// Mock the entire module
jest.mock('./UserService');

test('should fetch and display user data', async () => {
  const mockUser = { name: 'Jane Doe' };
  (UserService.fetchUser as jest.Mock).mockResolvedValue(mockUser);

  render(<UserCard userId="123" />);

  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // Wait for data to load
  await waitFor(() => {
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
  });
});

test('should display error message on API failure', async () => {
  (UserService.fetchUser as jest.Mock).mockRejectedValue(
    new Error('Network error')
  );

  render(<UserCard userId="123" />);

  await waitFor(() => {
    expect(screen.getByRole('alert')).toHaveTextContent('Network error');
  });
});
```

### Scenario 5: Testing Lists & Iteration

```typescript
// UserList.tsx
interface User {
  id: string;
  name: string;
}

interface UserListProps {
  users: User[];
}

export function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.length === 0 ? (
        <li>No users found</li>
      ) : (
        users.map((user) => <li key={user.id}>{user.name}</li>)
      )}
    </ul>
  );
}

// UserList.test.tsx
import { render, screen } from '@testing-library/react';
import { UserList } from './UserList';

test('should display all users in list', () => {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
    { id: '3', name: 'Charlie' },
  ];

  render(<UserList users={users} />);

  users.forEach((user) => {
    expect(screen.getByText(user.name)).toBeInTheDocument();
  });
});

test('should display "No users found" when list is empty', () => {
  render(<UserList users={[]} />);

  expect(screen.getByText('No users found')).toBeInTheDocument();
});

test('should render correct number of items', () => {
  const users = [
    { id: '1', name: 'Alice' },
    { id: '2', name: 'Bob' },
  ];

  render(<UserList users={users} />);

  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(2);
});
```

---

## Mocking in Depth

### Why Mock?

* **Speed**: Don't make real API calls during tests
    
* **Reliability**: Tests won't fail due to network issues
    
* **Isolation**: Test your code, not external dependencies
    
* **Control**: Easily simulate success/error scenarios
    

### Mocking Functions

```typescript
// Basic mock
const mockFunction = jest.fn();
mockFunction('hello');

expect(mockFunction).toHaveBeenCalled();
expect(mockFunction).toHaveBeenCalledWith('hello');
expect(mockFunction).toHaveBeenCalledTimes(1);

// Mock with return value
const mockAdd = jest.fn((a, b) => a + b);
expect(mockAdd(2, 3)).toBe(5);

// Alternative syntax
const mockAdd2 = jest.fn().mockReturnValue(5);
expect(mockAdd2()).toBe(5);

// Mock return values for different calls
const mockSequence = jest
  .fn()
  .mockReturnValueOnce(1)
  .mockReturnValueOnce(2)
  .mockReturnValueOnce(3);

expect(mockSequence()).toBe(1);
expect(mockSequence()).toBe(2);
expect(mockSequence()).toBe(3);
```

### Mocking Modules (API Calls)

```typescript
// api.ts
export const apiClient = {
  get: (url: string) => fetch(url).then(r => r.json()),
  post: (url: string, data: any) => fetch(url, { method: 'POST', body: JSON.stringify(data) })
};

// Component using API
import { apiClient } from './api';

export function UserLoader() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    apiClient.get('/users/1').then(setUser);
  }, []);

  return user ? <div>{user.name}</div> : <div>Loading...</div>;
}

// Test with mock
jest.mock('./api');

test('should load user', async () => {
  (apiClient.get as jest.Mock).mockResolvedValue({ name: 'John' });

  render(<UserLoader />);

  await waitFor(() => {
    expect(screen.getByText('John')).toBeInTheDocument();
  });

  expect(apiClient.get).toHaveBeenCalledWith('/users/1');
});
```

### Mocking Specific Method on Module

```typescript
// Only mock one method
jest.mock('./api', () => ({
  apiClient: {
    get: jest.fn(),
    // post remains real
    post: jest.requireActual('./api').apiClient.post,
  },
}));
```

### Mocking localStorage

```typescript
test('should save to localStorage', () => {
  const getItemSpy = jest.spyOn(Storage.prototype, 'getItem');
  const setItemSpy = jest.spyOn(Storage.prototype, 'setItem');

  localStorage.setItem('key', 'value');

  expect(setItemSpy).toHaveBeenCalledWith('key', 'value');

  // Don't forget to clean up!
  getItemSpy.mockRestore();
  setItemSpy.mockRestore();
});
```

### Mocking window.fetch

```typescript
test('should handle fetch', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve({ data: 'test' }),
    })
  );

  // Your code that uses fetch
  const result = await fetch('/api/data');

  expect(global.fetch).toHaveBeenCalledWith('/api/data');
  expect(result.ok).toBe(true);
});
```

### Mocking setTimeout/setInterval

```typescript
test('should handle timers', () => {
  jest.useFakeTimers();

  const callback = jest.fn();
  setTimeout(callback, 1000);

  // Fast-forward time
  jest.advanceTimersByTime(1000);

  expect(callback).toHaveBeenCalled();

  jest.runAllTimers(); // Run all timers
  jest.useRealTimers(); // Switch back to real timers
});
```

### Clearing Mocks Between Tests

```typescript
describe('API Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear all mocks before each test
  });

  test('test 1', () => {
    // ...
  });

  test('test 2', () => {
    // ...
  });
});
```

---

## Common Mistakes & Best Practices

### ❌ Mistake 1: Testing Implementation Details

```typescript
// ❌ BAD - Testing state directly
test('bad test', () => {
  const { getByTestId } = render(<Counter />);
  const state = getByTestId('counter-state'); // Don't test this
  expect(state.textContent).toBe('0');
});

// ✅ GOOD - Test like a user
test('good test', () => {
  render(<Counter />);
  const count = screen.getByRole('button', { name: /0/i });
  expect(count).toBeInTheDocument();
});
```

### ❌ Mistake 2: Not Waiting for Async Operations

```typescript
// ❌ BAD - No waiting
test('bad async test', () => {
  render(<AsyncComponent />);
  expect(screen.getByText('Loaded')).toBeInTheDocument(); // Fails!
});

// ✅ GOOD - Wait for async
test('good async test', async () => {
  render(<AsyncComponent />);
  const element = await screen.findByText('Loaded');
  expect(element).toBeInTheDocument();
});
```

### ❌ Mistake 3: Over-Mocking

```typescript
// ❌ BAD - Mocking everything
jest.mock('./utils');
jest.mock('./api');
jest.mock('./components');

// ✅ GOOD - Mock only external dependencies
jest.mock('./api'); // External API
// Don't mock internal components/utils
```

### ❌ Mistake 4: Not Cleaning Up

```typescript
// ❌ BAD - Mocks carry over to next test
test('test 1', () => {
  jest.spyOn(localStorage, 'getItem').mockReturnValue('test');
  // No cleanup
});

// ✅ GOOD - Always clean up
test('test 1', () => {
  const spy = jest.spyOn(localStorage, 'getItem').mockReturnValue('test');
  spy.mockRestore(); // Clean up after test
});

// Or use afterEach
afterEach(() => {
  jest.clearAllMocks();
});
```

### ✅ Best Practice 1: Use Descriptive Test Names

```typescript
// ❌ BAD
test('works', () => {});
test('renders', () => {});

// ✅ GOOD
test('should render button with correct label', () => {});
test('should call onClick handler when button is clicked', () => {});
test('should show error message when API call fails', () => {});
```

### ✅ Best Practice 2: One Assertion Per Test (When Possible)

```typescript
// ❌ Hard to debug if fails
test('button functionality', () => {
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('active');
  expect(button).toHaveTextContent('Click');
});

// ✅ Clear which assertion failed
test('should render button in the document', () => {
  expect(screen.getByRole('button')).toBeInTheDocument();
});

test('should have active class', () => {
  expect(screen.getByRole('button')).toHaveClass('active');
});

test('should have correct text', () => {
  expect(screen.getByRole('button')).toHaveTextContent('Click');
});
```

### ✅ Best Practice 3: Use beforeEach and afterEach

```typescript
describe('Counter Component', () => {
  let mockCallback: jest.Mock;

  beforeEach(() => {
    // Run before each test
    mockCallback = jest.fn();
  });

  afterEach(() => {
    // Run after each test
    jest.clearAllMocks();
  });

  test('increments counter', () => {
    // Use mockCallback here
  });

  test('calls callback', () => {
    // Use mockCallback here
  });
});
```

### ✅ Best Practice 4: Use Accessibility Queries

```typescript
// ✅ BEST - Most accessible
screen.getByRole('button')

// ✅ GOOD - For forms
screen.getByLabelText('Email')

// ⚠️ OKAY - Last resort
screen.getByTestId('submit')
```

---

## Interview Questions

### Junior Level

**Q1: What is the difference between** `getByRole` and `getByTestId`?

* `getByRole`: Queries by accessibility role (button, textbox, etc.) - preferred method
    
* `getByTestId`: Queries by data-testid attribute - last resort when other methods don't work
    

**Q2: What does** `beforeEach` do?

* Runs before each test in the describe block
    
* Useful for setup/initialization that should happen for every test
    

**Q3: How do you test if a function was called?**

```typescript
const mockFn = jest.fn();
mockFn();
expect(mockFn).toHaveBeenCalled();
```

**Q4: What's the difference between** `toBe` and `toEqual`?

* `toBe`: Uses `===` (reference equality)
    
* `toEqual`: Uses deep equality (checks content, not reference)
    

**Q5: How do you handle async tests?**

```typescript
// Option 1: async/await
test('async test', async () => {
  const element = await screen.findByText('Loaded');
});

// Option 2: return promise
test('async test', () => {
  return fetchData().then(data => {
    expect(data).toBeDefined();
  });
});
```

---

### Mid Level

**Q6: What's the difference between** `queryBy` and `getBy`?

* `getBy`: Throws error if element not found (use when element MUST exist)
    
* `queryBy`: Returns null if not found (use to test element doesn't exist)
    

**Q7: How do you mock a module?**

```typescript
jest.mock('./api', () => ({
  fetchUser: jest.fn()
}));
```

**Q8: What's the purpose of** `waitFor`?

* Waits for a condition to be true (async operations, DOM updates)
    
* Re-runs assertion multiple times until it passes or timeout
    

**Q9: How do you test API calls?**

```typescript
test('should fetch data', async () => {
  jest.mock('./api');
  (fetchData as jest.Mock).mockResolvedValue({ data: 'test' });
  
  render(<Component />);
  
  await waitFor(() => {
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
```

**Q10: What's snapshot testing and when to use it?**

* Captures component output and compares against future renders
    
* Use for UI components that shouldn't change unexpectedly
    
* Update snapshots when intentional changes are made
    

```typescript
test('renders correctly', () => {
  const tree = renderer.create(<Component />).toJSON();
  expect(tree).toMatchSnapshot();
});
```

---

### Senior Level

**Q11: How do you test components with Redux/Context?**

```typescript
test('with Redux', () => {
  const store = createStore(reducer);
  
  render(
    <Provider store={store}>
      <Component />
    </Provider>
  );
  
  expect(screen.getByText('data')).toBeInTheDocument();
});
```

**Q12: What's the testing library user event vs fireEvent difference?**

* `userEvent`: Simulates real user interactions (recommended)
    
* `fireEvent`: Fires DOM events directly (lower level)
    

```typescript
// Recommended
await userEvent.click(button);

// Not recommended
fireEvent.click(button);
```

**Q13: How do you test component lifecycle hooks?**

```typescript
test('useEffect runs on mount', () => {
  const spy = jest.spyOn(console, 'log');
  render(<Component />);
  
  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
```

**Q14: What's the difference between mocking and spying?**

* **Mocking**: Replace entire function
    
* **Spying**: Watch function without replacing it
    

```typescript
// Mock
const mock = jest.fn();

// Spy
const spy = jest.spyOn(obj, 'method');
```

**Q15: How do you handle coverage gaps?**

* Use `npm test -- --coverage`
    
* Aim for 80%+ coverage on critical paths
    
* Don't chase 100% coverage, focus on critical scenarios
    
* Branch coverage is more important than line coverage
    

---

### Real Interview Scenario Questions

**Q16: "Our component fetches data on mount. How would you test it?"**

```typescript
// UserProfile.tsx
function UserProfile({ userId }: { userId: string }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return <div>{user?.name}</div>;
}

// Test
jest.mock('./api', () => ({
  fetchUser: jest.fn()
}));

describe('UserProfile', () => {
  test('should show loading state initially', () => {
    (fetchUser as jest.Mock).mockImplementation(() => new Promise(() => {}));
    render(<UserProfile userId="123" />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should display user after loading', async () => {
    (fetchUser as jest.Mock).mockResolvedValue({ name: 'John' });
    render(<UserProfile userId="123" />);
    
    await waitFor(() => {
      expect(screen.getByText('John')).toBeInTheDocument();
    });
  });

  test('should handle errors gracefully', async () => {
    (fetchUser as jest.Mock).mockRejectedValue(new Error('Network error'));
    render(<UserProfile userId="123" />);
    
    await waitFor(() => {
      expect(screen.getByText(/Error: Network error/)).toBeInTheDocument();
    });
  });
});
```

**Q17: "How do you test a complex form with validation?"**

```typescript
test('should show validation errors', async () => {
  const user = userEvent.setup();
  render(<ComplexForm />);
  
  const submitButton = screen.getByRole('button', { name: /submit/i });
  await user.click(submitButton);
  
  expect(screen.getByText('Email is required')).toBeInTheDocument();
  expect(screen.getByText('Password must be at least 8 chars')).toBeInTheDocument();
});

test('should submit when form is valid', async () => {
  const mockSubmit = jest.fn();
  const user = userEvent.setup();
  render(<ComplexForm onSubmit={mockSubmit} />);
  
  await user.type(screen.getByLabelText('Email'), 'test@example.com');
  await user.type(screen.getByLabelText('Password'), 'password123');
  await user.click(screen.getByRole('button', { name: /submit/i }));
  
  expect(mockSubmit).toHaveBeenCalledWith({
    email: 'test@example.com',
    password: 'password123'
  });
});
```

---

## Testing File Organization

### File Naming Conventions

#### Option 1: `.test.ts` or `.test.tsx` (Recommended)

```plaintext
src/
├── components/
│   ├── Button.tsx
│   ├── Button.test.tsx
│   ├── Header.tsx
│   └── Header.test.tsx
├── utils/
│   ├── helpers.ts
│   └── helpers.test.ts
└── hooks/
    ├── useForm.ts
    └── useForm.test.ts
```

**Pros:**

* ✅ Test file stays next to source code
    
* ✅ Easy to find and update together
    
* ✅ Clear at a glance which files have tests
    
* ✅ Good for code review (see both together)
    

**Cons:**

* May clutter src/ directory
    

---

#### Option 2: `__tests__` Folder (Alternative)

```plaintext
src/
├── __tests__/
│   ├── components/
│   │   ├── Button.test.tsx
│   │   └── Header.test.tsx
│   ├── utils/
│   │   └── helpers.test.ts
│   └── hooks/
│       └── useForm.test.ts
├── components/
│   ├── Button.tsx
│   └── Header.tsx
├── utils/
│   └── helpers.ts
└── hooks/
    └── useForm.ts
```

**Pros:**

* ✅ Keeps source code clean
    
* ✅ Separates tests from production code
    

**Cons:**

* ❌ Harder to find corresponding test
    
* ❌ Takes more time to navigate
    

---

### Recommended Structure

```plaintext
my-app/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.css
│   │   │   └── Button.types.ts
│   │   └── Header/
│   │       ├── Header.tsx
│   │       ├── Header.test.tsx
│   │       └── Header.css
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useAuth.test.ts
│   │   ├── useForm.ts
│   │   └── useForm.test.ts
│   ├── utils/
│   │   ├── helpers.ts
│   │   ├── helpers.test.ts
│   │   ├── validators.ts
│   │   └── validators.test.ts
│   ├── services/
│   │   ├── api.ts
│   │   └── api.test.ts
│   └── App.tsx
├── jest.config.js
└── package.json
```

### Test File Naming Best Practices

```typescript
// ✅ GOOD - Descriptive test names
Button.test.tsx          // Component tests
useForm.test.ts        // Hook tests
validators.test.ts     // Utility tests
api.test.ts            // Service tests

// ❌ AVOID - Generic names
test.tsx               // Too vague
index.test.ts          // Could be anything
utils.test.ts          // Multiple utils
```

### Test Data Organization

```plaintext
src/
├── __mocks__/
│   ├── handlers.ts        # MSW handlers
│   ├── userData.ts        # Mock user data
│   └── apiResponses.ts    # Mock API responses
├── __fixtures__/
│   ├── users.json         # Test fixtures
│   └── products.json
├── components/
│   └── Button.test.tsx
```

---

## Common Errors & Solutions

### Error 1: "Unable to find an element with the role..."

```typescript
// ❌ WRONG - Looking for wrong role
screen.getByRole('textbox')  // But it's actually type="button"

// ✅ CORRECT - Use correct role
screen.getByRole('button')

// Debug: See what's actually there
screen.debug()  // Prints entire DOM
```

**Solution**: Use `screen.debug()` to see available elements and their roles.

---

### Error 2: "act(...) Warning"

```typescript
// ❌ WRONG - Not awaiting state update
test('bad test', () => {
  const user = userEvent.setup();
  render(<Component />);
  user.click(button);  // Missing await!
  expect(screen.getByText('Updated')).toBeInTheDocument();
});

// ✅ CORRECT - Await user interactions
test('good test', async () => {
  const user = userEvent.setup();
  render(<Component />);
  await user.click(button);
  expect(screen.getByText('Updated')).toBeInTheDocument();
});
```

**Solution**: Always await `userEvent` interactions and async queries.

---

### Error 3: "Cannot find module or its corresponding type declarations"

```typescript
// jest.config.js
module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',  // Add path aliases
  },
};

// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]  // Match jest config
    }
  }
}
```

**Solution**: Map import paths in both `jest.config.js` and `tsconfig.json`.

---

### Error 4: "Mock is not working / Not mocked"

```typescript
// ❌ WRONG - Mock after import
import api from './api';
jest.mock('./api');  // Too late!

// ✅ CORRECT - Mock before import
jest.mock('./api');
import api from './api';

// Or at file top
```

**Solution**: Hoist all `jest.mock()` calls to the top of the test file.

---

### Error 5: "Timeout - waitFor timed out"

```typescript
// ❌ WRONG - Element never appears
await waitFor(() => {
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
});

// ✅ CORRECT - Mock API to return data
jest.mock('./api');
(fetchData as jest.Mock).mockResolvedValue({ data: 'test' });

await waitFor(() => {
  expect(screen.getByText('Data loaded')).toBeInTheDocument();
});
```

**Solution**: Ensure mock is set up correctly, or increase timeout: `waitFor(..., { timeout: 5000 })`

---

### Error 6: "Tests pass locally but fail in CI/CD"

```typescript
// ❌ COMMON ISSUES
- Different node/npm versions
- Race conditions (timing issues)
- Timezone differences
- Environment variables missing

// ✅ SOLUTIONS
// 1. Pin versions in package.json
// 2. Use jest.useFakeTimers() for timer-dependent tests
// 3. Mock environment variables
process.env.API_URL = 'http://localhost:3000';

// 4. Clear mocks between tests
afterEach(() => {
  jest.clearAllMocks();
});
```

**Solution**: Ensure test environment is isolated and deterministic.

---

### Error 7: "Component state not updating in test"

```typescript
// ❌ WRONG - Testing state directly
const state = component.state;
expect(state.count).toBe(1);

// ✅ CORRECT - Test rendered output
expect(screen.getByText('Count: 1')).toBeInTheDocument();
```

**Solution**: Test what the user sees (rendered DOM), not internal state.

---

## Testing Checklist for PRs

### Before Submitting a Pull Request

#### Code Quality

* \[ \] All tests pass locally: `npm test -- --coverage`
    
* \[ \] No console errors or warnings in tests
    
* \[ \] Code coverage doesn't decrease
    
* \[ \] No commented-out test code
    
* \[ \] Test names are descriptive
    

#### Test Coverage

* \[ \] Happy path tested (user does everything right)
    
* \[ \] Error states tested (what if API fails?)
    
* \[ \] Edge cases tested (empty lists, null values)
    
* \[ \] Async operations tested properly
    
* \[ \] User interactions tested (clicks, typing)
    

#### Mocking & Dependencies

* \[ \] External APIs are mocked
    
* \[ \] localStorage/sessionStorage mocked if used
    
* \[ \] timers properly handled (or faked)
    
* \[ \] All mocks cleaned up in afterEach
    
* \[ \] No real API calls in tests
    

#### Best Practices

* \[ \] One concept per test (when possible)
    
* \[ \] No test interdependencies (tests can run in any order)
    
* \[ \] beforeEach/afterEach used for setup/cleanup
    
* \[ \] Descriptive error messages added
    
* \[ \] Accessibility queries used (getByRole, getByLabelText)
    

#### Documentation

* \[ \] Complex tests have comments explaining "why"
    
* \[ \] README updated if new testing patterns introduced
    
* \[ \] Edge cases documented
    
* \[ \] Any setup requirements noted
    

### Quick PR Check Commands

```bash
# Run all tests
npm test -- --coverage

# Check specific file
npm test -- Button.test.tsx

# Run tests matching pattern
npm test -- --testNamePattern="should render"

# Update snapshots if intentional
npm test -- --updateSnapshot

# Check coverage report
npm test -- --coverage --watchAll=false
```

### Coverage Checklist

```bash
# Target coverage thresholds
✅ Statements: 80%+
✅ Branches: 75%+
✅ Functions: 80%+
✅ Lines: 80%+

# Configure in jest.config.js
module.exports = {
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coverageThreshold: {
    global: {
      branches: 75,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### Code Review Feedback Template

```markdown
## Testing
- [ ] Tests are clear and maintainable
- [ ] Coverage is adequate
- [ ] All edge cases considered
- [ ] No brittle tests (won't break on minor changes)

## Mocking
- [ ] External dependencies properly mocked
- [ ] Mocks are cleaned up
- [ ] No over-mocking

## Performance
- [ ] Tests run quickly
- [ ] No unnecessary waits
- [ ] Parallel execution compatible
```

---

## E2E Testing Integration (Cypress & Playwright)

### When to Use E2E Testing

While Jest tests individual components, E2E tests simulate **real users** navigating your entire application.

```plaintext
Jest (Unit/Integration)     |    E2E Tests
- Fast (milliseconds)        |  - Slower (seconds)
- Test functions/components  |  - Test full workflows
- Mock external APIs         |  - Use real API
- Run on every commit        |  - Run before release
```

### Cypress E2E Testing

#### Installation & Setup

```bash
npm install --save-dev cypress
npx cypress open
```

#### Basic Cypress Test

```typescript
// cypress/e2e/login.cy.ts
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('should login successfully with valid credentials', () => {
    // Navigate to login
    cy.get('a[href="/login"]').click();

    // Fill form
    cy.get('input[type="email"]').type('user@example.com');
    cy.get('input[type="password"]').type('password123');

    // Submit
    cy.get('button[type="submit"]').click();

    // Verify redirect
    cy.url().should('include', '/dashboard');
    cy.get('h1').should('contain', 'Welcome');
  });

  it('should show error with invalid credentials', () => {
    cy.get('a[href="/login"]').click();
    cy.get('input[type="email"]').type('wrong@example.com');
    cy.get('input[type="password"]').type('wrongpassword');
    cy.get('button[type="submit"]').click();

    cy.get('[role="alert"]').should('contain', 'Invalid credentials');
  });
});
```

### Playwright E2E Testing

#### Installation & Setup

```bash
npm install --save-dev @playwright/test
npx playwright install
```

#### Basic Playwright Test

```typescript
// tests/login.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Login Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000');
  });

  test('should login successfully with valid credentials', async ({ page }) => {
    // Click login link
    await page.click('a[href="/login"]');

    // Fill form
    await page.fill('input[type="email"]', 'user@example.com');
    await page.fill('input[type="password"]', 'password123');

    // Submit
    await page.click('button[type="submit"]');

    // Verify
    await expect(page).toHaveURL(/.*dashboard/);
    await expect(page.locator('h1')).toContainText('Welcome');
  });

  test('should show error with invalid credentials', async ({ page }) => {
    await page.click('a[href="/login"]');
    await page.fill('input[type="email"]', 'wrong@example.com');
    await page.fill('input[type="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    await expect(page.locator('[role="alert"]')).toContainText('Invalid credentials');
  });
});
```

### Jest + E2E Testing Strategy

```plaintext
                    Test Strategy
                         |
            ┌────────────┴───────────┐
            |                        |
        Jest Tests              E2E Tests
        (60-80%)                (20-40%)
            |                        |
    ├─ Unit Tests          ├─ Critical flows
    ├─ Integrations        ├─ User journeys
    └─ Components          └─ Cross-browser
    
    Runs every commit      Runs before release
    Fast feedback          Real validation
```

### When to Choose Which Tool

| Scenario | Jest | Cypress | Playwright |
| --- | --- | --- | --- |
| Component logic | ✅ | ❌ | ❌ |
| User interactions | ✅ | ✅ | ✅ |
| API integration | ✅ | ✅ | ✅ |
| Multi-step workflows | ⚠️ | ✅ | ✅ |
| Real browser | ❌ | ✅ | ✅ |
| Cross-browser | ❌ | ✅ | ✅ |
| Speed | ✅ | ⚠️ | ⚠️ |
| Learning curve | ✅ | ✅ | ✅ |

### Running Combined Test Suite

```bash
# Run all Jest unit tests
npm test

# Run Cypress E2E tests
npm run cypress:run

# Run Playwright E2E tests
npm run playwright test

# Combined CI/CD pipeline
npm test && npm run build && npm run e2e:test
```

### Best Practices for E2E with Jest

1. **Test critical paths only** - Not every feature
    
2. **Use Jest for components** - Faster feedback
    
3. **Use E2E for user flows** - Real validation
    
4. **Mock in Jest** - Speed up unit tests
    
5. **Real APIs in E2E** - Catch integration bugs
    

---

## Quick Cheatsheet

### Test File Template

```typescript
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  test('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Essential Imports

```typescript
// From testing library
import { render, screen, within, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// From jest
import '@testing-library/jest-dom'; // For custom matchers
```

### Common Setup

```typescript
describe('ComponentName', () => {
  let mockFn: jest.Mock;

  beforeEach(() => {
    mockFn = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
```

### Finding Elements - Quick Reference

```typescript
// Find one element (throws if not found)
screen.getByRole('button')
screen.getByLabelText('Email')
screen.getByText('Submit')
screen.getByPlaceholderText('Enter name')
screen.getByTestId('user-card')

// Find multiple elements
screen.getAllByRole('button')
screen.getAllByText('Item')

// Check if element doesn't exist
expect(screen.queryByText('Error')).not.toBeInTheDocument()

// Wait for async element
await screen.findByText('Loaded')
```

### Interactions - Quick Reference

```typescript
const user = userEvent.setup();

// Typing
await user.type(input, 'hello')

// Clicking
await user.click(button)

// Double-clicking
await user.dblClick(button)

// Hover
await user.hover(element)

// Select dropdown
await user.selectOptions(select, 'option-value')

// Clear input
await user.clear(input)
```

### Assertions - Quick Reference

```typescript
// Visibility
expect(element).toBeInTheDocument()
expect(element).toBeVisible()
expect(element).toBeHidden()

// Content
expect(element).toHaveTextContent('hello')
expect(element).toHaveAttribute('href', '/path')
expect(element).toHaveClass('active')

// Form elements
expect(input).toHaveValue('text')
expect(input).toBeDisabled()
expect(input).toBeEnabled()
expect(checkbox).toBeChecked()

// Functions
expect(mockFn).toHaveBeenCalled()
expect(mockFn).toHaveBeenCalledWith('arg')
expect(mockFn).toHaveBeenCalledTimes(1)
```

### Mocking - Quick Reference

```typescript
// Mock a function
const mockFn = jest.fn()
const mockFn = jest.fn().mockReturnValue('value')
const mockFn = jest.fn().mockResolvedValue({ data: 'test' })
const mockFn = jest.fn().mockRejectedValue(new Error('error'))

// Mock a module
jest.mock('./api')
(fetchUser as jest.Mock).mockResolvedValue({ name: 'John' })

// Spy on method
const spy = jest.spyOn(obj, 'method')
spy.mockRestore()

// Clear mocks
jest.clearAllMocks()
jest.resetAllMocks()
```

### Async Testing - Quick Reference

```typescript
// Wait for element to appear
await screen.findByText('Loaded')

// Wait for condition
await waitFor(() => {
  expect(element).toBeInTheDocument()
})

// Async test
test('async test', async () => {
  // ...
})
```

### Running Tests

```bash
npm test                              # Watch mode
npm test -- --coverage               # With coverage
npm test -- --coverage --watchAll=false  # Coverage once
npm test -- Button.test.tsx           # Specific file
npm test -- --testNamePattern="should render"  # Specific test
npm test -- --updateSnapshot         # Update snapshots
```

---

## Key Takeaways

1. ✅ **Test behavior, not implementation** - Users don't care about state, only what they see
    
2. ✅ **Use accessibile queries** - `getByRole` first, `getByTestId` last
    
3. ✅ **Mock external dependencies** - API calls, localStorage, etc.
    
4. ✅ **Wait for async operations** - Use `findBy` or `waitFor`
    
5. ✅ **Keep tests simple** - One concept per test
    
6. ✅ **Clean up after each test** - Clear mocks and timers
    
7. ✅ **Write descriptive names** - Test names should explain what they test
    
8. ✅ **Test error states** - Success cases are obvious, errors aren't
    
9. ✅ **Use userEvent over fireEvent** - More realistic user simulation
    
10. ✅ **Aim for coverage, not 100%** - Focus on critical paths
    

---

## Resources & Next Steps

### Official Documentation

* [Jest Documentation](https://jestjs.io)
    
* [React Testing Library Docs](https://testing-library.com/react)
    
* [Testing Library Best Practices](https://testing-library.com/docs/queries/about)
    

### Video Learning Resources

* [Kent C. Dodds - Testing React Components](https://www.youtube.com/@kentcdodds) - Best React testing educator
    
* [Traversy Media - Jest Testing Tutorial](https://www.youtube.com/watch?v=7r4xVDayWEk) - Great for beginners
    
* [Testing Library - Introduction](https://www.youtube.com/watch?v=JBC5UJc9SIE) - Official intro video
    
* [React Testing Library Crash Course](https://www.youtube.com/watch?v=OVNjsIto9Xc) - Quick overview
    

### Interactive CodeSandbox Examples

* [Jest Basics CodeSandbox](https://codesandbox.io/s/jest-testing-basics) - Fork and practice
    
* [React Testing Library Playground](https://testing-library.com/docs/react-testing-library/intro/) - Official playground
    
* [Complete Testing Example](https://codesandbox.io/s/react-testing-library-complete-example) - Full project setup
    

### Interactive CodeSandbox Examples

* [Jest Basics CodeSandbox](https://codesandbox.io/s/jest-testing-basics) - Fork and practice
    
* [React Testing Library Playground](https://testing-library.com/docs/react-testing-library/intro/) - Official playground
    
* [Complete Testing Example](https://codesandbox.io/s/react-testing-library-complete-example) - Full project setup
    

### Interactive Code Snippets (Try These!)

#### Try It: Button Click Test

```typescript
// Copy this to Button.test.tsx and run `npm test`
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

test('button click handler', async () => {
  const handleClick = jest.fn();
  const user = userEvent.setup();
  
  render(<Button onClick={handleClick}>Click me</Button>);
  
  const button = screen.getByRole('button', { name: /click me/i });
  await user.click(button);
  
  expect(handleClick).toHaveBeenCalledTimes(1);
  console.log('✅ Test passed! Click handler was called');
});
```

**What to try next:**

* Change `toHaveBeenCalledTimes(1)` to `toHaveBeenCalledTimes(2)` → Should fail
    
* Change button text to something else → Learn how queries work
    
* Add `console.log('Button clicked!')` to the onClick → See it in test output
    

#### Try It: Form Input Test

```typescript
// Copy this to Form.test.tsx and run `npm test`
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = React.useState('');
  
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(email); }}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <button type="submit">Login</button>
    </form>
  );
}

test('form submission with email', async () => {
  const handleSubmit = jest.fn();
  const user = userEvent.setup();
  
  render(<LoginForm onSubmit={handleSubmit} />);
  
  const input = screen.getByPlaceholderText('Enter email');
  await user.type(input, 'user@example.com');
  
  const button = screen.getByRole('button', { name: /login/i });
  await user.click(button);
  
  expect(handleSubmit).toHaveBeenCalledWith('user@example.com');
  console.log('✅ Form submitted with correct email');
});
```

**What to try next:**

* Try typing different emails
    
* Add validation and test error states
    
* Test form clearing after submission
    

#### Try It: Async Data Loading

```typescript
// Copy this to UserCard.test.tsx
import { render, screen, waitFor } from '@testing-library/react';

function UserCard({ userId }) {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUser({ id: userId, name: 'John Doe' });
    }, 500);
  }, [userId]);

  if (!user) return <div>Loading...</div>;
  return <h2>{user.name}</h2>;
}

test('loads and displays user data', async () => {
  render(<UserCard userId="123" />);
  
  // Initially shows loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();
  
  // Wait for data to appear
  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
  
  console.log('✅ Async data loaded successfully');
});
```

**What to try next:**

* Reduce the `setTimeout` to 100ms → Test becomes faster
    
* Increase it to 2000ms → See how `waitFor` waits
    
* Add error handling and test failure scenarios
    

#### Try It: Mock API Calls

```typescript
// Copy this to API.test.tsx
import { render, screen, waitFor } from '@testing-library/react';

// Mock the fetch function
global.fetch = jest.fn();

function Weather({ city }) {
  const [temp, setTemp] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/weather/${city}`)
      .then(r => r.json())
      .then(data => setTemp(data.temperature));
  }, [city]);

  return temp ? <div>Temperature: {temp}°</div> : <div>Loading...</div>;
}

test('displays weather data from API', async () => {
  // Mock the API response
  global.fetch.mockResolvedValueOnce({
    json: async () => ({ temperature: 72 })
  });

  render(<Weather city="New York" />);

  await waitFor(() => {
    expect(screen.getByText('Temperature: 72°')).toBeInTheDocument();
  });

  expect(global.fetch).toHaveBeenCalledWith('/api/weather/New York');
  console.log('✅ Mocked API call successful');
});
```

**What to try next:**

* Mock a failed API response
    
* Test multiple API calls
    
* Verify API was called with correct parameters
    

---

## Community Resources

* [Testing Playground](https://testing-playground.com/) - Debug selectors interactively
    
* [Kent C. Dodds -](https://testingjavascript.com/) [TestingJavaScript.com](http://TestingJavaScript.com) - Comprehensive paid course
    
* [Egghead.io](http://Egghead.io) [- Jest & Testing Library](https://egghead.io/) - Video tutorials
    

### Practice

* Create tests for existing projects
    
* Try TDD (Test-Driven Development) - write tests first
    
* Practice mocking different scenarios
    

### Advanced Topics

* E2E testing with Cypress/Playwright
    
* Visual regression testing
    
* Performance testing
    
* Accessibility testing
    

---

## Resources Summary

| Resource | Type | Best For |
| --- | --- | --- |
| Jest Docs | Official | Reference documentation |
| Testing Library Docs | Official | Query methods, best practices |
| Kent C. Dodds Videos | Video | Learning by example |
| Testing Playground | Interactive | Debugging selectors |
| CodeSandbox | Hands-on | Practice without setup |

---

**Happy Testing! 🚀**

Remember: Good tests give you confidence to ship code quickly and refactor safely. Start writing tests today, and you'll become a better developer tomorrow.

---

### 🎯 Next Steps After Reading This Guide

**Week 1:** Write unit tests for one component  
**Week 2:** Test a form with validation  
**Week 3:** Mock an API call and test error handling  
**Week 4:** Set up Cypress E2E for critical flows

**Result:** You'll be a testing expert in a month! 💪

---

### 📢 Share This Guide!

**Found this helpful?** Help other developers:

* ⭐ Share with your team
    
* 📌 Bookmark this page
    
* 🔗 Share on Twitter/LinkedIn
    
* 💬 Send to a developer friend
    
* 📧 Add to your company's learning resources
    

**Let us know:**

* What's your biggest testing challenge?
    
* Which section helped you most?
    
* What would you like to see next?
    

---

### 🤝 Contribute & Get Involved

**Have improvements?**

* Found a bug in the guide? [Report it](https://github.com)
    
* Want to add examples? [Contribute](https://github.com)
    
* Have a better explanation? [Submit a PR](https://github.com)
    

**Stay Updated:**

* Follow for updated guides and resources
    
* Subscribe to testing tips newsletter
    
* Join our testing community Discord
    

---

### 📚 What's Coming Next?

🔜 **Advanced Testing Topics:**

* Visual regression testing with Percy
    
* Performance testing with Lighthouse
    
* Accessibility testing with axe
    
* Contract testing with Pact
    
* Mutation testing strategies
    

🔜 **Real Project Walk-Throughs:**

* Testing a Next.js app
    
* Testing a Redux application
    
* Testing a GraphQL API
    
* Testing Web Components
    
* Testing Vue 3 applications
    

---

### 🙏 Thank You!

A huge thank you to everyone who:

* ✅ Read this entire guide
    
* ✅ Shared it with others
    
* ✅ Provided feedback
    
* ✅ Helped improve testing culture in their teams
    

**You're building better software. Keep going!** 🚀

---

### 📞 Get Help

**Stuck somewhere?**

* 💬 Ask in the comments below
    
* 🔗 Check the Testing Playground
    
* 📖 Read Jest official docs
    
* 🎥 Watch Kent C. Dodds' videos
    
* 💻 Try the CodeSandbox examples
    

**Remember:** Every senior developer struggled with testing once. You're on the right path! 🌟

---

### 📋 Did This Guide Help You?

**Please let us know:**

* ✅ This guide was helpful
    
* ❌ This was too advanced
    
* ⏭️ I want simpler examples
    
* 🚀 Show me advanced topics
    
* 📝 Add more real-world projects
    

Your feedback makes this guide better for everyone!

---

**One Last Thing:** Testing isn't about coverage percentages or checking boxes. It's about shipping features with **confidence**, refactoring without **fear**, and sleeping well knowing your code **works**.

Start small. Write one test. Then another. Before you know it, testing will be your superpower. 💪

---

**Happy Coding & Testing! 🎉**