function submitForm(event) {
    event.preventDefault()

    const formData = new FormData(event.target);

    const name = formData.get('name');
    const email = formData.get('email');
    const maxMonthMessages = formData.get('max-month-messages');
    const unsubscribeDate = formData.get('unsubscribe-date');
    const theme = formData.get('theme') === 'none' ? 'all' : formData.get('theme') ?? 'all';

    if (!name) return setValidationError('Заполните поле "Имя"')
    if (!email) return setValidationError('Заполните поле "E-mail"')
    if (!/^\S+@\S+\.\S+$/.test(email.toString())) return setValidationError('Поле "E-mail" заполнено неверно')

    alert(`Имя: ${name}\nE-mail: ${email}\nМаксимальное количество сообщений в месяц: ${maxMonthMessages || 'Без ограничений'}\nДата автоматической отписки: ${unsubscribeDate || 'Никогда'}\nТема: ${theme}`)
}

function setValidationError(message) {
    const element = document.getElementById('mailing-error-message')
    if (!element) {
        console.warn("element with id=mailing-error-message not found")
        return
    }

    element.innerText = message
}