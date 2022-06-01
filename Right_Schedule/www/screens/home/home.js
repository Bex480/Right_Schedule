
class HomeScreen extends Screen {
    static Name = 'Home screen'
    static Id = 'home-screen';
    static Template = '';

    constructor(){ 
        super();
    }

    SwitchTo(){
        let navbarBTN = document.querySelector('#navbarBTN');
        navbarBTN.addEventListener('click', ()=>{
            Navigator.navigate('settings');
        });

        let addBTN = document.querySelector('#add');
        addBTN.addEventListener('click', ()=>{
            Navigator.navigate('novi_event');
        });    
    }

    loader(){
        for(let i=1;i<32;i++){
        let container = document.querySelector('#days');
        let item = document.createElement('img');
        item.classList.add('dayIcon');
        item.src = `/www/assets/images/days/calendar-icon-${i}.svg`;
        item.id = i;
            if(i==20){item.classList.add('selected')}
        item.addEventListener('click', ()=>{
            document.querySelector('.selected').classList.remove('selected');
            item.classList.add('selected');
        });
        container.append(item);
        }
    }
}

app.screens['home'] = HomeScreen;

