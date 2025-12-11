# 🎯 Frontend Developer Assignment – Quiz UI

A clean, modern, and fully responsive **Quiz Application UI** built using **React, TypeScript, and Vite**.  
This project includes a multi-step progress tracker, smooth animations, accessibility features, and a polished result screen — closely matching the provided Figma/PDF design.

---



## 📂 Features

### ✅ **Start Screen**
- Elegant title & subtitle typography  
- Paw icon & speech bubble decorative UI  
- Start button with gradient + hover animations  

### ✅ **Quiz Flow**
- Multi-step progress bar with animated fill  
- Smooth knob movement  
- Keyboard navigation support  
  - Arrow keys → Prev/Next  
  - Number keys → Select option  
  - Enter/Space → Confirm option  
- Auto-advance to next question  
- Reduced-motion support (accessibility)

### ✅ **Questions**
- Clean card UI  
- Hover effects  
- Selected-state highlight  
- Responsive layout  

### ✅ **Result Screen**
- Smooth fade-in animation  
- Large serif percentage display  
- Encouraging message  
- Restart button  

---

## 🧰 Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React** | Core UI |
| **TypeScript** | Strong typing, reliability |
| **Vite** | Fast dev server + bundler |
| **Tailwind / Custom CSS** | UI styling |
| **GitHub** | Version control |

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/raahul23/quiz-ui-assessment.git
cd quiz-ui-assessment
2️⃣ Install dependencies
bash
Copy code
npm install
3️⃣ Run the development server
bash
Copy code
npm run dev
4️⃣ Build for production
bash
Copy code
npm run build
This generates a dist folder with optimized output.

📁 Project Structure
css
Copy code
src/
 ├─ components/
 │    ├─ Quiz.tsx
 │    ├─ QuestionCard.tsx
 │    ├─ Result.tsx
 │    ├─ ProgressBar.tsx
 │    ├─ Header.tsx
 │    └─ ...
 ├─ data/questions.ts
 ├─ index.css
 ├─ App.tsx
 └─ main.tsx
🧪 How It Works
Quiz.tsx manages quiz logic, step tracking, and navigation

Result.tsx shows the final percentage score

questions.ts holds question/option data

index.css contains all custom UI styling, animations, and layout rules

🎨 Design System
Typography: Playfair Display (titles), Inter (body)

Colors: Blue gradients, soft whites, subtle shadows

Components: Rounded cards, animated buttons, premium segment indicator
