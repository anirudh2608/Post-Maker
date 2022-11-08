
const months = ["Jan", "Feb", "Mar", "Apri", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function getCurrentDate() {
    const d = new Date();

    return (d.getDate() + " " + months[(d.getMonth())] + " " + d.getFullYear())
}

export default getCurrentDate