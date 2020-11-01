function f1() {
    var str = document.getElementById('text').value;
    var str1 = document.getElementById('text1').value;
    if (str1 == str) {
        alert('matched')
    } else {
        alert('ot matched')
    }
}

function f2() {
    var rd1 = document.getElementById('rd1')
    var rd2 = document.getElementById('rd2')
    if (rd1.checked == true) {
        var str = document.getElementById('text');
        str.value = 'helloo'
    } else if (rd2.checked == true) {
        alert(rd2.value)
    }
}

function f3() {
    var select = document.getElementById('selectbox')
    alert(select.options[select.selectedIndex].value)
}

function f4() {
    var para = document.getElementsByTagName('p');
    para[1].style.fontSize = "xx-large";
    para[0].style.color = 'red'
}

function f5() {
    var img = document.getElementsByTagName('img')
    img[0].src = 'https://picsum.photos/id/1/200/300'
}

function f6() {
    var img = document.getElementsByTagName('img')
    img[0].src = 'https://picsum.photos/id/1/200/300'
}

function f7() {
    var name = document.getElementById('2')
    if (name.value.trim() == '') {
        name.style.border = 'solid 10px red'
        console.log('ddd')
    } else {
        name.style.border = ''
    }
}

function f10() {
    $('#h0 ').fadeToggle(2000);
    //alert(document.getElementById('h0'))
}