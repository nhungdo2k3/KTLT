function Validator(formSelector, options = {}) {
    var formRules = {};

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var validatorRules = {
        required: function(value) {
            return value ? undefined : 'Vui lòng nhập trường này!';
        },
        email: function(value) {
            var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Trường này phải là email!'
        },
        min: function(min) {
            return function(value) {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự!`;
            }
        },
        max: function(max) {
            return function(value) {
                return value.length <= max ? undefined : `Vui lòng nhập tối thiểu ${max} kí tự!`;
            }
        }
    }

    var formElement = document.querySelector(formSelector);

    if (formElement) {

        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            var ruleInfor;
            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                var isRuleHasValue = rule.includes(':');

                if (isRuleHasValue) {
                    ruleInfor = rule.split(':');
                    rule = ruleInfor[0];
                }

                var ruleFunction = validatorRules[rule];

                if (isRuleHasValue) {
                    ruleFunction = ruleFunction(ruleInfor[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunction)
                } else {
                    formRules[input.name] = [ruleFunction];
                }
            }

            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        function handleValidate(event) {
            var rules = formRules[event.target.name];
            var errorMessage;
            rules.some(function(rule) {
                errorMessage = rule(event.target.value);
                return errorMessage;
            })

            if (errorMessage) {
                var formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    var formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }

        function handleClearError(event) {
            var formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }

    formElement.onsubmit = function(event) {
        event.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;
        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }

        if (isValid) {
            if (typeof options.onSubmit === 'function') {
                options.onSubmit();
            } else {
                formElement.submit();
            }
        }
    }
}