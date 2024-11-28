const form = document.getElementById('santa-form');

let rows = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputFriendName = document.getElementById('friend-name');
    const inputFriendPhone = document.getElementById('friend-tel');
    const selectFriendBehavior = document.getElementById('filter-select');

    let row = '<tr>';
    row += `<td> ${inputFriendName.value}</td>`;
    row += `<td> ${inputFriendPhone.value}</td>`;
    row += `<td> ${selectFriendBehavior.value}</td>`;
    row += `</tr>`;

    rows += row;

    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = rows;

    inputFriendName.value = '';
    inputFriendPhone.value = '';
    selectFriendBehavior.value = '';


    const messageList = document.getElementById('message');
    messageList.style.display = 'none';

});

const sendToSantaButton = document.getElementById('send-santa');

sendToSantaButton.addEventListener('click', function() {
    
    let row = '<tr>';
    row += `<td>---</td>`;
    row += `<td>---</td>`;
    row += `<td>Nice/Naughty</td>`;
    row += `</tr>`;

    rows = row;

    const tableBody = document.querySelector('table tbody');
    tableBody.innerHTML = rows;

    rows = ''

    const messageList = document.getElementById('message');
    messageList.style.display = 'block';

})

