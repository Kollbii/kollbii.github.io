document.getElementById('flexSwitchCheck').onchange = function () {
    let shell = document.getElementById('flexSwitchCheck').checked;
    console.log(shell)
    if (shell){
        console.log('Show shell')
        document.querySelector('.shell').style.display='block';
    } else {
        console.log('Hide shell')
        document.querySelector('.shell').style.display='none';
    }
}

function responseShell(){
    let cmd = document.getElementById('cmd').value; console.log(cmd);

    if (cmd == 'clear'){
        while (document.querySelector('.content').firstChild){
            document.querySelector('.content').firstChild.remove();
        }
        document.getElementById('cmd').value = "";
        return true;
    }

    // RAW CHECK FOR NOW
    if (cmd == '--help'){
        let res = document.createElement('div');
        res.innerText= "--help............. Display this message\n--education.. Display info about my education";
        document.querySelector('.content').appendChild(res);
        
        document.getElementById('cmd').value = "";
        return true;
    }

    let res = document.createElement('div');
    res.innerText=cmd;
    document.querySelector('.content').appendChild(res);

    document.getElementById('cmd').value = "";

}

