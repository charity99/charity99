import React from 'react'
import Tabs from "../component/Tabs"
function Signup() {
  return (
    <div>
        {/*
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
*/}

<div className="py-40 ">

   
    <div
      action=""
      className=" container  mb-0 mt-6  rounded-lg mx-20 shadow-xl border-2 sm:p-4 "
    >
    <h1 className="text-center text-lg font-bold text-[#5aa1c2]  sm:text-lg">
اهلا وسهلا بك في منصة ينتمي     <br></br> ان كنت تريد مساعدة انت تحتاج الى ان تنشأ حساب من خلال الضغط على ايقونة "اطلب مساعدة الان اما كنت تريد ان تساهم في مساعدة محتاج  فبامكانك انشاء حساب من خلال الضغط على ايقونة "ساعد محتاج" </h1>
  <div >
 <Tabs/>
    </div>
  </div>
</div>



    </div>
  )
}

export default Signup