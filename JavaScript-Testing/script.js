const body = document.querySelector('body');

const p_content = document.createElement('div');
p_content.classList.add('p_content');
p_content.textContent = "Hey I'm red!";
p_content.style.color = 'red';

body.appendChild(p_content);

const h3_content = document.createElement('div');
h3_content.classList.add('h3_content');
h3_content.textContent = "I'm a blue h3!";
h3_content.style.color = 'blue';

body.appendChild(h3_content);

const div_content = document.createElement('div');
div_content.classList.add('div_content');
div_content.style.border = '1px solid black';
div_content.style.backgroundColor = 'pink';

const h1_content = document.createElement('h1')
h1_content.classList.add('h1_content');
h1_content.textContent = "I'm in a div";

div_content.appendChild(h1_content);

const p_content2 = document.createElement('p');
p_content2.classList.add('p_content2');
p_content2.textContent = "ME TOO!";

div_content.appendChild(p_content2);
body.appendChild(div_content);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    });
});