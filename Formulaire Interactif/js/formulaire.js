var ids = ['nom', 'prenom', 'sexe', 'age', 'pseudo', 'mdp', 'mdpconfirm', 'pays'];
var nomElt = document.getElementById('nom');
var prenomElt = document.getElementById('prenom');
var sexeElts = document.getElementsByName('sexe');
var sexeTool = document.getElementById('sexeToolTip');
var ageElt = document.getElementById('age');
var pseudoElt = document.getElementById('pseudo');
var mdpElt = document.getElementById('mdp');
var mdpconfirmElt = document.getElementById('mdpconfirm');
var paysElt = document.getElementById('pays');

document.querySelector('form').addEventListener('submit', function(e) {
    // body... 
    e.preventDefault();
    var temp = true;

    ids.forEach(function(id) {
        temp = checkInput(id) && temp;
    });
    if (temp) {
        alert('All inputs are valid.');
    } else {
        alert('Please make sure your inputs are valid.');
    }
});

document.querySelector('form').addEventListener('reset', function(e) {
    // body... 
    resetCss();
    deactivateToolTips();
});


function checkInput(arg) {
    switch (arg) {
        case 'nom':
            var elt = document.getElementById(arg);
            var input = elt.value;

            if (input === "" || input.length < 2) {
                elt.className = 'incorrect';
                setVisibility(arg, 'visible');
                return false;
            } else {
                elt.className = 'correct';
                setVisibility(arg, 'hidden');
                return true;
            }
            break;
        case 'prenom':
            var elt = document.getElementById(arg);

            var input = elt.value;

            if (input === "" || input.length < 2) {
                elt.className = 'incorrect';
                setVisibility(arg, 'visible');
                return false;
            } else {
                elt.className = 'correct';
                setVisibility(arg, 'hidden');
                return true;
            }
            break;
        case 'pseudo':
            var elt = document.getElementById(arg);
            var input = elt.value;
            if (input === "" || input.length < 4) {
                elt.className = 'incorrect';
                setVisibility(arg, 'visible');
                return false;
            } else {
                elt.className = 'correct';
                setVisibility(arg, 'hidden');
                return true;
            }
            break;
        case 'age':

            var elt = document.getElementById(arg);
            var input = elt.value;
            if (input === '' || input < 5 || input > 140 || !(input.match(/^\d+$/))) {
                elt.className = 'incorrect';
                setVisibility(arg, 'visible');
                return false;
            } else {
                elt.className = 'correct';
                setVisibility(arg, 'hidden');
                return true;
            }
            break;
        case 'mdp':

            var elt = document.getElementById(arg);
            var input = elt.value;
            if (input === '' || input.length < 6) {
                elt.className = 'incorrect';
                setVisibility(arg, 'visible');
                return false;
            } else {
                elt.className = 'correct';
                setVisibility(arg, 'hidden');
                return true;
            }
            break;
        case 'mdpconfirm':
            var elt = document.getElementById(arg);

            var mdp1 = document.getElementById('mdp');
            var input = elt.value;
            if (input === '' || input != mdp1.value) {
                elt.className = 'incorrect';
                setVisibility(arg, 'visible');
                return false;
            } else {
                elt.className = 'correct';
                setVisibility(arg, 'hidden');
                return true;
            }
            break;
        case 'pays':

            var elt = document.getElementById(arg);
            var input = elt.options[elt.selectedIndex];
            if (input.value == 'none') {
                setVisibility(arg, 'visible');
                return false;
            } else {
                setVisibility(arg, 'hidden');
                return true;
            }
            break;
        case 'sexe':
            var elt = document.getElementById(arg);
            var input = document.getElementsByName(arg);
            if (input[0].checked || input[1].checked) {
                setVisibility(arg, 'hidden');
                return true;
            } else {
                setVisibility(arg, 'visible');
                return false;
            }
    }
}

function deactivateToolTips() {
    var toolTipElts = document.getElementsByClassName('tooltip');
    for (var i = 0; i < toolTipElts.length; i++) {
        toolTipElts[i].style.visibility = 'hidden';
    }
}

function resetCss() {
    // body... 
    var sexeElts = document.getElementsByName('sexe');
    sexeElts[0].checked = false;
    sexeElts[1].checked = false;

    var inputElts = document.getElementsByTagName('input');
    for (var i = 0; i < inputElts.length - 2; i++) {
        inputElts[i].className = '';
    }

    var paysElts = document.getElementById('pays');
    paysElts.selectedIndex = 0;
}

function setVisibility(id, state) {
    // body... 
    document.getElementById(id + 'ToolTip').style.visibility = state;
}

nomElt.addEventListener('blur', function(e) {
    checkInput(nomElt.id);
});
prenomElt.addEventListener('blur', function(e) {
    checkInput(prenomElt.id);
});
ageElt.addEventListener('blur', function(e) {
    checkInput(ageElt.id);
});
pseudoElt.addEventListener('blur', function(e) {
    checkInput(pseudoElt.id);
});
mdpElt.addEventListener('blur', function(e) {
    checkInput(mdpElt.id);
});
mdpconfirmElt.addEventListener('blur', function(e) {
    checkInput(mdpconfirmElt.id);
});
sexeElts[0].addEventListener('onclick', function (e) {
	/* body... */
	setVisibility('sexeToolTip', 'hidden');	
});
sexeElts[1].addEventListener('onclick', function (e) {
	/* body... */
	setVisibility('sexeToolTip', 'hidden');	
});