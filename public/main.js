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

Array.from(edit).forEach(function(element) {
    element.addEventListener('click', function() {
        holdContacts.push(this.parentNode.parentNode.childNodes[1].innerText)
        holdContacts.push(this.parentNode.parentNode.childNodes[5].innerText)
        holdContacts.push(this.parentNode.parentNode.childNodes[9].innerText)
        holdContacts.push(this.parentNode.parentNode.childNodes[11].innerText)
        fetch('updateContacts', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': holdContacts[0],
            'number': holdContacts[1],
            'email': holdContacts[2],
            'userId': holdContacts[3]
          })
        }).then(function (response) {
          window.location.reload()
        })
    })
})


document.querySelector('.save').addEventListener('click', function() {
  const name = this.parentNode.parentNode.childNodes[3].value
  const number = this.parentNode.parentNode.childNodes[7].value
  const email = this.parentNode.parentNode.childNodes[11].value

  const oldName = this.parentNode.parentNode.parentNode.childNodes[3].innerText
  const oldNumber = this.parentNode.parentNode.parentNode.childNodes[5].innerText
  const oldEmail = this.parentNode.parentNode.parentNode.childNodes[7].innerText
  const oldUserId = this.parentNode.parentNode.parentNode.childNodes[9].innerText

  console.log(name, number, email, oldName)
  fetch('contacts', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'updatedName': name,
      'updatedNumber': number,
      'updatedEmail': email,
      'name': oldName,
      'number': oldNumber,
      'email': oldEmail,
      'userId': oldUserId
    })
  }).then(function (response) {
    window.location.reload()
  })
})