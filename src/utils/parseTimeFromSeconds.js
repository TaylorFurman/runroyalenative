export function parseTimeFromSeconds(time = 0) {
    let totalHours = 0;
    let totalMinutes = 0;
    let totalSeconds = 0;
  
    // Hours calculation
    const hours = Math.floor(time / 3600);
  
    // Minutes calculation
    const minutes = Math.floor((time % 3600) / 60);
  
    // Seconds calculation
    const seconds = Math.floor((time % 6000) % 60);
  
    if (hours > 0) {
      totalHours = hours;
    }
    if (minutes > 0) {
      totalMinutes = minutes;
    }
    if (seconds > 0) {
      totalSeconds = seconds;
    }
  
    return { totalHours, totalMinutes, totalSeconds };
  }