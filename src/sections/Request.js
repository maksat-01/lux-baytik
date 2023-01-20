import React from 'react';
import img6 from "../assets/Images/img6.png"

const Request = () => {
    return (
        <div id="request" className=" ml-[5%] mb-[10%]">
            <div className="">
                <div>
                    <h1 className="text-[42px] font-light font-sans">Оставьте заявку</h1>
                    <p className="font-[Monserrat] text-[18px] mx-[10%] font-extralight w-[366px]">Напишите ваши
                        контактные данные для индивидуальной консультации</p>
                </div>
                <div className="flex items-center justify-between">

                    <div className="request flex justify-end items-center">
                        <div className="">
                            <div className="my-10">
                                <h2 className="my-5">Ваше имя:</h2>
                                <input  type="text" id="last_name"
                                       className="request-input bg-white border border-black text-black text-sm   block w-full py-[15px] px-[60px] p-1.5 dark:bg-black dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="" required/>
                            </div>
                            <div className="my-10">
                                <h2 className="my-5">Ваш телефонный номер:</h2>
                                <input  type="number" id="phone"
                                        className="request-input bg-white border border-black text-black text-sm   block w-full py-[15px] px-[60px] p-1.5 dark:bg-black dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="+996" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                            </div>
                            <button type="button"
                                    className="bg-white border border-black text-black text-sm   block   py-[10px] px-[30px] p-1.5 dark:bg-black dark:border-black dark:placeholder-black dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    // className="text-black bg-white border border-black focus:outline-none hover:bg-white focus:ring-4 focus:ring-black   text-sm px-[30px] py-[10px] dark:bg-black dark:text-white dark:border-black dark:hover:bg-black dark:hover:border-black dark:focus:ring-black"
                            >Отправить
                            </button>
                        </div>
                        <div className="request-q text-[33px] ml-[200px] font-[250] font-sans">
                            <on>
                                <li>Instagram</li>
                                <li className="my-[20%]">Twitter</li>
                                <li className="my-[20%]">Telegram</li>
                                <li>E-Mail</li>
                            </on>
                        </div>
                    </div>
                    <img className="request-img" src={img6} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Request;