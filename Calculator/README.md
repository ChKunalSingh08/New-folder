# 🧮 Calculator

A fully functional, responsive calculator application built with vanilla HTML, CSS, and JavaScript. Performs basic arithmetic operations with correct operator precedence and includes a calculation history display. This project demonstrates safe expression parsing without using `eval()`.

## 📋 Project Description

This project is a feature-rich calculator built using **HTML, CSS, and JavaScript** that performs basic arithmetic operations including addition, subtraction, multiplication, division, and modulus while respecting operator precedence (BODMAS). The calculator provides an intuitive interface with features such as calculation history tracking, backspace functionality, all-clear button, decimal input validation, and prevention of invalid operator sequences.

The primary purpose of building this project was to strengthen understanding of **DOM manipulation, event handling, string processing, and algorithm implementation in JavaScript** without relying on potentially unsafe built-in expression evaluators like `eval()`. Instead, the calculator uses custom calculation logic to parse and evaluate mathematical expressions safely and efficiently. This approach demonstrates secure coding practices and deep understanding of JavaScript fundamentals.

The calculator includes a dual-display design with a history section showing previous calculations and an active display for the current input, making it easy to review past operations while performing new calculations.

## ✨ Features

- **Basic Arithmetic Operations**:
  - Addition (+)
  - Subtraction (−)
  - Multiplication (×)
  - Division (÷)
  - Modulus (%)

- **Expression Parsing & Evaluation**:
  - Custom expression parser (without using `eval()`)
  - Correct operator precedence (BODMAS/PEMDAS)
  - Safe evaluation of mathematical expressions
  - Parsing of numbers and operators from input string
  
- **Advanced Functionality**:
  - Decimal number support
  - Prevents multiple decimal points within the same number
  - Replaces consecutive operators with the latest one
  - Backspace button (⇐ | ⇐) to delete one character
  - All Clear (AC) button to reset calculator
  - Division-by-zero handling with error message
  - Quick 00 button for faster input
  - Calculation history display

- **User Interface**:
  - Clean and user-friendly interface
  - Interactive button hover effects with scale transformation
  - Color-coded buttons (red for AC, orange for operators, green for equals)
  - Professional styling with shadow effects

### Accessibility
- Read-only display inputs prevent accidental manual typing
- Clear and descriptive button labels for all calculator controls
- Simple and intuitive layout for easy navigation
- High-contrast buttons for better visibility
- Consistent button sizing for improved usability
- Clear visual feedback through hover animations

### Responsiveness
- Desktop optimized (350px width) and mobile friendly
- The interface is centered and adapts well to different screen sizes
- Responsive breakpoint at 475px for smaller devices
- Font sizes scale appropriately for readability
- CSS Grid is used for a clean and consistent button layout

## 🛠 Technologies Used

### Languages
- **HTML5**: Semantic markup with meta tags
- **CSS3**: Modern CSS with variables, Grid layout, media queries
- **JavaScript (ES6+)**: Event listeners, string manipulation, array methods

### APIs
- **DOM API**: Element queries and manipulation
- **Event API**: Click and keyboard event handling

### Libraries/Frameworks
- None (Vanilla JavaScript implementation)

### Tools
- **Version Control**: Git
- **Editor**: Visual Studio Code (VSCode)
- **Development Server**: Live Server extension

## 📁 Project Structure

```
Calculator/
├── index.html          # Main HTML structure with semantic markup
├── style.css           # Styling, layout, and responsive design
├── calculator.js       # Calculator logic and event handling
└── README.md           # Project documentation
```

### Important Files

| File | Purpose |
|------|---------|
| `index.html` | Defines the calculator interface with two displays (history and current input) and button layout |
| `style.css` | Handles styling, CSS Grid layout, colors, hover effects, and mobile responsiveness |
| `calculator.js` | Implements user interactions, input validation, custom expression parsing, and calculation logic |

## ⚙️ How It Works

### Step-by-Step Workflow

1. **User Input**: User clicks number and operator buttons on the calculator interface
2. **Display Update**: Each button click updates the current input displayed in the main display
3. **Input Validation**: The program prevents invalid input patterns:
   - Multiple decimal points in a single number
   - Consecutive operators (auto-replaces with latest operator)
4. **Symbol Conversion**: Display symbols are converted to JavaScript operators:
   - `×` converts to `*` (multiplication)
   - `÷` converts to `/` (division)
   - `−` converts to `-` (subtraction for display clarity)
5. **Expression Parsing**: When equals is pressed, the expression is parsed into:
   - **Numbers array**: All numeric values extracted
   - **Operators array**: All operators in sequence
6. **Operator Precedence Handling**:
   - First pass: Evaluate `*`, `/`, and `%` operators (higher precedence)
   - Second pass: Evaluate `+` and `-` operators (lower precedence)
7. **Result Calculation**: Final result is computed and displayed
8. **History Recording**: Calculation is saved in history display (e.g., "5 + 3 = 8")
9. **Result Becomes Input**: The result becomes the starting point for the next calculation

### Special Cases Handled

- **Division by Zero**: Returns "cannot divide by 0" message
- **Multiple Operators**: Only the latest operator is kept
- **Multiple Decimals**: Only one decimal point allowed per number
- **Decimal Prefix**: Automatically prepends "0" if expression starts with decimal

## 📦 Installation & Usage

### Clone/Download the Project

```bash
# Clone the repository
git clone https://github.com/your-username/calculator.git

# Navigate to the project directory
cd calculator
```

### Run Locally

#### Option 1: Direct File Open (Quickest)
Simply open `index.html` in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
xdg-open index.html
```

#### Option 2: Using Live Server (Recommended for Development)
Use VS Code Live Server extension or any local HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server
```

Then visit `http://localhost:8000/` in your browser.

## 📸 Screenshots

### Desktop Version
- Clean calculator interface with dark theme
- Organized 4x4 grid layout for buttons
- Dual display showing history and current input
- Professional styling with rounded buttons

### Mobile Version (≤475px)
- Responsive layout adjusted for smaller screens
- Reduced button sizes (45px) and grid gap (5px)
- Font sizes optimized for readability on mobile
- Calculator centered and adapted for touch input

## 🎓 Learning Outcomes

Through building this project, I gained proficiency in:

- **DOM Manipulation**: Selecting elements, updating content, and managing event listeners
- **Event Handling**: Button clicks and keyboard events triggering appropriate functions
- **String Processing**: Splitting, parsing, and validating strings for mathematical expressions
- **Array Methods**: Using `split()`, `map()`, `match()`, `splice()` for expression parsing
- **Algorithm Implementation**: Writing custom logic for operator precedence without built-in evaluators
- **Input Validation**: Preventing invalid decimal points, consecutive operators, and edge cases
- **CSS Grid Layout**: Creating structured, responsive button layouts
- **Responsive Design**: Media queries and flexible sizing for multiple device types
- **Code Organization**: Breaking complex logic into reusable, modular functions
- **Error Handling**: Managing division by zero and invalid expressions gracefully

## 🔧 Challenges Faced

### Challenge 1: Custom Expression Parser Without `eval()`
**Problem**: Using `eval()` is unsafe and can execute arbitrary code. Needed a safe way to evaluate mathematical expressions.

**Solution**: Implemented custom parsing logic:
```javascript
// Extract numbers and operators separately
const nums = expression.split(/[+\-*%/]/).map(Number);
const ops = expression.match(/[+\-*%/]/g) || [];

// Evaluate high-precedence operators first
for (let i = 0; i < ops.length; i++) {
    if (ops[i] === "*" || ops[i] === "/" || ops[i] === "%") {
        // Calculate and replace in arrays
    }
}
```

### Challenge 2: Decimal Point Validation
**Problem**: Users could enter multiple decimal points like "5.5.5", which is invalid.

**Solution**: Extract only the active operand and check if it already contains a decimal:
```javascript
let currentNum = input.split(/[+\-×÷%]/).pop();
if (currentNum.includes(".")) return;
```

### Challenge 3: Consecutive Operators
**Problem**: Pressing multiple operators consecutively (e.g., "5++3") created invalid expressions.

**Solution**: Check the last character and replace it with the new operator:
```javascript
if ('+−-×÷'.includes(lastChar)) {
    input = input.slice(0, -1);
}
```

### Challenge 4: Operator Precedence Implementation
**Problem**: Mathematical operations must follow BODMAS (Bracket, Order, Division, Multiplication, Addition, Subtraction).

**Solution**: Two-pass evaluation:
- First pass: Handle `*`, `/`, `%` (higher precedence)
- Second pass: Handle `+`, `-` (lower precedence)

### Challenge 5: Symbol Conversion for Display vs Calculation
**Problem**: Display uses pretty symbols (×, ÷, −) but JavaScript requires (*, /, -) for calculations.

**Solution**: Convert display symbols to calculation-friendly operators before parsing:
```javascript
if (expression[i] === '×') {
    newStr = newStr + '*';
} else if (expression[i] === '÷') {
    newStr = newStr + '/';
}
```

## 🚀 Future Improvements (TODO)

- [ ] **Scientific Calculator Mode**: Add functions like sin, cos, log, square root, exponents
- [ ] **Parentheses Support**: Add ability to use parentheses for grouping operations
- [ ] **Calculation History**: Persistent history that can be clicked to recall previous calculations
- [ ] **Negative Number Input**: Better handling for negative number input
- [ ] **Copy-to-Clipboard**: Copy calculation results with one click
- [ ] **Theme Toggle**: Dark/Light mode switching
- [ ] **localStorage Support**: Save user preferences and calculation history
- [ ] **Advanced Error Handling**: Better error messages for invalid expressions
- [ ] **Math.js Integration**: Optional use of Math.js for advanced operations
- [ ] **Unit Conversion**: Add currency and unit conversion features
- [ ] **Calculation Tips**: Show tips for using advanced features
- [ ] **Touch Keyboard**: Virtual numpad for mobile users
- [ ] **Voice Input**: Speak calculations using Web Speech API

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome | Latest | ✅ Fully Supported |
| Firefox | Latest | ✅ Fully Supported |
| Safari | Latest | ✅ Fully Supported |
| Edge | Latest | ✅ Fully Supported |
| Opera | Latest | ✅ Fully Supported |
| Mobile Chrome | Latest | ✅ Fully Supported |
| Mobile Safari | Latest | ✅ Fully Supported |
| IE 11 | - | ⚠️ Partial Support |

**Note**: All modern browsers are fully supported. Internet Explorer may have limited support for some ES6 features.

## ♿ Accessibility

This project implements accessibility features for improved usability:

- **Read-only Display**: Prevents invalid manual input through keyboard typing
- **High-Contrast Buttons**: Color-coded buttons (red, orange, green, white) provide clear visual distinction
- **Consistent Layout**: Predictable button arrangement following standard calculator design
- **Visual Feedback**: Hover animations (scale effect) provide clear feedback for interactive elements
- **Semantic Structure**: Clean HTML structure for screen reader compatibility
- **Button Labels**: Clear, concise labels for all calculator functions
- **Responsive Text**: Font sizes scale appropriately for different screen sizes
- **Touch-Friendly**: Button sizes optimized for touch input on mobile devices (45px on small screens)

## ⚡ Performance Considerations

1. **Zero External Dependencies**:
   - No frameworks or libraries required
   - Small file sizes: HTML (~2KB), CSS (~2KB), JavaScript (~3KB)
   - Fast load times

2. **Efficient DOM Updates**:
   - DOM queries cached at initialization
   - Only necessary elements updated on input
   - No unnecessary reflows or repaints

3. **Optimized JavaScript**:
   - Single event listener per element type using forEach
   - Efficient string operations using native methods
   - No nested loops in critical path
   - Minimal memory allocation

4. **CSS Performance**:
   - CSS Grid for layout (hardware-accelerated)
   - Smooth hover transitions using `transform` (GPU-accelerated)
   - Minimal selector specificity for faster matching

5. **Memory Efficiency**:
   - Simple data structures (strings and arrays)
   - No memory leaks from event listeners
   - Garbage collection friendly code

## 👤 Author

**Kunal Singh** — Web Developer & Frontend Engineer

- GitHub: [ChKunalSingh08](https://github.com/ChKunalSingh08)
- LinkedIn: [LinkedIn Profile](https://linkedin.com/in/my-profile-name)
- Portfolio: [Your Portfolio Website](https://yourportfolio.com)
- Email: your.email@example.com

## 📄 License

This project is licensed under the **MIT License** — see the LICENSE file for details.

You are free to use, modify, and distribute this project for personal and commercial purposes.

---

## 🤝 Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## ❓ FAQ

**Q: Can I modify this calculator for my own use?**
A: Absolutely! The project is open source and MIT licensed.

**Q: Does the calculator work offline?**
A: Yes, it's entirely client-side with no internet required.

**Q: Can I use keyboard input?**
A: Partial keyboard support is implemented. Full keyboard support is on the TODO list.

**Q: How do I add a new operation?**
A: Add the operator symbol to the HTML buttons, update the `getOperator()` function, and add parsing logic in `operatorConvertor()` and `calculate()` functions.

**Q: What's the maximum number of decimal places?**
A: JavaScript's number precision limits calculations to approximately 15-16 significant digits.

**Q: Can I save my calculation history?**
A: Currently it displays in the history field during the session. Persistent storage via localStorage is planned.

---

**Last Updated**: July 2026  
**Version**: 1.0.0