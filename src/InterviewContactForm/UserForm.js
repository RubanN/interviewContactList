import React, { useState } from 'react'
import "./UserForm.css"
const UserForm = () => {
    const [title,setTitle] =useState('')
    const [firstName,setFirstName] =useState('')
    const [lastName,setLastName] =useState('')
    const [contact,setContact] =useState('')
    const [listOfContacts,setListContacts] =useState(
        ["mobileNo","PhoneNo","EmailId"]
    ) 
    const [contactLists,setContactLists] =useState([
        {
            title:"ui",
            firstName:"ruban",
            lastName:"judah",
            contactList:[
                {
                    mobileNo:"",
                    PhoneNo:'',
                    emailId:'',
        
                  },
            ],
            contact:"883890"
        }
    ])
   

 const handleSubmit=(e)=>{
    e.preventDefault();
    if(firstName.trim().length ===0 && contact.trim().length===0){
         alert("firstName and contact are mandatory fields  ")
    }
    

 }
 
const addNewContact=(e)=>{
     let newContactList = [...contactLists,{
          id:Math.random(Math.floor()*10),
          title : title,
          firstName :firstName,
          lastName :lastName,
          contact:contact,

     }];
     console.log(newContactList);
     setContactLists(newContactList)
     setTitle('')
     setFirstName('')
     setLastName('')
     setContact('')
}
const handleRemove=(index)=>{
    console.log(index,"index");
    let removeValue = [...contactLists];
    removeValue.splice(index,1);
    setContactLists(removeValue)
}
  return (
           <div className='container'>
            <div className='user-form'>
            <form onSubmit={handleSubmit}>
                <label>title</label>
                         <input  type='text'  value={title} onChange={(e)=>setTitle(e.target.value)}/>
                         <label>FirstName</label>
                         <input type='text'  value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                         <label>LastName</label>
                         <input  type='text'  value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                         <label>Contact</label>
                         <input  type='text'  value={contact} onChange={(e)=>setContact(e.target.value)} />
                         {listOfContacts.map((contactList,id)=>{
                            return(
                               <ul key={contactList.id}>
                                <div className='moble_element'>
                                <li onChange={(e)=>setListContacts(e.target.value)}>{contactList}</li> 
                                   <span>⭐</span>
                                </div>
                                 
                               </ul>  
                            )
                               
                         }
                         )}

                         <div className='continer-btn'>
                        <button onClick={addNewContact}>Add contact</button>
                       <button onClick={(index)=>handleRemove(index)}>Remove contact</button>
                       </div>
                     </form>
            </div>
                  

             {
              contactLists.map((contactValue,index)=>{
                  return(
                    <div  className='new_list_value'>
                        <h1>{contactValue.title}</h1>
                        <h1>{contactValue.firstName}</h1>
                        <h1>{contactValue.lastName}</h1>
                        <h1>{contactValue.contact}</h1>


                    </div>
                    
                  )
            })
         }
    </div>
  )
}

export default UserForm



// 1. Title [Text box, optional]
// 2. First Name [Text box, mandatory]
// 3. Last Name [Text box, optional]
// 4. Contacts 
//     4.1 Type [dropdown with options => 1.Mobile No., 2.Phone No., 3. Email Id , mandatory]
//     4.2 Contact Value [text box, mandatory]
// => contacts section will have a add button to add new contact and for existing contact a remove button will be there to remove the existing contact
// => the contact detail value should have validation for mobile number, phone number or for email id on the basis of selected type
