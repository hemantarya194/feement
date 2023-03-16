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
let rows, Sname, Semail, Sgender, Sroll, Smobile, Sbranch, Sbirth, SPMSH, SFW, SFee_type;
let row;
let nameCell;
let emailCell;
let midNameCell;
let tableBody;

const fuck_button = document.querySelector('.btn_fuck')
if (fuck_button != undefined) {

    fuck_button.addEventListener('click', (e) => {
        try {

            const hell = localStorage.getItem('name')
            if (!hell) {
                throw Error(`you have been fucked up`)
            }
            fetch(`http://localhost:8080/Batches/${hell}`)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    tableBody = document.querySelector('#myTableBody');
                    // tableBody=document.getElementById('myTableBody')
                    data.forEach(item => {
                        row = tableBody.insertRow();
                        nameCell = row.insertCell();
                        midNameCell = row.insertCell();
                        emailCell = row.insertCell();

                        nameCell.innerHTML = item.first_name
                        midNameCell.innerHTML = item.middle_name;
                        emailCell.innerHTML = item.email;

                        Sgender = item.gender;
                        Sroll = item.rollno;
                        Smobile = item.phone;
                        Sbirth = item.birthday;
                        Sbranch = item.branch;
                        // SPMSH=item.item.scholer_holder;
                        // SFW =item.fee_waiver;
                        // SFee_type=item.fee_type;

                        tableBody.rows[0].setAttribute('id', '0')

                    });


                })
                .catch(error => { throw Error(error) });
        } catch (error) {
            console.log(error);
        }

        let list = document.getElementById('0')

        list.addEventListener('click', () => {
            // var lol=document.getElementById('button').value;
            rows = tableBody.rows[0];
            Sname = rows.cells[0].textContent;
            Semail = rows.cells[2].textContent;
            console.log(Sname);
            localStorage.setItem('Sname', Sname);
            localStorage.setItem('Semail', Semail);
            localStorage.setItem('Sbirth', Sbirth);
            localStorage.setItem('Sgender', Sgender);
            localStorage.setItem('Sroll', Sroll);
            localStorage.setItem('Sbranch', Sbranch);
            localStorage.setItem('Smobile', Smobile);
            localStorage.setItem('SFee_type', SFee_type);
            localStorage.setItem('SPMSH', SPMSH);
            localStorage.setItem('SFW', SFW);

            location.replace('./profile.html')
            return false

        })
    })
}



