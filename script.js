function assessPassword() {
    var password = document.getElementById('password').value;
    var strengthScore = assessPasswordStrength(password);
    var crackingTime = simulatePasswordCracking(password);
  
    document.getElementById('strength').innerHTML = 'Password Strength: ' + strengthScore;
    document.getElementById('time').innerHTML = 'Estimated time to crack (brute-force): ' + formatTime(crackingTime);
  }
  
  function assessPasswordStrength(password) {
    var score = 0;
  
    // Length check
    if (password.length < 8) {
      return 'Weak (too short)';
    } else if (password.length < 12) {
      score += 1;
    } else {
      score += 2;
    }
  
    // Character diversity check
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) {
      score += 1;
    }
    if (/\d/.test(password)) {
      score += 1;
    }
    if (/[@$!%*?&]/.test(password)) {
      score += 1;
    }
  
    // Common patterns check
    if (/(.)\1\1/.test(password)) {
      score -= 2;
    }
  
    return score >= 5 ? 'Strong' : score >= 3 ? 'Moderate' : 'Weak';
  }
  
  function simulatePasswordCracking(password) {
    var characters = 94; // Assuming all printable ASCII characters
    var possibleCombinations = Math.pow(characters, password.length);
    var crackingTime = possibleCombinations / 1000; // Assuming a brute-force attack speed of 1000 guesses per second
    return crackingTime;
  }
  
  function formatTime(seconds) {
    if (seconds < 60) {
      return seconds.toFixed(2) + ' seconds';
    } else {
      var minutes = Math.floor(seconds / 60);
      var remainingSeconds = seconds % 60;
      return minutes + ' minutes ' + remainingSeconds.toFixed(2) + ' seconds';
    }
  }
  