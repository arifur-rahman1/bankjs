document.getElementById('withdrawBtn').addEventListener('click',function(){
    const withdrawAmount=document.getElementById('withdrawAmount');
    const withdrawAmountValue=withdrawAmount.value;
    const withdrawAmountNum=parseFloat(withdrawAmountValue);
    const setWithdraw=document.getElementById('setWithdraw');
    const setWithdrawNum=parseFloat(setWithdraw.innerText);
    const totalWithdraw= withdrawAmountNum +setWithdrawNum;
    setWithdraw.innerText=totalWithdraw;

    const balanceTotal=document.getElementById('balanceTotal');
    const balanceTotalNum=parseFloat(balanceTotal.innerText);
    
        const setBalanceTotal=balanceTotalNum - withdrawAmountNum;
        if (setBalanceTotal > 0) {
            balanceTotal.innerText=setBalanceTotal;
        }
        else{
            alert("You don't have suffecient balance")
        }

    withdrawAmount.value=''
   

})