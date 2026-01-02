---
title: "🚀 The Ultimate TypeScript Cheatsheet: From Zero to Advanced"
seoTitle: "Master TypeScript: Complete Cheatsheet Guide"
seoDescription: "Master TypeScript with this comprehensive cheatsheet! From basics to advanced techniques, enhance your JavaScript skills with static typing"
datePublished: Fri Jan 02 2026 14:09:01 GMT+0000 (Coordinated Universal Time)
cuid: cmjwy9hfg000002l8ckfccrgi
slug: the-ultimate-typescript-cheatsheet-from-zero-to-advanced
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1767361272405/0d498853-db5f-4b41-83d6-c116128cfe8c.png
ogImage: https://cdn.hashnode.com/res/hashnode/image/upload/v1767362807419/2aca174b-7171-4273-8609-96f9e71be84b.png
tags: javascript, web-development, react-js, reactjs, typescript, hashnode, reacthooks

---

> **JavaScript is fun… until it betrays you at runtime 😌**
> 
> TypeScript is JavaScript with trust issues—but for *good* reason.

---

## 📖 Table of Contents

1. [Introduction](#introduction)
    
2. [TypeScript Basics](#typescript-basics)
    
3. [Functions & Objects](#functions--objects)
    
4. [Interfaces vs Types](#interfaces-vs-types)
    
5. [Advanced Types](#advanced-types)
    
6. [Generics](#generics)
    
7. [Advanced Generics Patterns](#advanced-generics-patterns)
    
8. [Testing TypeScript Code](#testing-typescript-code)
    
9. [Runtime Validation with Zod & io-ts](#runtime-validation-with-zod--io-ts)
    
10. [Monorepo & Module Federation](#monorepo--module-federation)
    
11. [TypeScript with React](#typescript-with-react)
    
12. [Common Mistakes & Anti-Patterns](#common-mistakes--anti-patterns)
    
13. [Best Practices](#best-practices)
    
14. [Quick Reference Cheatsheet](#quick-reference-cheatsheet)
    

---

## 🎯 Introduction

### Why TypeScript?

**The Problem:** You're writing JavaScript, everything works locally, you deploy to production, and suddenly... 💥 `Cannot read property 'map' of undefined`. Your users are upset. Your team is upset. You're upset.

**The Solution:** TypeScript catches these errors *before* they hit production. It's like having a paranoid senior developer reviewing every line of code you write—constantly questioning your assumptions.

### What is TypeScript?

TypeScript is **JavaScript with optional static typing**. It compiles down to plain JavaScript that runs anywhere JavaScript runs. Think of it as:

* **JavaScript** = "Trust me, I know what I'm doing" 🤠
    
* **TypeScript** = "Prove it" 🔍
    

TypeScript adds:

* ✅ Type safety
    
* ✅ Better IDE autocomplete
    
* ✅ Self-documenting code
    
* ✅ Catch bugs at compile-time, not runtime
    
* ✅ Better refactoring experience
    

### TypeScript vs JavaScript

| Feature | JavaScript | TypeScript |
| --- | --- | --- |
| Types | None (dynamic) | Optional & static |
| Compilation | None | Compiles to JS |
| IDE Support | Good | Excellent |
| Learning Curve | Easy | Moderate |
| Runtime Performance | ⚡ Same | ⚡ Same (after compilation) |
| Production Ready | Yes | Yes |

---

## 📚 TypeScript Basics

### Installation & Setup

```bash
# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version

# Create a TypeScript project
npm init -y
npm install typescript --save-dev
npx tsc --init
```

### `tsconfig.json` - Your TypeScript Rules

This file tells TypeScript how strict it should be. Think of it as "how paranoid do you want TypeScript to be?"

```json
{
  "compilerOptions": {
    "target": "ES2020",                    // What JS version to compile to
    "module": "commonjs",                  // Module system
    "lib": ["ES2020", "DOM"],             // Available APIs
    "strict": true,                        // Enable ALL strict checks (DO THIS!)
    "esModuleInterop": true,              // Better CommonJS compatibility
    "skipLibCheck": true,                 // Faster compilation
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,            // Import JSON files
    "moduleResolution": "node"            // How to resolve modules
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

👉 **Pro Tip:** Always use `"strict": true` unless you have a really good reason not to.

### Basic Types

TypeScript's type system is built on these foundations:

#### 1\. **Primitive Types**

```typescript
// String
const name: string = "Alice";

// Number (int, float, bigint all use number)
const age: number = 25;
const price: number = 99.99;

// Boolean
const isActive: boolean = true;

// Null & Undefined
const nothing: null = null;
const empty: undefined = undefined;

// Symbol (rare but exists)
const uniqueKey: symbol = Symbol("key");
```

#### 2\. **Arrays**

```typescript
// Array of strings
const colors: string[] = ["red", "green", "blue"];

// Alternative syntax
const numbers: Array<number> = [1, 2, 3];

// Array with mixed types (avoid if possible!)
const mixed: (string | number)[] = ["hello", 42];

// Array of objects
interface User {
  name: string;
  age: number;
}
const users: User[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
```

#### 3\. **Tuple** - Fixed-Length Arrays with Specific Types

```typescript
// Exactly 2 elements: string, then number
const tuple: [string, number] = ["Alice", 25];

// With labels (documentation)
const response: [status: number, message: string] = [200, "OK"];

// Optional elements
const optional: [string, number?] = ["Alice"];

// Rest elements
const list: [string, ...number[]] = ["id", 1, 2, 3];
```

#### 4\. **Any, Unknown, Never**

```typescript
// ❌ ANY - "I give up on type safety"
// This bypasses TypeScript entirely. Use only as last resort!
const anything: any = "could be anything";
anything.map(); // No error (but might crash!)

// ✅ UNKNOWN - "I don't know the type, but I'll check before using it"
const something: unknown = "could be anything";
// something.toUpperCase(); // ❌ Error: need to check first!

// Check before using
if (typeof something === "string") {
  something.toUpperCase(); // ✅ Now safe!
}

// ❌ NEVER - This should never happen
function throwError(message: string): never {
  throw new Error(message);
}

// Useful for exhaustive checks
type Status = "pending" | "success" | "error";
function handleStatus(status: Status): string {
  switch (status) {
    case "pending": return "Loading...";
    case "success": return "Done!";
    case "error": return "Oops!";
    default: {
      const exhaustive: never = status;
      return exhaustive;
    }
  }
}
```

#### 5\. **Void, Null, Undefined**

```typescript
// VOID - Function returns nothing
function logMessage(msg: string): void {
  console.log(msg);
  // implicit return undefined
}

// NULL & UNDEFINED
const nullable: string | null = null;
const optional: string | undefined = undefined;

// In strict mode (recommended), null and undefined are separate:
// A string? variable can be string OR undefined, but NOT null
let message: string | null = null; // explicit null allowed
```

#### 6\. **Union Types** - "Either This OR That"

```typescript
// String OR number
const id: string | number = 123;
const username: string | number = "alice";

// More complex
type Status = "pending" | "success" | "error";
const currentStatus: Status = "success";

// Function accepting union
function process(id: string | number) {
  console.log(id);
}
```

---

## 🎨 Functions & Objects

### Typing Function Parameters

```typescript
// Simple function typing
function add(a: number, b: number): number {
  return a + b;
}

// Parameters can be const
function greet(name: const string = "Guest"): string {
  return `Hello, ${name}!`;
}

// Multiple return types (union)
function getId(): string | number {
  return Math.random() > 0.5 ? "abc123" : 12345;
}
```

### Optional & Default Parameters

```typescript
// Optional parameter (with ?)
function sendEmail(to: string, cc?: string): void {
  console.log(`Sending to ${to}`);
  if (cc) {
    console.log(`CC: ${cc}`);
  }
}

// Default parameters
function createUser(name: string, role: string = "user"): void {
  console.log(`Creating ${name} as ${role}`);
}

// Rest parameters
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

sum(1, 2, 3, 4); // Works!
```

### Typing Objects (Inline)

```typescript
// Object literal type
function createUser(user: { name: string; age: number; email?: string }): void {
  console.log(user.name);
}

// Call it
createUser({ name: "Alice", age: 25 });
createUser({ name: "Bob", age: 30, email: "bob@example.com" });
```

### Better: Reusable Object Types with `interface`

```typescript
interface User {
  id: number;
  name: string;
  email?: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
}

function saveUser(user: User): void {
  console.log(`Saving ${user.name}`);
}

const newUser: User = {
  id: 1,
  name: "Alice",
  role: "admin",
  createdAt: new Date()
};

saveUser(newUser); // ✅ Type-safe!
```

### Function Types as Variables

```typescript
// Define a function signature
type AddFunction = (a: number, b: number) => number;

const add: AddFunction = (a, b) => a + b;
const subtract: AddFunction = (a, b) => a - b;

// Callbacks
type OnSuccess = (data: any) => void;
type OnError = (error: Error) => void;

function fetchData(onSuccess: OnSuccess, onError: OnError) {
  try {
    // ... fetch logic
    onSuccess({ id: 1 });
  } catch (error) {
    onError(error as Error);
  }
}
```

### The `Function` Type (❌ Don't Use!)

```typescript
// ❌ Bad - too vague
function execute(fn: Function): void {
  fn(); // TypeScript won't help you here
}

// ✅ Good - explicit
type Handler = (data: string) => void;
function execute(fn: Handler): void {
  fn("data"); // TypeScript knows what fn expects
}
```

---

## 🤝 Interfaces vs Types

This is where beginners get confused. Let's clear it up.

### Interface - For Objects & Classes

```typescript
// Interfaces are designed for object shapes
interface Animal {
  name: string;
  age: number;
  speak(): void;
}

// Extend interfaces
interface Dog extends Animal {
  breed: string;
}

// Multiple inheritance
interface Pet extends Animal, Playable {
  owner: string;
}
```

### Type - For Everything

```typescript
// Types are more flexible - can be anything
type Status = "pending" | "success" | "error"; // Union
type ID = string | number; // Union
type Callback = (data: string) => void; // Function

// Can also describe objects
type Animal = {
  name: string;
  age: number;
  speak(): void;
};

// Intersection (combining types)
type Combined = Animal & Playable;
```

### Key Differences

| Feature | Interface | Type |
| --- | --- | --- |
| Describes Objects | ✅ Yes | ✅ Yes |
| Unions | ❌ No | ✅ Yes |
| Intersections | Limited | ✅ Yes |
| Primitives | ❌ No | ✅ Yes |
| Declaration Merging | ✅ Yes | ❌ No |
| Performance | Slightly better | Slightly slower |

### Declaration Merging

```typescript
// With interfaces, you can declare the same interface twice
// and they automatically merge!
interface User {
  name: string;
}

interface User {
  email: string;
}

// Now User has both name AND email
const user: User = { name: "Alice", email: "alice@example.com" };
```

### When to Use Which?

```typescript
// ✅ USE INTERFACE for:
// - Defining object shapes
// - Class contracts
// - When you might need to extend later

interface Repository {
  find(id: number): Promise<User>;
  save(user: User): Promise<void>;
}

// ✅ USE TYPE for:
// - Unions and discriminated unions
// - Function signatures
// - Simple value types
// - Complex combinations

type Response = SuccessResponse | ErrorResponse;
type APIEndpoint = "/users" | "/products" | "/orders";
```

### Real-World Example: Discriminated Union (Must Use Type!)

```typescript
// This pattern is impossible with interfaces alone

type SuccessResponse = {
  status: "success";
  data: User[];
};

type ErrorResponse = {
  status: "error";
  error: string;
};

type Response = SuccessResponse | ErrorResponse;

function handleResponse(response: Response) {
  if (response.status === "success") {
    // TypeScript knows response.data exists here
    console.log(response.data);
  } else {
    // TypeScript knows response.error exists here
    console.log(response.error);
  }
}
```

---

## 🎯 Advanced Types

### Union Types (Already Covered, But Deeper)

```typescript
// Union type
type Priority = "low" | "medium" | "high";

// Type narrowing with typeof
function processValue(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows it's a string here
    console.log(value.toUpperCase());
  } else {
    // TypeScript knows it's a number here
    console.log(value.toFixed(2));
  }
}

// Type narrowing with instanceof
function handleInput(input: string | Date) {
  if (input instanceof Date) {
    console.log(input.getFullYear());
  } else {
    console.log(input.length);
  }
}
```

### Intersection Types - Combining Types

```typescript
interface Employee {
  id: number;
  name: string;
}

interface Manager {
  manages: Employee[];
  budget: number;
}

// Intersection: Something that is BOTH Employee AND Manager
type ManagerEmployee = Employee & Manager;

const person: ManagerEmployee = {
  id: 1,
  name: "Alice",
  manages: [],
  budget: 50000
};
```

### Literal Types - Super Specific

```typescript
// String literal
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

// Number literal
type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Boolean literal (rarely useful)
type AlwaysTrue = true;

// Practical example
interface Request {
  method: "GET" | "POST";
  path: string;
  body?: Record<string, any>;
}

const request: Request = {
  method: "GET", // ✅ Must be exactly GET or POST
  path: "/api/users"
};
```

### Enums - Use With Caution ⚠️

```typescript
// Numeric enum (old school, not recommended)
enum Status {
  Pending = 0,
  Active = 1,
  Deleted = 2
}

// String enum (better)
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

const myColor: Color = Color.Red;
console.log(myColor); // "RED"

// ✅ BETTER: Use union types instead!
type ColorBetter = "RED" | "GREEN" | "BLUE";
const myColorBetter: ColorBetter = "RED";
```

👉 **Pro Tip:** Most developers recommend using `type` with unions instead of `enum`. They're simpler and more flexible.

### Keyof - Get Object Keys as Types

```typescript
interface User {
  name: string;
  email: string;
  age: number;
}

// UserKeys is now: "name" | "email" | "age"
type UserKeys = keyof User;

function getProperty(user: User, key: UserKeys) {
  return user[key]; // TypeScript knows what's safe!
}

getProperty({ name: "Alice", email: "a@example.com", age: 25 }, "name");
// getProperty({...}, "invalid"); // ❌ Error!
```

### Typeof - Get Type From Value

```typescript
const user = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

// Create a type from the user object
type UserType = typeof user;

// Now you can use UserType as a type
const anotherUser: UserType = {
  name: "Bob",
  age: 30,
  email: "bob@example.com"
};
```

### Utility Types - TypeScript's Superpowers

#### Partial - Make All Fields Optional

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

// All fields become optional
type PartialUser = Partial<User>;

const update: PartialUser = {
  name: "Alice" // ✅ Only updating name, no error
};
```

#### Required - Make All Fields Mandatory

```typescript
type PartialUser = {
  name?: string;
  email?: string;
};

// Remove all optional markers
type FullUser = Required<PartialUser>;

// Now both name and email are required
const user: FullUser = {
  name: "Alice",
  email: "alice@example.com"
};
```

#### Readonly - Make Properties Immutable

```typescript
interface User {
  name: string;
  email: string;
}

type ReadonlyUser = Readonly<User>;

const user: ReadonlyUser = {
  name: "Alice",
  email: "alice@example.com"
};

// user.name = "Bob"; // ❌ Error: cannot assign to readonly property
```

#### Pick - Select Specific Fields

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Create a type with only id and name
type UserPreview = Pick<User, "id" | "name">;

const preview: UserPreview = {
  id: 1,
  name: "Alice"
  // email and password are NOT allowed here
};
```

#### Omit - Exclude Specific Fields

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Create a type with everything EXCEPT password
type PublicUser = Omit<User, "password">;

const publicUser: PublicUser = {
  id: 1,
  name: "Alice",
  email: "alice@example.com"
  // password NOT allowed here
};
```

#### Record - Create Object With Specific Keys

```typescript
// Create an object with specific keys and value type
type Status = "pending" | "success" | "error";
type Handlers = Record<Status, (data: any) => void>;

const handlers: Handlers = {
  pending: (data) => console.log("Loading", data),
  success: (data) => console.log("Success", data),
  error: (data) => console.log("Error", data)
};

// TypeScript ensures all keys are present!
```

#### ReturnType - Extract Function Return Type

```typescript
function getUserName(): string {
  return "Alice";
}

// Get the return type of getUserName
type NameType = ReturnType<typeof getUserName>; // string

// Useful with complex functions
function fetchUser() {
  return Promise.resolve({ id: 1, name: "Alice" });
}

type FetchUserReturn = ReturnType<typeof fetchUser>;
// FetchUserReturn is Promise<{ id: number; name: string }>
```

---

## 💎 Generics

Think of generics as **type functions** or **type templates**. They let you write code that works with multiple types while staying type-safe.

### The Problem Generics Solve

```typescript
// Without generics - you'd need separate functions
function stringArray(items: string[]): string[] {
  return items;
}

function numberArray(items: number[]): number[] {
  return items;
}

function dateArray(items: Date[]): Date[] {
  return items;
}

// 😫 This is ridiculous! There's got to be a better way...
```

### The Generic Solution

```typescript
// One function that works with ANY type!
function identity<T>(items: T[]): T[] {
  return items;
}

// Use it:
const strings = identity(["hello", "world"]); // T is string
const numbers = identity([1, 2, 3]); // T is number
const dates = identity([new Date()]); // T is Date
```

### Generic Functions

```typescript
// Simple generic
function first<T>(array: T[]): T {
  return array[0];
}

first([1, 2, 3]); // Returns 1, type is number
first(["a", "b", "c"]); // Returns "a", type is string

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

pair(1, "hello"); // [1, "hello"]
pair("goodbye", true); // ["goodbye", true]

// Swap function
function swap<T, U>(x: T, y: U): [U, T] {
  return [y, x];
}
```

### Generic Interfaces

```typescript
interface Container<T> {
  value: T;
  getValue(): T;
  setValue(newValue: T): void;
}

const stringContainer: Container<string> = {
  value: "hello",
  getValue() {
    return this.value;
  },
  setValue(newValue) {
    this.value = newValue;
  }
};

const numberContainer: Container<number> = {
  value: 42,
  getValue() {
    return this.value;
  },
  setValue(newValue) {
    this.value = newValue;
  }
};
```

### Generic Constraints - "T Must Be..."

Sometimes you need to restrict what type T can be:

```typescript
// T must have a length property
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello"); // ✅ 5 - strings have length
getLength([1, 2, 3]); // ✅ 3 - arrays have length
// getLength(42); // ❌ Error - numbers don't have length

// T must be a key of object U
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
getProperty(user, "name"); // ✅
// getProperty(user, "invalid"); // ❌ Error

// T must extend a class
interface HasID {
  id: number;
}

function printID<T extends HasID>(item: T): void {
  console.log(item.id);
}

printID({ id: 1, name: "Alice" }); // ✅
// printID({ name: "Alice" }); // ❌ Error - no id property
```

### Real-World Generic Example: API Response Handler

```typescript
// Define a generic API response
interface ApiResponse<T> {
  status: number;
  data: T;
  error?: string;
}

// Define specific data types
interface User {
  id: number;
  name: string;
  email: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
}

// Now you can reuse the response for different data types
async function fetchUser(): Promise<ApiResponse<User>> {
  // ...
}

async function fetchProducts(): Promise<ApiResponse<Product[]>> {
  // ...
}

// Handle any response type with a generic handler
function handleResponse<T>(response: ApiResponse<T>) {
  if (response.status === 200) {
    console.log("Success:", response.data); // TypeScript knows T here
  } else {
    console.log("Error:", response.error);
  }
}
```

---

## 🔥 Advanced Generics Patterns

### Conditional Types - "If This Then That"

Think of conditional types as **if statements for types**. They let you pick different types based on conditions.

```typescript
// Basic syntax: T extends U ? X : Y
type IsString<T> = T extends string ? true : false;

type A = IsString<"hello">;  // true
type B = IsString<42>;        // false
type C = IsString<string>;    // true

// Practical example: Extract array element type
type Flatten<T> = T extends Array<infer U> ? U : T;

type Str = Flatten<string[]>;      // string
type Num = Flatten<number>;        // number
type NestedArr = Flatten<string[][]>; // string[]
```

### Extracting and Inferring Types

```typescript
// Extract function return type
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function getUserName(): string {
  return "Alice";
}

type UserNameReturn = ReturnType<typeof getUserName>; // string

// Extract promise resolved type
type Awaited<T> = T extends Promise<infer U> ? U : T;

type UserType = Awaited<Promise<{ id: number; name: string }>>;
// { id: number; name: string }

// Extract function parameters
type Parameters<T> = T extends (...args: infer P) => any ? P : never;

function add(a: number, b: number): number {
  return a + b;
}

type AddParams = Parameters<typeof add>; // [a: number, b: number]
```

### Mapped Types at Scale

Mapped types are powerful for transforming entire interfaces:

```typescript
// Basic mapped type - make all properties readonly
type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface User {
  name: string;
  age: number;
}

type ReadonlyUser = Readonly<User>;
// { readonly name: string; readonly age: number }

// Make all properties nullable
type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type NullableUser = Nullable<User>;
// { name: string | null; age: number | null }

// Create getters for all properties
type Getters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type UserGetters = Getters<User>;
// {
//   getName: () => string;
//   getAge: () => number;
// }

// Create both getters and setters
type GettersSetters<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
} & {
  [K in keyof T as `set${Capitalize<string & K>}`]: (v: T[K]) => void;
};

type UserGettersSetters = GettersSetters<User>;
// {
//   getName: () => string;
//   setName: (v: string) => void;
//   getAge: () => number;
//   setAge: (v: number) => void;
// }

// Filter properties by type
type StringPropertiesOnly<T> = {
  [K in keyof T as T[K] extends string ? K : never]: T[K];
};

type UserStringProps = StringPropertiesOnly<User>;
// { name: string }

// Convert all properties to promises
type Asyncify<T> = {
  [K in keyof T]: Promise<T[K]>;
};

type AsyncUser = Asyncify<User>;
// {
//   name: Promise<string>;
//   age: Promise<number>;
// }

// Create API endpoints from data structure
type ApiEndpoints<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: (id: string) => Promise<T[K]>;
};

type User = { profile: UserProfile; settings: UserSettings };
type UserApis = ApiEndpoints<User>;
// {
//   getProfile: (id: string) => Promise<UserProfile>;
//   getSettings: (id: string) => Promise<UserSettings>;
// }
```

### Complex Conditional Types

```typescript
// Recursively flatten nested arrays
type DeepFlatten<T> = T extends Array<infer U>
  ? DeepFlatten<U>
  : T;

type DeepFlattened = DeepFlatten<[[[1, 2], 3], 4]>; // 1 | 2 | 3 | 4

// Check if type is a function
type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

type A = IsFunction<() => void>;        // true
type B = IsFunction<string>;            // false
type C = IsFunction<(x: number) => string>; // true

// Distribute types in unions
type Flatten<T> = T extends { flat(): infer U } ? U : T;

type Str = Flatten<{ flat(): string }>;  // string
type Num = Flatten<number>;              // number

// Conditional type with union distribution
type ToArray<T> = T extends any ? T[] : never;

type StrOrNum = ToArray<string | number>;
// string[] | number[]

// Type-safe API response handler
type ApiResponse<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

type ResponseHandler<T, E> = T extends ApiResponse<infer D, infer Err>
  ? { data: D; error: Err }
  : never;

type UserResponseHandler = ResponseHandler<
  ApiResponse<{ id: number }, string>,
  string
>;
// { data: { id: number }; error: string }
```

### Advanced Generic Constraints

```typescript
// Constraint with intersection
type HasId = { id: number };
type HasName = { name: string };
type IdAndName<T extends HasId & HasName> = T;

// This works:
const user: IdAndName<{ id: 1; name: "Alice" }> = { id: 1, name: "Alice" };

// This fails:
// const partial: IdAndName<{ id: 1 }> = { id: 1 }; // ❌

// Key constraint with properties
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Alice", age: 25 };
const name = getProperty(user, "name"); // ✅ string
// getProperty(user, "invalid"); // ❌ Error

// Generic extending specific structure
type HasLength = { length: number };

function getLength<T extends HasLength>(item: T): number {
  return item.length;
}

getLength("hello");    // ✅ 5
getLength([1, 2, 3]);  // ✅ 3
getLength({ length: 10 }); // ✅ 10
// getLength(42);       // ❌ Error

// Multi-level constraints
type BuildEvent<T extends { type: string }> = T & {
  timestamp: Date;
  id: string;
};

type UserCreatedEvent = BuildEvent<{ type: "user_created"; userId: number }>;
// {
//   type: "user_created";
//   userId: number;
//   timestamp: Date;
//   id: string;
// }
```

### Real-World Advanced Generic Example: Type-Safe ORM

```typescript
// Define a type-safe database query builder
interface Column {
  name: string;
  type: "string" | "number" | "boolean" | "date";
}

interface Table {
  [key: string]: Column;
}

// Type-safe query builder
class Query<T extends Table> {
  private columns: (keyof T)[] = [];

  select<K extends keyof T>(...cols: K[]): Query<Pick<T, K>> {
    return new Query<Pick<T, K>>();
  }

  where<K extends keyof T>(
    column: K,
    operator: "=" | ">" | "<" | "!=",
    value: any
  ): this {
    // Type-safe where clause
    return this;
  }

  orderBy<K extends keyof T>(column: K, direction: "ASC" | "DESC"): this {
    return this;
  }

  async execute(): Promise<T[]> {
    return [];
  }
}

// Usage
interface UserTable {
  id: { name: "id"; type: "number" };
  name: { name: "name"; type: "string" };
  email: { name: "email"; type: "string" };
  createdAt: { name: "createdAt"; type: "date" };
}

// TypeScript ensures you can only select valid columns
const users = new Query<UserTable>()
  .select("id", "name", "email")
  .where("id", ">", 5)
  .orderBy("createdAt", "DESC");

// Type system knows the result will have id, name, email
const results = await users.execute();
// TypeScript knows: results is { id: Column; name: Column; email: Column }[]
```

---

## ✅ Testing TypeScript Code

TypeScript helps prevent bugs at compile time, but you still need tests for runtime behavior.

### Unit Testing with Jest

```typescript
// src/services/calculator.test.ts
import { Calculator } from "./calculator";

describe("Calculator", () => {
  let calculator: Calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers correctly", () => {
    const result = calculator.add(5, 3);
    expect(result).toBe(8);
  });

  test("should handle negative numbers", () => {
    const result = calculator.add(-5, 3);
    expect(result).toBe(-2);
  });

  test("should throw error on invalid input", () => {
    expect(() => calculator.add(NaN, 5)).toThrow();
  });
});
```

### Type Testing

Testing that your types work as expected:

```typescript
// src/types/user.test.ts
import { expectType, expectAssignable, expectNotAssignable } from "tsd";
import { User, CreateUserInput } from "./user";

// Test exact type match
expectType<{ id: number; name: string }>(
  {} as unknown as User
);

// Test that one type is assignable to another
expectAssignable<User>({
  id: 1,
  name: "Alice",
  email: "alice@example.com"
});

// Test that a type is NOT assignable
expectNotAssignable<User>({
  id: 1,
  name: "Alice"
  // Missing email - should fail
});

// Test complex generic types
type ApiResponse<T> = { data: T; status: number };

expectType<{ data: string; status: number }>(
  {} as unknown as ApiResponse<string>
);
```

### React Component Testing with React Testing Library

```typescript
// src/components/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

describe("Button Component", () => {
  test("renders button with text", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  test("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    const button = screen.getByText("Click me");
    fireEvent.click(button);
    
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("respects disabled prop", () => {
    const handleClick = jest.fn();
    render(
      <Button onClick={handleClick} disabled>
        Click me
      </Button>
    );
    
    const button = screen.getByText("Click me") as HTMLButtonElement;
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### Integration Testing

```typescript
// src/services/userService.test.ts
import { UserService } from "./userService";
import { UserRepository } from "../database/userRepository";

describe("UserService Integration", () => {
  let service: UserService;
  let repository: UserRepository;

  beforeEach(() => {
    repository = new UserRepository();
    service = new UserService(repository);
  });

  test("should create and retrieve user", async () => {
    const result = await service.createUser({
      email: "alice@example.com",
      name: "Alice",
      password: "hash123"
    });

    expect(result.success).toBe(true);

    if (result.success) {
      const user = await service.getUserById(result.data.id);
      expect(user.success).toBe(true);
      if (user.success) {
        expect(user.data.email).toBe("alice@example.com");
      }
    }
  });

  test("should prevent duplicate emails", async () => {
    await service.createUser({
      email: "alice@example.com",
      name: "Alice",
      password: "hash123"
    });

    const duplicate = await service.createUser({
      email: "alice@example.com",
      name: "Alice2",
      password: "hash456"
    });

    expect(duplicate.success).toBe(false);
    if (!duplicate.success) {
      expect(duplicate.error).toContain("already in use");
    }
  });
});
```

### Testing Generic Functions

```typescript
// src/utils/collection.test.ts
import { first, flatten, groupBy } from "./collection";

describe("Collection Utilities", () => {
  test("first() returns first element with correct type", () => {
    const numbers = [1, 2, 3];
    const result = first(numbers);
    
    // TypeScript knows result is a number
    expect(result).toBe(1);
    expect(typeof result).toBe("number");
  });

  test("flatten() works with different types", () => {
    const nested = [[1, 2], [3, 4]];
    const result = flatten(nested);
    
    expect(result).toEqual([1, 2, 3, 4]);
    expect(result[0]).toBe(1);
  });

  test("groupBy() creates correct groups", () => {
    interface User {
      name: string;
      role: "admin" | "user";
    }

    const users: User[] = [
      { name: "Alice", role: "admin" },
      { name: "Bob", role: "user" },
      { name: "Charlie", role: "admin" }
    ];

    const grouped = groupBy(users, u => u.role);
    
    expect(grouped.admin).toHaveLength(2);
    expect(grouped.user).toHaveLength(1);
  });
});
```

### Contract Testing (for APIs)

```typescript
// src/api/users.contract.test.ts
import { validate } from "jsonschema";
import { User, ApiResponse } from "@types/index";

describe("User API Contract", () => {
  const userSchema = {
    type: "object",
    properties: {
      id: { type: "number" },
      name: { type: "string" },
      email: { type: "string", format: "email" },
      role: { enum: ["admin", "user", "guest"] }
    },
    required: ["id", "name", "email", "role"]
  };

  test("user response matches schema", () => {
    const response: User = {
      id: 1,
      name: "Alice",
      email: "alice@example.com",
      role: "user"
    };

    const result = validate(response, userSchema);
    expect(result.valid).toBe(true);
  });

  test("invalid user response fails validation", () => {
    const invalidResponse = {
      id: "not-a-number",
      name: "Alice"
      // Missing required fields
    };

    const result = validate(invalidResponse, userSchema);
    expect(result.valid).toBe(false);
  });
});
```

---

## 🛡️ Runtime Validation with Zod & io-ts

TypeScript types disappear at runtime. For user input, APIs, and external data, you need runtime validation.

### Zod - Simple and Elegant

```typescript
import { z } from "zod";

// Define a schema
const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(0).max(150).optional(),
  role: z.enum(["admin", "user", "guest"]).default("user")
});

// Extract TypeScript type from schema
type User = z.infer<typeof UserSchema>;

// Parse and validate at runtime
const userData = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  role: "admin"
};

const user = UserSchema.parse(userData); // ✅ Validated!
// If validation fails, throws ZodError

// Safe parsing (returns result object)
const result = UserSchema.safeParse(userData);

if (result.success) {
  console.log(result.data); // Validated data
} else {
  console.error(result.error); // Validation errors
}
```

### Zod Advanced Patterns

```typescript
// Custom refinements
const PasswordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .refine(
    password => /[A-Z]/.test(password),
    "Password must contain uppercase letter"
  )
  .refine(
    password => /[0-9]/.test(password),
    "Password must contain number"
  );

// Nested objects
const UserWithProfileSchema = z.object({
  id: z.number(),
  name: z.string(),
  profile: z.object({
    bio: z.string(),
    avatar: z.string().url(),
    preferences: z.object({
      theme: z.enum(["light", "dark"]),
      notifications: z.boolean()
    })
  })
});

// Arrays
const UsersSchema = z.array(UserSchema);

// Union types (discriminated)
const SuccessResponseSchema = z.object({
  success: z.literal(true),
  data: UserSchema
});

const ErrorResponseSchema = z.object({
  success: z.literal(false),
  error: z.string()
});

const ResponseSchema = z.discriminatedUnion("success", [
  SuccessResponseSchema,
  ErrorResponseSchema
]);

type SuccessResponse = z.infer<typeof SuccessResponseSchema>;
type ErrorResponse = z.infer<typeof ErrorResponseSchema>;
type Response = z.infer<typeof ResponseSchema>;

// Transformation
const DateSchema = z.string().transform(str => new Date(str));

// Coercion (type conversion)
const AgeSchema = z.coerce.number().min(0);
AgeSchema.parse("25"); // ✅ Returns 25 as number

// Set up transformations
const TrimmedStringSchema = z.string().trim().toLowerCase();
TrimmedStringSchema.parse("  HELLO  "); // ✅ Returns "hello"
```

### Using Zod with Express

```typescript
import express, { Request, Response } from "express";
import { z } from "zod";

const app = express();
app.use(express.json());

// Middleware for validation
const validateRequest = <T>(schema: z.ZodSchema<T>) => 
  (req: Request, res: Response, next: express.NextFunction) => {
    try {
      req.body = schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ errors: error.errors });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };

// Define schemas
const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
});

type CreateUserInput = z.infer<typeof CreateUserSchema>;

// Route with validation
app.post("/users", validateRequest(CreateUserSchema), (req: Request, res: Response) => {
  const user: CreateUserInput = req.body; // ✅ Type-safe and validated
  
  // Your logic here
  res.json({ id: 1, ...user });
});
```

### io-ts - TypeScript-First Validation

```typescript
import * as t from "io-ts";
import { either } from "fp-ts";
import { pipe } from "fp-ts/lib/function";

// Define codecs (schemas)
const User = t.type({
  id: t.number,
  name: t.string,
  email: t.string,
  role: t.union([t.literal("admin"), t.literal("user"), t.literal("guest")])
});

// Extract TypeScript type
type User = t.TypeOf<typeof User>;

// Runtime validation
const userData = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
  role: "admin"
};

const result = User.decode(userData);

// Use Either monad for handling errors
pipe(
  result,
  either.fold(
    errors => console.error("Validation errors:", errors),
    user => console.log("Valid user:", user)
  )
);
```

### io-ts Advanced Patterns

```typescript
// Custom types
const Email = new t.Type<string, string, unknown>(
  "Email",
  (u): u is string => typeof u === "string" && u.includes("@"),
  (u, c) => {
    if (typeof u === "string" && u.includes("@")) {
      return t.success(u);
    }
    return t.failure(u, c);
  },
  t.identity
);

// Partial objects (some fields optional)
const UserProfile = t.partial({
  bio: t.string,
  avatar: t.string,
  phone: t.string
});

// Intersection (combining types)
const AdminUser = t.intersection([
  User,
  t.type({
    permissions: t.array(t.string)
  })
]);

// Recursive types
const Comment: t.Type<any> = t.lazy(() =>
  t.type({
    id: t.number,
    text: t.string,
    replies: t.array(Comment)
  })
);
```

### Zod vs io-ts Comparison

```typescript
// ZODSCHEMA - Simpler, easier to learn
import { z } from "zod";

const schema = z.object({
  name: z.string(),
  age: z.number().optional()
});

// io-ts - More powerful, functional programming style
import * as t from "io-ts";

const codec = t.type({
  name: t.string,
  age: t.union([t.number, t.undefined])
});

// Both achieve same result, different philosophies:
// Zod: "Simple API, chainable, imperative"
// io-ts: "Type-safe, composable, functional"

// RECOMMENDATION:
// Use Zod for:
// - APIs and Express apps
// - Quick prototyping
// - Team familiar with traditional validation
//
// Use io-ts for:
// - Complex type systems
// - Functional programming projects
// - Maximum type safety
```

---

## 🏗️ Monorepo & Module Federation

### Monorepo Setup with Yarn Workspaces

```json
{
  "name": "my-monorepo",
  "version": "1.0.0",
  "private": true,
  "workspaces": [
    "packages/*"
  ]
}
```

```plaintext
my-monorepo/
├── package.json
├── packages/
│   ├── common/
│   │   ├── package.json
│   │   ├── src/
│   │   │   └── types.ts
│   │   └── tsconfig.json
│   ├── api/
│   │   ├── package.json
│   │   ├── src/
│   │   │   ├── index.ts
│   │   │   └── routes/
│   │   └── tsconfig.json
│   └── web/
│       ├── package.json
│       ├── src/
│       │   ├── App.tsx
│       │   └── components/
│       └── tsconfig.json
└── tsconfig.json (root config)
```

### Root tsconfig.json

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@common/*": ["packages/common/src/*"],
      "@api/*": ["packages/api/src/*"],
      "@web/*": ["packages/web/src/*"]
    },
    "composite": true
  }
}
```

### Package tsconfig.json

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "references": [
    { "path": "../common" }
  ]
}
```

### Sharing Types Across Packages

```typescript
// packages/common/src/types.ts
export interface User {
  id: number;
  name: string;
  email: string;
}

export type ApiResponse<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

export type UserResponse = ApiResponse<User>;
```

```typescript
// packages/api/src/index.ts
import { User, UserResponse } from "@common/types";

export const getUser = async (id: number): Promise<UserResponse> => {
  return {
    success: true,
    data: { id, name: "Alice", email: "alice@example.com" }
  };
};
```

```typescript
// packages/web/src/App.tsx
import { UserResponse } from "@common/types";
import { getUser } from "@api/index";

const App: React.FC = () => {
  const [user, setUser] = React.useState<UserResponse | null>(null);

  React.useEffect(() => {
    getUser(1).then(setUser);
  }, []);

  if (!user?.success) {
    return <div>Loading...</div>;
  }

  return <div>Welcome, {user.data.name}</div>;
};
```

### Module Federation with Webpack

For micro-frontends, share modules across deployed applications:

```typescript
// webpack.config.js - Host App
const ModuleFederationPlugin = require("webpack").container.ModuleFederationPlugin;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remote: "remote@http://localhost:3001/remoteEntry.js"
      },
      shared: ["react", "react-dom", "shared-types"]
    })
  ]
};
```

```typescript
// webpack.config.js - Remote App
new ModuleFederationPlugin({
  name: "remote",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/components/Button"
  },
  shared: ["react", "react-dom", "shared-types"]
})
```

```typescript
// Using remote component in host
import React from "react";

const RemoteButton = React.lazy(() => import("remote/Button"));

const App: React.FC = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <RemoteButton />
    </React.Suspense>
  );
};
```

### Lint and Format in Monorepo

```json
// Root package.json
{
  "scripts": {
    "lint": "eslint packages/*/src --ext .ts,.tsx",
    "format": "prettier --write 'packages/*/src/**/*.{ts,tsx}'",
    "test": "jest --projects 'packages/*'",
    "build": "tsc --build tsconfig.json"
  }
}
```

```javascript
// .eslintrc.js (root)
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "^_" }
    ]
  }
};
```

---

## ⚛️ TypeScript with React

### Typing Component Props

```typescript
import React from 'react';

// Define prop types with interface
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

// Functional component with typed props
const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled = false,
  className = ""
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {children}
    </button>
  );
};

export default Button;
```

### Typing Component State

```typescript
import React, { useState } from 'react';

interface UserState {
  name: string;
  email: string;
  age: number;
}

const UserForm: React.FC = () => {
  // TypeScript infers the state type
  const [user, setUser] = useState<UserState>({
    name: "Alice",
    email: "alice@example.com",
    age: 25
  });

  const handleNameChange = (newName: string) => {
    setUser({ ...user, name: newName });
  };

  return <div>{user.name}</div>;
};
```

### Typing Event Handlers

```typescript
import React from 'react';

interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  username: string;
  password: string;
}

const LoginForm: React.FC<FormProps> = ({ onSubmit }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    // Handle input change
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    // Handle select change
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} type="text" />
      <select onChange={handleSelectChange}>
        <option>Option 1</option>
      </select>
    </form>
  );
};
```

### React.FC vs Function Declaration

```typescript
// Old way: React.FC (Function Component)
const OldWay: React.FC<Props> = ({ name }) => {
  return <h1>{name}</h1>;
};

// ✅ Modern way: Just a function with typed parameters
interface Props {
  name: string;
}

const ModernWay = ({ name }: Props) => {
  return <h1>{name}</h1>;
};

// Benefits of modern way:
// - Simpler syntax
// - Children automatically included in Props if needed
// - No unnecessary wrapper
```

### Typing Children Props

```typescript
import React, { ReactNode } from 'react';

// Simple way
interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};

// If you want more specific children
interface CardProps {
  children: React.ReactElement<any>;
  title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      {children}
    </div>
  );
};

// Multiple children with specific types
interface CompositeProps {
  header: React.ReactElement;
  body: React.ReactElement;
  footer?: React.ReactElement;
}

const Composite: React.FC<CompositeProps> = ({ header, body, footer }) => {
  return (
    <>
      {header}
      {body}
      {footer}
    </>
  );
};
```

### Typing Custom Hooks

```typescript
import { useState, useCallback } from 'react';

// Custom hook for managing form state
interface UseFormReturn<T> {
  values: T;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  resetForm: () => void;
}

function useForm<T extends Record<string, any>>(
  initialValues: T
): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const resetForm = useCallback(() => {
    setValues(initialValues);
  }, [initialValues]);

  return { values, handleChange, resetForm };
}

// Usage
const MyForm: React.FC = () => {
  const { values, handleChange, resetForm } = useForm({
    username: "",
    email: ""
  });

  return (
    <form>
      <input name="username" value={values.username} onChange={handleChange} />
      <input name="email" value={values.email} onChange={handleChange} />
      <button onClick={resetForm}>Reset</button>
    </form>
  );
};
```

### Typing Refs

```typescript
import React, { useRef, useEffect } from 'react';

const TextInput: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Safe to use ref here
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
};

// Ref to component instance
interface ChildHandle {
  scrollToTop(): void;
}

const Child = React.forwardRef<ChildHandle>((_, ref) => {
  React.useImperativeHandle(ref, () => ({
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }));

  return <div>Child Content</div>;
});

const Parent: React.FC = () => {
  const childRef = useRef<ChildHandle>(null);

  return (
    <>
      <Child ref={childRef} />
      <button onClick={() => childRef.current?.scrollToTop()}>
        Scroll to Top
      </button>
    </>
  );
};
```

### Typing Context API

```typescript
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the context value type
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

interface User {
  id: number;
  email: string;
  name: string;
}

// Create context with type
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Login logic
    setUser({ id: 1, email, name: "Alice" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use context
function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}

// Usage in components
const Dashboard: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
```

---

## ⚠️ Common Mistakes & Anti-Patterns

### ❌ Mistake #1: Overusing `any`

```typescript
// ❌ WRONG
function process(data: any): any {
  return data.something.nested.value;
}

// ✅ RIGHT
interface Data {
  something: {
    nested: {
      value: string;
    };
  };
}

function process(data: Data): string {
  return data.something.nested.value;
}

// If you truly don't know the type
function process(data: unknown): string {
  if (typeof data === "object" && data !== null && "value" in data) {
    return String(data.value);
  }
  return "";
}
```

> "`any` is like 'trust me bro' — works until production" 😌

### ❌ Mistake #2: Over-Engineering Types

```typescript
// ❌ OVERDONE - Way too complex
type ComplexType<T extends { [K in keyof T]: T[K] extends (...args: any[]) => infer R ? R : T[K] }> = T;

// ✅ SIMPLE - Just as effective
type SimpleType<T> = T;

// Remember: If a type takes you 5 minutes to understand, it's probably too complex.
```

### ❌ Mistake #3: Ignoring Compiler Warnings

```typescript
// ❌ WRONG - Ignoring TypeScript
// @ts-ignore
const value: string = 123; // This WILL bite you!

// ✅ RIGHT - Fix the actual problem
const value: string = String(123);
```

### ❌ Mistake #4: Type Annotations That You'll Forget

```typescript
// ❌ CONFUSING
type A = B;
type B = C;
type C = D;
type D = string;

// Good luck remembering what A actually is! 🤔

// ✅ CLEAR
type UserId = string;
type Username = string;
type Email = string;
```

### ❌ Mistake #5: Generic Constraints That Are Too Restrictive

```typescript
// ❌ TOO RESTRICTIVE
function process<T extends string>(value: T): T {
  return value.toUpperCase(); // This might fail!
}

// ✅ CORRECT
function process<T extends string>(value: T): string {
  return value.toUpperCase();
}
```

### ❌ Mistake #6: Forgetting Optional Chaining

```typescript
// ❌ RISKY - Will crash if user is null
function getName(user: User | null): string {
  return user.name; // Error in strict mode!
}

// ✅ SAFE - Using optional chaining
function getName(user: User | null): string {
  return user?.name ?? "Unknown";
}
```

---

## 🎓 Best Practices

### 1\. **Always Use** `strict: true`

```json
{
  "compilerOptions": {
    "strict": true,
    // This enables:
    // - noImplicitAny
    // - noImplicitThis
    // - strictBindCallApply
    // - strictFunctionTypes
    // - strictNullChecks
    // - strictPropertyInitialization
  }
}
```

### 2\. **Prefer** `type` for Union/Discriminated Types

```typescript
// ✅ GOOD - Type is clearer for unions
type Status = "pending" | "success" | "error";
type Response = SuccessResponse | ErrorResponse;

// ❌ AVOID for unions
interface Status {
  // Can't represent unions with interfaces
}
```

### 3\. **Write Types First, Then Code**

```typescript
// ✅ GOOD - Types guide implementation
interface UserRepository {
  findById(id: number): Promise<User>;
  save(user: User): Promise<void>;
  delete(id: number): Promise<void>;
}

// Now implement
class UserRepositoryImpl implements UserRepository {
  async findById(id: number): Promise<User> {
    // Implementation follows the contract
  }
  // ...
}
```

### 4\. **Use Descriptive Type Names**

```typescript
// ❌ VAGUE
type Data = string | number;
type Callback = (arg: any) => void;

// ✅ DESCRIPTIVE
type UserId = string | number;
type OnDataLoaded = (data: User[]) => void;
```

### 5\. **Group Related Types Together**

```typescript
// ✅ ORGANIZED
namespace User {
  export interface Profile {
    name: string;
    email: string;
  }

  export interface Credentials {
    email: string;
    password: string;
  }

  export type Status = "active" | "inactive" | "suspended";
}

// Usage
const profile: User.Profile = { name: "Alice", email: "a@example.com" };
```

### 6\. **Keep Type Files Separate**

```plaintext
src/
  types/
    user.types.ts
    product.types.ts
    api.types.ts
  components/
    UserCard.tsx
  hooks/
    useUser.ts
```

### 7\. **Use Exhaustive Checking**

```typescript
type Status = "pending" | "success" | "error";

function handleStatus(status: Status): string {
  switch (status) {
    case "pending":
      return "Loading...";
    case "success":
      return "Done!";
    case "error":
      return "Oops!";
    default:
      // This forces you to handle all cases!
      const exhaustive: never = status;
      return exhaustive;
  }
}
```

### 8\. **Document Complex Types**

```typescript
/**
 * API Response with discriminated union pattern
 * 
 * @example
 * ```
 * const response: ApiResponse<User> = {
 *   status: 200,
 *   data: { id: 1, name: "Alice" }
 * };
 * ```
 */
type ApiResponse<T> = 
  | { status: 200; data: T }
  | { status: 400; error: "Invalid request" }
  | { status: 401; error: "Unauthorized" }
  | { status: 500; error: "Server error" };
```

### 9\. **Prefer Composition Over Inheritance**

```typescript
// ❌ COMPLEX INHERITANCE
class Animal {
  name: string;
  age: number;
}

class Dog extends Animal {
  breed: string;
}

class ServiceDog extends Dog {
  service: string;
}

// ✅ COMPOSITION (Cleaner with types)
interface WithName {
  name: string;
}

interface WithAge {
  age: number;
}

interface Dog extends WithName, WithAge {
  breed: string;
}

interface ServiceDog extends Dog {
  service: string;
}
```

### 10\. **Test Your Types**

```typescript
// Use type-level testing to ensure your types work correctly
import { expectType } from "tsd";

type User = { name: string; age: number };

expectType<string>(({} as User).name); // ✅ Passes
// expectType<number>(({} as User).name); // ❌ Would fail
```

---

## 📋 Quick Reference Cheatsheet

### Primitive Types

```typescript
const str: string = "hello";
const num: number = 42;
const bool: boolean = true;
const nul: null = null;
const undef: undefined = undefined;
const sym: symbol = Symbol();
const big: bigint = 100n;
```

### Collections

```typescript
const arr: string[] = ["a", "b"];
const arr2: Array<number> = [1, 2];
const tuple: [string, number] = ["x", 1];
const set: Set<string> = new Set();
const map: Map<string, number> = new Map();
```

### Functions

```typescript
function add(a: number, b: number): number {
  return a + b;
}

const subtract: (a: number, b: number) => number = (a, b) => a - b;

async function fetchData(): Promise<Data> {
  return data;
}
```

### Objects & Interfaces

```typescript
interface User {
  name: string;
  email?: string;
  readonly id: number;
}

type UserRecord = Record<string, User>;
type UserKeys = keyof User; // "name" | "email" | "id"
```

### Advanced Types

```typescript
type Union = string | number;
type Intersection = A & B;
type Optional = { name?: string };
type Readonly = { readonly id: number };

type Partial<T> = { [K in keyof T]?: T[K] };
type Required<T> = { [K in keyof T]-?: T[K] };
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
```

### Generics

```typescript
function identity<T>(x: T): T {
  return x;
}

interface Container<T> {
  value: T;
}

function process<T extends { length: number }>(x: T): number {
  return x.length;
}
```

### React Types

```typescript
import React, { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Component: FC<Props> = ({ children, onClick }) => (
  <button onClick={onClick}>{children}</button>
);
```

### Common Patterns

```typescript
// Discriminated Union
type Result<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

// Generic API Response
interface Response<T> {
  status: number;
  data: T;
  timestamp: Date;
}

// Opaque Type (for runtime distinction)
type UserId = string & { readonly __brand: "UserId" };
```

---

## �️ From Zero to Production: Building a Real App

This section walks you through building a complete, production-ready TypeScript application from scratch.

### Project Setup

```bash
# Initialize project
mkdir my-app && cd my-app
npm init -y

# Install dependencies
npm install --save-dev typescript @types/node ts-node

# Create TypeScript config
npx tsc --init
```

### Step 1: Define Your Core Types

```typescript
// src/types/index.ts
export interface User {
  id: number;
  email: string;
  name: string;
  role: "admin" | "user" | "guest";
  createdAt: Date;
  isActive: boolean;
}

export interface CreateUserInput {
  email: string;
  name: string;
  password: string; // Never store raw passwords!
}

export type ApiResponse<T> = 
  | { success: true; data: T; statusCode: 200 }
  | { success: false; error: string; statusCode: 400 | 401 | 500 };

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}
```

### Step 2: Build Your Data Layer

```typescript
// src/database/userRepository.ts
import { User, CreateUserInput } from "../types";

export interface IUserRepository {
  findById(id: number): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  create(input: CreateUserInput): Promise<User>;
  update(id: number, data: Partial<User>): Promise<User>;
  delete(id: number): Promise<void>;
  list(page: number, pageSize: number): Promise<User[]>;
}

// In-memory implementation for demo (use a real DB in production)
export class UserRepository implements IUserRepository {
  private users: Map<number, User> = new Map();
  private nextId: number = 1;

  async findById(id: number): Promise<User | null> {
    return this.users.get(id) ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    for (const user of this.users.values()) {
      if (user.email === email) return user;
    }
    return null;
  }

  async create(input: CreateUserInput): Promise<User> {
    const user: User = {
      id: this.nextId++,
      email: input.email,
      name: input.name,
      role: "user",
      createdAt: new Date(),
      isActive: true
    };
    this.users.set(user.id, user);
    return user;
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const user = await this.findById(id);
    if (!user) throw new Error("User not found");
    
    const updated = { ...user, ...data, id: user.id };
    this.users.set(id, updated);
    return updated;
  }

  async delete(id: number): Promise<void> {
    this.users.delete(id);
  }

  async list(page: number, pageSize: number): Promise<User[]> {
    const start = (page - 1) * pageSize;
    return Array.from(this.users.values()).slice(start, start + pageSize);
  }
}
```

### Step 3: Business Logic Layer

```typescript
// src/services/userService.ts
import { User, CreateUserInput, ApiResponse } from "../types";
import { IUserRepository } from "../database/userRepository";

export class UserService {
  constructor(private repository: IUserRepository) {}

  async getUserById(id: number): Promise<ApiResponse<User>> {
    try {
      const user = await this.repository.findById(id);
      
      if (!user) {
        return {
          success: false,
          error: `User with ID ${id} not found`,
          statusCode: 400
        };
      }

      return { success: true, data: user, statusCode: 200 };
    } catch (error) {
      return {
        success: false,
        error: "Failed to retrieve user",
        statusCode: 500
      };
    }
  }

  async createUser(input: CreateUserInput): Promise<ApiResponse<User>> {
    try {
      // Validate input
      if (!this.isValidEmail(input.email)) {
        return {
          success: false,
          error: "Invalid email format",
          statusCode: 400
        };
      }

      // Check if user already exists
      const existing = await this.repository.findByEmail(input.email);
      if (existing) {
        return {
          success: false,
          error: "Email already in use",
          statusCode: 400
        };
      }

      // Create user
      const user = await this.repository.create(input);
      return { success: true, data: user, statusCode: 200 };
    } catch (error) {
      return {
        success: false,
        error: "Failed to create user",
        statusCode: 500
      };
    }
  }

  private isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
```

### Step 4: API Layer (Express Example)

```typescript
// src/api/routes/userRoutes.ts
import { Router, Request, Response } from "express";
import { UserService } from "../../services/userService";
import { CreateUserInput } from "../../types";

export function createUserRoutes(service: UserService): Router {
  const router = Router();

  router.get("/users/:id", async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    const result = await service.getUserById(id);
    
    if (!result.success) {
      return res.status(result.statusCode).json({ error: result.error });
    }

    res.json(result.data);
  });

  router.post("/users", async (req: Request, res: Response) => {
    const input: CreateUserInput = req.body;

    // Basic validation
    if (!input.email || !input.name || !input.password) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const result = await service.createUser(input);

    if (!result.success) {
      return res.status(result.statusCode).json({ error: result.error });
    }

    res.status(201).json(result.data);
  });

  return router;
}
```

### Step 5: Main Application

```typescript
// src/app.ts
import express from "express";
import { UserRepository } from "./database/userRepository";
import { UserService } from "./services/userService";
import { createUserRoutes } from "./api/routes/userRoutes";

const app = express();
app.use(express.json());

// Initialize dependencies (Dependency Injection)
const userRepository = new UserRepository();
const userService = new UserService(userRepository);

// Mount routes
app.use("/api", createUserRoutes(userService));

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### Step 6: Testing Your App

```typescript
// src/app.test.ts
import { UserRepository } from "./database/userRepository";
import { UserService } from "./services/userService";

async function runTests() {
  const repository = new UserRepository();
  const service = new UserService(repository);

  console.log("Test 1: Create a user");
  const createResult = await service.createUser({
    email: "alice@example.com",
    name: "Alice",
    password: "hash123"
  });
  console.log(createResult);
  // Output: { success: true, data: { id: 1, ... }, statusCode: 200 }

  console.log("\nTest 2: Get user by ID");
  const getResult = await service.getUserById(1);
  console.log(getResult);
  // Output: { success: true, data: { id: 1, ... }, statusCode: 200 }

  console.log("\nTest 3: Duplicate email");
  const dupResult = await service.createUser({
    email: "alice@example.com",
    name: "Alice2",
    password: "hash123"
  });
  console.log(dupResult);
  // Output: { success: false, error: "Email already in use", statusCode: 400 }

  console.log("\nTest 4: Invalid email");
  const invalidResult = await service.createUser({
    email: "not-an-email",
    name: "Bob",
    password: "hash123"
  });
  console.log(invalidResult);
  // Output: { success: false, error: "Invalid email format", statusCode: 400 }
}

runTests();
```

### 📦 Project Structure Summary

```plaintext
my-app/
├── src/
│   ├── types/
│   │   └── index.ts          # All interfaces & types
│   ├── database/
│   │   └── userRepository.ts # Data access layer
│   ├── services/
│   │   └── userService.ts    # Business logic
│   ├── api/
│   │   └── routes/
│   │       └── userRoutes.ts # API endpoints
│   ├── app.ts                # Main application
│   └── app.test.ts           # Tests
├── tsconfig.json
├── package.json
└── README.md
```

### ✅ Key Principles Applied

1. **Separation of Concerns** - Types, Database, Services, API are separate
    
2. **Dependency Injection** - Services don't create dependencies
    
3. **Type Safety** - Full coverage from API to database
    
4. **Error Handling** - Consistent `ApiResponse<T>` pattern
    
5. **Testability** - Easy to mock and test
    
6. **Scalability** - Easy to swap implementations (e.g., memory → real database)
    

---

## 🚨 TypeScript Error Messages Decoded

When TypeScript throws an error, it can be cryptic. Here are the **Top 10 confusing errors** and how to fix them:

### Error #1: "Object is of type 'unknown'"

```typescript
// ❌ ERROR
const data: unknown = { name: "Alice" };
console.log(data.name); // "Object is of type 'unknown'"

// ✅ FIX
if (typeof data === "object" && data !== null && "name" in data) {
  console.log(data.name);
}

// OR use type guard function
function isUser(data: unknown): data is { name: string } {
  return (
    typeof data === "object" &&
    data !== null &&
    "name" in data &&
    typeof (data as any).name === "string"
  );
}

if (isUser(data)) {
  console.log(data.name); // ✅ Now safe
}
```

### Error #2: "Argument of type 'X' is not assignable to parameter of type 'Y'"

```typescript
// ❌ ERROR
function greet(name: string): void {
  console.log(`Hello, ${name}`);
}

const value: string | number = "Alice";
greet(value); // "Argument of type 'string | number' is not assignable to parameter of type 'string'"

// ✅ FIX - Narrow the type first
if (typeof value === "string") {
  greet(value);
}

// OR assert if you're certain
greet(value as string);
```

### Error #3: "Property 'X' does not exist on type 'Y'"

```typescript
// ❌ ERROR
interface User {
  name: string;
}

const user: User = { name: "Alice" };
console.log(user.email); // "Property 'email' does not exist on type 'User'"

// ✅ FIX - Add the property to the interface
interface User {
  name: string;
  email?: string; // Optional property
}

const user: User = { name: "Alice", email: "alice@example.com" };
console.log(user.email);

// OR check if it exists
if ("email" in user) {
  console.log(user.email);
}
```

### Error #4: "Argument of type 'X | null' is not assignable to parameter of type 'X'"

```typescript
// ❌ ERROR
function processName(name: string): void {
  console.log(name.toUpperCase());
}

const user: { name: string | null } = { name: null };
processName(user.name); // "Argument of type 'string | null' is not assignable..."

// ✅ FIX - Handle null case
if (user.name !== null) {
  processName(user.name);
}

// OR use optional chaining
console.log(user.name?.toUpperCase());

// OR provide a default
processName(user.name ?? "Unknown");
```

### Error #5: "No overload matches this call"

```typescript
// ❌ ERROR
function add(a: number, b: number): number {
  return a + b;
}

add("5", "10"); // "No overload matches this call"

// ✅ FIX - Use correct types or create overloads
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: string | number, b: string | number): string | number {
  return a as any + b as any;
}

add("5", "10"); // ✅ "510"
add(5, 10);     // ✅ 15
```

### Error #6: "Cannot find name 'X'"

```typescript
// ❌ ERROR
console.log(myVariable); // "Cannot find name 'myVariable'"

// ✅ FIX - Declare the variable
const myVariable = "Hello";
console.log(myVariable);

// OR check tsconfig.json includes are correct
// OR check file is imported properly
import { myVariable } from "./module";
```

### Error #7: "Type 'X' is not assignable to type 'never'"

```typescript
// ❌ ERROR
type Status = "pending" | "success" | "error";

function handle(status: Status): string {
  switch (status) {
    case "pending": return "Loading";
    case "success": return "Done";
    case "error": return "Failed";
    default:
      const impossible: never = status; // "Type 'string' is not assignable to type 'never'"
      return impossible;
  }
}

// ✅ FIX - Handle all cases (or your type is wrong)
// If you get this error, you forgot a case!
type Status = "pending" | "success" | "error" | "cancelled"; // NEW CASE

function handle(status: Status): string {
  switch (status) {
    case "pending": return "Loading";
    case "success": return "Done";
    case "error": return "Failed";
    case "cancelled": return "Cancelled"; // ✅ Added!
    default:
      const impossible: never = status;
      return impossible;
  }
}
```

### Error #8: "Generic type 'X' requires Y type argument(s)"

```typescript
// ❌ ERROR
interface Container<T> {
  value: T;
}

const box: Container = { value: "hello" }; // "Generic type 'Container' requires 1 type argument"

// ✅ FIX - Provide the type argument
const box: Container<string> = { value: "hello" };

// OR infer it
const box = { value: "hello" } as const satisfies Container<string>;
```

### Error #9: "Cannot assign to readonly property"

```typescript
// ❌ ERROR
interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
user.id = 2; // "Cannot assign to readonly property"

// ✅ FIX - Create a new object or use a non-readonly type
const updatedUser: User = { ...user, id: 2 }; // ✅ Create new object

// OR remove readonly if not needed
interface User {
  id: number;
  name: string;
}
```

### Error #10: "Cannot use namespace as a type"

```typescript
// ❌ ERROR
namespace User {
  export const role = "admin";
}

const user: User = { role: "admin" }; // "Cannot use namespace as a type"

// ✅ FIX - Use an interface or type instead
namespace User {
  export interface Profile {
    role: string;
  }
}

const user: User.Profile = { role: "admin" };

// OR better: just use interfaces without namespace
interface UserProfile {
  role: string;
}

const user: UserProfile = { role: "admin" };
```

### Quick Troubleshooting Steps

1. **Check the error line** - TypeScript tells you exactly where
    
2. **Hover in VS Code** - Shows the inferred type
    
3. **Check types match** - Use consistent types
    
4. **Narrow types** - Use `typeof`, `instanceof`, or type guards
    
5. **Use** `as const` - For literal types
    
6. **Check imports** - Make sure everything is imported
    
7. **Restart TypeScript** - Sometimes the server gets confused
    
8. **Check** `strict` mode - Some errors only appear in strict mode
    

---

## ⚙️ Configuration & Performance: tsconfig Deep Dive

The `tsconfig.json` file controls everything TypeScript does. Let's break down every important option:

### Minimal tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

### Complete tsconfig.json with All Options

```json
{
  "compilerOptions": {
    // ===== OUTPUT OPTIONS =====
    "target": "ES2020",                      // What JS version to compile to
    "module": "commonjs",                    // commonjs | es2015 | esnext
    "lib": ["ES2020", "DOM"],               // Available APIs
    "outDir": "./dist",                      // Where to put compiled JS
    "rootDir": "./src",                      // Where source files are
    "declaration": true,                     // Generate .d.ts files
    "declarationMap": true,                  // Source maps for declarations
    "sourceMap": true,                       // Generate source maps for debugging
    "removeComments": false,                 // Remove comments in output
    "noEmit": false,                         // Don't emit compiled files
    "outFile": "./app.js",                   // Single output file (rarely used)
    "preserveConstEnums": false,             // Keep const enum declarations

    // ===== STRICT TYPE CHECKING =====
    "strict": true,                          // Enable ALL strict checks

    // Individual strict options (already enabled by "strict": true)
    "noImplicitAny": true,                   // Error on any-like types
    "strictNullChecks": true,                // Null/undefined can't be used as any type
    "strictFunctionTypes": true,             // Strict function type checking
    "strictBindCallApply": true,             // Strict bind/call/apply checking
    "strictPropertyInitialization": true,   // Properties must be initialized
    "noImplicitThis": true,                  // Error on implicit any this
    "alwaysStrict": true,                    // Add 'use strict'

    // ===== ADDITIONAL CHECKS =====
    "noUnusedLocals": true,                  // Error on unused variables
    "noUnusedParameters": true,              // Error on unused parameters
    "noImplicitReturns": true,               // Error if function doesn't always return
    "noFallthroughCasesInSwitch": true,     // Error on fallthrough switch cases
    "noUncheckedIndexedAccess": true,        // Safer array access
    "allowUnusedLabels": false,              // Error on unused labels
    "allowUnreachableCode": false,           // Error on unreachable code

    // ===== MODULE RESOLUTION =====
    "moduleResolution": "node",              // How to resolve modules
    "baseUrl": "./src",                      // Base path for imports
    "paths": {                               // Path aliases
      "@/*": ["*"],
      "@components/*": ["components/*"],
      "@types/*": ["types/*"]
    },
    "rootDirs": ["./src"],                   // Virtual root directories
    "typeRoots": ["./node_modules/@types"],  // Where to find @types
    "types": [],                             // Which @types packages to include

    // ===== INTEROPERABILITY =====
    "esModuleInterop": true,                 // CommonJS/ES module interop
    "allowSyntheticDefaultImports": true,    // Allow default imports from modules
    "isolatedModules": true,                 // Ensure each file can be transpiled alone

    // ===== EMIT OPTIONS =====
    "inlineSourceMap": false,                // Inline source maps
    "inlineSources": false,                  // Inline source code
    "emitBOM": false,                        // Emit byte order mark
    "emitDecoratorMetadata": true,           // For decorators
    "experimentalDecorators": true,          // Enable decorators

    // ===== JAVASCRIPT OPTIONS =====
    "allowJs": true,                         // Allow JS files in project
    "checkJs": false,                        // Type check JS files
    "maxNodeModuleJsDepth": 1,              // Max depth for node_modules checking

    // ===== PERFORMANCE =====
    "skipLibCheck": true,                    // HUGE perf boost - skip library type checking
    "skipDefaultLibCheck": true,             // Skip typings for built-in libs
    "incremental": true,                     // Save compilation info
    "tsBuildInfoFile": "./.tsbuildinfo",    // Where to save build info

    // ===== INTEROP & COMPATIBILITY =====
    "forceConsistentCasingInFileNames": true, // Force consistent file casing
    "resolveJsonModule": true,               // Import JSON files
    "useDefineForClassFields": true,         // Use ES2022 field behavior

    // ===== DEBUGGING & REPORTING =====
    "pretty": true,                          // Pretty-print errors
    "diagnostics": false,                    // Show compiler diagnostic info
    "listFiles": false,                      // List all files being processed
    "listFilesOnly": false,                  // List files without compiling
    "explainFiles": false,                   // Show why files were included
    "traceResolution": false                 // Trace module resolution
  },

  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts", "**/*.spec.ts"],
  "compileOnSave": false,
  "ts-node": {
    "compilerOptions": {
      "module": "commonjs"
    }
  }
}
```

### 🎯 Recommended Profiles

#### 1\. **Strictest (For Important Projects)**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo",
    "outDir": "./dist"
  }
}
```

#### 2\. **Balanced (For Most Projects)**

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "declaration": true,
    "sourceMap": true,
    "incremental": true,
    "outDir": "./dist"
  }
}
```

#### 3\. **Legacy Support (For Old Projects)**

```json
{
  "compilerOptions": {
    "target": "ES5",
    "module": "commonjs",
    "lib": ["ES2015", "DOM"],
    "strict": false,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "allowJs": true,
    "declaration": true,
    "outDir": "./dist"
  }
}
```

### Performance Optimization Tips

#### ✅ Speed Up Compilation

```json
{
  "compilerOptions": {
    "skipLibCheck": true,           // ⚡ ~40% faster
    "skipDefaultLibCheck": true,    // Speeds up lib checking
    "incremental": true,            // Only recompile changed files
    "tsBuildInfoFile": "./.tsbuildinfo",
    "isolatedModules": true,        // Faster transpilation
    "noEmit": true,                 // If you're using Babel anyway
  }
}
```

#### Measurement

```bash
# Measure compilation time
tsc --diagnostics

# Output shows:
# Files:                           42
# Lines of Library:             40,000
# Lines of Declaration (d.ts):  15,000
# Lines of TypeScript:          12,500
# Lines of JavaScript:              0
# Lines of JSON:                   150
# Time spent resolving modules:  3000ms
# Time spent updating content:   2000ms
# ...
```

### Target vs Module Explanation

```typescript
// target: What JavaScript version the code compiles to
// ES5    = 2009 (IE8+, older Node)
// ES2015 = 2015 (Modern, but no async/await)
// ES2020 = 2020 (Nullish coalescing, optional chaining)
// ESNext = Latest (Bleeding edge)

// module: How code imports/exports are handled
// commonjs = require() / module.exports (Node.js default)
// es2015 = import / export (Standard JS)
// esnext = Keep as-is (Let bundler decide)

// Example: TypeScript source
const user = { name: "Alice" } as const;
export default user;

// Compiles to ES2015 + commonjs:
const user = { name: "Alice" };
exports.default = user;

// Compiles to ES2015 + es2015:
export default user;

// Compiles to ES5 + commonjs:
Object.defineProperty(exports, "__esModule", { value: true });
var user = { name: "Alice" };
exports.default = user;
```

### Path Aliases (Make Imports Cleaner)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@utils/*": ["src/utils/*"],
      "@types/*": ["src/types/*"],
      "@hooks/*": ["src/hooks/*"],
      "@store/*": ["src/store/*"]
    }
  }
}
```

Usage:

```typescript
// Instead of:
import User from "../../../types/user";
import Button from "../../../components/Button";

// You can now do:
import User from "@types/user";
import Button from "@components/Button";
```

### Common Issues & Solutions

#### Issue #1: "Cannot find module"

```json
{
  "compilerOptions": {
    "moduleResolution": "node",      // Use Node's resolution algorithm
    "resolveJsonModule": true,       // If importing JSON
    "esModuleInterop": true          // For CommonJS interop
  }
}
```

#### Issue #2: Compilation Extremely Slow

```json
{
  "compilerOptions": {
    "skipLibCheck": true,           // Add this first!
    "skipDefaultLibCheck": true,
    "incremental": true,
    "tsBuildInfoFile": "./.tsbuildinfo"
  }
}
```

#### Issue #3: Type Errors in node\_modules

```json
{
  "compilerOptions": {
    "skipLibCheck": true,           // Skip checking @types packages
    "typeRoots": [                  // Explicitly set which @types to use
      "./node_modules/@types"
    ]
  }
}
```

#### Issue #4: Project Won't Compile

```json
{
  "compilerOptions": {
    "noEmit": true,                 // Check without outputting files
    "allowJs": true,                // Include JS files
    "allowSyntheticDefaultImports": true  // For some modules
  }
}
```

### Checking Your Config

```bash
# Validate tsconfig.json
tsc --noEmit

# See effective config (with defaults)
tsc --showConfig -p tsconfig.json

# List all included files
tsc --listFiles

# Check what took so long
tsc --diagnostics
```

---

## �🎯 If You Remember Only This...

1. **Use** `strict: true` - It catches bugs before production
    
2. **Prefer** `type` over `interface` for unions - It's clearer
    
3. **Avoid** `any` - Use `unknown` if you must
    
4. **Type your props in React** - Self-documenting code
    
5. **Use discriminated unions** - Makes refactoring easier
    
6. **Generic constraints matter** - `<T extends SomeType>`
    
7. **Exhaustive checking** - Use `never` for the default case
    
8. **Better types = Better IDE support** - Autocomplete is your friend
    
9. **Types are free** - They disappear after compilation
    
10. **TypeScript helps you TODAY, saves you TOMORROW** - Write clear, type-safe code
    

---

## 🚀 Final Thoughts

TypeScript isn't about adding complexity—it's about removing bugs and adding confidence. Every type annotation you write is an investment in your future self (and your teammates).

### Key Principles

✅ **Write types that serve as documentation**  
✅ **Let TypeScript help you, not fight against it**  
✅ **Prefer clarity over cleverness**  
✅ **Use strict mode and stick with it**  
✅ **Build gradually—don't try to type everything at once**

---

## 🙌 That's It!

You've now got the knowledge of someone who's worked with TypeScript for years. Bookmark this, share it with your team, and refer back to it whenever you get stuck.

**If this cheatsheet saved you from one runtime error, do your karma a favor—share it with your team** ❤️

Happy typing! 🎉

---

### 📚 Resources to Go Deeper

* [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
    
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/)
    
* [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
    

---

![Buh Bye Now GIFs | Tenor](https://media1.tenor.com/m/YIgYH8a9tYwAAAAC/buh-bye-now-chris-brander.gif align="center")