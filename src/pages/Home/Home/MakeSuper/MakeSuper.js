// import React, { useState } from 'react';

// const MakeSuper = () => {
//     const [email, setEmail] = useState('')
//     const handleAdminSubmit = (e) => {
//         const user = { email }
//         fetch('http://localhost:5000/admin/admin', {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then(res => res.json())
//             .then(data => console.log(data))
//         e.preventDefault()
//     }
//     const handleOnBlur = (e) => {
//         setEmail(e.target.value)
//     }
//     return (
//         <div>
//             <div>
//                 <form onSubmit={handleAdminSubmit}>
//                     <input
//                         style={{ width: '80%', margin: 20 }}
//                         // defaultValue="email"
//                         onBlur={handleOnBlur}
//                         type="email"
//                         name='email'
//                         placeholder='email'
//                     /> <br />
//                     <button type='submit'>make admin</button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default MakeSuper;