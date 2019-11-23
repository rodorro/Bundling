const scores = [90, 75, 60, 99, 94, 30];

function getAvg(scores) {
  return getTotalScore(scores) / scores.length;
}

function getTotalScore(scores) {
  return scores.reduce((score, count) => score + count);
}

const averageScore = getAvg(scores);

const messageToDisplay = `average score ${averageScore}`;

document.write(messageToDisplay);
