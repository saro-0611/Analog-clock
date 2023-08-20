setInterval(()=>{
    d = new Date();
    hr_time = d.getHours();
    min_time = d.getMinutes();
    sec_time = d.getSeconds();
    hr_rotate = 30*hr_time + min_time/2;
    min_rotate = 6*min_time;
    sec_rotate = 6*sec_time;

    hour.style.transform = `rotate(${hr_rotate}deg)`;
    minute.style.transform = `rotate(${min_rotate}deg)`;
    second.style.transform = `rotate(${sec_rotate}deg)`;
},1000);