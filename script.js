// ======================================
// SMART BRAIN V3
// Core Engine
// ======================================

// 所有畫面狀態
const STATES = {
    BOOT: "boot",
    USER: "user",
    EQUIPMENT: "equipment",
    DRIVER: "driver",
    STANDBY: "standby",
    COMPLETE: "complete",
    BIRTHDAY: "birthday"
};

// 目前狀態
let currentState = STATES.BOOT;

// DOM
const screen = document.getElementById("screen");

const statusValue = document.getElementById("statusValue");
const databaseValue = document.getElementById("databaseValue");
const userValue = document.getElementById("userValue");
const driverValue = document.getElementById("driverValue");

// 啟動
window.addEventListener("DOMContentLoaded", () => {
    render();
});

// 切換畫面
function changeState(state) {
    currentState = state;
    render();
}

// 更新狀態列
function updateStatus(data) {

    statusValue.textContent = data.status;
    databaseValue.textContent = data.database;
    userValue.textContent = data.user;
    driverValue.textContent = data.driver;

}

// 畫面渲染
function render() {

    switch (currentState) {

        case STATES.BOOT:
            function renderBoot() {

    updateStatus({
        status: "BOOTING",
        database: "OFFLINE",
        user: "UNKNOWN",
        driver: "SEARCHING"
    });

    screen.innerHTML = `
        <div class="boot-screen">

            <div id="terminalText"></div>

            <button id="accessBtn" hidden>
                ACCESS FILE
            </button>

        </div>
    `;

    startBootSequence();

};
            break;

        case STATES.USER:
            renderUser();
            break;

        case STATES.EQUIPMENT:
            renderEquipment();
            break;

        case STATES.DRIVER:
            renderDriver();
            break;

        case STATES.STANDBY:
            renderStandby();
            break;

        case STATES.COMPLETE:
            renderComplete();
            break;

        case STATES.BIRTHDAY:
            renderBirthday();
            break;

    }

}// ======================================
// 各畫面（先放骨架）
// ======================================

function renderBoot() {

    updateStatus({
        status: "BOOTING",
        database: "OFFLINE",
        user: "UNKNOWN",
        driver: "SEARCHING"
    });

    screen.innerHTML = `
        <div class="boot-screen">
            Boot Screen
        </div>
    `;

}

function renderUser() {

    screen.innerHTML = "<h2>USER</h2>";

}

function renderEquipment() {

    screen.innerHTML = "<h2>EQUIPMENT</h2>";

}

function renderDriver() {

    screen.innerHTML = "<h2>DRIVER</h2>";

}

function renderStandby() {

    screen.innerHTML = "<h2>STANDING BY</h2>";

}

function renderComplete() {

    screen.innerHTML = "<h2>COMPLETE</h2>";

}

function renderBirthday() {

    screen.innerHTML = "<h2>HAPPY BIRTHDAY</h2>";

}
