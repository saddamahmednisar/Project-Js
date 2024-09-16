const buttons = document.querySelectorAll(".button");
        const body = document.querySelector("body");
        const cname = document.getElementById('cname');
        const colorCodeInput = document.getElementById('colorCode');
        const addBtn = document.getElementById('addbtn');
        const alerterror = document.getElementById('alerterror');

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
                newSpan.style.border = 'Solid black 2px';
                document.querySelector('.color_box').appendChild(newSpan);
                


                newSpan.addEventListener('click', function () {
                    body.style.backgroundColor = colorCode;

                });
                document.getElementById("colorCode").value = "";

            } else {
                alert("Plz enter a correct color code")
            }
        }

        addBtn.addEventListener('click', showCode);

        buttons.forEach(function (button) {
            button.addEventListener('click', function (e) {
                let selectedColor = e.target.id;
                switch (selectedColor) {
                    case 'grey':
                        body.style.backgroundColor = 'grey';
                        break;
                    case 'white':
                        body.style.backgroundColor = 'white';
                        break;
                    case 'blue':
                        body.style.backgroundColor = 'blue';
                        break;
                    case 'yellow':
                        body.style.backgroundColor = 'yellow';
                        break;
                    default:
                        body.style.backgroundColor = 'white';
                        break;
                }
            });
        });