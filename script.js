async function generateHook() {
  const mode = document.getElementById("mode").value;

  const res = await fetch(
    "https://ff-hook-backend.onrender.com/hooks?mode=" + mode
  );

  const data = await res.json();

  if (!data.length) {
    document.getElementById("hook").innerText = "No hooks found 😢";
    return;
  }

  const random = data[Math.floor(Math.random() * data.length)];
  document.getElementById("hook").innerText = random.hook;
}