type Q = {
  id: string;
  text: string;
  options: string[];
};

type Props = {
  question: Q;
  selected?: number | null;
  disabled?: boolean;
  onAnswer: (index: number) => void;
};

export default function QuestionCard({ question, selected = null, disabled = false, onAnswer }: Props) {
  return (
    <article
      className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"
      aria-labelledby={`q-${question.id}`}
      role="group"
    >
      <h3 id={`q-${question.id}`} className="text-[26px] font-extrabold mb-4">
        {question.text}
      </h3>

      <ul className="space-y-3" role="list">
        {question.options.map((opt, i) => {
          const isSel = selected === i;
          return (
            <li key={i}>
              <button
                onClick={() => !disabled && onAnswer(i)}
                disabled={disabled}
                aria-pressed={isSel}
                className={
                  "w-full text-left px-5 py-4 rounded-lg border flex items-center gap-4 transition-colors duration-150 transform " +
                  (isSel
                    ? "bg-primary/10 border-primary"
                    : "bg-white border-gray-100 hover:bg-gray-50")
                }
              >
                <span
                  className={
                    "inline-flex items-center justify-center h-8 w-8 rounded-full text-sm flex-shrink-0 " +
                    (isSel ? "bg-primary text-white" : "bg-gray-100 text-gray-600")
                  }
                  aria-hidden
                >
                  {isSel ? "✓" : i + 1}
                </span>

                <span className="text-base">{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
