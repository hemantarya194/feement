const redirect_btn = document.querySelector('.btn_lawdu')
const redirect_btn1 = document.querySelector('.btn1')
const redirect_btn2 = document.querySelector('.btn2')
const redirect_btn3 = document.querySelector('.btn3')
const redirect_btn4 = document.querySelector('.btn4')
const redirect_btn5 = document.querySelector('.btn5')
const redirect_btn6 = document.querySelector('.btn6')


if (redirect_btn != undefined) {
    redirect_btn.addEventListener('click', (e) => {
        const hell = document.querySelector('.btn_lawdu').value
        localStorage.setItem('name', hell)
        location.replace('./show.html')
    })
} if (redirect_btn1 != undefined) {
    redirect_btn1.addEventListener('click', (e) => {
        const hell = document.querySelector('.btn1').value
        localStorage.setItem('name', hell)
        location.replace('./show.html')
    })
} if (redirect_btn2 != undefined) {
    redirect_btn2.addEventListener('click', (e) => {
        const hell = document.querySelector('.btn2').value
        localStorage.setItem('name', hell)
        location.replace('./show.html')
    })
} if (redirect_btn3 != undefined) {
    redirect_btn3.addEventListener('click', (e) => {
        const hell = document.querySelector('.btn3').value
        localStorage.setItem('name', hell)
        location.replace('./show.html')
    })
} if (redirect_btn4 != undefined) {
    redirect_btn4.addEventListener('click', (e) => {
        const hell = document.querySelector('.btn4').value
        localStorage.setItem('name', hell)
        location.replace('./show.html')
    })
} if (redirect_btn5 != undefined) {
    redirect_btn5.addEventListener('click', (e) => {
        const hell = document.querySelector('.btn5').value
        localStorage.setItem('name', hell)
        location.replace('./show.html')
    })
} if (redirect_btn6 != undefined) {
    redirect_btn6.addEventListener('click', (e) => {
        const hell = document.querySelector('.btn6').value
        localStorage.setItem('name', hell)
        location.replace('./show.html')
    })
}
// const pop = async (string) => {
//     const data = await fetch(`/find/${string}`)
//     console.log(await data.json())
// }

const openuser = (id) => {
    localStorage.setItem('id', id)
    location.replace('./profile.html')

}
const getallData = () => {
    const hell = localStorage.getItem('name')
    if (!hell) {
        throw Error(`you have been error accurred`)
    }
    else {
        fetch(`http://localhost:8080/Batches/${hell}`)
            .then(response => response.json())
            .then(data => {
                tableBody = document.querySelector('#myTableBody');
                data.forEach(item => {
                    var tr = document.createElement(`tr`)
                    tr.setAttribute('class', item._id)
                    tr.setAttribute('onclick', `openuser('${item._id}')`)
                    tr.innerHTML = `<td>${item.first_name}</td><td>${item.middle_name}</td><td>${item.last_name}</td>`
                    tableBody.append(tr)
                });
            })
            .catch(error => console.log(error));
    }
}
getallData()




