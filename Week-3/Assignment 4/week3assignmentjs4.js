
function createStack(){
    let items = [];
    var top = 0;
    return {
        push : function(item){
                items.push(item);
                console.log(items)
        },
        pop : function(){
            if( items.length == 0 )
                return "stack is empty";
            
            return items.pop();
        }
    };
}

const stack = createStack();
stack.push( 6 );
stack.push( 7 );
stack.push( 8 );

const stack2 = createStack();
stack2.push(10);
stack2.push(11);
stack2.push(12);












