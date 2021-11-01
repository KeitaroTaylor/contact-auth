var trash = document.getElementsByClassName("fa-trash");
var edit = document.getElementsByClassName("fa-edit");
var save = document.getElementsByClassName("save");
let newArray = []



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
        newArray[0] = this.parentNode.parentNode.childNodes[1].innerText
        newArray[1] = this.parentNode.parentNode.childNodes[5].innerText
        newArray[2] = this.parentNode.parentNode.childNodes[9].innerText
        newArray[3] = this.parentNode.parentNode.childNodes[11].innerText
        fetch('updateContacts', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': newArray[0],
            'number': newArray[1],
            'email': newArray[2],
            'userId': newArray[3]
          })
        }).then(function (response) {
          window.location.reload()
        })
    })
})

Array.from(save).forEach(function(element) {
    element.addEventListener('click', function() {
      console.log(this.parentNode.parentNode.childNodes)

    })
})