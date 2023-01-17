const floor_number = document.getElementById("floor");
const lift_number = document.getElementById("lift");
const platform = document.getElementById("container");
const create = document.getElementById("btn");
let queue = [];
let lift = [];

create.addEventListener ('click', () => {
    platform.innerHTML = "";
    totalFlr = floor_number.value;
    totalLift = lift_number.value;
    if(totalFlr >= 1){

        for (let i = totalFlr; i >= 1; i--) {
          createFloor(i);
        }
        console.log(platform);
    }
    else {
        platform.innerHTML = `<p class = "alert">NOT ENOUGH FLOOR/LIFT</p>`;
    }

    if(totalLift >= 1 && totalLift <= 8 && totalFlr >=1){

        for (let i = 1; i <= totalLift; ++i) {

            let lift = document.createElement('div');
            lift.className = "lift";
            lift.id = "liftId"+i;
            // lift.style.left = `${(6+6)*i}%`;

            let left_door = document.createElement('div');
            left_door.className = "lftDoor";
            let right_door = document.createElement('div');
            right_door.className = "rytDoor";

            lift.appendChild(left_door);
            lift.appendChild(right_door);

            platform.appendChild(lift);
        }
    }
    else if(totalLift > 8){
        platform.innerHTML = `<p class = "alert">TOO MANY LIFTS</p>`;
    }
    else {
        platform.innerHTML = `<p class = "alert">NOT ENOUGH FLOOR/LIFT</p>`;
    }
    // moveBtn();
});

function createFloor (totalFlr) {
    let new_flr = document.createElement('div');
    new_flr.id = "flrId"+totalFlr;
    new_flr.className = "flr";

    let up_btn = document.createElement('button');
    let dn_btn = document.createElement('button');

    up_btn.className = "UP";
    up_btn.id = "upBtn"+totalFlr;
    let uptxt = document.createTextNode('Up');
    dn_btn.className = "DOWN";
    dn_btn.id = "dnBtn"+totalFlr;
    let dntxt = document.createTextNode('Down')
    let flrTitle = document.createElement('div');
    flrTitle.className = "flr_num";
    let flr_num = document.createTextNode("Floor "+totalFlr);
    let hrLine = document.createElement("hr");

    up_btn.appendChild(uptxt);
    dn_btn.appendChild(dntxt);
    flrTitle.appendChild(flr_num);
    new_flr.appendChild(up_btn);
    new_flr.appendChild(flrTitle);
    new_flr.appendChild(dn_btn);
    new_flr.appendChild(hrLine);

    platform.appendChild(new_flr);
    return platform;
}
// function moveBtn () {
//     const moveUp = document.getElementsByClassName('UP');
//     const moveDown = document.getElementsByClassName('DOWN');

//     for (up_btn of moveUp){
//         up_btn.addEventListener('click', (e) => {
//             console.log("up");
//         })
//     }

//     for (dn_btn of moveDown){
//         dn_btn.addEventListener('click', () => {
//             console.log('down');
//         })
//     }
// }

// function moveBtn() {
    for (let i = 1; i <= floor_number.value; ++i) {
        const moveUp = document.getElementById('upbtn'+i);
        const moveDown = document.getElementby('DOWN');

        moveUp.addEventListener('click', (event) => {
            console.log(event);
        });
    }
// }