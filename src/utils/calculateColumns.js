const calculateColumns = () => {
    const screenWitdh = window.innerWidth
    const viewValues = {
        "device" : null,
        "minus": 0,
        "plus": 0,
    }

    if(screenWitdh >= 600){
        viewValues.device = 'Escritorio'
        viewValues.minus = 3
        viewValues.plus = 4
    } else {
        viewValues.device = 'Movíl'
        viewValues.minus = 2
        viewValues.plus = 3
    }
    
    return viewValues
}

export default calculateColumns