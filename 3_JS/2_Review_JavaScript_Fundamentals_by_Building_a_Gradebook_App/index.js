function getAverage(scores) {
    let averageScore = 0;
    let sum = 0;
    let totalNumbers = scores.length;
    for (let i=0; i<totalNumbers; i++) {
    sum += scores[i];
    }
    return averageScore = sum / totalNumbers;
    }
    
    console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
    console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));