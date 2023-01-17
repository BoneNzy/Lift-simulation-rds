const floor_number = document.getElementById("floor");
const lift_number = document.getElementById("lift");
const create = document.getElementById("btn");
let container = document.getElementById("container");

// Create floors and lifts on clicking the create button
create.addEventListener('click', () => {
    totalFlr = floor_number.value;
    totalLift = lift_number.value;

    // Condition to be checked when entering the input values
    // Creating the floors
    if(totalFlr >= 1 && totalLift>=1){
        container.innerHTML = createFloor(totalFlr);
        // for (let i = totalFlr; i >= 1; i--) {
        // }
    }else {
        container.innerHTML = `<p class = "alert">NOT ENOUGH FLOOR/LIFT</p>`;
    }
});

// Funtion to create floors
function createFloor (totalFlr) {

    let platform = ``;
    for (let i = totalFlr; i >= 1; i--){
        platform +=
           `<div class="platform">
                <div class="btn-container">
                   <button class="UP Btn pointer">up</button>
                   <button class="DOWN Btn pointer">down</button>
                </div>

                <!-- lifts -->
                <div class="lift-container">
                ${i === 1 ? createLift(totalLift) : ""}
                </div>
                <span class="flr_num">
                    Floor ${i}
                </span>
            </div>`
        // container.appendChild(platform);
    }
    return platform;
}

// Function to create lifts
function createLift(totalLift) {

    let placeLift = "";
    for (let i = 1; i <= totalLift; ++i) {
        placeLift +=
           `<div class="lift">
                <div class="lftDoor"></div>
                <div class="rytDoor"></div>
            </div>`
    }
    return placeLift;
}

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('Btn')) console.log("hello");
});