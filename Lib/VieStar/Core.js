"use strict";

export const newElement = ([first, ...res], ...val) => {
    return val.reduce((acc, current) => {
        return acc.concat(current, res.shift());
    }, [first]).filter((fill) => {
        return fill !== true && fill !== false && fill !== 0;
    }).join('');
};

export const Render = (PathTeamplate, Sub) =>  {
    let newPath = `View\\${PathTeamplate}\\${Sub}` + '.html';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }    
    };
    xhr.open("GET", newPath, true);
    xhr.send();
};





