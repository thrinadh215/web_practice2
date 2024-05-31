document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    add();
});

function add() {
    const inp = document.getElementById('inpt');
    const todo = document.getElementById('todo-list');
    let value = inp.value.trim();
 
    if (value) {
        const li = document.createElement('li');
        li.textContent = value;

        const delet = document.createElement('button');
        delet.textContent='Delete';
        delet.addEventListener('click' , function(){
            todo.removeChild(li);
        });
        li.appendChild(delet);
        todo.appendChild(li);
        inp.value = ''; // Clear the input field
    }
    
}
