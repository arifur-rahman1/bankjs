document.getElementById("depositBtn").addEventListener('click',function(){
  const depositField=document.getElementById('depositField');
  const getDepositField=depositField.value;
  const getDepositFieldNum= parseFloat(getDepositField)
  const depositAmount=document.getElementById('depositAmount');
  const getDepositAmount = depositAmount.innerText;
  const getDepositAmountNum=parseFloat(getDepositAmount)
  const currentDeposiTotal=getDepositAmountNum+getDepositFieldNum;
  depositAmount.innerText=currentDeposiTotal;
//   adding balance 
const balanceTotal=document.getElementById('balanceTotal');
const getBalanceTotal=balanceTotal.innerText;
const balanceTotalNum=parseFloat(getBalanceTotal)
const addedBalance=balanceTotalNum + getDepositFieldNum;
balanceTotal.innerText=addedBalance

  depositField.value='';
})