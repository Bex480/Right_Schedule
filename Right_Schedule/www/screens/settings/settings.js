
class SettingsScreen extends Screen {
    static Name = 'Settings Screen'
    static Id = 'settings-screen';
    static Template = '';

    constructor(){    
        super();
    }

    SwitchTo(){
        let backBTN = document.querySelector('#back');
        backBTN.addEventListener('click', ()=>{
            Navigator.navigate('home');
        });

        let accountInfo = document.querySelector('#account_info');
        accountInfo.addEventListener('click', ()=>{
            
        });
        let changeTimeZone = document.querySelector('#change_time_zone');
        changeTimeZone.addEventListener('click', ()=>{
            
        });
        let alertSettings = document.querySelector('#alert_settings');
        alertSettings.addEventListener('click', ()=>{
            
        });
        let logOut = document.querySelector('#log_out');
        logOut.addEventListener('click', ()=>{
            Navigator.navigate('log_in');
        });
        let notifications = document.querySelector('#notifications');
        notifications.addEventListener('click', ()=>{
            
        });
        
    }
}

app.screens['settings'] = SettingsScreen;

