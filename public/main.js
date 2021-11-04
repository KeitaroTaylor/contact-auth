var trash = document.getElementsByClassName("fa-trash");
var edit = document.getElementsByClassName("fa-edit");
var save = document.getElementsByClassName("save");
let holdContacts = []



Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.parentNode.childNodes[1].innerText
        const number = this.parentNode.parentNode.childNodes[5].innerText
        const email = this.parentNode.parentNode.childNodes[9].innerText
        fetch('contacts', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
            'number': number,
            'email': email
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


document.querySelector('.save').addEventListener('click', function() {
  const name = document.querySelector('.newName').value
  const number = document.querySelector('.newNum').value
  const email = document.querySelector('.newEmail').value
  const id = document.querySelector('.contactId').innerText

  console.log(name, number, email)
  fetch('/edit/contacts', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'updatedName': name,
      'updatedNumber': number,
      'updatedEmail': email,
      'contactId': id
      
    })
  }).then(function (response) {
    window.location.reload()
  })
})