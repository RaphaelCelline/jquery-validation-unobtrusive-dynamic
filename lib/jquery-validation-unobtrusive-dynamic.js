(function ($) {
    $.validator.unobtrusive.dynamic = {};
    $.validator.unobtrusive.dynamic.parse = function (formSelector) {
        let form = $(formSelector);
        // Atualiza definições da validação 'unobtrusive'
        $.validator.unobtrusive.parse(form);
        // Busca o objeto de validação 'unobtrusive'
        var unobtrusiveValidation = form.data('unobtrusiveValidation');

        // Para cada regraFundi a regra 'unobtrusive' com a validação.
        $.each(unobtrusiveValidation.options.rules, function (elementName, unobtrusiveRules) {
            let rules = {
                messages: {}
            };            
            $.extend(rules, unobtrusiveRules);
            $.extend(rules.messages, unobtrusiveValidation.options.messages[elementName]);
            $("[name='" + elementName + "']").rules("add", rules);
        });
    }
})($);