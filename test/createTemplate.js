const ApiTemplate = require('../twilio/ApiTemplate');

let htmlContent = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;700&display=swap" rel="stylesheet">
</head>
<body>  
  <table width="70%" style="font-family: Karla;margin: 0 auto;">
    <tr>
      <td>
        <h1 style="text-align: center; background-color:#115CFA; color: #FFFFFF;line-height: 100px;height: 100px;border-radius: 5px;">
          SINAPSIS
        </h1>
      </td>
    </tr>
    <tr>
      <td>
        <p><b>{{ firt_name }} {{ last_name }}</b>, este correo electrónico confirma la compra de su suscripción</p>
        <p>Ha comprado la siguiente suscripción con una prueba gratuita de 1 mes:</p>
      </td>
    </tr>
    <tr>
      <td>
        <ul>
          <li><b>Plan:</b> {{ plan }}</li>
          <li><b>Método de pago:</b> {{ payment_method }}</li>
          <li><b>Término:</b> {{ term }}</li>
        </ul>
      </td>
    </td>    
  </table>
</body>
</html>`;

let data = {
  active: 1,
  name: 'confirm subscription',
  html_content: htmlContent,
  subject: "Confirmacion de suscripción"
}

ApiTemplate.createVersion('d-fea3c7ddc96449e09f7c8f309990e7f2', data)
  .then( response => {
    console.log('template version saved');
    console.log(response.data);
  }).catch( error => {
    console.log(error);
  });

// id creado: 'f006ceff-b1f6-44f1-99b5-f13f7ebef347'