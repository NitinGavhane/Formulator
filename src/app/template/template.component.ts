import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {


  generatedTemplate: string = '';

  generateTemplate() {
    if (this.formData.emailTemplate === 'template1') {
      // Display custom template
      this.generatedTemplate = `
      Hello ${this.formData.firstName},
 
      Greetings
      With reference to your request, we have created requested ${this.formData.userID}, assigned the requested access as per given reference user ${this.formData.referenceuser},
       
      User ID: ${this.formData.userID}
      Password: Sent by a separate email from outlook to the user.
      The roles are assigned as approved by ${this.formData.lineManager} and SOD APPROVER.
      This E-mail is for your information that we would now resolve the request. If you need any assistance/guidance, feel free to revert.
       
      Regards,
      Abhijeet Gorgile
      Trainee SAP Security Admin
      Konecranes Company`;
    } else if(this.formData.emailTemplate === 'template2') {
      this.generatedTemplate = `
      Hello ${this.formData.firstName},
      Greetings
      
      With reference to your request, the User ${this.formData.userID} is unlocked and Reactivated on the below system,
      System:${this.formData.system}
      Password shared with you via separate mail.
      
      This E-mail is for your information that we would now resolve the request. If you need any assistance/guidance, feel free to revert.
      
      Regards,
      Abhijeet Gorgile
      Trainee SAP Security Admin
      `;
    } else if(this.formData.emailTemplate === 'template3') {
      this.generatedTemplate = `
      Hello ${this.formData.firstName},
      
      As an approver, we need your approval to process this request for below user please check and let us know
      
      Customer: ${this.formData.firstName} ${this.formData.lastName},
      Approval needed from:
      Role Requested:${this.formData.role}
      
      
      Regards,
      Abhijeet Gorgile
      Trainee SAP Security Admin
      Konecranes Company
      `;
    } else if(this.formData.emailTemplate === 'template4') {
      this.generatedTemplate = `
      Hello ${this.formData.firstName},
 
      As an approver Local QM Process owner for $company code$, we need your approval to process this request for below user please check and let us know,
      
      Customer: ${this.formData.firstName} ${this.formData.lastName}
      Approval needed from:
      Role Requested:${this.formData.role}
      System:${this.formData.system}
      
      Regards,
      Abhijeet Gorgile
      SAP Security Admin
      Konecranes Company
      `;
    } else if(this.formData.emailTemplate === 'template5') {
      this.generatedTemplate = `
      Hello ${this.formData.firstName},
 
      As an one above line manager approver we need your approval to process this request for ${this.formData.firstName} ${this.formData.lastName}
      
      Customer: ${this.formData.firstName} ${this.formData.lastName}
      Approval needed from:
      Role Requested:${this.formData.role}
      System:${this.formData.system}
      
      Please check and let us know,
      
      Regards,
      Abhijeet Gorgile
      Trainee SAP Security Admin
      Konecranes Company
      `;
    } else if(this.formData.emailTemplate === 'template6') {
      this.generatedTemplate = `
      Hello ${this.formData.firstName},
 
      AS a role owner we need your approval to process this request for XXX
      Please check and let us know,
      
      Customer: ${this.formData.firstName} ${this.formData.lastName}
      Approval needed from:
      Role Requested:${this.formData.role}
      System:${this.formData.system}
      
      Regards,
      Abhijeet Gorgile
      Trainee SAP Security Admin
      Konecranes Company
      `;
    } else if(this.formData.emailTemplate === 'template7') {
      this.generatedTemplate = `
      Hello ${this.formData.firstName},
 
      As an SOD risk approver, we need your approval to process this request please check and let us know.
      
      Customer: ${this.formData.firstName} ${this.formData.lastName}
      Approval needed from:
      Role Requested:${this.formData.role}
      System:${this.formData.system}
      
      User already has XXX role which has SOD risk to requested Role: ${this.formData.role}
      
      
      Regards,
      Abhijeet Gorgile
      Trainee SAP Security Admin
      Konecranes Company
      `;
    }
  }


  copyTemplate() {
    const textarea = document.createElement('textarea');
    textarea.textContent = this.generatedTemplate;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    const copyButton = document.querySelector('.copy-template');
  
    if (copyButton) {
      // Add CSS class to initiate animation
      copyButton.classList.add('clicked');
  
      // Remove animation class after a short delay
      setTimeout(() => {
        copyButton.classList.remove('clicked');
      }, 200); // Adjust the duration as needed
    }
  }
  
  


    // Define formData object to hold form data
    formData = {
      firstName: '',
      lastName: '',
      userID: '',
      system: '',
      role: '',
      roleApprover: '',
      lineManager: '',
      companyCode: '',
      referenceuser: '',
      emailTemplate: ''
    };
}