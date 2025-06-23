(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: linear-gradient(to right, #121212, #1f1f1f);
      color: white;
      padding: 40px;
    }
    .container {
      background: #202020;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 0 15px rgba(0,0,0,0.5);
      max-width: 500px;
      margin: auto;
      text-align: center;
    }
    .container h1 {
      color: #FEA500;
    }
    .container p {
      color: #ccc;
    }
    .btn {
      background: #FEA500;
      border: none;
      color: #000;
      padding: 12px 24px;
      margin-top: 20px;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      transition: 0.3s;
    }
    .btn:hover {
      background: #ffd24d;
    }
  `;
  document.head.appendChild(style);

  window.addEventListener("DOMContentLoaded", function () {
    const div = document.createElement("div");
    div.className = "container";
    div.innerHTML = `
      <h1>🎉 Hidden Page Loaded!</h1>
      <p>This entire page is powered by a remote script file.</p>
      <button class="btn" id="clickBtn">Click Me</button>
      <p id="output" style="margin-top: 20px;"></p>
    `;
    document.body.appendChild(div);

    document.getElementById("clickBtn").addEventListener("click", function () {
      document.getElementById("output").innerText = "✅ You clicked the button!";
    });
  });
})();
