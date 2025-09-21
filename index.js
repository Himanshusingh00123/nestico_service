const login=()=>{
    Swal.fire({
        html:`
            <div class=" lg:rounded-2xl rounded-xl bg-white md:rounded-2xl flex flex-col justify-center items-center  w-full h-full lg:p-3  ">
            <img class="lg:w-20 w-15 animate__animated animate__fadeInDown" src="https://cdn-icons-png.flaticon.com/512/295/295128.png" alt="Login img">
            <h1 class="lg:text-5xl md:text-4xl text-2xl font-bold lg:p-3 p-2text-black">Welcome back</h1>
            <h3 class="text-gray-700 lg:text-lg text-sm font-semibold lg:p-2 p-1" >Login to your account to continue</h3>
            <form class="flex flex-col lg:gap-3 lg:m-4 gap-2 m-3  ">
                <input class="border border-3 border-gray-600 rounded-xl lg:p-3 p-2   text-black  focus:ring-3 focus:ring-blue-600  " type="email" placeholder="Email address">
                <input class="border border-3 border-gray-600 rounded-xl lg:p-3  p-2  text-black   focus:ring-3 focus:ring-blue-600 " type="password" placeholder="Password">
                <div class="flex gap-3  lg:gap-18 justify-center items-center lg:m-2 font-semibold ">
                    <div class="flex items-center justify-center lg:gap-2 gap-1">
                         <input  type="checkbox" class="lg:w-4 w-3 h-3 lg:h-4 " >
                        <label for="remember" class="text-gray-700 lg:text-lg text-sm">Remember me</label>
                    </div>
                    <button class="text-blue-600 lg:text-lg text-sm hover:text-orange-600" onclick="forgetpassword()">Forgot password?</button>
                </div>
                <button class=" bg-blue-600 lg:p-3 p-2 lg:rounded-xl rounded-lg text-white font-bold lg:text-xl text-lg hover:bg-orange-600">Login</button>
                <h1 class="flex justify-center gap-2 font-semibold lg:text-lg text-sm mt-3 text-gray-700">Don't have an account?<button class="text-blue-600 hover:text-orange-500 " onclick="signup()">Signup</button></h1>
            </form>
        </div>`,
        
        showConfirmButton:false,
       
       
        
    })
}
const signup=()=>{
    swal.fire({
        html:`
            <div class=" flex flex-col justify-center items-center  md:pt-1  bg-white px-4 py-2 lg:rounded-2xl rounded-xl    ">
                <img src="https://i.postimg.cc/BZhSXQK0/login.png" alt="signup img" class="lg:w-20 w-15 sm:pt-10 lg:p-2 animate__animated animate__slideInDown">
            <h1 class="lg:text-5xl text-3xl font-bold text-black pt-1 md:pb-1">Signup</h1>
            <h3 class="lg:text-4xl text-2xl font-semibold lg:pt-4 lg:pb-2 pt-1 text-gray-700 md:p-0">Create account</h3>
            <form class="flex flex-col lg:m-4 m-3 lg:gap-3  gap-2" >
                <input id="name" type="text" placeholder="Full name" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required>
                <input id="email" type="email" placeholder="Email address" class="border lg:p-3 p-2 rounded-xl  text-black  focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required>
                <input id="password" type="password" placeholder="Password" class="border lg:p-3 p-2 rounded-xl  text-black focus:ring-3 focus:ring-blue-600 border-3 border-gray-600" required>
                 <input id="confirm" type="password" placeholder="Confirm Password" class="border lg:p-3 p-2 rounded-xl  text-black focus:ring-3 focus:ring-blue-600 border-3 border-gray-600 " required> 
                <div class=" mt-1 lg:p-3    text-black  flex  justify-center ">
                <input id="terms" type="checkbox" required class=" lg:w-5 lg:h-5 w-4 h-4 mt-[3px]">
                <label class="text-gray-700 font-semibold text-sm lg:text-xl ">I agree to the <a href="#" class="text-blue-600 hover:text-orange-600"
                    >Terms of Service</a> and <a href="#" class="text-blue-600 hover:text-orange-600"
                    >Privacy Policy</a> </label>
                </div>
                <button class=" bg-blue-600 hover:bg-orange-600 lg:p-3 p-2 text-white font-bold lg:rounded-xl  rounded-lg lg:text-lg text-md mt-3 mb-1 md:mt-1 md:mb-0">Create Account</button>
                <h2 class="flex justify-center gap-2 text-gray-700 font-semibold lg:text-xl text-sm md:mb-3">Already have an account?<button onclick="login()" class="text-blue-600 hover:text-orange-600">Login</button></h2>
            </form>
            </div>
        </div>
    </div>
    `,
        showConfirmButton:false,
       
        
    })
}

const forgetpassword=()=>{
    Swal.fire({
        html:`
            <div class=" lg:rounded-2xl rounded-xl bg-white md:rounded-2xl flex flex-col justify-center items-center  w-full h-full p-3">
            <img class="lg:w-25 w-15 rounded-lg animate__animated animate__wobble" src="https://cdn3d.iconscout.com/3d/premium/thumb/reset-password-3d-icon-png-download-8341655.png?f=webp" alt="resetpassword img">
            <h1 class="lg:text-4xl md:text-4xl text-2xl font-bold lg:p-2 p-1 text-black">Reset Password</h1>
            <h3 class="text-gray-700 lg:text-lg text-md font-semibold lg:p-2 p-1" >Reset your password</h3>
            <form class="flex flex-col lg:gap-3 m-3 gap-2  ">
                <input id="resetemail" class="border border-3 border-gray-600 lg:rounded-xl rounded-lg  lg:p-3 p-2  text-black  focus:ring-3 focus:ring-blue-600  " type="email" placeholder="Email address">
                <input id="resetpass" class="border border-3 border-gray-600 lg:rounded-xl rounded-lg  lg:p-3 p-2  text-black   focus:ring-3 focus:ring-blue-600 " type="password" placeholder="New Password">
                <button class=" bg-blue-600 lg:p-3 p-2 rounded-xl text-white font-bold lg:text-xl text-lg hover:bg-orange-600" onclick="changepassword()">Set Password</button>
               <button class="text-blue-600 hover:text-orange-500 font-semibold lg:text-xl text-lg" onclick="login()">Login</button>
            </form>
        </div>`,
        
        showConfirmButton:false,
        
    })
}
const changepassword=()=>{
      const email = Swal.getPopup().querySelector("#resetemail").value;
      const password = Swal.getPopup().querySelector("#resetpass").value;

    if (!email || !password) {
        Swal.fire({
            icon:"warning",
            title: "Please Enter all fields",
            html:`<button class="text-blue-600 hover:text-orange-600 font-semibold text-xl" onclick="forgetpassword()">Try again</button>`,
            showConfirmButton:false
        });
        return;
    }
    Swal.fire({
   title: "Do you want to change the Password?",
   showDenyButton: true,
   showCancelButton: true,
   confirmButtonText: "Change",
   denyButtonText: `Don't Change`
      }).then((result) => {
  
    if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
     } 
    else if (result.isDenied) {
       Swal.fire("Password  are not changed", "", "info");
     }
 });

}
const loc=()=>{
    Swal.fire({
        html:`
            <div class=" lg:rounded-2xl rounded-xl bg-white md:rounded-2xl flex flex-col justify-center items-center  w-full h-full lg:p-4 p-2.5">
            <img class="lg:w-20 w-15 animate__animated animate__bounceIn" src="https://cdn-icons-png.flaticon.com/512/1865/1865269.png" alt="Location img">
            <h1 class="lg:text-5xl md:text-4xl text-2xl font-bold lg:p-3 p-1 text-black">Location</h1>
            <h3 class="text-gray-700 lg:text-lg text-sm font-semibold lg:p-2 p-1" >Enter your current Location</h3>
            <form class="flex flex-col lg:gap-4 lg:m-4 gap-2 m-2 ">
                <input id="address" class="border border-3 border-gray-600 lg:rounded-xl lg:p-3  rounded-lg p-1.5 text-black  focus:ring-3 focus:ring-blue-600  " type="text" placeholder="Enter your address">
                <div class="flex  itmes-center justify-center lg:gap-2  gap-1">
                         <input  type="checkbox" class="lg:w-4 lg:h-4 h-3 w-3 mt-1.5 " >
                        <label for="remember" class="text-gray-800 lg:text-lg text-md">Use current location</label>
                    </div>
                <button class=" bg-blue-600 lg:p-3 px-3 py-2 lg:rounded-xl rounded-lg text-white font-bold lg:text-xl text-lg hover:bg-orange-600" onclick="message()">Submit</button>
            </form>
        </div>`,
        
        showConfirmButton:false,
        
    })
}
const message=()=>{
    const addr = Swal.getPopup().querySelector("#address").value
    if (!addr) {
        Swal.fire({
            icon:"warning",
            title: "Please fill address",
            html:`<button class="text-blue-600 hover:text-orange-600 font-semibold text-xl" onclick="loc()">Try again</button>`,
            showConfirmButton:false
        });
        return;
    }
    
Swal.fire({
  title: "Location saved",
  icon: "success",
});
}