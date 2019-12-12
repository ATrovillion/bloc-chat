import React from 'react';

const Firebase = () => (
    <section>
        var config = {
            apiKey: "AIzaSyDIAxD7B0TpsiTGxmWjyzrx_OotCDZtSTA",
            authDomain: "bloc-react-chat.firebaseapp.com",
            databaseURL: "https://bloc-react-chat.firebaseio.com",
            projectId: "bloc-react-chat",
            storageBucket: "bloc-react-chat.appspot.com",
            messagingSenderId: "1005103712063"
    };
    </section>
)

  firebase.initializeApp(config);

export default Firebase;