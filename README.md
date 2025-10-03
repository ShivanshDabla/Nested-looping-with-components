🔁 What is nested looping?

Nested looping in React means rendering lists inside lists — e.g., a list of colleges where each college has a list of departments or schools. You typically use JavaScript array iteration (map, flatMap, forEach, recursive functions) within JSX to produce nested DOM elements.

✅ Best practices

Use .map() for declarative rendering inside JSX.

Always set a stable key prop (avoid array index keys when possible).

Extract nested structures into small components for readability.

Use useMemo to avoid recomputing derived lists on every render (for large data).

For very large nested lists, consider virtualization (e.g., react-window).

When data is recursive (trees), implement a recursive component.

Keep markup semantic and accessible (ul, li, headings, aria-* where needed).
