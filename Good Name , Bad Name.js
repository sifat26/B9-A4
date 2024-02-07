function checkName(name) {
    if(typeof name !== 'string')
    {
        return "invalid";
    }
    else{
        let name2 = name.toLowerCase();
        let l=name2.length;
        if(name2[l-1]==='a'||name2[l-1]==='y'|| name2[l-1]==='i' ||name2[l-1]==='e'|| name2[l-1]==='o'||name2[l-1]==='u'||name2[l-1]==='w'){
            return "Good Name";
        }
        else{
            return "Bad Name";
        }
    }

    
    }
    console.log(checkName(['Rashed']));