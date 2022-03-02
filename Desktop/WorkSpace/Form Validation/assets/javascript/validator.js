// Đối tượng `Validator`
function Validator(options) {
    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Hàm thực hiện validate
    function validate(inputElement, rule) {
        var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm
        for (var i = 0; i < rules.length; ++i) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default:
                    errorMessage = rules[i](inputElement.value);
            }
            if (errorMessage) break;
        }

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.formGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    }

    // Lấy element của form cần validate
    var formElement = document.querySelector(options.form);
    if (formElement) {
        // Khi submit form
        formElement.onsubmit = function(e) {
            e.preventDefault();

            var isFormValid = true;

            // Lặp qua từng rules và validate
            options.rules.forEach(function(rule) {
                var inputElement = formElement.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) {
                    isFormValid = false;
                }
            });

            if (isFormValid) {
                // Trường hợp submit với javascript
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce(function(values, input) {

                        switch (input.type) {
                            case 'radio':
                                values[input.name] = formElement.querySelector('input[name="' + input.name + '"]:checked').value;
                                break;
                            case 'checkbox':
                                if (!input.matches(':checked')) {
                                    if (!values[input.name]) {
                                        values[input.name] = '';
                                    }
                                    return values;
                                }
                                if (!Array.isArray(values[input.name])) {
                                    values[input.name] = [];
                                }
                                values[input.name].push(input.value);

                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }

                        return values;
                    }, {});

                    //Chuyển key nào có value là mảng thì chuyển value đó thành chuỗi
                    for (const property in formValues) {
                        if (Array.isArray(formValues[property])) {
                            formValues[property] = formValues[property].join(', ');
                        }
                    }

                    options.onSubmit(formValues);
                }
                // Trường hợp submit với hành vi mặc định
                else {
                    formElement.submit();
                }
            }
        }

        // Lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, input, ...)
        options.rules.forEach(function(rule) {

            // Lưu lại các rules cho mỗi input
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            var inputElements = formElement.querySelectorAll(rule.selector);

            Array.from(inputElements).forEach(function(inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function() {
                    if (inputElement.type !== 'file') {
                        inputElement.value = inputElement.value.trim();
                    }
                    validate(inputElement, rule);
                }

                // Xử lý mỗi khi người dùng nhập vào input
                inputElement.oninput = function() {
                    var errorElement = getParent(inputElement, options.formGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.formGroupSelector).classList.remove('invalid');
                }
            });
        });
    }

}



// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => Trả ra message lỗi
// 2. Khi hợp lệ => Không trả ra cái gì cả (undefined)
Validator.isRequired = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : message || 'Vui lòng nhập trường này'
        }
    };
}

Validator.isEmail = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : message || 'Trường này phải là email';
        }
    };
}

Validator.isPassword = function(selector, message) {
    return {
        selector: selector,
        test: function(value) {
            var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            return regex.test(value) ? undefined : message || 'Vui lòng nhập ít nhất 8 kí tự bao gồm kí tự hoa, thường và số';
        }
    };
}

Validator.minLength = function(selector, min, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} kí tự`;
        }
    };
}

Validator.maxLength = function(selector, max, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.length <= max ? undefined : message || `Vui lòng nhập tối đa ${max} kí tự`;
        }
    };
}

Validator.isConfirmed = function(selector, selectorConfirmValue, message) {
    return {
        selector: selector,
        test: function(value) {
            return value === document.querySelector(selectorConfirmValue).value ? undefined : message || 'Giá trị nhập vào không chính xác';
        }
    }
}