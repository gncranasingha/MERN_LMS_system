import { Children, createContext, useState } from "react";
import { initialSignInFormData } from "../../config";


export const AuthContext = createContext(null)


export default function AuthProvider({children}) {

    const [signInFormData, setSignInFormData] = useState(initialSignInFormData)
    const [signUpFormData, setSignUpFormData] = useState(initialSignInFormData)

    return <AuthContext.Provider value={{
                signInFormData,
                setSignInFormData,
                signUpFormData,
                setSignUpFormData
            }}>
                {children}
           </AuthContext.Provider>
}