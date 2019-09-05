# Resume

Jquery-validation and jquery-validation-unobtrusive extension for dynamic forms.

## Usage

```html
<form>
    <input type="text" data-val="true" data-val-mustbeball="Must be a ball." />
</form>
```
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