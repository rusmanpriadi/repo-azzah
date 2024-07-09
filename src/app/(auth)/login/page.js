import React from 'react'
import Link from 'next/link'

const Login = () => {
  return (
    <div className="p-4">
      <h4> Halaman Login</h4>
      <span className="mt-3">
        Belum punya akun, silahkan, 
        <Link href="/register" className="text-blue-500 underline-offset-8">
           <span> Register</span>
        </Link>
      </span>
    </div>
  );
}

export default Login
