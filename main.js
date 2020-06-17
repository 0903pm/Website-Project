document.getElementById('button').addEventListener('click', BtnClick);

function BtnClick() {
  let Qone = document.getElementById('Qone').value;
  let Qtwo = document.getElementById('Qtwo').value;
  let Qthree = document.getElementById('Qthree').value;
  let Qfour = document.getElementById('Qfour').value;
  let output = document.getElementById('output');

  if (Qone != '2' && Qtwo == '2' && Qthree == '4' && Qfour == '3') {
    output.innerHTML = '3/4 (75%)';
    output.style.backgroundColor = 'green';
  } else if (Qone == '2' && Qtwo != '2' && Qthree == '4' && Qfour == '3') {
    output.innerHTML = '3/4 (75%)';
    output.style.backgroundColor = 'green';
  } else if (Qone == '2' && Qtwo == '2' && Qthree != '4' && Qfour == '3') {
    output.innerHTML = '3/4 (75%)';
    output.style.backgroundColor = 'green';
  } else if (Qone == '2' && Qtwo == '2' && Qthree == '4' && Qfour != '3') {
    output.innerHTML = '3/4 (75%)';
    output.style.backgroundColor = 'green';
  } else if (Qone != '2' && Qtwo != '2' && Qthree == '4' && Qfour == '3') {
    output.innerHTML = '2/4 (50%)';
    output.style.backgroundColor = 'red';
  } else if (Qone != '2' && Qtwo == '2' && Qthree != '4' && Qfour == '3') {
    output.innerHTML = '2/4 (50%)';
    output.style.backgroundColor = 'red';
  } else if (Qone != '2' && Qtwo == '2' && Qthree == '4' && Qfour != '3') {
    output.innerHTML = '2/4 (50%)';
    output.style.backgroundColor = 'red';
  } else if (Qone == '2' && Qtwo != '2' && Qthree != '4' && Qfour == '3') {
    output.innerHTML = '2/4 (50%)';
    output.style.backgroundColor = 'red';
  } else if (Qone == '2' && Qtwo != '2' && Qthree == '4' && Qfour != '3') {
    output.innerHTML = '2/4 (50%)';
    output.style.backgroundColor = 'red';
  } else if (Qone == '2' && Qtwo == '2' && Qthree != '4' && Qfour != '3') {
    output.innerHTML = '2/4 (50%)';
    output.style.backgroundColor = 'red';
  } else if (Qone == '2' && Qtwo != '2' && Qthree != '4' && Qfour != '3') {
    output.innerHTML = '1/4 (25%)';
    output.style.backgroundColor = 'red';
  } else if (Qone != '2' && Qtwo == '2' && Qthree != '4' && Qfour != '3') {
    output.innerHTML = '1/4 (25%)';
    output.style.backgroundColor = 'red';
  } else if (Qone != '2' && Qtwo != '2' && Qthree == '4' && Qfour != '3') {
    output.innerHTML = '1/4 (25%)';
    output.style.backgroundColor = 'red';
  } else if (Qone != '2' && Qtwo != '2' && Qthree != '4' && Qfour == '3') {
    output.innerHTML = '1/4 (25%)';
    output.style.backgroundColor = 'red';
  } else if (Qone != '2' && Qtwo != '2' && Qthree != '4' && Qfour != '3') {
    output.innerHTML = '0/4 (0%)';
    output.style.backgroundColor = 'red';
  } else {
    output.innerHTML = '4/4 (100%)';
    output.style.backgroundColor = 'green';
  }
}