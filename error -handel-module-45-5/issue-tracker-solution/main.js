document.getElementById('issueInputForm').addEventListener('submit', submitIssue);

function submitIssue(e) {
  const getInputValue = id => document.getElementById(id).value;
  const description = getInputValue('issueDescription');
  const severity = getInputValue('issueSeverity');
  const assignedTo = getInputValue('issueAssignedTo');
  const id = Math.floor(Math.random()*100000000) + '';
  const status = 'Open';
if(description && assignedTo) {
console.log(description)
console.log(severity)
  const issue = { id, description, severity, assignedTo, status };
  let issues = [];
  if (localStorage.getItem('issues')){
    issues = JSON.parse(localStorage.getItem('issues'));
  }
  issues.push(issue);
  localStorage.setItem('issues', JSON.stringify(issues));

  document.getElementById('issueInputForm').reset();
  fetchIssues();
  e.preventDefault();
}
else{

if(description === ''  ){
  document.getElementById('describe').style.display='block'
  // document.getElementById('responsible').style.display='block'
}

else {
  document.getElementById('responsible').style.display='block'
}

}

}

const closeIssue = id => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const currentIssue = issues.find(issue => issue.id === id);
  currentIssue.status = 'Closed';
  localStorage.setItem('issues', JSON.stringify(issues));
  fetchIssues();
}

const deleteIssue = id => {
  // console.log(id)
  const issues = JSON.parse(localStorage.getItem('issues'));
  // console.log(issues)
  const remainingIssues = issues.filter(issue => issue.id !== id )
  // console.log(JSON.stringify(remainingIssues))
  localStorage.setItem('issues', JSON.stringify(remainingIssues));
  // localStorage.setItem('shihab', 2334);
  // document.getElementById("deleteId").innerHTML='';
  fetchIssues();
}

const fetchIssues = () => {
  const issues = JSON.parse(localStorage.getItem('issues'));
  const issuesList = document.getElementById('issuesList');
  issuesList.innerHTML = '';

  for (var i = 0; i < issues.length; i++) {
    const {id, description, severity, assignedTo, status} = issues[i];

    issuesList.innerHTML +=   `<div  id="deleteId" class="well">
                              <h6>Issue ID: ${id} </h6>
                              <p><span class="label label-info"> ${status} </span></p>
                              <h3 id="del-h3"> ${description} </h3>
                              <p><span class="glyphicon glyphicon-time"></span> ${severity}</p>
                              <p><span class="glyphicon glyphicon-user"></span> ${assignedTo}</p>
                              <a href="#" onclick="setStatusClosed('${id}','${description}')" class="btn btn-warning">Close</a>
                              <a href="#" onclick="deleteIssue('${id}')" class="btn btn-danger">Delete</a>
                              </div>`;
                              document.getElementById('describe').style.display='none'
                              document.getElementById('responsible').style.display='none'
  }
}

const setStatusClosed=(id,description) => {
document.getElementById('del-h3').innerHTML=`<del><h3 id="del-h3">${description} </h3></del>`
}