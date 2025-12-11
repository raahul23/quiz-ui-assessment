🎯 Frontend Developer Assignment – Quiz UI

A clean, modern, and fully responsive Quiz Application UI built using React, TypeScript, and Vite.
This project closely follows the provided Figma/PDF design with smooth transitions, premium UI, and an engaging user workflow.

🔗 Live Demo

👉 https://quiz-ui-assessment.vercel.app/

(Best viewed on desktop for the full UI experience.)

📸 Preview (Optional: Add Screenshot)

You can upload a screenshot and embed here later.

![Quiz Preview](./preview.png)

📂 Features
🚀 Start Screen

Elegant gradient container

Paw icon + speech bubble for friendly UX

Smooth glowing Start button

📝 Quiz Flow

Multi-step progress indicator with animation

Smooth transitions between questions

Keyboard navigation

1–4 → Choose option

← → → Navigate

Enter → Next

Accessible (reduced motion support)

🧠 Questions

Clean cards with hover animation

Selected-state highlight

Fully responsive layout

🎉 Result Screen

Big percentage typography

Encouraging summary

Bold Start Again button

Smooth fade-in effect

🧰 Tech Stack
Technology	Purpose
React	UI logic
TypeScript	Strong typing
Vite	Fast bundler/devserver
Tailwind + Custom CSS	Styling & animations
Vercel	Deployment
📦 Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/raahul23/quiz-ui-assessment.git
cd quiz-ui-assessment

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Build for production
npm run build

📁 Project Structure
src/
 ├─ components/
 │    ├─ Quiz.tsx
 │    ├─ QuestionCard.tsx
 │    ├─ Result.tsx
 │    ├─ ProgressBar.tsx
 │    ├─ Header.tsx
 │    └─ Announcer.tsx
 ├─ data/questions.ts
 ├─ index.css
 ├─ App.tsx
 └─ main.tsx

🧪 How It Works
🎛 State & Navigation

Quiz.tsx handles quiz state

Auto-advances on selection

Jump to next/previous question

📘 Questions Data

Array of objects with:

{
  question: string,
  options: string[],
  answer: number
}

🎨 Custom UI

Blurred gradient backgrounds

Soft shadows

Large serif headings

Smooth transitions on every step

🧾 Submission Ready Checklist

✔ Fully responsive
✔ All questions flow correctly
✔ Progress indicator works
✔ Result screen calculates accurately
✔ Design matches assignment
✔ Clean repo on GitHub
✔ Live demo on Vercel
✔ Build ready (dist/)

🙌 Author

Raahul
Frontend Developer
GitHub: https://github.com/raahul23

Live Demo: https://quiz-ui-assessment.vercel.app/

📜 License

This project is for evaluation purposes.
