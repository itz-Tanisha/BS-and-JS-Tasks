      let str = document.getElementById("str");
      function rev() {
        let rev = "";
        let n = str.value;
        for (let i = n.length - 1; i >= 0; i--) {
          rev += n[i];
        }
        document.getElementById("ans").innerHTML =
          "The reverse of " + str.value + " is " + rev;
      }
