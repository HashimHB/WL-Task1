const form = document.getElementById("student-form")
form.addEventListener('submit',(e)=>{
    console.log("Hello")
    e.preventDefault();
    const firstname = document.getElementById('First Name').value;
    const lastname = document.getElementById('Last Name').value;
    const id = document.getElementById('ID').value;
    const dob = document.getElementById('DOB').value;
    const age = document.getElementById('age').value;
    const dept = document.getElementById('Dept').value;
    const year = document.getElementById('Year').value;
    const phone = document.getElementById('Phone No').value;
    const qualification = document.getElementById('Qualification').value;
    const emailid = document.getElementById('Email ID').value;
    const address = document.getElementById('Address').value;
    const gender = document.getElementById('gender').value;
    
    const data = {
        FirstName :firstname,
        LastName : lastname,
        ID : id,
        DOB: dob,
        age: age,
        Dept: dept,
        Year: year,
        Phone: phone,
        Qualification: qualification,
        EmailID: emailid,
        Address:address,
        Gender: gender,
        
        
    }
    console.log(data)
    fetch("http://localhost:5000/addStudent",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
})