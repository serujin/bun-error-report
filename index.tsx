import { createRoot } from "react-dom/client"

document.addEventListener("DOMContentLoaded", () => {
  const root = createRoot(document.getElementById("root")!)
  root.render(<div>Hello World</div>)
})
