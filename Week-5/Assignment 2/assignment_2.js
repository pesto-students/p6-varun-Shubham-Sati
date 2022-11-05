// Counting the vowel in the string and storing in map.

function vowelCount( str ){
    const mapping = new Map();
    for( const char of str ){
        switch(char){
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            case 'A':
            case 'E':
            case 'I':
            case 'O':
            case 'U':   
                        if( mapping.has(char) ){
                            mapping.set(char , mapping.get(char) + 1 );
                        }else{
                            mapping.set(char , 1);
                        }

                        break;
            default :
                        break;
        }
    }

    return mapping;
}


console.log(vowelCount("aaayyyuooui"));


















