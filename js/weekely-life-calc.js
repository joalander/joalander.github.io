// Get the week container element
const weekContainer = document.getElementById('week-container');

// Function to generate the week points
function generateWeekPoints() {
  const birthdayInput = document.getElementById('birthday');
  const birthday = birthdayInput.value;
  const livedWeeks = calculateLivedWeeksFromDate(birthday);
  const totalWeeks = 5200;

  weekContainer.innerHTML = ''; // Clear existing week points

  for (let i = 0; i < totalWeeks; i++) {
    const weekPoint = document.createElement('div');
    weekPoint.classList.add('week-point');

    if (i < livedWeeks) {
      weekPoint.classList.add('lived');
    }

    weekContainer.appendChild(weekPoint);
  }

  updateWeekPointsWidth();
}

// Function to reset the week points
function resetWeekPoints() {
    weekContainer.innerHTML = ''; // Clear existing week points
    document.getElementById('birthday').value = ''; // Reset the date input field
  }
  
// Calculate the number of lived weeks until today based on the birthday
function calculateLivedWeeksFromDate(birthday) {
  const today = new Date();
  const birthdayDate = new Date(birthday);
  const millisecondsPerWeek = 1000 * 60 * 60 * 24 * 7;

  const livedWeeks = Math.floor((today - birthdayDate) / millisecondsPerWeek);
  return livedWeeks;
}

// Update the width of each week point based on the number of lived weeks
function updateWeekPointsWidth() {
  const weeksPerLine = calculateWeeksPerLine();
  const weekPoints = weekContainer.getElementsByClassName('week-point');

  const widthPercentage = 100 / weeksPerLine;
  const marginPercentage = 1 / weeksPerLine;

  for (let i = 0; i < weekPoints.length; i++) {
    weekPoints[i].style.width = `${widthPercentage}%`;
    weekPoints[i].style.margin = `${marginPercentage}%`;
  }
}

// Call the function initially and on window resize
updateWeekPointsWidth();
window.addEventListener('resize', updateWeekPointsWidth);