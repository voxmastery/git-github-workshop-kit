// ============================================================
//  EVENTS — Person A (second file)
//  Branch: git switch -c feature/events
// ============================================================
//
//  This fills the <section id="events"> box with event cards.
//  Each <div class="card"> ... </div> is one event.
//  Copy-paste a whole card block to add another event. Delete one to remove it.
//  Change the lines marked  <-- CHANGE THIS

document.getElementById("events").innerHTML = `
  <h2>Upcoming events</h2>

  <!-- ===== card 1 ===== -->
  <div class="card">
    <h3>Git & GitHub Workshop</h3>                       <!-- CHANGE THIS: event name -->
    <p><strong>Tue 22 Sep · 2:00 PM · Room A206</strong></p>   <!-- CHANGE THIS: date, time, place -->
    <p>Save your projects, build with friends, put your work online.</p>   <!-- CHANGE THIS: one line about it -->
    <a href="#" class="btn">Register</a>
  </div>

  <!-- ===== card 2 ===== -->
  <div class="card">
    <h3>Open-Source AI Hack Day</h3>                     <!-- CHANGE THIS -->
    <p><strong>Sat 24 Oct · 10:00 AM · RUAS Peenya</strong></p>   <!-- CHANGE THIS -->
    <p>A one-day hackathon. Teams, real pull requests, prizes.</p>  <!-- CHANGE THIS -->
    <a href="#" class="btn">Register</a>
  </div>

  <!-- ===== card 3 ===== -->
  <div class="card">
    <h3>Your event here</h3>                              <!-- CHANGE THIS -->
    <p><strong>Some day · Some time · Somewhere</strong></p>     <!-- CHANGE THIS -->
    <p>What it's about, in one line.</p>                  <!-- CHANGE THIS -->
    <a href="#" class="btn">Register</a>
  </div>
`;
