      let num = document.getElementById("num");
      function rev() {
        let rev = 0;
        let n = num.value;
        while (n > 0) {
          rev = rev * 10 + (n % 10);
          n = Math.floor(n / 10);
        }
        document.getElementById("ans").innerHTML =
          "The reverse of " + num.value + " is " + rev;
      }
