    // function commonDivStyle(a,b,c,d,e) {
    //   let CD = this;
    //   CD.style.width = a;
    //   CD.style.height = b;
    //   CD.style.borderRadius = c;
    //   CD.style.opacity = d;
    //   CD.style.position = e;
    //   console.log(this);
    // }
    
    
    function childrenStyle(a,b,c,d,e,i) { //곽윤호
      let child = document.getElementById(i).children[a]
      // let div_child = document.getElementById('root').children[a]
      child.style.marginTop = b;
      child.style.marginLeft = c;
      child.style.backgroundColor = d;
      child.style.filter = e;
      // div_child.style.width = b;
      // div_child.style.height = c;
      // div_child.style.backgroundColor = d;
      // div_child.style.opacity = e;
    }

    // let root = document.getElementById("root");
    // childrenStyle(0, "500px", "500px", "black", "0.8", "root");
    // childrenStyle(1, "500px", "500px", "black", "0.8", "root");
    // childrenStyle(2, "500px", "500px", "black", "0.8", "root");
