const img = document.querySelector("#p1-video");
const txt = document.querySelector('#p1-text h1');
const size = document.querySelector('#p1-size')


function getFileExtensionFromURL(url) {
    // Extract pathname from the URL
    const pathname = new URL(url).pathname;
  
    // Get the filename from the pathname
    const filename = pathname.split('/').pop();
  
    // Get the file extension from the filename
    const parts = filename.split('.');
    if (parts.length > 1) {
      return parts.pop(); // Extracts the last element (file extension)
    } else {
      return ''; // If there's no extension
    }
  }

const doggy = async () => {
    const raw = await fetch(`https://random.dog/woof.json`)
    const fresh = await raw.json();
    console.log(fresh);
    const ext = getFileExtensionFromURL(fresh.url);

    if(ext === "mp4" || ext === "MP4"){
        img.innerHTML=`<video src="${fresh.url}" autoplay muted></video>`;
    }

    else{
        img.innerHTML=`<img src="${fresh.url}" alt="">`
    }

    const mb = fresh.fileSizeBytes/1000000;

    size.innerHTML = `<h3>Size : ${mb}MB</h3>`
}

doggy();