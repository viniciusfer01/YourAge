function verify() 
{
    var date = new Date();
    var year = date.getFullYear();
    var form = document.getElementById('year');
    var res = document.getElementById('res');
    if (form.value == 0 || form.value < 1900 || form.value > year) 
    {
        alert('Select a valid year!');
    }
    else 
    {
        var sex = document.getElementsByName('sex');
        var age = year - Number(form.value);
        var img = document.createElement('img');
        img.setAttribute('id','picture');
        var gender = '';
        if (sex[0].checked) 
        {
            gender = 'male';
            if (age >= 0 && age < 10) 
            {
                img.setAttribute('src','foto-bebe-m.png');
            }
            else if (age < 21) 
            {
                img.setAttribute('src','foto-jovem-m.png');
            }
            else if (age < 60) 
            {
                img.setAttribute('src','foto-adulto-m.png');
            }
            else
            {
                img.setAttribute('src','foto-idoso-m.png');
            }
        }
        else
        {
            gender = 'female';
            if (age >= 0 && age < 10) 
            {
                img.setAttribute('src','foto-bebe-f.png');
            }
            else if (age < 21) 
            {
                img.setAttribute('src','foto-jovem-f.png');
            }
            else if (age < 60) 
            {
                img.setAttribute('src','foto-adulto-f.png');
            }
            else
            {
                img.setAttribute('src','foto-idoso-f.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `We detected a ${age} years old ${gender}`;
        res.appendChild(img);
        img.style.paddingTop = '1.3rem';
    }
}