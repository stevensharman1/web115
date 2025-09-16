// include.js - fetch and insert HTML components
async function includeComponent(id, file) {
  const el = document.getElementById(id);
  if (el) {
    try {
      const resp = await fetch(file);
      const text = await resp.text();
      el.innerHTML = text;
    } catch (err) {
      console.error(`Error loading ${file}:`, err);
    }
  }
}

// Call the include function for header and footer
includeComponent("header", "components/header.html");
includeComponent("footer", "components/footer.html");

