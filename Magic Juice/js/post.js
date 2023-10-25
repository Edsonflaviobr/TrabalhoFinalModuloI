async function post() {
    const formData = document.querySelector('form')
    formData.addEventListener ('submit', function formSend(InfosdeEvento){
    InfosdeEvento.preventDefault ();
    })
    const nameFull = document.getElementById ("nameFull");
    const phoneNumber = document.getElementById ("phoneNumber");
    const email = document.getElementById ("email");
    const adress = document.getElementById ("adress");
    const city = document.getElementById ("city");
    const estado = document.getElementById ("Estado");
    const tabela = document.getElementById ("tabela");
    try {
      const response = await fetch("https://nocodeform.io/f/65381b57aaca59a8fda21919", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
      },
        body: JSON.stringify({
          nameFull: nameFull,
          phoneNumber: phoneNumber,
          email: email,
          adress: adress,
          city: city,
          estado: estado,
          tabela: tabela,
        }),
      }) .then(result => {
          alert("Parabéns, em até 24 horas nosso time entrará em contato com você via fone ou e-mail.", result);
      });
    } catch (error) {
      console.log("Error:", error)
    }
  }