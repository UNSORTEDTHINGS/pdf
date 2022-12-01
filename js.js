const { PDFDocument } = PDFLib
  let data = document.getElementById("vin-input"); 
  //registraion 
  async function fillReplForm() {
    getinput(event);
    //Fetch the PDF with form fields
    const formPdfBytes = await fetch('https://raw.githubusercontent.com/UNSORTEDTHINGS/pdf/main/VD040.pdf').then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const options = {method: 'GET', headers: {
		'X-RapidAPI-Key': '449a86dbf0mshce4a90484a956e8p10f30djsnb21176daef36',
		'X-RapidAPI-Host': 'cis-vin-decoder.p.rapidapi.com'}};

    const info = await fetch('https://cis-vin-decoder.p.rapidapi.com/vinDecode?vin='+data.value, options)
	  .then(response => response.json()).then(response => response.data)
	 
    pdfDoc.getForm().getTextField('Make').setText(info.Make);
    pdfDoc.getForm().getTextField('Model').setText(info.Model);
    pdfDoc.getForm().getTextField('Model Year').setText(info.ModelYear);
    pdfDoc.getForm().getTextField('Body Type').setText(info.BodyClass);
    pdfDoc.getForm().getTextField('Serial Number VIN').setText(info.VIN);
   
    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, "NewVD040.pdf", "application/pdf");

  }

  async function fillRegForm() {
    getinput(event);
    //Fetch the PDF with form fields
    const formPdfBytes = await fetch('https://raw.githubusercontent.com/UNSORTEDTHINGS/pdf/main/VD119.pdf').then(res => res.arrayBuffer())
    const pdfDoc = await PDFDocument.load(formPdfBytes)
    const options = {method: 'GET', headers: {
		'X-RapidAPI-Key': '449a86dbf0mshce4a90484a956e8p10f30djsnb21176daef36',
		'X-RapidAPI-Host': 'cis-vin-decoder.p.rapidapi.com'}};

    const info = await fetch('https://cis-vin-decoder.p.rapidapi.com/vinDecode?vin='+data.value, options)
	  .then(response => response.json()).then(response => response.data)
	 
    pdfDoc.getForm().getTextField('Make').setText(info.Make);
    pdfDoc.getForm().getTextField('Model').setText(info.Model);
    pdfDoc.getForm().getTextField('Model Year').setText(info.ModelYear);
    pdfDoc.getForm().getTextField('Body Type').setText(info.BodyClass);
    pdfDoc.getForm().getTextField('Text4').setText(info.VIN);
    pdfDoc.getForm().getTextField('Text5').setText(info.EngineCylinders);
   
    const pdfBytes = await pdfDoc.save()
    download(pdfBytes, "NewVD119.pdf", "application/pdf");

  }

  function getinput(event) {
  event.preventDefault();    
  }
