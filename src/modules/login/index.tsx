//import { FormProvider } from "react-hook-form";
//import { PrimaryButtonComponent } from "../../primaryButton";
//import { useLoginModalHook } from "./hook";
//import { FormComponent } from "../../form";
//import { LoadingComponent } from "../../loading";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { PrimaryButtonComponent } from "../../components/primaryButton";
import { FillButtonComponent } from "../../components/fillButton";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    //const hook = useLoginModalHook();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="flex w-full items-center justify-center h-screen">
            <div className="m-6 w-1/3 rounded-lg shadow-2xl p-6">
                <div className="flex flex-col items-center justify-center">
                    <div className="black20w600 mb-6">
                        Entrar no TiqPay
                    </div>
                    <div className="blacksub16w400 mb-8">
                        Olá! Faça login para continuarmos
                    </div>
                </div>
                <form action="#" method="POST">
                    <div className="mt-2">
                        <input
                            placeholder="E-mail"
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                    </div>
                    <div className="mt-2 mb-6 relative w-full">
                        <input

                            placeholder="Senha"
                            id="password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"

                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                    <div className="mb-10 flex justify-between">
                        <div>
                            <input

                                id="remember"
                                type="checkbox"
                                className=" mr-3  rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="remember" className="text-sm text-gray-700">
                                Lembrar-me
                            </label>
                        </div>
                        <a className="bluelink14w400" onClick={() => navigate("/forgot-password")}>
                            Esqueceu sua senha?
                        </a>
                    </div>
                    <div className="mb-4 ">
                        <PrimaryButtonComponent type="button" buttonstyle="primary" onClick={() => { navigate("/home") }}>Entrar</PrimaryButtonComponent>

                    </div>
                    <div className="mb-4 ">
                        <FillButtonComponent type="button" onClick={() => { }}>Criar conta</FillButtonComponent>

                    </div>


                </form>
            </div>
        </div>
    )
}