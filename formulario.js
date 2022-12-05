    const inputFullname = document.querySelector('input[type="name"]');
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPhone = document.querySelector('input[type="phone"]');
    const submitButton = document.querySelector('.login_submit');

    

    const init = () => {
        const inputName = document.querySelector('input[type="name"]');
        const inputEmail = document.querySelector('input[type="email"]');
        const inputPhone = document.querySelector('input[type="phone"]');
        const submitButton = document.querySelector('.login_submit');
    
        inputName.addEventListener('keyup', () => checkInputs(inputName));
        inputEmail.addEventListener('keyup', () => checkInputs(inputEmail));
        inputPhone.addEventListener('keyup', () => checkInputs(inputPhone));
    
    
        if (submitButton) {
            submitButton.addEventListener('click', (event) => {
                event.preventDefault();
            }
            )
        }
    
        function checkInputs(input) {
    
            const inputValue = input.value;
            
            if (inputValue === '') {
                // mostrar erro
                // add classe
                setErrorFor(input, 'Preencha esse campo')
                return false;
    
            } else {
                // adicionar a classe de sucesso
                setSuccessFor(input)
            }
        }
    
        function setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
    
            small.innerText = message;
    
            formControl.className = 'error';
        }
    
        function setSuccessFor(input) {
            const formControl = input.parentElement;
    
            const small = formControl.querySelector('small');
    
            small.innerText = '';
    
            formControl.className = 'success';
        }
    
    }
    
    init();