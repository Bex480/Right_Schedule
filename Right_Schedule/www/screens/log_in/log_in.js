// const SwitchToSignUp = document.querySelector('#SwitchToSignUp');

var config = null;

class Log_inScreen extends Screen {
    static Name = 'Log_in screen'
    static Id = 'log_in-screen';
    static Template = '';

    constructor(){  

        console.log(userinfo.name);

        super();
    }

    SwitchTo(){
        
        let linker = document.querySelector('#SwitchToSignUp');
        linker.addEventListener('click', ()=>{
            Navigator.navigate("sign_up");
        });

        let btn = document.querySelector('#btn');
        btn.addEventListener('click', ()=>{

            let niz = document.querySelectorAll('.inputLogIn');
            let counter = 0;
            for(let i=0;i<niz.length;i++){
                console.log(niz[0].value);
                console.log(niz[1].value);

                if(niz[0].value != userinfo.username || niz[1].value != userinfo.password){
                    document.getElementById(`Label`).innerHTML = 'Pogresno korisnicko ime ili sifra!';
                    counter++;
                }
                else{
                    document.getElementById(`Label`).innerHTML = '';
                }
            }

            if(counter == 0){
                console.log(userinfo);

                Navigator.navigate('home');
            }

        });
    }
}

app.screens['log_in'] = Log_inScreen;

