(function ($, root, undefined) {
	$(function () {
		'use strict';
        
        $(document).on('click', '.btn-close', function () {
            $(this).parent().toggleClass('hidden');
            $('body').toggleClass('open-modal');
        });

        $(document).on('click', '#music_trigger', function () {
            $('body').toggleClass('open-modal');
            $('.modal').addClass('hidden');
            $('#music_modal').removeClass('hidden');
        });

        $(document).on('click', '#video_trigger', function(){
            $('body').toggleClass('open-modal');
            $('.modal').addClass('hidden');
            $('#video_modal').removeClass('hidden');
        });

    });
})(jQuery, this);

// letters
// const letters = ['D', 'O', 'U', 'O', 'S', 'V', 'A', 'V', 'V', 'M'];
// const correctOrder = ['D', 'O', 'U', 'O', 'S', 'V', 'A', 'V', 'V', 'M'];
// let selectedLetters = [];
// let globalCounter = 0;



const letters = ['U', 'O', 'D', 'V', 'V', 'A',  'O', 'S', 'V', 'M'];
const encryptedOrder = 'GRXRVYDYYP'; // Encrypted correct order
let selectedLetters = [];
let globalCounter = 0; // Global counter for unique identifiers

// Function to decrypt the sequence using Caesar Cipher (shift of 3)
function decryptSequence(encrypted) {
    return encrypted
        .split('')
        .map(char => {
            const charCode = char.charCodeAt(0);
            // Shift back by 3 positions (A-Z range)
            return String.fromCharCode(((charCode - 65 - 3 + 26) % 26) + 65);
        })
        .join('');
}

const correctOrder = decryptSequence(encryptedOrder).split(''); // Decrypted correct order


function scatterLetters() {
    const container = document.getElementById('letter-container');
    container.innerHTML = '';
    globalCounter = 0;
    selectedLetters = [];
    letters.forEach((letter, index) => {
        const letterElement = document.createElement('div');
        letterElement.classList.add('letter');
        letterElement.textContent = letter;
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        letterElement.style.left = `${x}px`;
        letterElement.style.top = `${y}px`;
        letterElement.addEventListener('click', () => selectLetter(letter, letterElement));
        container.appendChild(letterElement);
    });
}
function selectLetter(letter, letterElement) {
    letterElement.classList.add('ok');
    globalCounter++;
    const sequentialClass = `letter-${globalCounter}`;
    letterElement.classList.add(sequentialClass);
    selectedLetters.push(letter);
    const videoloop_one = document.getElementById('videoloop-1');
    const videoloop_two = document.getElementById('videoloop-2');
    const newsletter = document.getElementById('newsletter-container');
    if (selectedLetters.length === letters.length) {
        if (selectedLetters.every((val, index) => val === correctOrder[index])) {
            if (videoloop_one) {
                videoloop_one.classList.add('hidden');
            }
            if (videoloop_two) {
                videoloop_two.classList.remove('hidden');
            }
            if (newsletter) {
                newsletter.classList.remove('hidden');
            }
        } else {
            globalCounter = 0;
            selectedLetters = [];
            scatterLetters();
        }
    }
}
scatterLetters();

/*-- year --*/
const y = new Date();
let year = y.getFullYear();
document.getElementById("current_year").innerHTML = year;
/*-- End Year --*/










