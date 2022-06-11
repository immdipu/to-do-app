const typer = document.querySelector('.typer');
const todoContainer = document.querySelector('.todo_container');
const itemLeft = document.querySelector('.item_left');
const clearCompleted = document.querySelector('.clear_completed');
const li = document.querySelectorAll('.li');




let numb = 0;



const todohtml = function (todotext) {

    return `<div class="todo unchecked">
    <input class="checkbox"  onclick="numbOftodo()" type="checkbox">
    <p class="notes">${todotext}</p> <span class="cross"></span>
    </div>`
}


const numbOftodo = function () {
    document.querySelectorAll('.todo').forEach(i => i.classList.add('unchecked'));
    if (document.querySelectorAll('.checkbox:checked')) {
        const checkedBox = document.querySelectorAll('.checkbox:checked');
        checkedBox.forEach(e => {
            let eachtodolist = e.parentElement;
            eachtodolist.classList.remove('unchecked')
        })
    }
    let count = document.querySelectorAll('.unchecked').length;
    itemLeft.textContent = `${count} items left`;
}


const searchValue = function () {
    if (!typer.value == "") {
        let html = "";
        let searchText = typer.value.trim();
        html += todohtml(searchText);
        todoContainer.insertAdjacentHTML("afterbegin", html);
        numbOftodo();
    }
}



document.addEventListener('keydown', ((e) => {
    if (e.key == "Enter") {
        searchValue();
        typer.value = "";
    }
}))



const deletetext = function (e) {
    let element = e.target;
    if (element.classList.contains('cross')) {
        let eachtodolist = element.parentElement;
        eachtodolist.remove();
        numbOftodo();
    }

}


todoContainer.addEventListener('click', deletetext)



const elementChecked = function () {
    const checkedBox = document.querySelectorAll('.checkbox:checked');
    checkedBox.forEach(e => {
        let eachtodolist = e.parentElement;
        eachtodolist.remove();
        numbOftodo();
    });
}





clearCompleted.addEventListener('click', elementChecked)


li[0].classList.add('activee');

li.forEach(item => {
    item.addEventListener('click', function () {
        li.forEach(e => e.classList.remove('activee'));
        item.classList.add('activee');

        const checkBox = document.querySelectorAll('.checkbox');
        checkBox.forEach(it => {
            let allparentele = it.parentElement;

            if (item.textContent == "Active") {
                allparentele.classList.remove('hidden');
                if (document.querySelectorAll('.checkbox:checked')) {
                    const checkedBox = document.querySelectorAll('.checkbox:checked');
                    checkedBox.forEach(e => {
                        let eachtodolist = e.parentElement;
                        eachtodolist.classList.add('hidden')
                    }
                    );
                }

            }


            if (item.textContent == "completed") {
                allparentele.classList.add('hidden');
                if (document.querySelectorAll('.checkbox:checked')) {
                    const checkedBox = document.querySelectorAll('.checkbox:checked');
                    checkedBox.forEach(e => {
                        let eachtodolist = e.parentElement;
                        eachtodolist.classList.remove('hidden')
                    })
                }

            }

            if (item.textContent == "All") {
                allparentele.classList.remove('hidden');
            }


        })

    })

})

