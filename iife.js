// () using this as the function wrapper which helps in making a module inside a file

(function(message){
    const superHero = 'Batman'
    console.log(message ,superHero);
})('Hey ,') ;// this () is used for invoking a function immidiately

(function(message){
    const superHero = 'Superman'
    console.log(message ,superHero);
})('Hello ,');