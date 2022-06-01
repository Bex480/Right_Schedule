
class Sign_upScreen extends Screen {
    static Name = 'Sign_up screen'
    static Id = 'sign_up-screen';
    static Template = '';

    constructor(){

        super();
    }

    SwitchTo(){
        let myElem = document.querySelector('#SwitchToLogIn');
        console.log(myElem);
        myElem.addEventListener('click', ()=>{
            Navigator.navigate("log_in");
        });

        let btn = document.querySelector('#btn');
        btn.addEventListener('click', ()=>{

            let niz = document.querySelectorAll('.inputSignUp');
            let counter = 0;
            for(let i=0;i<niz.length;i++){

                if(niz[i].value == '' || niz[i].value == null){
                    document.getElementById(`${niz[i].id}Label`).innerHTML = 'Ovo polje je obavezno';
                    counter++;
                }
                else{
                    document.getElementById(`${niz[i].id}Label`).innerHTML = '';
                }
            }

            if(niz[3].value != niz[4].value){
                document.getElementById(`${niz[4].id}Label`).innerHTML = 'Sifra mora biti ista';
                counter++;
            }
            else{
                document.getElementById(`${niz[4].id}Label`).innerHTML = '';
            }


            if(counter == 0){

                userinfo.name = `${niz[0].value}`;
                userinfo.username = `${niz[1].value}`;
                userinfo.email = `${niz[2].value}`;
                userinfo.password = `${niz[3].value}`;
                console.log(userinfo);

                Navigator.navigate('log_in');
            }
        });
    }
}

app.screens['sign_up'] = Sign_upScreen;
