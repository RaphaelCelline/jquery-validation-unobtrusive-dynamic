# Resume

Jquery-validation and jquery-validation-unobtrusive extension for dynamic forms.

## Usage

Include an HTML code with unobtrusive parameters after the page renders.
```html
<form>
    <input type="text" data-val="true" data-val-mustbeball="Must be a ball." />
</form>
```
Add extra client-side validations if needed and call the dynamic parse to adjust validation.
```javascript
$.validator.unobtrusive.adapters.add("mustbeball", function (options) {
    options.rules["mustbeball"] = true;
    options.messages["mustbeball"] = "Must be a ball.";
});
$.validator.addMethod("mustbeball", function (value, element, param) {
    return value == 'ball';
});

$.validator.unobtrusive.dynamic.parse('form');
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.