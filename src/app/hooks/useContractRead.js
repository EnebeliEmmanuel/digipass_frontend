import { useContractRead } from "wagmi";

export const useContractCall = (functionName, args, watch) => {

    const resp = useContractRead({

        address,
        abi,
        functionName: functionName,
        args,
        watch,
        onError: (err) => {
            console.log({ err })
        }

    })
    
    return resp
}