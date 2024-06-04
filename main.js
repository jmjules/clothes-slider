let selectedItem
let selectedString
let capRotation = 0
let shirtRotation = 0
let pantsRotation = 0

function changeSelectedHue(direction) {
    
    if (selectedItem === undefined || selectedItem === null) {
        document.querySelector("#pol").innerHTML = "Choose a piece of clothing!"
        return
    }


    if (selectedString === "cap") {
        shirtRotation = direction === "left" ? shirtRotation - 50 : shirtRotation + 50
        selectedItem.style.setProperty("--hue-rotation", shirtRotation + "deg")
    } else if (selectedString === "shirt") {
        shirtRotation = direction === "left" ? shirtRotation - 50 : shirtRotation + 50
        selectedItem.style.setProperty("--hue-rotation", shirtRotation + "deg")
    } else if (selectedString === "pants") {
        pantsRotation = direction === "left" ? pantsRotation - 50 : pantsRotation + 50
        selectedItem.style.setProperty("--hue-rotation", pantsRotation + "deg")
    }
    console.log(shirtRotation, direction);
}

function changeSelectedItem(e) {
    const targetRect = e.target.getBoundingClientRect()
    const posY =  e.clientY - targetRect.top
    const relative = parseInt(posY / targetRect.height * 100)


    if (relative < 18) {
        selectedItem = document.querySelector("#cap")
        selectedString = "cap"
    } else if (relative > 36 && relative < 70){
        selectedItem = document.querySelector("#shirt")
        selectedString = "shirt"
    } else if (relative > 69 && relative < 93) {
        selectedItem = document.querySelector("#pants")
        selectedString = "pants"
    } else {
        selectedItem = null
        selectedString = "nuffin"
    }


    document.querySelector("#pol").innerHTML = selectedString + " at " + relative
    console.log(e.clientY - targetRect.top);
}