document.querySelectorAll('._wrapper').forEach((btn) =>
  btn.querySelector('._m-click').addEventListener('click', () => {
    let pagePosition = window.scrollY;
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    document.body.classList.add('body__fixed');
    document.body.style.paddingRight = paddingOffset;
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
    btn.querySelector('._m-wrapper').style.top = pagePosition + 'px';
    btn.querySelector('._m-inner').style.display = 'block';
    btn.querySelector('._m-wrapper').style.height = '100vh';
    btn.querySelector('._m-wrapper').classList.toggle('_m-wrapper-on');
  } )
);

document.querySelectorAll('._wrapper').forEach((btn) =>
  btn.querySelector('._m-click-3').addEventListener('click', () => {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.toggle('body__fixed');
    document.body.style.paddingRight = '0';
    window.scroll({top: pagePosition, left: 0});
    btn.querySelector('._m-inner').style.display = 'none';
    btn.querySelector('._m-wrapper').style.height = '10px';
    btn.querySelector('._m-wrapper').classList.toggle('_m-wrapper-on');
    btn.querySelector('._m-wrapper').style.top = 'auto';
  } )
);
document.querySelectorAll('._wrapper').forEach((btn) =>
  btn.querySelector('._m-click-4').addEventListener('click', () => {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.toggle('body__fixed');
    document.body.style.paddingRight = '0';
    window.scroll({top: pagePosition, left: 0});
    btn.querySelector('._m-inner').style.display = 'none';
    btn.querySelector('._m-wrapper').style.height = '10px';
    btn.querySelector('._m-wrapper').classList.toggle('_m-wrapper-on');
    btn.querySelector('._m-wrapper').style.top = 'auto';
  } )
);