//Harga default setiap sayur
const harga = {
  wortel : 10000,
  kol : 8000,
  kentang : 12000,
  seledri : 5000,
  penambah : 0,
  simpan : 0
};

//jumlahh temporary sayur yang di tambah
const jumlah = {
  jumWortel : 0,
  jumKol : 0,
  jumKentang : 0,
  jumSeledri : 0
}

//function untuk tobol tambah
function updateWortel()
{
  harga.simpan = parseInt(document.getElementById('subtotal').innerText) + parseInt(harga.wortel);
  jumlah.jumWortel++;
}

function updateKol()
{
  harga.simpan = parseInt(document.getElementById('subtotal').innerText) + parseInt(harga.kol);
  jumlah.jumKol++;
}

function updateKentang()
{
  harga.simpan = parseInt(document.getElementById('subtotal').innerText) + parseInt(harga.kentang);
  jumlah.jumKentang++;
}

function updateSeledri()
{
  harga.simpan = parseInt(document.getElementById('subtotal').innerText) + parseInt(harga.seledri);
  jumlah.jumSeledri++;
}

//function untuk tombol kurang
function minusWortel()
{
  if(harga.simpan!=0 && jumlah.jumWortel!=0){
    harga.simpan = parseInt(document.getElementById('subtotal').innerText) - parseInt(harga.wortel);
    jumlah.jumWortel--;
  }
}

function minusKol()
{
  if(harga.simpan!=0 && jumlah.jumKol!=0){
    harga.simpan = parseInt(document.getElementById('subtotal').innerText) - parseInt(harga.kol);
    jumlah.jumKol--;
  }
}

function minusKentang()
{
  if(harga.simpan!=0 && jumlah.jumKentang!=0){
    harga.simpan = parseInt(document.getElementById('subtotal').innerText) - parseInt(harga.kentang);
    jumlah.jumKentang--;
  }
}

function minusSeledri()
{
  if(harga.simpan!=0 && jumlah.jumSeledri!=0){
    harga.simpan = parseInt(document.getElementById('subtotal').innerText) - parseInt(harga.seledri);
    jumlah.jumSeledri--;
  }
}

//function unutk update jumlah yang akan ditampilkan di layar
function updateHtml()
{
  document.getElementById('subtotal').innerText = harga.simpan;
  document.querySelector('.jumWortel').innerText = jumlah.jumWortel;
  document.querySelector('.jumKol').innerText = jumlah.jumKol;
  document.querySelector('.jumKentang').innerText = jumlah.jumKentang;
  document.querySelector('.jumSeledri').innerText = jumlah.jumSeledri;
}

//menambahkan event listener pada button + beserta kondisi
const buttplus = document.getElementsByClassName('buttplus');
for(const plus of buttplus){
  plus.addEventListener('mouseenter', function()
  {
    plus.style.color = '#55D743';
    plus.style.textShadow = '1px 1px 10px #55D743';
  });
  plus.addEventListener('mouseleave', function()
  {
    plus.style.color = '#4d4d4E';
    plus.style.textShadow = '1px 1px 10px #4d4d4E';
  });

  plus.addEventListener('click', function(event){
    const target = event.target;
    if (target.classList.contains('wortel')) {
      updateWortel();
      updateHtml();
      return;
    }
    if (target.classList.contains('kentang')) {
      updateKentang();
      updateHtml();
      return;
    }
    if (target.classList.contains('kol')) {
      updateKol();
      updateHtml();
      return;
    }
    if (target.classList.contains('seledri')) {
      updateSeledri();
      updateHtml();
      return;
    }
  });
}


//menambahkan event listener pada button - beserta kondisi
const buttmin = document.getElementsByClassName('buttmin');
for(const minus of buttmin){
  minus.addEventListener('mouseenter', function()
  {
    minus.style.color = 'red';
    minus.style.textShadow = '1px 1px 10px red';
  });
  minus.addEventListener('mouseleave', function()
  {
    minus.style.color = '#4d4d4E';
    minus.style.textShadow = '1px 1px 10px #4d4d4E';
  });

  minus.addEventListener('click', function(event){
    const target = event.target;
    if (target.classList.contains('wortel')) {
      minusWortel();
      updateHtml();
      return;
    }
    if (target.classList.contains('kentang')) {
      minusKentang();
      updateHtml();
      return;
    }
    if (target.classList.contains('kol')) {
      minusKol();
      updateHtml();
      return;
    }
    if (target.classList.contains('seledri')) {
      minusSeledri();
      updateHtml();
      return;
    }
  });
}

const buyNow = document.getElementsByClassName('buyNow')[0];
buyNow.addEventListener('click', function(){
  if(harga.simpan!=0){
    alert('Silahkan lanjut ke aplikasi untuk membayar total belanjaan' + ' ' + harga.simpan)
  }
  else{
    alert('Item belanjaan masih Kosong')
  }
});


const submit = document.getElementById('submit');
submit.addEventListener('click', function(){
  alert('Will be submitted')
});
