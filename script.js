/* 'use strict';

const row = document.querySelector('#row'),
  column = document.querySelector('#column'),
  color = document.querySelector('#color-value'),
  PixelGrid = document.querySelector('.pixelGrid');

function getValue(e) {
  e.nextElementSibling.innerText = e.value;
}

window.addEventListener('load', () => {
  row.value = 1;
  column.value = 1;
  color.value = '';

});

const createGridPixel = () => {
  for (let i = 0; i < row.value; i++) {

    var rowF = document.createElement('tr');

    PixelGrid.append(rowF);

    for (let i = 0; i < column.value; i++) {
      const td = document.createElement('td');

      td.classList.add('pixel');

      rowF.append(td);
    }
  }

};

 */

'use strict';

const row = document.querySelector('#row'),
  column = document.querySelector('#column'),
  color = document.querySelector('#color-value'),
  PixelGrid = document.querySelector('.pixelGrid');

function getValue(e) {
  e.nextElementSibling.innerText = e.value;
}

window.addEventListener('load', () => {
  row.value = 1;
  column.value = 1;
  color.value = '';
});

const createGridPixel = () => {
  PixelGrid.innerHTML = '';
  const pixelSize = 20;
  const gridWidth = parseInt(row.value) * pixelSize;
  const gridHeight = parseInt(column.value) * pixelSize;

  PixelGrid.style.width = gridWidth + 'px';
  PixelGrid.style.height = gridHeight + 'px';

  for (let i = 0; i < row.value; i++) {
    var rowF = document.createElement('tr');
    PixelGrid.append(rowF);

    for (let j = 0; j < column.value; j++) {
      const td = document.createElement('td');
      td.classList.add('pixel');
      td.style.width = pixelSize + 'px';
      td.style.height = pixelSize + 'px';
      rowF.append(td);
    }
  }
};

const Paint = () => {};
