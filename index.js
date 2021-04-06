const hq = 42

function distanceFromHqInBlocks(start) {
    return (Math.abs(hq - start))
}

function distanceFromHqInFeet(feet) {
    return (Math.abs(hq - feet) * 264)
}

function distanceTravelledInFeet(begin, end){
    return (Math.abs(begin - end) * 264 );
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination); 
if (distance <= 400){
    return 0;
}
else if (distance > 400 && distance <= 2000){
return .02 * (distance - 400)}
else if (distance >= 2000 && distance <=2500) {return 25}
else if (distance > 2500) {return 'cannot travel that far'}
}