var subsButton = document.getElementById('subs');
const subs = document.getElementsByClassName('inactive');


function toggleSubs() {
    document.getElementById('subsButton').onclick = function () {
        for (let i = 0; i < subs.length; i++) {
            subs[i].classList.remove('inactive');
        }
    }

}

