# numberToLocaleString polyfill for SFMC's Server-Side JavaScript (SSJS)

Use this to convert JavaScript numbers into localized numbers with comma, dot or space for thousand separator and comma or dot for decimal separator:

```html
<!-- include lib.numberToLocaleString.min.html in your code -->

<script runat="server">
    var number = 123456.789;
    var maxDecimals = 2;
    var locale = 'fr';

    var numberStr = numberToLocaleString(number, maxDecimals, locale);

    Write(numberStr); // outputs '123 456,789'
</script>
```

Supported Languages:

| code  | Language               |
| ----- | ---------------------- |
| da    | Danish                 |
| de-AT | German (Austria)       |
| de-BE | German (Belgium)       |
| de-CH | German (Switzerland)   |
| de-DE | German (Germany)       |
| de-LI | German (Liechtenstein) |
| de    | German                 |
| en    | English                |
| fr    | Frensh                 |
| hu    | Hungarian              |
| it    | Italian                |
| nb    | Norwegian              |
| ro    | Romanian               |
| sv    | Swedish                |
