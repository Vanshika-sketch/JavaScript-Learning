// Select DOM elements
const timeSpan = document.getElementById("time");
const dateSpan = document.getElementById("date");


// Helper: add leading zero for single-digit numbers
function pad(number) {
  return number < 10 ? "0" + number : String(number);
}

// Build a readable date string like "Mon, 04 Aug 2025"

function formatDate(d) {
  const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const dayName = days[d.getDay()];
  const day = pad(d.getDate());
  const monthName = months[d.getMonth()];
  const year = d.getFullYear();
  return `${dayName}, ${day} ${monthName} ${year}`;
}
// Update clock once (set the DOM values)

function updateClock() {
  const now = new Date();                // current date/time
  let h = now.getHours();                
  const m = now.getMinutes();            
 const s = now.getSeconds();           

  // Optional: convert to 12-hour format with AM/PM
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12;                            // convert 0..23 to 0..11
  h = h === 0 ? 12 : h;                  // convert '0' to 12 for midnight/noon formatting

  // Build time string HH:MM:SS AM/PM
  const timeString = `${pad(h)}:${pad(m)}:${pad(s)} ${ampm}`;

  // Update DOM
  if (timeSpan) timeSpan.textContent = timeString;
  if (dateSpan) dateSpan.textContent = formatDate(now);
}
// Start automatic clock updates every 1 second
updateClock();                    // show immediately without waiting 1s
setInterval(updateClock, 1000);   // then update every 1000 ms (1 second)

