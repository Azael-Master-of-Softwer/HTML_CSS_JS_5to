function mostraralerta() {
            alert('HIZO CLIIIICK!!.');
        }
        function hacerclick() {
            document.getElementsByTagName('p')[0].onclick=mostraralerta;
        }
        window.onload = hacerclick;