console.log("JavaScript is connected")
function changeToBlue(divNumber) {
    switch (divNumber) {
        case 1:
            console.log(document.getElementById("1"))
            if (document.getElementById("1").classList.contains("red")) {
                document.getElementById("1").classList.add("blue")
                document.getElementById("1").classList.remove("red")
            } else {
                document.getElementById("1").classList.add("red")
                document.getElementById("1").classList.remove("blue")
            }
            break;
        case 2:
            console.log(document.getElementById("2"))
            if (document.getElementById("2").classList.contains("red")) {
                document.getElementById("2").classList.add("blue")
                document.getElementById("2").classList.remove("red")
            } else {
                document.getElementById("2").classList.add("red")
                document.getElementById("2").classList.remove("blue")
            }
            break
        case 3:
            console.log(document.getElementById("3"))
            if (document.getElementById("3").classList.contains("red")) {
                document.getElementById("3").classList.add("blue")
                document.getElementById("3").classList.remove("red")
            } else {
                document.getElementById("3").classList.add("red")
                document.getElementById("3").classList.remove("blue")
            }
            break;
        case 4:
            console.log(document.getElementById("4"))
            if (document.getElementById("4").classList.contains("red")) {
                document.getElementById("4").classList.add("blue")
                document.getElementById("4").classList.remove("red")
            } else {
                document.getElementById("4").classList.add("red")
                document.getElementById("4").classList.remove("blue")
            }
            break
        default:
            console.log(divNumber)
    }
}

switch (divNumber) {
    case 1:
        console.log(document.getElementById("1"))
        if (document.getElementById("blue_1").classList.contains("red")) {
            document.getElementById("blue_1").classList.add("blue")
            document.getElementById("blue_1").classList.remove("red")
        } else {
            document.getElementById("blue_1").classList.add("red")
            document.getElementById("blue_1").classList.remove("blue")
        }
        break;
    case 2:
        console.log(document.getElementById("2"))
        if (document.getElementById("blue_2").classList.contains("red")) {
            document.getElementById("blue_2").classList.add("blue")
            document.getElementById("blue_2").classList.remove("red")
        } else {
            document.getElementById("blue_2").classList.add("red")
            document.getElementById("blue_2").classList.remove("blue")
        }
        break
    case 3:
        console.log(document.getElementById("3"))
        if (document.getElementById("blue_3").classList.contains("red")) {
            document.getElementById("blue_3").classList.add("blue")
            document.getElementById("blue_3").classList.remove("red")
        } else {
            document.getElementById("blue_3").classList.add("red")
            document.getElementById("blue_3").classList.remove("blue")
        }
        break;
    case 4:
        console.log(document.getElementById("4"))
        if (document.getElementById("blue_4").classList.contains("red")) {
            document.getElementById("blue_4").classList.add("blue")
            document.getElementById("blue_4").classList.remove("red")
        } else {
            document.getElementById("blue_4").classList.add("red")
            document.getElementById("blue_4").classList.remove("blue")
        }
        break
    default:
        console.log(divNumber)
    }