const dataSet = [
    ['Andew', '7890216533', 'Andrew09@gmail.com', 'Newyork', '20'],
    ['Liam', '9046721140', 'Liam036@gmail.com', 'England', '28'],
    ['Alexander', '8036712489', 'Alex0234@gmail.com','LosAngles', '40'],
    ['Lucas', '9902234716', 'LucasL@gmail.com', 'Germany', '45'],
    ['Amir', '9010267263', 'AmirJ@gmail.com', 'Chennai', '34'],
];
 
dataSet.forEach(r => {
    var div1 = document.createElement('div');
    div1.innerHTML = r[1];
    r[1] = div1;
 
    var div3 = document.createElement('div');
    div3.innerHTML = r[3];
    r[3] = div3;
})
 
new DataTable('#example', {
    columns: [
        { title: 'Name' },
        { title: 'PhoneNumber' },
        { title: 'Email-Id' },
        { title: 'Location' },
        { title: 'Age' },
    ],
    data: dataSet
});