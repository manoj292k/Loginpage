function Right() {
    return (
      <div className='Rightone'>
        <div className='one'>
          <h1>
            Sign In <br /> <span>Sign in your account</span>
          </h1>
          <div className='two'>
            <button>
              <box-icon type='logo' name='google'></box-icon> Sign in with Google
            </button>
            <button>
              <box-icon name='apple' type='logo'></box-icon> Sign in with Apple
            </button>
          </div>
          <div className='three'>
            Enter address <br />
            <input type='Email' className='input' id="username" />
  
            Password <br />
            <input type='password' className='input' id="password" />
          </div>
          <h6>Forget Password ?</h6>
          <button type='submit' className='signin' onClick={login}>
            Sign In
          </button>
  
          <h5>
            Don't have an account?<span className='reg'>Register here</span>
          </h5>
        </div>
      </div>
    );
  }
  
  function login() {
    var a = document.getElementById("username").value;
    var b = document.getElementById("password").value;
  
    if (a === 'welcome' && b === '123') {
      window.alert("Login success :)");
      console.log(a, b, "success");
    } else {
      console.log(a, b, "invalid");
      window.alert("Invalid Username or Password");
    }
  }
  
  export default Right;
  