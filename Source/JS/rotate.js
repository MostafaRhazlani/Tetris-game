
function slideBlockUpRot(){
    if(formNumber == 1){
      if(formDeg == 0){
         let column = form[1][0].parentElement.dataset.column;   
         form[0][0].parentElement.parentElement.previousElementSibling.children[+column + 1].append(form[0][0]);
         form[2][0].parentElement.parentElement.nextElementSibling.children[+column - 1].append(form[2][0]);
         
         form = [[form[2][0], form[1][0], form[0][0]]];
         
         formDeg = 90;
       }else if(formDeg == 90){
         let column = form[0][1].parentElement.dataset.column;   
         
         form[0][2].parentElement.parentElement.nextElementSibling.children[+column].append(form[0][2]);
         form[0][0].parentElement.parentElement.previousElementSibling.children[+column].append(form[0][0]);  
         
         form = [[form[0][2]], [form[0][1]], [form[0][0]]];
         formDeg = 0;  
       }  
   } else if(formNumber == 4){
     if(formDeg == 0){
       let column = form[0][1].parentElement.dataset.column;   
        form[0][2].parentElement.parentElement.nextElementSibling.children[+column].append(form[0][2]);
       //  form[2][0].parentElement.parentElement.nextElementSibling.children[+column - 1].append(form[2][0]);
        
        form = [[form[0][2]], [form[0][0], form[0][1]], [form[1][0]]];
        console.log(form);
        
        formDeg = 90;
     } else if (formDeg == 90) {
       let column = form[1][1].parentElement.dataset.column;   
       form[2][0].parentElement.parentElement.nextElementSibling.children[+column + 1].append(form[2][0]);
      //  form[2][0].parentElement.parentElement.nextElementSibling.children[+column - 1].append(form[2][0]);
       
       form = [[form[0][0]], [form[1][0], form[1][1], form[2][0]]];
       console.log(form);
       
       formDeg = 180;
     } else if (formDeg == 180) {
       let column = form[1][1].parentElement.dataset.column;   
        form[1][0].parentElement.parentElement.previousElementSibling.children[+column].append(form[1][0]);
       //  form[2][0].parentElement.parentElement.nextElementSibling.children[+column - 1].append(form[2][0]);
        
        form = [[form[0][0]], [form[1][1], form[1][2]], [form[1][0]]];
        console.log(form);
        
        formDeg = 270;
     } else {
       let column = form[1][0].parentElement.dataset.column;   
       form[0][0].parentElement.parentElement.previousElementSibling.children[+column - 1].append(form[0][0]);
      //  form[2][0].parentElement.parentElement.nextElementSibling.children[+column - 1].append(form[2][0]);
       
       form = [[form[0][0], form[1][0], form[1][1]], [form[2][0]]];
       console.log(form);
       
       formDeg = 0;
     }
   } else if(formNumber == 5){
     if(formDeg == 0){
       let column = form[1][1].parentElement.dataset.column;   
        form[1][0].parentElement.parentElement.nextElementSibling.nextElementSibling.children[+column - 1].append(form[1][0]);
        form[0][1].parentElement.previousElementSibling.previousElementSibling.append(form[0][1]);
        
        form = [[form[1][0]], [form[0][1], form[0][0]], [form[1][1]]];
        console.log(form);
        
        formDeg = 90;
     } else if (formDeg == 90) {
       let column = form[1][1].parentElement.dataset.column;   
        form[0][0].parentElement.parentElement.previousElementSibling.previousElementSibling.children[+column - 1].append(form[0][0]);
        form[1][0].parentElement.nextElementSibling.nextElementSibling.append(form[1][0]);
        
        form = [[form[1][1], form[1][0]], [form[0][0], form[2][0]]];
        console.log(form);
        
        formDeg = 0;
     }
   } else if(formNumber == 6){
     if(formDeg == 0){
       let column = form[1][0].parentElement.dataset.column;   
        form[1][1].parentElement.parentElement.nextElementSibling.nextElementSibling.children[+column + 1].append(form[1][1]);
        form[0][0].parentElement.nextElementSibling.nextElementSibling.append(form[0][0]);
        
        form = [[form[1][1]], [form[0][1], form[0][0]], [form[1][0]]];
        console.log(form);
        
        formDeg = 90;
     } else {
       let column = form[1][0].parentElement.dataset.column;   
       form[1][1].parentElement.previousElementSibling.previousElementSibling.append(form[1][1]);
        form[0][0].parentElement.parentElement.previousElementSibling.previousElementSibling.children[+column + 1].append(form[0][0]);
        
        form = [[form[1][1], form[1][0]], [form[2][0], form[0][0]]];
        console.log(form);
        
        formDeg = 0;
     }
   }
 }
 
 