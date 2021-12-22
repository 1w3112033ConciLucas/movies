function sortAZ(array){
    var az = array.sort((ant, sig)=>{
        if(ant.title > sig.title) return 1
        else if(ant.title < sig.title) return -1
        return 0
    })
    return az
}
function sortZA(array){
    var za = array.sort((ant, sig)=>{
        if(ant.title > sig.title) return -1
        else if(ant.title < sig.title) return 1
        return 0
    })
    return za
}
function sortRating(array){
    var rtg = array.sort((ant, sig)=>{
        if(ant.vote_average > sig.vote_average) return -1
        else if(ant.vote_average < sig.vote_average) return 1
        return 0
    })
    return rtg
}

function sortEmpty(array){
    return array;
}


export const moviesBy = (array, metodo)=>{
    if(metodo=== "name_asc") return sortAZ(array);
    else if(metodo=== "name_desc") return sortZA(array);
    else if(metodo=== "rating") return sortRating(array);
    else if(metodo=== " ") return sortEmpty(array);
}