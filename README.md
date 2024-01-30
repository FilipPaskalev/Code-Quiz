# Code Quiz Web App

[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/Overview.en.html) [![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://html.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://www.javascript.com)
[![edX](https://img.shields.io/badge/edx-black?style=for-the-badge&logo=edX&link=https://www.edx.org/)](https://www.edx.org/)

## Table of content

- [Code Quiz Web App](#code-quiz-web-app)
  - [Table of content](#table-of-content)
  - [Project Description](#project-description)
    - [Mock up](#mock-up)
    - [How to use](#how-to-use)
    - [User Interface](#user-interface)
    - [Additional Features](#additional-features)
    - [Technical Implementation](#technical-implementation)
  - [Installation instructions](#installation-instructions)
    - [Option 1 - Download](#option-1---download)
    - [Option 2 - Clone project](#option-2---clone-project)
  - [Project structure](#project-structure)
  - [Demo](#demo)
  - [Tools and extensions](#tools-and-extensions)
    - [VS Code Counter](#vs-code-counter)
  - [Statistics](#statistics)
    - [Files](#files)
    - [Languages](#languages)
  - [References](#references)
  - [Licenses](#licenses)
    - [MIT License](#mit-license)

## Project Description

Welcome to the Timed Coding Quiz application! The quiz seamlessly runs in the browser, featuring a sophisticated and responsive user interface powered by HTML, CSS, and JavaScript.

### Mock up

The following animation demonstrates the application functionality:

![Mock-up of the app](./assets/readme/mock-up.gif)

### How to use

1. Start the Quiz:
      * Click the "Start" button to initiate the quiz.
      * This triggers the countdown timer and presents the first question.
2. Answering Questions:
      * Questions are presented one at a time with multiple-choice answers.
      * Click on an answer button.
          * If correct, move to the next question.
          * If incorrect, time is deducted from the clock.
3. Timer:
      * A timer counts down from a set time (e.g., 60 seconds).
      * Incorrect answers result in time deduction.
      * The quiz ends when all questions are answered or the timer reaches 0.
4. End of Quiz:
      * Display the user's final score.
      * Save user initials to associate with their score.
5. High Scores:
      * High scores, including user initials and scores, are stored and can be viewed.

### User Interface

1. A clean, polished interface designed for responsiveness across various screen sizes.
2. Dynamic updates using JavaScript for a seamless user experience.

### Additional Features

1. Save Initials:
      * Users can input their initials when saving their score.
2. Score Calculation:
      * Final score is calculated based on correct answers and remaining time.

### Technical Implementation

1. HTML, CSS, and JavaScript:
      * Utilize these technologies for a well-structured and interactive quiz.
2. Dynamic Updates:
      * Dynamically update HTML and CSS for a smooth user flow.
3. User Progress:
      * Feedback on user progress is provided during the quiz.

## Installation instructions

### Option 1 - Download

Download the project from GitHub [repository](https://github.com/FilipPaskalev/Code-Quiz) on your local machine.

1. Open GitHub repository. [(link to repository)](https://github.com/FilipPaskalev/Code-Quiz)

2. Select ```Code``` from top navigation section. (reference on the image below) 👇

    ![select code from navigation](./assets/readme/gitHub-section-select-code.png)

3. Select ```<> Code``` dropdown button from sub section. (reference on the image below) 👇

    ![select readme dropdown](./assets/readme/gitHub-section-select-code-dropdown.png)

4. Select ```Download ZIP``` from dropdown menu to download project in .zip format. (reference on the image below) 👇

    ![select Download ZIP from menu](./assets/readme/gitHub-dropdown-download-zip-selection.png)

5.  Unzip the project. 

    > [!TIP]
    > You can use 7-Zip if you don't have file archiver. 
    >**7-Zip** is **free software** with **open source**. The most of the code is under the **GNU LGPL** license. Some parts of the code are under the BSD 3-clause License. Also there is unRAR license restriction for some parts of the code. Read [7-Zip License](https://www.7-zip.org/license.txt) information. 
    > Download the application from [official website](https://www.7-zip.org/).

6.  Open project with [VS Code](https://code.visualstudio.com/) or other IDE.

### Option 2 - Clone project

1. On GitHub.com, navigate to the main page of the repository. [(link to repository)](https://github.com/FilipPaskalev/Code-Quiz).

2. Above the list of files, click  Code. (reference on the image below) 👇

    ![select code drop down](./assets/readme/gitHub-section-select-code-dropdown.png)

5. Copy the URL for the repository.
- To clone the repository using HTTPS, under "HTTPS", click <svg version="1.1" fill="#0F66B8" width="16" height="16" viewBox="0 0 16 16" aria-label="Copy to clipboard" role="img"><path d="M3.626 3.533a.249.249 0 0 0-.126.217v9.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-9.5a.249.249 0 0 0-.126-.217.75.75 0 0 1 .752-1.298c.541.313.874.89.874 1.515v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-.625.333-1.202.874-1.515a.75.75 0 0 1 .752 1.298ZM5.75 1h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 4.75v-3A.75.75 0 0 1 5.75 1Zm.75 3h3V2.5h-3Z"></path></svg>
- To clone the repository using an SSH key, including a certificate issued by your organization's SSH certificate authority, click SSH, then click <svg version="1.1" fill="#0F66B8" width="16" height="16" viewBox="0 0 16 16" aria-label="Copy to clipboard" role="img"><path d="M3.626 3.533a.249.249 0 0 0-.126.217v9.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-9.5a.249.249 0 0 0-.126-.217.75.75 0 0 1 .752-1.298c.541.313.874.89.874 1.515v9.5A1.75 1.75 0 0 1 12.25 15h-8.5A1.75 1.75 0 0 1 2 13.25v-9.5c0-.625.333-1.202.874-1.515a.75.75 0 0 1 .752 1.298ZM5.75 1h4.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 4.75v-3A.75.75 0 0 1 5.75 1Zm.75 3h3V2.5h-3Z"></path></svg>
- To clone a repository using GitHub CLI, click GitHub CLI, then click <svg version="1.1" fill="#0F66B8" width="16" height="16" viewBox="0 0 16 16" aria-label="Copy to clipboard" role="img"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg> (reference on the image below) 👇

    ![select copy next to link](./assets/readme/gitHub-https-copy.png)

1. Open Git Bash.

2. Change the current working directory to the location where you want the cloned directory.

3. Type ```git clone```, and then paste the URL you copied earlier.

    ```
    git clone https://github.com/FilipPaskalev/Code-Quiz.git
    ```

7. Press Enter to create your local clone.

    ```
    $ git clone https://github.com/FilipPaskalev/Code-Quiz.git
    > Cloning into `Spoon-Knife`...
    > remote: Counting objects: 10, done.
    > remote: Compressing objects: 100% (8/8), done.
    > remove: Total 10 (delta 1), reused 10 (delta 1)
    > Unpacking objects: 100% (10/10), done.
    ```

## Project structure

```
root/                     main directory of the project
  |----.vscode            contains settings for vscode 
  |----assets/            directory for the assets - video, images, sounds ...
      |----readme         directory for readme information
      |----sfx            directory for audio files
  |----css/               directory for the styles
  |----js/                directory for javascript files
      |----logic.js       store logic for application 
      |----questions.js   store data for quiz questions
      |----scores.js      store logic for scores 
      |----utils.js       store all needed resources for js files 
  |----.gitignore         file that indicates which not to be included in git
  |----.prettierrc        settings if you using Prettier extension
  |----highscores.html    file for scores
  |----index.html         root html file
  |----LICENSE            information about the license
  |----README.md          file that describe the project
```

## Demo

Screenshot of the application is on the image below.

[![demo screenshot](./assets/readme/mock-up.gif)](https://filippaskalev.github.io/Code-Quiz/)

> [!IMPORTANT]
> You can find deployed version of the project on 👉[direct link here](https://filippaskalev.github.io/Code-Quiz/) or by clicking on the picture above. ☝️
>

## Tools and extensions

[Visual Studio Code](https://code.visualstudio.com/) is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages and runtime (such as C++, C#, Java, Python, PHP, Go, .NET).

### VS Code Counter

[VS Code extension](https://marketplace.visualstudio.com/items?itemName=uctakeoff.vscode-counter) counts blank lines, comment lines, and physical lines of source code in many programming languages. This extension uses other language extensions to determine the line of code. Therefore, you may need to install the language extension to support a new language. Conversely, as the number of language extensions increases, the range of support for this feature also increases.

## Statistics

### Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [.prettierrc](/.prettierrc) | JSON | 5 | 0 | 1 | 6 |
| [README.md](/README.md) | Markdown | 164 | 0 | 59 | 223 |
| [css/styles.css](/css/styles.css) | CSS | 73 | 0 | 16 | 89 |
| [highscores.html](/highscores.html) | HTML | 20 | 0 | 6 | 26 |
| [index.html](/index.html) | HTML | 42 | 0 | 11 | 53 |
| [js/logic.js](/js/logic.js) | JavaScript | 100 | 79 | 33 | 212 |
| [js/questions.js](/js/questions.js) | JavaScript | 166 | 4 | 1 | 171 |
| [js/scores.js](/js/scores.js) | JavaScript | 15 | 10 | 6 | 31 |
| [js/utils.js](/js/utils.js) | JavaScript | 19 | 7 | 7 | 33 |

### Languages
| language | files | code | comment | blank | total |
| :--- | ---: | ---: | ---: | ---: | ---: |
| JavaScript | 4 | 300 | 100 | 47 | 447 |
| Markdown | 1 | 164 | 0 | 59 | 223 |
| CSS | 1 | 73 | 0 | 16 | 89 |
| HTML | 2 | 62 | 0 | 17 | 79 |
| JSON | 1 | 5 | 0 | 1 | 6 |

## References
* https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
* https://www.w3schools.com/howto/howto_js_remove_class.asp
* https://www.w3schools.com/jsref/jsref_substring.asp
* https://www.tutorialspoint.com/How-can-I-remove-all-child-elements-of-a-DOM-node-in-JavaScript
* https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
* https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
* https://www.w3schools.com/jsref/prop_win_localstorage.asp
* https://www.youtube.com/watch?time_continue=259&v=LfeOLVGHiXI&embeds_referring_euri=https%3A%2F%2Fblog.logrocket.com%2F&source_ve_path=MTM5MTE3LDI4NjY2&feature=emb_logo
* https://blog.logrocket.com/localstorage-javascript-complete-guide/
* https://www.geeksforgeeks.org/how-to-redirect-to-another-webpage-using-javascript/
* https://jsdoc.app/
* https://www.markdownguide.org/cheat-sheet/

## Licenses

### MIT License

Copyright (c) 2024 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.