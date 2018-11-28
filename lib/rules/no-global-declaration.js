const objectInWindow = ["alert","applicationCache","atob","blur","btoa","cancelAnimationFrame","cancelIdleCallback","captureEvents","chrome","clearInterval","clearTimeout","clientInformation","close","closed","confirm","createImageBitmap","crypto","customElements","defaultStatus","defaultstatus","devicePixelRatio","document","external","fetch","find","focus","frameElement","frames","getComputedStyle","getSelection","history","indexedDB","innerHeight","innerWidth","isSecureContext","length","localStorage","location","locationbar","matchMedia","menubar","moveBy","moveTo","name","navigator","onabort","onafterprint","onanimationend","onanimationiteration","onanimationstart","onappinstalled","onauxclick","onbeforeinstallprompt","onbeforeprint","onbeforeunload","onblur","oncancel","oncanplay","oncanplaythrough","onchange","onclick","onclose","oncontextmenu","oncuechange","ondblclick","ondevicemotion","ondeviceorientation","ondeviceorientationabsolute","ondrag","ondragend","ondragenter","ondragleave","ondragover","ondragstart","ondrop","ondurationchange","onemptied","onended","onerror","onfocus","ongotpointercapture","onhashchange","oninput","oninvalid","onkeydown","onkeypress","onkeyup","onlanguagechange","onload","onloadeddata","onloadedmetadata","onloadstart","onlostpointercapture","onmessage","onmessageerror","onmousedown","onmouseenter","onmouseleave","onmousemove","onmouseout","onmouseover","onmouseup","onmousewheel","onoffline","ononline","onpagehide","onpageshow","onpause","onplay","onplaying","onpointercancel","onpointerdown","onpointerenter","onpointerleave","onpointermove","onpointerout","onpointerover","onpointerup","onpopstate","onprogress","onratechange","onrejectionhandled","onreset","onresize","onscroll","onsearch","onseeked","onseeking","onselect","onstalled","onstorage","onsubmit","onsuspend","ontimeupdate","ontoggle","ontransitionend","onunhandledrejection","onunload","onvolumechange","onwaiting","onwebkitanimationend","onwebkitanimationiteration","onwebkitanimationstart","onwebkittransitionend","onwheel","open","openDatabase","opener","origin","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","performance","personalbar","postMessage","print","prompt","releaseEvents","requestAnimationFrame","requestIdleCallback","resizeBy","resizeTo","screen","screenLeft","screenTop","screenX","screenY","scroll","scrollBy","scrollTo","scrollX","scrollY","scrollbars","self","sessionStorage","setInterval","setTimeout","speechSynthesis","status","statusbar","stop","styleMedia","toolbar","top","visualViewport","webkitCancelAnimationFrame","webkitRequestAnimationFrame","webkitRequestFileSystem","webkitResolveLocalFileSystemURL","webkitStorageInfo","window"]
objectInWindow.push('SERVICEID')
module.exports = function(context) {
  return {
    AssignmentExpression(node) {
     if(node.operator==='=' && node.left.object && node.left.object.name==='window' && node.left.property){
        if(node.left.property.name && !objectInWindow.includes(node.left.property.name)){
          context.report(node, '本项目配置为不允许添加全局变量/方法');
        }
        if(node.left.property.value && !objectInWindow.includes(node.left.property.value)){
          context.report(node, '本项目配置为不允许添加全局变量/方法');
        }
      }
    },
    VariableDeclarator(node){
      if(node.init && node.init.name==='window'){
          context.report(node, '本项目配置为不允许添加全局变量/方法，不允许将变量指向window');
      }
    }
  };
};
