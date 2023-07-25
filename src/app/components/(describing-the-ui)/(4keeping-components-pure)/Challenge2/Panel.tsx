import { useState } from "react";

export default function Panel({ children }: any) {
  const [open, setOpen] = useState(true);
  return (
    <section className="panel">
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </section>
  );
}
