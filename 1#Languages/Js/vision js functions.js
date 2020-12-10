
function printDiv() {
    var printer = window.open('', '', 'width=300', 'height=80');

    printer.document.open("text/html");
    // printer.document.getElementsByTagName("div")[0].dir = "rtl";
    printer.document.write(document.getElementById('ContentPlaceHolder1_printingstuff').innerHTML);
    printer.print();
    printer.document.close();
    printer.window.close();
    // document.getElementById('ContentPlaceHolder1_txtNBarCode').focus();

};



function interpolateArray(data, fitCount) {

    var linearInterpolate = function (before, after, atPoint) {
        return before + (after - before) * atPoint;
    };

    var newData = new Array();
    var springFactor = new Number((data.length - 1) / (fitCount - 1));
    newData[0] = data[0]; // for new allocation
    for (var i = 1; i < fitCount - 1; i++) {
        var tmp = i * springFactor;
        var before = new Number(Math.floor(tmp)).toFixed();
        var after = new Number(Math.ceil(tmp)).toFixed();
        var atPoint = tmp - before;
        newData[i] = linearInterpolate(data[before], data[after], atPoint);
    }
    newData[fitCount - 1] = data[data.length - 1]; // for new allocation
    return newData;
};

function get_period(x, max) {

    for (var k = 0 ; k < 23; k++) {

        if (x <= (k / max * 800)) {
            // console.log(k);
            return k;
        }


    }


};
function get_y(x, x2, x1, y2, y1) {
    var y = (((y2 - y1) / (x2 - x1)) * (x - x1)) + y1;
    // console.log(x + ' ' + x2 + ' ' + x1 + ' ' + y2 + ' ' + y1)
    console.log(y);
    return Math.round(y);
};

function weekName (n){
    switch (n) {
        case 0:
            return 'الأحد';
            break;
        case 1:
            return 'الإثنين';
            break;
        case 2:
            return 'الثلاثاء';
            break;

        case 3:
            return 'الأربعاء';
            break;
        case 4:
            return 'الخميس';
            break;

        case 5:
            return 'الجمعة';
            break;

        case 6:
            return 'السبت';
            break;


    }

        
}

function am_pm(n) {


    switch(n){
        case 1:
            return '1 AM'
            break;
        case 2:
            return '2 AM'
            break;
        case 3:
            return '3 AM'
            break;
        case 4:
            return '4 AM'
            break;
        case 5:
            return '5 AM'
            break;
        case 6:
            return '6 AM'
            break;
        case 7:
            return '7 AM'
            break;
        case 8:
            return '8 AM'
            break;
        case 9:
            return '9 AM'
            break;
        case 10:
            return '10 AM'
            break;
        case 11:
            return '11 AM'
            break;
        case 12:
            return '12 PM'
            break;
        case 13:
            return '1 PM'
            break;
        case 14:
            return '2 PM'
            break;
        case 15:
            return '3 PM'
            break;
        case 16:
            return '4 PM'
            break;
        case 17:
            return '5 PM'
            break;
        case 18:
            return '6 PM'
            break;
        case 19:
            return '7 PM'
            break;
        case 20:
            return '8 PM'
            break;
        case 21:
            return '9 PM'
            break;
        case 22:
            return '10 PM'
            break;
        case 23:
            return '11 PM'
            break;
        case 24:
            return '12 AM'
            break;

    }

}


function bartime(interpoint, contid, containId, name) {



    if (name == 'hours') {
        var widthsize = document.getElementById(contid).offsetWidth;
        document.getElementById(containId).innerHTML = '';
        document.getElementById(containId+'sun').innerHTML = '';

        var test = ((widthsize / (interpoint)) / (widthsize) * 100) / 2;

        
        for (var i = 0 ; i < 24 ; i++) {
            var n = am_pm((Number(i) + 1));
            var timedash = '<td > <label  style="margin-left:' + Number(i) * test + '%;color:white;position:absolute" >' + n + '</label></td>';

            if (i > 4 && i < 18) {
                if (i == 5 || i ==17) {
                    var timesun = '<td > <img src="images/hsol.png" width="30px" style=margin-left' + Number(i) * test + '></td>';
                } else {
                    var timesun = '<td > <img src="images/sol.png" width="30px" style=margin-left' + Number(i) * test + '></td>';
                }
             

            } else {
                var timesun = '<td > <img src="images/moon.png" width="30px" style=margin-left' + Number(i) * test + '></td>';
            }


       
            $('#' + containId).append(timedash);
            $('#' + containId + 'sun').append(timesun);

        }
    }
    else if (name == 'week') {

        var widthsize = document.getElementById(contid).offsetWidth;
        document.getElementById(containId).innerHTML = '';

        var test = ((widthsize / (interpoint)) / (widthsize) * 100) / 2;

        var d = new Date();
        var n = d.getDay()

        console.log(n);
        for (var i = 0 ; i < 7 ; i++) {

            var wn = weekName(n);
            
            var timedash = '<td > <label  style="margin-left:' + Number(i) * test + '%;color:white;position:absolute" >' + wn + '</label></td>';
            $('#' + containId).append(timedash);

            n = n + 1;
            if (n == 7) {
                n = 0;
            }

        }
    }

}


function empty_html(classid) {

    document.getElementById(classid).innerHTML = '';
}

function margindiv(id, tabid, left, top) {
    $('#' + id).css('margin-left', left + '%');
    $('#' + id).css('margin-top', top + '%');
    $('#' + tabid).css('margin-left', left + '%');

}

function timeProgress2(classid, contid, color, imgpixel, zeropoint, interpoint, speed, duration, widthfactor, array) {

    //  document.getElementById(contid).innerHTML = '';
    var d = new Date();
    var y, x, timeh, img, visible, margin_y, timenow = d.getHours(), num,
        zeropoint, lbl, max2 = maximum(array), interpoint, widthsize = document.getElementById(contid).offsetWidth,
        iteration, timehour = 0, timemin = 0, timeexact = 0, timedash, yarray = [], ref = [];


    iteration = (Number(timenow) / 24 * interpoint);


    for (var i = 0 ; i < array.length ; i++) {
        ref[i] = array[i] / max2 * (interpoint - 1);
    }

    var newdata = interpolateArray(ref, interpoint);

    for (var i = 0 ; i < interpoint ; i++) {

        visible = 'block';
        timeh = i;
        x = timeh * widthfactor;

        timeexact = (i / (interpoint - 1) * (23)) + 1;
        timehour = parseInt(timeexact, 10);
        timemin = Math.round((timeexact % timehour) * 60, 0);


        lbl = Math.round(Math.round(newdata[i], 2) * max2 / (interpoint - 1), 2);
        y = (newdata[i]) / (interpoint - 1) * zeropoint;

        margin_y = zeropoint - y;
        yarray[i] = margin_y;



        // img = '<div id="divy' + timeh + '" style="width:'+imgpixel+'px;height:'+imgpixel+'px;margin-top:' + zeropoint + '%;margin-left:' + x + '%;position:absolute;display:' + visible + '"> <img id="xy' + timeh
        //    + '" style="width:' + imgpixel + 'px;height:' + imgpixel + 'px;margin-top:' + zeropoint + '%;margin-left:' + x + '%;position:absolute;display:' + visible + '" src="images/time.png"  title=' + lbl + ' /><label style="color:white" >' + '' + '</label></div>'

        // VIP  img = '<div title="' + lbl + '  -  ' +timehour+':'+timemin+ '" class="imgchart" id="divy' + timeh + '" style="width:' + imgpixel + 'px;height:' + imgpixel + 'px;margin-top:' + zeropoint + '%;margin-left:' + x + '%;position:absolute ; z-index:3000;border-radius:' + imgpixel + 'px;background-color:darkred;display:' + visible + '">'
        //        +'</div>'

        img = ' <div class="all">  <div class="lblchart" style="width:20px;height:10px;border-raduis:10px;border:solid;border-weight:0.5;border-color:lightgray;display:none;"> 1111 </div>  <div title="' + lbl + '  -  ' + timehour + ':' + timemin + '" class="' + classid + '" id="' + classid + timeh + '" style="width:' + imgpixel + 'px;height:' + imgpixel + 'px;margin-top:' + zeropoint + '%;margin-left:' + x + '%;position:absolute ; z-index:3000;border-radius:' + imgpixel + 'px;background-color:' + color + ';display:' + visible + '">'
                 + '</div>  </div>'
        $('#' + contid).append(img);

    }



    for (var i = 0 ; i < interpoint ; i++) {

        do_it(classid, i, yarray[i], speed, duration);

    }



};

function do_it(classid, i, y, speed, duration) {
    console.log(duration);
    setTimeout(function () {
        var idmain = '#' + classid + i;
        $(idmain).animate({ 'margin-top': y + '%' }, {
            duration: Number(duration),
            easing: 'linear',
            complete: function () {
                console.log('done!')
            }
        });


    }, i * speed);

};

function maximum(array) {
    var max = 0;
    for (var i = 0 ; i < array.length ; i++) {


        if (max < Number(array[i])) {
            max = Number(array[i]);
        }
    }
    return max;
}