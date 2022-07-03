const calculateColumns = () => {
    const isMobile = (/iphone|ipod|android|ie|blackberry|fennec/).test
    (navigator.userAgent.toLowerCase());
    const screenWitdh = window.innerWidth
    const viewValues = {
        "device" : null,
        "minus": 0,
        "plus": 0,
    }

    if(isMobile){
        viewValues.device = 'Movíl'
        viewValues.minus = 2
        viewValues.plus = 3
    } else {
        viewValues.device = 'Escritorio'
        viewValues.minus = 3
        viewValues.plus = 4
    }
    
    return viewValues
}

export default calculateColumns