const button = document.querySelector(".btn");
const input = document.querySelector('input');
const list = document.querySelector('ul');

button.addEventListener('click', function() {
        if (input.value !== "") {
            let li = document.createElement('li');
            let ldelete = document.createElement('BUTTON');
            ldelete.textContent = "❌";
            ldelete.addEventListener('click', function(){
                li.remove();
            });
            li.textContent = input.value;
            li.appendChild(ldelete);
            list.appendChild(li);
            input.focus();
            input.value = null;
        }
        else {
            input.focus();
        };
});
