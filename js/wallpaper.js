
 
 

//------------Wallpapers--------------------


let wallpapers = document.querySelectorAll('.wallpaper');

wallpapers.forEach(wallpaper => {
  let downloadButton = document.createElement('a');
  downloadButton.innerText = 'Download';
  downloadButton.classList.add('download-button');
  downloadButton.href = wallpaper.dataset.downloadUrl;
  downloadButton.download = true;

  wallpaper.insertAdjacentElement('afterend', downloadButton);


});

