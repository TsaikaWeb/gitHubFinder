loadEventListeners();

function loadEventListeners() {
    document.addEventListener(`DOMContentLoaded`, getObject);
}

function getObject(){
    const gitHub = new Github;
    console.log(gitHub);

    gitHub.getUser(`Sempiternus666`)
    .then(data=>{
        console.log(data);
    })
}