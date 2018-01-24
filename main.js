// Date Picker
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 95, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
// FormJS








//   Main Content Change
function openTab(evt , tabChange) {
    let i;
    let tabcontent = document.getElementsByClassName('tabcontent');
    for ( let i = 0; i < tabcontent.length; i++){
        tabcontent[i].style.display= 'none';
    }
    document.getElementById(tabChange).style.display = "block";
  
}
document.getElementById("defaultOpen").click();