const ApiMail = require('../twilio/ApiMail');
const config = require('config');
const fs = require('fs');
const mime = require('mime-types');
const path = require('path');

const fileName = 'welcome.txt';  
const filePath = path.join(config.get('documentPath'), fileName);
let type = mime.lookup(filePath);
let content = fs.readFileSync(filePath, { encoding: 'base64' });

const invoiceName = 'invoice-template.png';
const invoicePath = path.join(config.get('documentPath'), invoiceName);

let typeInvoiceFile = mime.lookup(invoicePath);
let contentInvoiceFile = fs.readFileSync(invoicePath, { encoding: 'base64' });

let mailData = {
  personalizations: [
    {
      to: [
        {
          email: "lindsey.friesen@email.com"
        }
      ],
      dynamic_template_data: {
        first_name: 'Lindsey',
        last_name: 'Friesen',
        plan: 'Student',
        payment_method: 'Bitcoins',
        term: 'Payment in advance'
      }
    }
  ],
  from: {
    email: "eflores@sinapsis.com.pe",
    name: "elbinfrdev"
  },
  template_id: 'd-fea3c7ddc96449e09f7c8f309990e7f2',
  attachments: [
    {
      content: content,
      type: type,
      filename: fileName,
      disposition: 'attachment'
    },
    {
      content: contentInvoiceFile,
      type: typeInvoiceFile,
      filename: invoiceName,
      disposition: 'attachment'
    }
  ]
}

ApiMail.send(mailData)
  .then( response => {
    console.log('correo enviado');
    console.log(response.data);
  })
  .catch( error => {
    console.log(error);
    if (error.response.data && error.response.data.errors) {
      console.log(error.response.data.errors);
    }
  });
