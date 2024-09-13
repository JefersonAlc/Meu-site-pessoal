```javascript
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio real do formulário
    alert('Mensagem enviada com sucesso!');
});
```
