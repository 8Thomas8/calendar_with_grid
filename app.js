/// Get days number in a month
function getDaysInMonth(month, year) {
    let daysNumber = 0,
        date = new Date(year, month, 1);

    while (daysNumber < 32 && date.getMonth() === month) {
        daysNumber++;
        date.setDate(date.getDate() + 1);
    }
    return daysNumber;
}

// Generate div element for each day of the month
function generateDaysDiv(month, year) {
    let container = document.getElementById("date-grid"),
        daysNumber = getDaysInMonth(month, year);

    for (let i = 1; i <= daysNumber; i++) {
        let elt = document.createElement("div");
        elt.classList.add("dayElt");
        elt.textContent = i.toString();
        container.append(elt);
    }
}

// Place the first day of the month at the good place
function placeFirstDay(month, year) {
    let eltFirstDay = document.getElementsByClassName("dayElt")[0],
        date = new Date(year, month, 1);

    if (date.getDay() !== 0) {
        eltFirstDay.style.gridColumn = date.getDay().toString();
    } else {
        eltFirstDay.style.gridColumn = "7";

    }
}

// Set current month and year in DOM
function setCurrentDate(month, year) {
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"
    ];

    document.getElementById('currentMonth').textContent = monthNames[month];
    document.getElementById('currentYear').textContent = year;
}

// Generate calendar
function generateCalendar(month, year) {
    generateDaysDiv(month, year);
    setCurrentDate(month, year);
    placeFirstDay(month, year);
}

document.addEventListener("DOMContentLoaded", function () {
    // Define dates variables
    let today = new Date(),
        calMonth = today.getMonth(),
        calYear = today.getFullYear();

    generateCalendar(calMonth, calYear);

    // Event on Back and Next buttons
    document.getElementById('nextButton').addEventListener("click", function () {
        if (calMonth < 11) {
            calMonth++;
        } else {
            calMonth = 0;
            calYear++;
        }

        document.getElementById('date-grid').innerHTML = "";
        generateCalendar(calMonth, calYear);
    });

    document.getElementById('backButton').addEventListener("click", function () {
        if (calMonth > 0) {
            calMonth--;
        } else {
            calMonth = 11;
            calYear--;
        }

        document.getElementById('date-grid').innerHTML = "";
        generateCalendar(calMonth, calYear);
    });
});