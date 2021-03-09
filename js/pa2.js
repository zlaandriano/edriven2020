var m, sd;
m = prompt("Month 1-12");
sd = prompt("Start Day 1-7");
function calendar(element, bulan, adlaw) {
    var days;
    let month = '';

    if(bulan == 1){
        month = 'January';
        days = 31;
    }
    else if(bulan == 2){
        month = 'February';
        days = 28;
    }
    else if(bulan == 3){
        month = 'March';
        days = 31;
    }
    else if(bulan == 4){
        month = 'April';
        days = 30;
    }
    else if(bulan == 5){
        month = 'May';
        days = 31;
    }
    else if(bulan == 6){
        month = 'June';
        days = 30;
    }
    else if(bulan == 7){
        month = 'July';
        days = 31;
    }
    else if(bulan == 8){
        month = 'August';
        days = 31;
    }
    else if(bulan == 9){
        month = 'September';
        days = 30;
    }
    else if(bulan == 10){
        month = 'October';
        days = 31;
    }
    else if(bulan == 11){
        month = 'November';
        days = 30;
    }
    else if(bulan == 12){
        month = 'December';
        days = 31;
    }
    else{
        month = "Invalid Input";
    }

    let cal = `<table><tr><th colspan="7" align="center" id="bulan">${month}</th></tr><tr><td>Sun</td><td>Mon</td><td>Tue</td><td>Wed</td><td>Thu</td><td>Fri</td><td>Sat</td></tr>`;
    let weekCounter = 0;
    let calDays = 1;
    let counter = 1;

    if(bulan > 12 || adlaw > 7){
        element.innerHTML = ("<h1>Invalid Input</h1>")
    }else if(bulan == 0 || adlaw == 0)
        element.innerHTML = ("<h1>Invalid Input</h1>")
        else{
            if(days == 31){
                if(adlaw >= 6){
                    for (let i = 0; i < 42; i++) {
                        if (weekCounter == 0) {
                            cal += '<tr>'
                        }
                        if (counter <= adlaw - 1) {
                            cal += "<td></td>"
                            counter++
                        }
                        else if (calDays > days)
                            cal += "<td></td>"
                        else {
                            if (calDays <= days) {
                                cal += `<td>${calDays}</td>`
                                calDays++
                            }
                            else
                                cal += "<td></td>"
                        }
                        if (weekCounter == 6) {
                            cal += '</tr>'
                            weekCounter = 0
                        }
                        else {
                            weekCounter++
                        }
                    }
                }
                else{
                    for (let i = 0; i < 35; i++) {
                        if (weekCounter == 0) {
                            cal += '<tr>'
                        }
                
                        if (counter <= adlaw - 1) {
                            cal += "<td></td>"
                            counter++
                        }
                        else if (calDays > days)
                            cal += "<td></td>"
                        else {
                            if (calDays <= days) {
                                cal += `<td>${calDays}</td>`
                                calDays++
                            }
                            else
                                cal += "<td></td>"
                        }
                        if (weekCounter == 6) {
                            cal += '</tr>'
                            weekCounter = 0
                        }
                        else {
                            weekCounter++
                        }
                    }
                }   
            }else if(days == 28){
                if(adlaw >= 6){
                    for (let i = 0; i < 35; i++) {
                        if (weekCounter == 0) {
                            cal += '<tr>'
                        }
                        if (counter <= adlaw - 1) {
                            cal += "<td></td>"
                            counter++
                        }
                        else if (calDays > days)
                            cal += "<td></td>"
                        else {
                            if (calDays <= days) {
                                cal += `<td>${calDays}</td>`
                                calDays++
                            }
                            else
                                cal += "<td></td>"
                        }
                        if (weekCounter == 6) {
                            cal += '</tr>'
                            weekCounter = 0
                        }
                        else {
                            weekCounter++
                        }
                    }
            }else{
                for (let i = 0; i < 35; i++) {
                    if (weekCounter == 0) {
                        cal += '<tr>'
                    }
                    if (counter <= adlaw - 1) {
                        cal += "<td></td>"
                        counter++
                    }
                    else if (calDays > days)
                        cal += "<td></td>"
                    else {
                        if (calDays <= days) {
                            cal += `<td>${calDays}</td>`
                            calDays++
                        }
                        else
                            cal += "<td></td>"
                    }
                    if (weekCounter == 6) {
                        cal += '</tr>'
                        weekCounter = 0
                    }
                    else {
                        weekCounter++
                    }
                }
            }
            }else{
                if(adlaw >= 6){
                    for (let i = 0; i < 42; i++) {
                        if (weekCounter == 0) {
                            cal += '<tr>'
                        }
                        if (counter <= adlaw - 1) {
                            cal += "<td></td>"
                            counter++
                        }
                        else if (calDays > days)
                            cal += "<td></td>"
                        else {
                            if (calDays <= days) {
                                cal += `<td>${calDays}</td>`
                                calDays++
                            }
                            else
                                cal += "<td></td>"
                        }
                        if (weekCounter == 6) {
                            cal += '</tr>'
                            weekCounter = 0
                        }
                        else {
                            weekCounter++
                        }
                    }
                }else{
                    for (let i = 0; i < 35; i++) {
                        if (weekCounter == 0) {
                            cal += '<tr>'
                        }
                        if (counter <= adlaw - 1) {
                            cal += "<td></td>"
                            counter++
                        }
                        else if (calDays > days)
                            cal += "<td></td>"
                        else {
                            if (calDays <= days) {
                                cal += `<td>${calDays}</td>`
                                calDays++
                            }
                            else
                                cal += "<td></td>"
                        }
                
                        if (weekCounter == 6) {
                            cal += '</tr>'
                            weekCounter = 0
                        }
                        else {
                            weekCounter++
                        }
                    }
                }
            }
            cal += '</table>'
            element.innerHTML = cal;
            }
        }
calendar(tableCal, m, sd)