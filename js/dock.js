  let divTyping = document.getElementById('binft')
  let i = 0,
  timer = 0,
  str = 'Record my every harvest'
  
  function typing () {
  if (i <= str.length) {
    divTyping.innerHTML = str.slice(0, i++) + '_'
    timer = setTimeout(typing, 200)
  }
  else {
    divTyping.innerHTML = str//结束打字,移除 _ 光标
    clearTimeout(timer)
  }
  }
  typing()