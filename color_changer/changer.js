const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
const cname = document.getElementById('cname');
const colorCodeInput = document.getElementById('colorCode');
const addBtn = document.getElementById('addbtn');
const removeBtn = document.getElementById('removebtn');

function isValidColor(strColor) {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}

function showCode() {
    let colorCode = colorCodeInput.value.trim();

    if (isValidColor(colorCode)) {
        body.style.backgroundColor = colorCode;
        cname.textContent = `Color Code: ${colorCode}`;


        let newSpan = document.createElement('span');
        newSpan.classList.add('button');
        newSpan.style.backgroundColor = colorCode;
        newSpan.style.border = 'solid black 2px';
        newSpan.setAttribute('data-color', colorCode);
        document.querySelector('.color_box').appendChild(newSpan);


        newSpan.addEventListener('click', function () {
            body.style.backgroundColor = colorCode;
        });

        document.getElementById("colorCode").value = "";

    } else {
        alert("Please enter a correct color code");
    }
}

//////////////////////////////// Remove function////////////////////////////////////////////////////

function removeCode() {
    let colorCode = colorCodeInput.value.trim().toLowerCase();

    if (isValidColor(colorCode)) {
        let found = false;
        let defaultSpans = document.querySelectorAll('.color_box .button');
        defaultSpans.forEach(function (span) {
            let spanColor = getComputedStyle(span).backgroundColor;
            if (span.id && span.id === colorCode) {
                span.style.display = 'none';
                found = true;
            } else if (parseColorCode(spanColor) === colorCode) {
                span.style.display = 'none';
                found = true;
            }
        });

        let userSpans = document.querySelectorAll('.color_box .button[data-color]');
        userSpans.forEach(function (span) {
            let spanColor = span.getAttribute('data-color').toLowerCase();
            if (spanColor === colorCode) {
                document.querySelector('.color_box').removeChild(span);
                found = true;
            }
        });

        if (found) {
            cname.textContent = `Removed color code: ${colorCode}`;
            body.style.backgroundColor = "white";
        } else {
            alert("Color not found in the list.");
        }

        document.getElementById("colorCode").value = "";

    } else {
        alert("Please enter the correct color code.");
    }
}

function parseColorCode(color) {
    if (color.indexOf('rgb') === 0) {
        let rgb = color.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
        let r = parseInt(rgb[1], 10);
        let g = parseInt(rgb[2], 10);
        let b = parseInt(rgb[3], 10);
        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    } else {
        return color;
    }
}
removeBtn.addEventListener('click', removeCode);
addBtn.addEventListener('click', showCode);

buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        let selectedColor = e.target.id;
        switch (selectedColor) {
            case 'grey':
                body.style.backgroundColor = '#808080';
                break;
            case 'white':
                body.style.backgroundColor = '#FFFFFF';
                break;
            case 'blue':
                body.style.backgroundColor = '#0000FF';
                break;
            case 'yellow':
                body.style.backgroundColor = '#FFFF00';
                break;
            default:
                body.style.backgroundColor = '#0000';
                break;
        }
    });
});
