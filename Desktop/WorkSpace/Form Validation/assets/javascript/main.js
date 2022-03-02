Validator({
    form: '#form-1',
    formGroupSelector: '.form-group',
    errorSelector: '.form-message',
    rules: [
        Validator.isRequired('#fullname'),
        Validator.minLength('#fullname', 5),
        Validator.maxLength('#fullname', 30),
        Validator.isRequired('#email'),
        Validator.isEmail('#email'),
        Validator.isRequired('#password'),
        Validator.isPassword('#password'),
        Validator.isRequired('#password_confirmation'),
        Validator.isConfirmed('#password_confirmation', '#password', 'Mật khẩu không trùng khớp'),
        Validator.isRequired("input[name='gender']"),
        Validator.isRequired("input[name='favourite']"),
        Validator.isRequired("#file"),
    ],
    onSubmit: function(data) {
        console.log(data);
    }
})