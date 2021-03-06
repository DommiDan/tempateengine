

function generateHTML(data) {

   return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <meta http-equiv="X-UA-Compatible" content="ie=edge">
       <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
       <title>Employee Chart</title>
   </head>
   <style>
   .move {
       padding-top: 200px;
       padding-left: 100px;
       
   }
   .navbar-brand.mb-0.h1 {
       padding-left: 590px;
       font-size: 40px;
   }
   .navbar-brand.mb-0 {
       padding: 60px;
   }
   </style>
   <body>
       <nav class="navbar navbar-light bg-light">
           <span class="navbar-brand mb-0 h1">My Team</span>
       </nav>
   <div class="move">
       <div class="row row-cols-2 row-cols-md-3">
           <div class="col mb-4">
               <div class="card" style="width: 18rem;">
                   <div class="card-header">
                     <h2>${data.username1}</h2>
                     <h3>${data.role1}</h3>
                   </div>
                   <ul class="list-group list-group-flush">
                     <li class="list-group-item">Email:${data.email1}</li>
                     <li class="list-group-item">ID:${data.id1}</li>
                     <li class="list-group-item">office#:${data.office1}</li>
                   </ul>
                 </div>
           </div>
           <div class="col mb-4">
               <div class="card" style="width: 18rem;">
                   <div class="card-header">
                       <h2>${data.username2}</h2>
                       <h3>${data.role2}</h3>
                   </div>
                     <ul class="list-group list-group-flush">
                       <li class="list-group-item">Email:${data.email2}</li>
                       <li class="list-group-item">ID: ${data.id2}</li>
                       <li class="list-group-item">Github:${data.github2}</li>
                     </ul>
                 </div>
           </div>
           <div class="col mb-4">
             <div class="card" style="width: 18rem;">
               <div class="card-header">
                   <h2>${data.username3}</h2>
                   <h3>${data.role3}</h3>
                 </div>
                 <ul class="list-group list-group-flush">
                   <li class="list-group-item">Email:${data.email3}</li>
                   <li class="list-group-item">ID:${data.id3} </li>
                   <li class="list-group-item">Github:${data.github3}</li>
                 </ul>
             </div>
           </div>
           <div class="col mb-4">
               <div class="card" style="width: 18rem;">
                   <div class="card-header">
                       <h2>${data.username4}</h2>
                       <h3>${data.role4}</h3>
                     </div>
                     <ul class="list-group list-group-flush">
                       <li class="list-group-item">Email:${data.email4}</li>
                       <li class="list-group-item">ID:${data.id4} </li>
                       <li class="list-group-item">School Name:${data.school4}</li>
                     </ul>
                 </div>
         </div> 
         <div class="col mb-4">
           <div class="card" style="width: 18rem;">
             <div class="card-header">
                 <h2>${data.username5}</h2>
                 <h3>${data.role5}</h3>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">Email:${data.email5}</li>
                 <li class="list-group-item">ID:${data.id5} </li>
                 <li class="list-group-item">Github:${data.office5}</li>
               </ul>
           </div>
         </div>
      </div>
   </body>
   </html>`;
       }
      module.exports = generateHTML;
      