let inp_A1 = document.getElementById("inp_A1");
let inp_D1 = document.getElementById("inp_D1");
let inp_D2 = document.getElementById("inp_D2");
let inp_D3 = document.getElementById("inp_D3");
let inp_C4 = document.getElementById("inp_C4");
let inp_B4 = document.getElementById("inp_B4");

let opl_B2 = document.getElementById("opl_B2");
let opl_C2 = document.getElementById("opl_C2");
let opl_B3 = document.getElementById("opl_B3");
let opl_C3 = document.getElementById("opl_C3");

function solveProblem()
{
    opl_B2.value = 1;
    opl_C2.value = inp_D2.value - opl_B2.value;
    opl_B3.value = inp_B4.value - opl_B2.value;
    opl_C3.value = inp_C4.value - opl_C2.value;
    if(opl_B2.value + opl_C3.value == inp_A1.value &&
        opl_B3.value + opl_C2.value == inp_D1.value && 
        opl_B3.value + opl_C3.value == inp_D3.value )
        {
            alert("BINGO");
        }
        else
        {
            alert("KAK");
        }
    //alert("Hallo vrienden van BSD-O-AUG23A");
}