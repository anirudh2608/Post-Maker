
function getCurrentTime() {
    const d = new Date();
    let hours = d.getHours()
    let amPM = hours>12 ? "PM" : "AM"
    hours = hours>12 ? (hours - 12) : hours

    let mins = d.getMinutes()
    mins = mins<10 ? "0"+mins : mins

    return (hours + ":" + mins + " " + amPM)
}

export default getCurrentTime