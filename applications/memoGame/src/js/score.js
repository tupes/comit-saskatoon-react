export function scoreToClock (count){
    //count in (second) convert to minutes:seconds format  
    let minutes = parseInt(count / 60, 10);//to integer in Decimal
    let seconds = parseInt(count % 60, 10);
    minutes = minutes < 10 ? "0" + minutes : minutes;//add "0" before (0..9) 
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return minutes + ":" + seconds;
}