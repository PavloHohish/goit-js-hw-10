import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";let o;const s=document.getElementById("start-button"),c=document.getElementById("datetime-picker"),y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){o=t[0];const e=new Date;if(s.disabled=!(o>e),o<=e){h.error({title:"Error",message:"Please choose a future date.",position:"topRight"});return}}};f(c,y);function p(t){const r=Math.floor(t/864e5),a=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:a,minutes:l,seconds:m}}function n(t){return String(t).padStart(2,"0")}s.addEventListener("click",()=>{let e=o-new Date;s.disabled=!0,c.disabled=!0;const d=setInterval(()=>{const{days:u,hours:i,minutes:r,seconds:a}=p(e);document.querySelector("[data-days]").textContent=n(u),document.querySelector("[data-hours]").textContent=n(i),document.querySelector("[data-minutes]").textContent=n(r),document.querySelector("[data-seconds]").textContent=n(a),e-=1e3,e<0&&(clearInterval(d),c.disabled=!1)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
