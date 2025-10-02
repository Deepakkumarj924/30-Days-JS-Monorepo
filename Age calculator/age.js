const input = document.getElementById("date");
const btn = document.getElementById("btn");
const res = document.getElementById("result");
input.max = new Date().toISOString().split("T")[0];
btn.addEventListener("click", (event) => {
  let inputVal = input.value;
  let d = calculateAge().d3;
  let m = calculateAge().m3;
  let y = calculateAge().y3;
  res.innerText = `You are ${y} year, ${m} month and ${d} days old.`;
});

function calculateAge() {
  let birthDate = new Date(input.value);

  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;
  y3 = y2 - y1;
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  return { d3, m3, y3 };
}
function getDaysInMonth(years, month) {
  return new Date(years, month, 0).getDate();
}
