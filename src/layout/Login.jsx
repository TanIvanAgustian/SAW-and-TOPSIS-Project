import { GraphQlUsers } from "../graphql/GraphQlUsers"
import { useFormik } from "formik";
import * as Yup from "yup";
import setAuthCookie from "../auth/cookies";
import Logo from "../assets/logo_PSM.png";
import { useState } from "react";
import Alert from "../components/Alert";

export default function Login(){
    const [isAlert, setIsAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [variant, setVariant] = useState("");

    const {data, loading} = GraphQlUsers();
    
    const openAlert = (variant, message) => {
      setIsAlert(true);
      setVariant(variant);
      setMessage(message);
      setTimeout(closeAlert, 2500);
    };
    const closeAlert = () => {
      setIsAlert(false);
      setVariant("");
      setMessage("");
    };

    const formik = useFormik({
        initialValues: {
        email: "",
        password: "",
        },
        validationSchema: Yup.object({
        email: Yup.string().email("Email Tidak Valid").required("Please Enter your Email Address!!"),
        password: Yup.string().required("Please Enter your Password!!"),
        }),
        onSubmit: (e) => {
                data?.users.map((items) => {
                    if (
                        items.email == formik.values.email &&
                        items.password == formik.values.password
                    ){
                        setAuthCookie(items.id, items.position)
                        openAlert("success", "Login Berhasil, Selamat Datang "+items.name);
                        window.location.reload();
                    }else{
                      openAlert("danger", "Email atau password tidak valid. Mohon coba lagi");
                    }
                }
        )}
    });

return(
    <section className="dark:bg-gray-900 bg-backgroundlogin bg-no-repeat bg-cover bg-scroll">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <a
      href="#"
      className="flex items-center text-2xl font-semibold text-gray-900 dark:text-white bg-white p-3 rounded mb-2 align-middle"
    >
      <img
        className="w-8 h-8 mr-2"
        src={Logo}
        alt="logo"
      />
      Gita Dian Nuswa
    </a>
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Sign in to your account
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Your Email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.errors.email && formik.touched.email && (
              <div class="bg-red-100 border-s-4 border-red-500 rounded-b text-red-900 px-4 py-2 shadow-md" role="alert">
                <div class="flex items-center">
                  <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                    <p class="text-sm text-red-700 ">{formik.errors.email}</p>
                  </div>
                  
                </div>
              </div>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.errors.password && formik.touched.password && (
            <>
            <div class="bg-red-100 border-s-4 border-red-500 rounded-b text-red-900 px-4 py-2 shadow-md" role="alert">
                <div class="flex items-center">
                  <div class="py-1"><svg class="fill-current h-6 w-6 text-red-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                  <div>
                    <p class="text-sm text-red-700 ">{formik.errors.password}</p>
                  </div>
                  
                </div>
              </div>
          </>
          
            )}
          </div>
          <div className="flex items-center justify-end">
            
            <a
              href="#"
              className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loading ? <div> <svg aria-hidden="true" role="status" class="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
</svg>
Loading... </div> : <div>Sign in</div>}
          </button>
        </form>
      </div>
    </div>
  </div>
  {/* Alert  */}
  {isAlert && (
        <Alert variant={variant} message={message} onClose={closeAlert} />
      )}
</section>
)
}
