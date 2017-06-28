case-fixer
----------

App to fix JSON documents (i.e javascript objects) that do not apply any form of naming convention (e.g camelCase and snake_case).


### How it works
case-fixer tries to find words in the group of words it has been given by making use of a dictionary. 
It requires the user to set the smallest length a word can be given. This should be configured based on 
your expectations. 



### Using case-fixer

* Include the package in your project. (This could be by adding an entry in your package.json file)

* Pass paramters to case-fixer as shown below
```$xslt
    ...
    var caseFixer =  require('case-fixer'); 
    
    ...
    caseFixer([myObject], [convention], [smallestWordSize], [callback]); 
    
    
```

> myObject
>
>Type: Object
>
>Desc: JSON docuemnt to correct


>convention
>
>Type: String
>
>Desc: naming convention to use. Currently supported cases are ```'snake'``` and ```'camel'``` 
for snake case and camel case respectively

>smallestWordSize
>
>Type: integer
>
>Desc: The length of a smallest word to consider. For accuracy, avoid using 1

>callback
>
>Type: function
>
>Desc: callback function where results or error would be sent to


```$xslt
    Example:
    --------
    
    
    ...
    var caseFixer =  require('case-fixer'); 
    
    ...
    caseFixer({'helloworld' : 1}, 'camel', 2, function (err, newDocument){
        
        // do something with the new object here....
        // newDocuemnt should be: {'helloWorld' : 1 } 
        // provided no error was raised
    
    });
        
    
```


### supporting acronyms and additional words

To support acronyms or additional words not found in the attached dictionary, kindly append these words to the end of the ```en.csv```
file located in  the folder ```./dictionary```.





### License of attached dictionary

The basic dictionary included in this project (@see: ./dictionary/en.csv) contains a list of English words published on the repository: https://github.com/dwyl/english-words This content retains its original license and still belongs to its original owners as stated in the reposiory above.