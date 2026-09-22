// ============================================================
//  NAVBAR — owned by: <your GitHub username>
//  Branch: git switch -c feature/navbar
// ============================================================
//
//  How this file works:
//  Everything between the backticks ( ` ... ` ) is HTML. It gets placed into
//  the <header id="navbar"> box in index.html. Edit the HTML, save, refresh the browser.
//
//  You only need to change the lines marked  <-- CHANGE THIS
//  Don't delete the first or last line of this file.

document.getElementById("navbar").innerHTML = `
  <nav style="display:flex; justify-content:space-between; align-items:center;">

    <!-- the site name on the left -->
    <strong style="font-size:1.25rem;">RUAS Campus Events</strong>   <!-- CHANGE THIS -->

    <!-- links on the right. Add or remove <a> lines as you like -->
    <span style="display:flex; gap:1.2rem;">
      <a href="#events">Events</a>          <!-- CHANGE THIS -->
      <a href="#contact">Contact</a>        <!-- CHANGE THIS -->
      <a href="#events" class="btn">Register</a>
    </span>

  </nav>
`;
