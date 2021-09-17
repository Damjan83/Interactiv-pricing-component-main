document.querySelector("#pageviews__m span").innerText = '100K';
document.querySelector("#pageviews__d span").innerText = '100K';
document.querySelector("#price_m span").innerText = '$16.00';
document.querySelector("#price_d span").innerText = '$16.00';

document.querySelector("input[type='range']").addEventListener("input", (event) => {
    if (document.querySelector("input[type=checkbox]").checked === true)
    {
        document.querySelector("#pageviews__m span").innerText = `${event.target.value}K`;
        document.querySelector("#pageviews__d span").innerText = `${event.target.value}K`;
        document.querySelector("#price_m span").innerText = `$${(price(event.target.value)*0.25).toFixed(2)}`;
        document.querySelector("#price_d span").innerText = `$${(price(event.target.value)*0.25).toFixed(2)}`;      
    }
    else
    {
        document.querySelector("#pageviews__m span").innerText = `${event.target.value}K`;
        document.querySelector("#pageviews__d span").innerText = `${event.target.value}K`;
        document.querySelector("#price_m span").innerText = `$${price(event.target.value).toFixed(2)}`;
        document.querySelector("#price_d span").innerText = `$${price(event.target.value).toFixed(2)}`;
    }
});

document.querySelector("input[type=checkbox]").addEventListener("click", (event) => {
    if (document.querySelector("input[type=checkbox]").checked === true)
    {
        document.querySelector("#pageviews__m span").innerText = `${document.querySelector("input[type='range']").value}K`;
        document.querySelector("#pageviews__d span").innerText = `${document.querySelector("input[type='range']").value}K`;
        document.querySelector("#price_m span").innerText = `$${(price(document.querySelector("input[type='range']").value)*0.25).toFixed(2)}`;
        document.querySelector("#price_d span").innerText = `$${(price(document.querySelector("input[type='range']").value)*0.25).toFixed(2)}`;   
    }
    else
    {
        document.querySelector("#pageviews__m span").innerText = `${document.querySelector("input[type='range']").value}K`;
        document.querySelector("#pageviews__d span").innerText = `${document.querySelector("input[type='range']").value}K`;
        document.querySelector("#price_m span").innerText = `$${price(document.querySelector("input[type='range']").value).toFixed(2)}`;
        document.querySelector("#price_d span").innerText = `$${price(document.querySelector("input[type='range']").value).toFixed(2)}`;
    }  
});

function price(views) {
    return (16*views)/100;
}

 // Slider fill color
const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%`
}

range.oninput = (e) =>
  updateSlider(e.target.value)

updateSlider(50) // Init value