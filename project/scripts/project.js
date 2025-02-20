// Get the goal form and tip elements
const goalForm = document.getElementById('goal-form');
const tipElement = document.getElementById('tip');

// Function to store user's selected goal in localStorage
function storeGoal(goal) {
  localStorage.setItem('goal', goal);
}

// Function to retrieve user's selected goal from localStorage
function getGoal() {
  return localStorage.getItem('goal');
}

// Function to display a message based on the user's selected goal
function displayMessage(goal) {
  switch (goal) {
    case 'weight-loss':
      tipElement.textContent = `To lose weight, focus on cardio exercises and a balanced diet. Aim to burn 500 calories more than you consume each day.`;
      break;
    case 'muscle-gain':
      tipElement.textContent = `To gain muscle, focus on strength training and a high-protein diet. Aim to consume 1 gram of protein per pound of body weight each day.`;
      break;
    case 'general-fitness':
      tipElement.textContent = `To improve overall fitness, focus on a mix of cardio and strength training. Aim to exercise for at least 30 minutes, 3 times a week.`;
      break;
    default:
      tipElement.textContent = '';
  }
}

// Event listener for the goal form submission
goalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const goal = document.getElementById('goal-select').value;
  storeGoal(goal);
  displayMessage(goal);
});

// Display a message based on the user's previously selected goal
if (getGoal()) {
  displayMessage(getGoal());
}

// Get a Quick Workout Tip button event listener
document.getElementById('get-tip').addEventListener('click', () => {
  const goal = getGoal();
  if (goal) {
    displayMessage(goal);
  } else {
    tipElement.textContent = 'Please select a goal to get a quick workout tip.';
  }
});

function createDynamicMessage(goal, name) {
  return `Hello, ${name}! To achieve your goal of ${goal}, remember to stay consistent and patient. Good luck!`;
}

// Example usage of createDynamicMessage function
const dynamicMessage = createDynamicMessage(getGoal(), 'John Doe');
console.log(dynamicMessage);