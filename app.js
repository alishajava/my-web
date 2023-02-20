const { createApp } = Vue

createApp({        
    data() {
        return {
        message: 'Hello Vue!',
        firstName : 'John',
        lastName : 'Doe',
        email : "john@gmail.com",
        gender : 'male',
        picture : "https://randomuser.me/api/portraits/men/10.jpg"
        }
    }
}).mount('#app')
