document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration, suffix = "") {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = range / (duration / 10),
      timer = setInterval(() => {
        current += increment;
        if (
          (increment > 0 && current >= end) ||
          (increment < 0 && current <= end)
        ) {
          current = end;
          clearInterval(timer);
        }
        if (Number.isInteger(end)) {
          obj.textContent = Math.floor(current) + suffix;
        } else {
          obj.textContent = parseFloat(current.toFixed(1)) + suffix;
        }
      }, 10);
  }

  document.querySelectorAll(".text-5xl").forEach((counterElement) => {
    const target = parseFloat(counterElement.getAttribute("data-target"));
    const id = counterElement.id;
    const suffix = counterElement.textContent.replace(/[0-9.]/g, "");
    counter(id, 0, target, 3000, suffix);
  });
});