function spcalc() {
var ce = Number(document.getElementById('spanish-ce').value);
            var te = Number(document.getElementById('spanish-te').value);
            var ceTime = ce * 7.5;
            var teTime = te * 7.5;

            if (document.getElementById('spanish-member').checked == true) {
                var ceTime = ce * 7.5;
                var teTime = te * 7.5;
            }

            else if (document.getElementById('spanish-member').checked == false) {
                var ceTime = ce * 10;
                var teTime = te * 10;
            };

            if (ce > -1 && te > 0 && ce < te) {
                var finalTime = teTime - ceTime;
                var convertedTime = esTimeConverter(finalTime);
                document.getElementById('spanish-time').value = convertedTime;
                return;
            }
            else if (ce == te){
                document.getElementById('spanish-time').value = 'Has alcanzado la energía final.';
                return;
            }
            else if (ce < 0 ){
                window.alert('La energía actual no puede ser menor a 0.');
                return;
            }
            else if (te < 1){
                window.alert('La energía final debe ser mayor a 0.');
                return;
            }
            else if (ce > te){
                window.alert('La energía actual no puede ser mayor a la final.');
                return;
            }
            else {
                window.alert('Error desconocido. ¯\_(ツ)_/¯');
                return;
            }
        }