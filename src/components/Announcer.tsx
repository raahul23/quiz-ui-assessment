import { useEffect, useState } from "react";

export default function Announcer({ text }: { text: string }) {
  // update to force re-read by SR
  const [val, setVal] = useState(text);
  useEffect(() => { setVal(""); const t = setTimeout(() => setVal(text), 100); return () => clearTimeout(t); }, [text]);
  return <div aria-live="polite" aria-atomic="true" style={{position:"absolute", left:-9999}}>{val}</div>;
}
