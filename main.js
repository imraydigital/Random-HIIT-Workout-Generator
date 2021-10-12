// Create options object
const options = {
  exercise: ["Squats", "Lunges", "Press Ups", "Crunches", "Burpees", "Squat Jumps", "Bicycle Crunches", "Sprint on spot", "Jumping Jacks", "Plank", "Plank Walkouts", "Mountain Climbers", "Squat Thrusts", "Lunge Jumps", "Jacknives", "Lunge Walks"],
  duration: [30, 45, 60],
  rest: [10, 20, 30],
  randNum(prop) {
    return Math.floor(Math.random() * prop.length)
  },
  generateExercise() {
    const randDuration = this.duration[this.randNum(this.duration)];
    const randExercise = this.exercise[this.randNum(this.exercise)];
    const randRest = this.rest[this.randNum(this.rest)];
    return `${randExercise} for ${randDuration} seconds.\nThen rest for ${randRest} seconds.`;
  }
}
// Log random exercise to console
console.log(options.generateExercise());

$(document).ready(() => {

  $('#newExerciseBtn').on('click', () => {

    if ($('#title').text() !== 'Your next exercise is:') {
      $('#title').text('Your next exercise is:');
    }

    $('#newExerciseBtn').text('Generate New Exercise');
    $('#exercise').text(options.generateExercise());
  })

});
