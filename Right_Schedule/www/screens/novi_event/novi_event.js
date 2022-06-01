
class NoviEventScreen extends Screen {
    static Name = 'NoviEvent Screen'
    static Id = 'novi-event-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        let backBTN = document.querySelector('#back');
        backBTN.addEventListener('click', ()=>{
            Navigator.navigate('home');
        });
    }
}

app.screens['novi_event'] = NoviEventScreen;

