import axios from 'axios'

// export const login= async (emailid,password)=>{
//     const data = {
//         email:emailid,
//         password:password,
//       }
//       return await axios.post(
//         'http://192.168.1.101:8080:8080/auth/signin',
//         data
//       ).then(res=>{
//           if(!res.data.success){
//             alert('email id or password wrong')
//           }
//           return Promise.resolve(res.data);
//       })
// }
export const login= async (emailid,password)=>{
    var data = {
        email:emailid,
        password:password,
      }
        return axios.get('/data.json')
        .then(res => {
            console.log(res.data)
            let flag=false;
            var success;
            res.data.map((item)=>{
                if(item.email===data.email){
                    if(item.password===data.password){
                        return flag=true;
                    }
                }
            })
            if(flag){
                success=true
                 alert('login success')
            }
            else{
                success=false;
                alert('login failed')
            }
            return Promise.resolve(success)
        })

}