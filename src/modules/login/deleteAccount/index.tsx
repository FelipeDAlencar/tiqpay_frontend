//import { FormProvider } from "react-hook-form";
//import { PrimaryButtonComponent } from "../../primaryButton";
//import { useLoginModalHook } from "./hook";
//import { FormComponent } from "../../form";
//import { LoadingComponent } from "../../loading";
import { PrimaryButtonComponent } from "../../../components/primaryButton";

export const DeleteAccountPage = () => {
    //const hook = useLoginModalHook();
    return (
        <div className="flex w-full items-center justify-center h-screen ">
            <div className="m-6 w-1/3 rounded-lg shadow-2xl p-6 border border-[#E0E0E0]">
                <div className="flex items-center space-x-2 mb-6">

                    <div className="black20w600">
                        Exclusão de conta
                    </div>
                </div>
                <p className="text-base font-black text-[#212121] mb-4">
                    Insira seu e-mail cadastrado para receber um link com instruções para exclusão de sua conta.
                </p>
                <form action="#" method="POST">
                    <div className="mt-2">
                        <input
                            placeholder="E-mail cadastrado"
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 mb-6"
                        />
                    </div>


                    <div className="mb-4 ">
                        <PrimaryButtonComponent type="button" buttonstyle="primary" onClick={() => { }}>Enviar e-mail</PrimaryButtonComponent>

                    </div>



                </form>
            </div>
        </div>
    )
}