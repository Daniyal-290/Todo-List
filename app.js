document.addEventListener('DOMContentLoaded', () => {

   let inputText = document.getElementById('task-input');
   let addButton = document.getElementById('add-task-btn');
   let todoList = document.getElementById('task-list');

   addButton.addEventListener('click', () => {
        if (inputText.value.trim() == '') { 
            alert("Please enter a task.");
            return;
        }

        let listItem = document.createElement('li');
        let listText = inputText.value.trim();
        
       
        let mySpan = document.createElement('span');
        mySpan.textContent = listText;
        mySpan.className = 'task-text'

        
        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener('click', () => {
            listItem.remove(); 
        });

        
        let editBtn = document.createElement('button');
        editBtn.className = 'edit-btn';
        editBtn.textContent = 'Edit';

       
        editBtn.addEventListener('click', () => {
            
           
            if (editBtn.textContent === 'Edit') {
               
                let editInput = document.createElement('input');
                editInput.type = 'text';
                editInput.className = 'edit-input';
                editInput.value = mySpan.textContent; 

                
                listItem.replaceChild(editInput, mySpan);
                
                
                editBtn.textContent = 'Save';

            } else { 
                
                let editInput = listItem.querySelector('.edit-input');

                mySpan.textContent = editInput.value;

                listItem.replaceChild(mySpan, editInput);

                editBtn.textContent = 'Edit';
            }
        });

        let compBtn = document.createElement('button');
        compBtn.textContent = 'Complete'
        compBtn.className = 'comp-btn'

        compBtn.addEventListener('click', () => {
            compBtn.textContent = 'Completed'
            listItem.style.backgroundColor = '#9ff18b' 
             })
        
       
        todoList.appendChild(listItem); 
        listItem.appendChild(mySpan);   
        listItem.appendChild(deleteBtn);
        listItem.appendChild(editBtn);
        listItem.appendChild(compBtn);

        inputText.value = ''; 
    });

});