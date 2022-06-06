
var jobArr = JSON.parse(localStorage.getItem("user")) || [];

function submit() {
  event.preventDefault();

  // formId.inputId.value

  var jobObj = {
    personName: document.querySelector("#name").value,
    personEmail: document.querySelector("#email").value,
    personAdd: document.querySelector("#address").value,
    pamount: document.querySelector("#amount").value,
  };
  jobArr.push(jobObj);
  console.log(jobArr);
  localStorage.setItem("user", JSON.stringify(jobArr));
  // redirect to applied jobs
  window.location.reload();
 
}