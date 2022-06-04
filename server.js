const express = require('express')
const app = express()
const PORT = 8000

const rappers ={
    'j cole':{
        'age': 37,
        'birthName': 'Jermaine Lamarr Cole',
        'birthLocation': 'Frankfurt Germany'
    },
    'kendrick lamar':{
        'age': 34,
        'birthName': 'Kendrick Lamar Duckworth',
        'birthLocation': 'Compton, Califonia. USA'
    },
    'dylan':{
            'age': 34,
            'birthName': 'Dylan',
            'birthLocation': 'Dylan'
    },


} 

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')

})
app.get('/api/:rapperName', (req,res)=>{
    const rappersName = req.params.rapperName
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['dylan'])
    }

})

app.listen(PORT, ()=>{
    console.log('Server is listening')
})