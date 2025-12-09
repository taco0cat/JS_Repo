# 💛 JavaScript Fundamentals

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![FreeCodeCamp](https://img.shields.io/badge/FreeCodeCamp-%23123.svg?style=for-the-badge&logo=freecodecamp&logoColor=white)
![GitHub last commit](https://img.shields.io/github/last-commit/taco0cat/javascript-fundamentals?style=for-the-badge&color=blue)

Welcome to my central JavaScript repository. This project documents my complete learning path. The root directory showcases my **independent solutions** to algorithms and challenges, while guided coursework is archived in specific sub-directories.

## 📋 Repository Structure

1.  **Solo Projects (Root):** My own unguided solutions to logic puzzles and algorithms.
2.  **Guided Coursework:**
    * `/000 - BroCode Tutorials`: Syntax, DOM manipulation, and core theory.
    * `/001 - FCC Guided Projects`: Walkthroughs and tutorial-based builds.

---

## 🚀 Featured Projects (Unguided)
*Location: Root Directory*

These are select highlights of my solo work, focusing on algorithms, privacy scripts, and state management.

| ID | Project Name | Description | Key Concept |
| :--- | :--- | :--- | :--- |
| **01** | [**Trivia Bot**](./01%20-%20Trivia%20Bot) | Interactive Q&A logic script. | `If/Else` Flow Control |
| **05** | [**Email Masker**](./05%20-%20Email%20Masker) | Scripts to obfuscate sensitive user data for privacy. | String Slicing |
| **07** | [**Card Counter**](./07%20-%20Card%20Counter) | A counting algorithm that tracks advantage. | Global State & Switch Cases |
| **09** | [**Truncate String**](./09%20-%20Truncate%20String%20Algorithm) | Intelligently shortens strings based on max length. | Ternary Operators |
| **12** | [**Golf Score**](./12%20-%20Golf%20Score%20Translator) | Maps strokes to golf terminology (Par, Birdie, Eagle). | Array Indexing & Logic |
| **13** | [**String Inverter**](./13%20-%20String%20Inverter) | Reverses strings without using built-in `.reverse()`. | Algorithmic Loops |

*(Note: Full list of minor exercises available in the file explorer)*

---

## 🎓 Archived Curriculum: Bro Code
*Location: `/000 - BroCode Tutorials`*

This section documents the theoretical concepts and syntax covered in my guided coursework.

| ID | Topic | Concepts Covered |
| :--- | :--- | :--- |
| **01-05** | **Basics & Input** | Variables, Arithmetic, Type Conversion |
| **06-09** | **Math & Numbers** | Const, Math Library, Random Generators |
| **10-13** | **Control Flow** | If/Else, Ternary, Switches, Checked Property |
| **14-16** | **String Manipulation** | Methods, Slicing, Chaining |
| **17-18** | **Logic** | Logical Operators, Strict Equality |
| **19-21** | **Loops** | While, For, Number Guessing Game |
| **22-23** | **Functions** | Functions, Variable Scope |
| **24-29** | **Data Structures** | Arrays, Spread/Rest Operators, Dice Roller |
| **30** | **Review Project** | **Password Generator** (Applied Logic) |
| **31-35** | **Functional Prog.** | **Callbacks, ForEach, Map, Filter, Reduce** |

---

## ⚡ How to Run

### Option 1: Run with Node.js (CLI)
For pure logic scripts (like the unguided projects), this is the fastest method.

1.  Navigate to the project folder:
    ```bash
    cd "05 - Email Masker"
    ```
2.  Run the file:
    ```bash
    node index.js
    ```

### Option 2: Run in Browser
This is required for DOM projects or if you prefer Chrome Developer Tools.

* **For Bro Code Projects:** Open the `index.html` file inside the `000 - BroCode Tutorials` subfolders.
* **For Unguided Scripts:**
    1.  Create a temporary `test.html` file in the specific project folder.
    2.  Add a script tag pointing to the JS file:
        ```html
        <script src="index.js"></script>
        ```
    3.  Open `test.html` in Chrome and press `F12` to see the **Console** output.

---

## 🧠 Key Concepts Learned

* **DOM Manipulation:** Selecting elements, Event Listeners.
* **Algorithms:** Card Counting, String Inversion, Sorting.
* **Functional Programming:** Using `.map()`, `.filter()`, and `.reduce()` for clean data handling.

---
*Created by [taco0cat](https://github.com/taco0cat)*