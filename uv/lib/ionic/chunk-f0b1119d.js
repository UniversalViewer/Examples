const a=a=>t(a),e=(e,t)=>a(e).includes(t),t=a=>{a.Ionic=a.Ionic||{};let e=a.Ionic.platforms;return null==e&&(e=a.Ionic.platforms=i(a)).forEach(e=>a.document.documentElement.classList.add(`plt-${e}`)),e},i=a=>Object.keys(h).filter(e=>h[e](a)),n=a=>s(a,"(any-pointer:coarse)"),o=a=>r(a)||c(a),r=a=>!!(a.cordova||a.phonegap||a.PhoneGap),c=a=>{const e=a.Capacitor;return!(!e||!e.isNative)},d=(a,e)=>!(!a.navigator||!a.navigator.userAgent)&&e.test(a.navigator.userAgent),s=(a,e)=>!!a.matchMedia&&a.matchMedia(e).matches,h={ipad:a=>d(a,/iPad/i),iphone:a=>d(a,/iPhone/i),ios:a=>d(a,/iPad|iPhone|iPod/i),android:a=>d(a,/android|sink/i),phablet:a=>{const e=a.innerWidth,t=a.innerHeight,i=Math.min(e,t),n=Math.max(e,t);return i>390&&i<520&&n>620&&n<800},tablet:a=>{const e=a.innerWidth,t=a.innerHeight,i=Math.min(e,t),n=Math.max(e,t);return i>460&&i<820&&n>780&&n<1400},cordova:r,capacitor:c,electron:a=>d(a,/electron/),pwa:a=>!!a.matchMedia&&(a.matchMedia("(display-mode: standalone)").matches||a.navigator.standalone),mobile:n,mobileweb:a=>n(a)&&!o(a),desktop:a=>!n(a),hybrid:o};export{e as a,a as b,t as c,d,h as e};