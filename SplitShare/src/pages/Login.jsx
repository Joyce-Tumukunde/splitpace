import React from 'react';
import { Link } from 'react-router-dom';
import Loginpic from '../assets/Loginpic.png';

const Login = () => {
  return (
    <section className="bg-black overflow-x-hidden lg:overflow-x-auto lg:overflow-hidden flex items-center justify-center lg:h-screen">

      <div className="login-container container w-full lg:w-4/5 lg:bg-white h-screen lg:h-screen-75 lg:border border-gray-300 rounded-lg flex flex-wrap lg:flex-nowrap flex-col lg:flex-row justify-between group">

        <div className="w-full lg:w-1/2 h-28 lg:h-full mt-32 lg:mt-0 lg:bg-theme-yellow-dark flex relative order-2 lg:order-1">

          <div className="text-center hidden lg:flex items-center justify-start h-full w-full select-none">

            <span className="transform block whitespace-nowrap h-full -rotate-90 text-[55px] 2xl:text-[70px] font-black uppercase text-yellow-500 opacity-0 transition-all group-hover:opacity-100 ml-10 2xl:ml-12 group-hover:-ml-20 2xl:group-hover:ml-26 lg:group-hover:ml-20 duration-1000 lg:duration-700 ease-in-out">SplitSpace</span>

          </div>

          <div className="product absolute right-0 bottom-0 flex items-center lg:justify-center w-full opacity-50 lg
        </div>

        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <div className="form-wrapper flex items-center lg:h-full px-10 relative z-10 pt-16 lg:pt-0">
            <div className="w-full space-y-5">

              <div className="form-caption flex items-end justify-center text-center space-x-3 mb-20">
                <span className="text-3xl font-semibold text-gray-700">Login</span>
              </div>

              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Email</span>
                  <span className="block">
                    <input type="text" className="bg-yellow-500 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"></input>
                  </span>
                </label>
              </div>

              <div className="form-element">
                <label className="space-y-2 w-full lg:w-4/5 block mx-auto">
                  <span className="block text-lg text-gray-800 tracking-wide">Password</span>
                  <span className="block">
                    <input type="password" className="bg-yellow-500 lg:bg-white border lg:border-2 border-gray-400 lg:border-gray-200 w-full p-3 focus:outline-none active:outline-none focus:border-gray-400 active:border-gray-400"></input>
                  </span>
                </label>
              </div>

              <div className="form-element">
                <div className="w-full lg:w-4/5 block mx-auto flex items-center justify-between">
                  <label className="block text-gray-800 tracking-wide flex items-center space-x-2 select-none">
                    <input type="checkbox" name="" id=""></input>
                    <span className="block text-gray-800 tracking-wide">Remember me</span>
                  </label>
                  <Link to="#" className="block text-gray-800 tracking-wide inline-block border-b border-gray-300">Forgot Password?</Link>
                </div>
              </div>

              <div className="form-element">
                <span className="w-full lg:w-4/5 block mx-auto ">
                  <button type="submit" className="cursor-pointer border-2 border-yellow-400 w-full p-3 bg-yellow-400 focus:outline-none active:outline-none focus:bg-theme-yellow active:bg-theme-yellow hover:bg-theme-yellow transition-all">Submit</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
